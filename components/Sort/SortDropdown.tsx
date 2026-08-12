"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SORT_OPTIONS } from "@/constants/sortOptions";
import { useMenuStore } from "@/store/useMenuStore";
import { cn } from "@/lib/cn";

export function SortDropdown() {
  const sort = useMenuStore((s) => s.sort);
  const setSort = useMenuStore((s) => s.setSort);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const activeLabel =
    SORT_OPTIONS.find((o) => o.value === sort)?.label ?? "Sort";

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative px-4 pb-3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="flex items-center gap-2">
          <svg className="h-4 w-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
          </svg>
          {activeLabel}
        </span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          className="h-4 w-4 text-neutral-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            className="absolute left-4 right-4 z-20 mt-1 overflow-hidden rounded-xl border border-neutral-200 bg-white py-1 shadow-lg"
          >
            {SORT_OPTIONS.map((option) => (
              <li key={option.value} role="option" aria-selected={sort === option.value}>
                <button
                  type="button"
                  onClick={() => {
                    setSort(option.value);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-neutral-50",
                    sort === option.value
                      ? "font-semibold text-primary"
                      : "text-neutral-700"
                  )}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
