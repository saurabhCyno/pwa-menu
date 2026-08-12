"use client";

import { memo, useCallback, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { useCartStore } from "@/store/useCartStore";
import { useToastStore } from "@/store/useToastStore";
import { fadeSlideUp } from "@/lib/motion";
import { formatPrice } from "@/utils/formatPrice";
import type { MenuItem } from "@/types/menu";
import { Skeleton } from "@/components/ui/Skeleton";

interface MenuCardProps {
  item: MenuItem;
}

export const MenuCard = memo(function MenuCard({ item }: MenuCardProps) {
  const quantity = useCartStore((s) => s.items[item.id]?.quantity ?? 0);
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);
  const addToast = useToastStore((s) => s.addToast);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAdd = useCallback(() => {
    addItem(item);
    addToast(`Added ${item.name}`, "success");
  }, [addItem, addToast, item]);

  const handleRemove = useCallback(() => {
    removeItem(item.id);
    addToast(`Removed ${item.name}`, "remove");
  }, [removeItem, addToast, item.id, item.name]);

  return (
    <motion.article
      variants={fadeSlideUp}
      className="min-w-0 overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-card"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
        {!imageLoaded && (
          <Skeleton className="absolute inset-0 rounded-none" />
        )}
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 430px) 100vw, 430px"
          className={`object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute left-3 top-3">
          <Badge variant={item.category} />
        </div>
      </div>

      <div className="space-y-3 p-3">
        <div className="flex flex-col gap-1">
          <h3 className="truncate text-sm font-semibold text-neutral-900">
            {item.name}
          </h3>
          <p className="shrink-0 text-sm font-bold text-primary">
            {formatPrice(item.price)}
          </p>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          {quantity === 0 ? (
            <motion.button
              key="add-btn"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleAdd}
              className="flex h-10 w-full items-center justify-center gap-1.5 rounded-xl bg-primary text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark"
              aria-label={`Add ${item.name} to cart`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
              Add
            </motion.button>
          ) : (
            <motion.div
              key="qty-ctrl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex h-10 w-full min-w-0 items-center justify-between gap-1 rounded-xl bg-neutral-50 px-2 ring-1 ring-neutral-200"
            >
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleRemove}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-neutral-700 shadow-sm transition-colors hover:bg-neutral-100"
                aria-label={`Decrease quantity of ${item.name}`}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
                </svg>
              </motion.button>

              <motion.span
                key={quantity}
                initial={{ scale: 1.3, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                className="min-w-[2rem] text-center text-sm font-bold text-neutral-900"
                aria-live="polite"
                aria-label={`Quantity: ${quantity}`}
              >
                {quantity}
              </motion.span>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={handleAdd}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white shadow-sm transition-colors hover:bg-primary-dark"
                aria-label={`Increase quantity of ${item.name}`}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
});
