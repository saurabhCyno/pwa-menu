"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RESTAURANT } from "@/constants/restaurant";
import { useCartStore } from "@/store/useCartStore";
import { useUIStore } from "@/store/useUIStore";

export function Header() {
  const totalItems = useCartStore((s) => s.totalItems());
  const openCart = useUIStore((s) => s.openCart);

  return (
    <header className="sticky top-0 z-30 border-b border-neutral-100/80 bg-white/85 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-2xl bg-primary shadow-sm">
            <Image
              src="/logo.svg"
              alt={`${RESTAURANT.name} logo`}
              fill
              className="object-cover p-1.5"
              priority
            />
          </div>
          <div>
            <h1 className="text-base font-bold tracking-tight text-neutral-900">
              {RESTAURANT.name}
            </h1>
            <p className="text-[11px] text-neutral-500">{RESTAURANT.tagline}</p>
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={openCart}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-50 text-neutral-700 transition-colors hover:bg-neutral-100"
          aria-label={`Open cart${totalItems > 0 ? `, ${totalItems} items` : ""}`}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          {totalItems > 0 && (
            <motion.span
              key={totalItems}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-primary"
            >
              {totalItems > 99 ? "99+" : totalItems}
            </motion.span>
          )}
        </motion.button>
      </div>
    </header>
  );
}
