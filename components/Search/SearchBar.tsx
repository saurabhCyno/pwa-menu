"use client";

import { useMenuStore } from "@/store/useMenuStore";

export function SearchBar() {
  const searchQuery = useMenuStore((s) => s.searchQuery);
  const setSearchQuery = useMenuStore((s) => s.setSearchQuery);

  return (
    <div className="relative px-4 pt-3">
      <label htmlFor="menu-search" className="sr-only">
        Search dishes
      </label>
      <div className="pointer-events-none absolute left-7 top-[calc(50%+6px)] -translate-y-1/2 text-neutral-400">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        id="menu-search"
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search dishes..."
        autoComplete="off"
        className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 py-3 pl-10 pr-10 text-sm text-neutral-900 placeholder:text-neutral-400 transition-all focus:border-primary/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/15"
      />
      {searchQuery && (
        <button
          type="button"
          onClick={() => setSearchQuery("")}
          className="absolute right-7 top-[calc(50%+6px)] -translate-y-1/2 rounded-full p-1 text-neutral-400 hover:bg-neutral-200/60 hover:text-neutral-600"
          aria-label="Clear search"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
