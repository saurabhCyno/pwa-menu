"use client";

import { useMemo } from "react";
import { MENU_ITEMS } from "@/data/menu";
import { useMenuStore } from "@/store/useMenuStore";
import type { MenuItem } from "@/types/menu";

export function useFilteredMenu(): MenuItem[] {
  const debouncedQuery = useMenuStore((s) => s.debouncedQuery);
  const filter = useMenuStore((s) => s.filter);
  const sort = useMenuStore((s) => s.sort);

  return useMemo(() => {
    let result = MENU_ITEMS;

    if (filter !== "all") {
      result = result.filter((item) => item.category === filter);
    }

    const query = debouncedQuery.trim().toLowerCase();
    if (query) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
    }

    return [...result].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [debouncedQuery, filter, sort]);
}
