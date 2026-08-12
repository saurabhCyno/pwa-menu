"use client";

import { useCallback, useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const STORAGE_KEY = "spice-garden-install-dismissed";

export function useInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setDismissed(localStorage.getItem(STORAGE_KEY) === "1");

    if (typeof window !== "undefined") {
      const ua = navigator.userAgent;
      const iOS =
        /iphone|ipad|ipod/i.test(ua) &&
        typeof window !== "undefined" &&
        !("MSStream" in window);
      setIsIOS(iOS);
    }

    function handler(e: Event) {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    }

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const install = useCallback(async () => {
    if (!deferredPrompt) return;
    const promptEvent = deferredPrompt;
    setDeferredPrompt(null);
    await promptEvent.prompt();
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage errors
    }
  }, [deferredPrompt]);

  const dismiss = useCallback(() => {
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage errors
    }
  }, []);

  const visible = !dismissed && (deferredPrompt !== null || isIOS);

  return { visible, install, dismiss, isIOS };
}