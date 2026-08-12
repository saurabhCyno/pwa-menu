export type SortOption = "price-asc" | "price-desc" | "name-asc";

export const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "name-asc", label: "Alphabetically A → Z" },
];
