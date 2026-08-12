import { SearchBar } from "@/components/Search/SearchBar";
import { FilterChips } from "@/components/Filters/FilterChips";
import { SortDropdown } from "@/components/Sort/SortDropdown";

export function StickyFilterSection() {
  return (
    <section
      className="relative z-20 border-b border-neutral-100 bg-white/90 backdrop-blur-md"
      aria-label="Search and filters"
    >
      <SearchBar />
      <FilterChips />
      <SortDropdown />
    </section>
  );
}
