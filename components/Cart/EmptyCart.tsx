"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useUIStore } from "@/store/useUIStore";

export function EmptyCart() {
  const closeCart = useUIStore((s) => s.closeCart);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-1 flex-col items-center justify-center px-6 py-12 text-center"
    >
      <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-neutral-100">
        <svg className="h-12 w-12 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-neutral-800">Your cart is empty</h3>
      <p className="mt-1 text-sm text-neutral-500">
        Add some delicious dishes to get started
      </p>
      <Button
        variant="primary"
        className="mt-6"
        onClick={closeCart}
      >
        Browse Menu
      </Button>
    </motion.div>
  );
}
