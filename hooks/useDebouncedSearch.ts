"use client";

import { useEffect } from "react";
import { useMenuStore } from "@/store/useMenuStore";

export function useDebouncedSearch(delay = 400) {
  const searchQuery = useMenuStore((s) => s.searchQuery);
  const setDebouncedQuery = useMenuStore((s) => s.setDebouncedQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, delay);

    return () => clearTimeout(timer);
  }, [searchQuery, delay, setDebouncedQuery]);
}
