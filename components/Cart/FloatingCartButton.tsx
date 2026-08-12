"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCartStore } from "@/store/useCartStore";
import { useUIStore } from "@/store/useUIStore";
import { formatPrice } from "@/utils/formatPrice";

export function FloatingCartButton() {
  const totalItems = useCartStore((s) => s.totalItems());
  const grandTotal = useCartStore((s) => s.grandTotal());
  const openCart = useUIStore((s) => s.openCart);

  return (
    <AnimatePresence>
      {totalItems > 0 && (
        <motion.button
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          whileTap={{ scale: 0.96 }}
          onClick={openCart}
          className="fixed bottom-6 left-4 right-4 z-30 mx-auto flex w-full max-w-[398px] items-center justify-between rounded-2xl bg-primary px-5 py-3.5 text-white shadow-xl shadow-primary/25"
          aria-label={`View cart, ${totalItems} items, total ${formatPrice(grandTotal)}`}
        >
          <span className="flex items-center gap-2 text-sm font-semibold">
            <span className="flex h-6 min-w-6 items-center justify-center rounded-lg bg-white/20 px-1.5 text-xs font-bold">
              {totalItems}
            </span>
            View Cart
          </span>
          <span className="text-sm font-bold">{formatPrice(grandTotal)}</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
