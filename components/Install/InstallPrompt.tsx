"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useInstallPrompt } from "@/hooks/useInstallPrompt";

export function InstallPrompt() {
  const { visible, install, dismiss, isIOS } = useInstallPrompt();

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ type: "spring", damping: 24, stiffness: 320 }}
          className="fixed bottom-24 left-4 right-4 z-[60] mx-auto flex max-w-[398px] items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-3.5 shadow-xl"
          role="dialog"
          aria-label="Install app"
        >
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary text-white">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
            </svg>
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-neutral-900">
              Install Spice Garden
            </p>
            <p className="truncate text-xs text-neutral-500">
              {isIOS
                ? "Tap Share button, then Add to Home Screen"
                : "Add to your home screen for quick access"}
            </p>
          </div>

          {!isIOS && (
            <button
              type="button"
              onClick={install}
              className="flex-none rounded-xl bg-primary px-3.5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark active:scale-[0.96]"
            >
              Install
            </button>
          )}

          <button
            type="button"
            onClick={dismiss}
            className="flex h-8 w-8 flex-none items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
            aria-label="Dismiss install prompt"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}