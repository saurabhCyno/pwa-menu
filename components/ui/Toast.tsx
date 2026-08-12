"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useToastStore } from "@/store/useToastStore";
import { cn } from "@/lib/cn";

export function ToastContainer() {
  const toasts = useToastStore((s) => s.toasts);
  const removeToast = useToastStore((s) => s.removeToast);

  return (
    <div
      className="pointer-events-none absolute bottom-24 left-0 right-0 z-[60] flex flex-col gap-2 px-4"
      aria-live="polite"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ type: "spring", damping: 22, stiffness: 320 }}
            className={cn(
              "pointer-events-auto flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium shadow-lg backdrop-blur-md",
              toast.type === "success" && "bg-primary text-white",
              toast.type === "remove" && "bg-neutral-800 text-white",
              toast.type === "info" && "bg-white text-neutral-800 ring-1 ring-neutral-200"
            )}
            onClick={() => removeToast(toast.id)}
          >
            {toast.type === "success" && (
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
            {toast.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
