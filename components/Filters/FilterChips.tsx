"use client";

import { motion } from "framer-motion";
import { FILTER_OPTIONS } from "@/constants/filters";
import { useMenuStore } from "@/store/useMenuStore";
import { cn } from "@/lib/cn";

export function FilterChips() {
  const filter = useMenuStore((s) => s.filter);
  const setFilter = useMenuStore((s) => s.setFilter);

  return (
    <div
      className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-none"
      role="tablist"
      aria-label="Filter menu by category"
    >
      {FILTER_OPTIONS.map((option) => {
        const isActive = filter === option.value;
        return (
          <button
            key={option.value}
            role="tab"
            aria-selected={isActive}
            onClick={() => setFilter(option.value)}
            className={cn(
              "relative shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors",
              isActive ? "text-white" : "text-neutral-600 hover:bg-neutral-100"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-primary shadow-sm"
                transition={{ type: "spring", damping: 24, stiffness: 320 }}
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
