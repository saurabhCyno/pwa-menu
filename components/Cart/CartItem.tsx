"use client";

import { memo, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCartStore } from "@/store/useCartStore";
import { formatPrice } from "@/utils/formatPrice";
import type { CartLine } from "@/types/cart";

interface CartItemProps {
  line: CartLine;
}

export const CartItem = memo(function CartItem({ line }: CartItemProps) {
  const { item, quantity } = line;
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);

  const subtotal = item.price * quantity;

  const handleAdd = useCallback(() => addItem(item), [addItem, item]);
  const handleRemove = useCallback(
    () => removeItem(item.id),
    [removeItem, item.id]
  );

  return (
    <motion.li
      layout
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex gap-3 rounded-xl bg-neutral-50 p-3"
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-neutral-200">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <h4 className="truncate text-sm font-semibold text-neutral-900">
            {item.name}
          </h4>
          <p className="text-xs text-neutral-500">
            {formatPrice(item.price)} each
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleRemove}
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-neutral-600 shadow-sm hover:bg-neutral-100"
              aria-label={`Decrease ${item.name}`}
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 12H4" />
              </svg>
            </button>
            <span className="min-w-[1.25rem] text-center text-sm font-bold">
              {quantity}
            </span>
            <button
              type="button"
              onClick={handleAdd}
              className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white shadow-sm hover:bg-primary-dark"
              aria-label={`Increase ${item.name}`}
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          <span className="text-sm font-bold text-primary">
            {formatPrice(subtotal)}
          </span>
        </div>
      </div>
    </motion.li>
  );
});
