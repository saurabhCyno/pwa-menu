import { create } from "zustand";
import type { FilterOption } from "@/constants/filters";
import type { SortOption } from "@/constants/sortOptions";

interface MenuState {
  searchQuery: string;
  debouncedQuery: string;
  filter: FilterOption;
  sort: SortOption;
  setSearchQuery: (query: string) => void;
  setDebouncedQuery: (query: string) => void;
  setFilter: (filter: FilterOption) => void;
  setSort: (sort: SortOption) => void;
}

export const useMenuStore = create<MenuState>((set) => ({
  searchQuery: "",
  debouncedQuery: "",
  filter: "all",
  sort: "price-asc",
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setDebouncedQuery: (debouncedQuery) => set({ debouncedQuery }),
  setFilter: (filter) => set({ filter }),
  setSort: (sort) => set({ sort }),
}));
