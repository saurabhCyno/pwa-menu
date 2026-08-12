"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MenuCard } from "@/components/MenuCard/MenuCard";
import { MenuSkeleton } from "@/components/Menu/MenuSkeleton";
import { useFilteredMenu } from "@/hooks/useFilteredMenu";
import { containerStagger } from "@/lib/motion";

export function MenuList() {
  const items = useFilteredMenu();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <MenuSkeleton />;
  }

  if (items.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center px-6 py-16 text-center"
      >
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-neutral-100">
          <svg className="h-10 w-10 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-base font-semibold text-neutral-800">No dishes found</h3>
        <p className="mt-1 text-sm text-neutral-500">
          Try adjusting your search or filters
        </p>
      </motion.div>
    );
  }

  return (
    <motion.section
      variants={containerStagger}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 gap-3 px-4 pb-6 pt-4"
      aria-label="Menu items"
    >
      {items.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </motion.section>
  );
}
