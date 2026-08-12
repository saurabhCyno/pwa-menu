"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/useCartStore";
import { useUIStore } from "@/store/useUIStore";
import { scaleIn } from "@/lib/motion";

export function ThankYouScreen() {
  const clearCart = useCartStore((s) => s.clearCart);
  const hideConfirmation = useUIStore((s) => s.hideConfirmation);

  const handleBack = () => {
    clearCart();
    hideConfirmation();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-dvh flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-emerald-50">
          <motion.svg
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-14 w-14 text-emerald-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </motion.svg>
        </div>

        <h2 className="text-2xl font-bold text-neutral-900">Thank You!</h2>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-500">
          Your order has been sent successfully. Our team will prepare your
          dishes shortly.
        </p>

        <Button
          variant="primary"
          size="lg"
          className="mt-8 w-full max-w-xs"
          onClick={handleBack}
        >
          Back to Menu
        </Button>
      </motion.div>
    </motion.div>
  );
}
