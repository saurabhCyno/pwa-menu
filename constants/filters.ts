export type FilterOption = "all" | "veg" | "non-veg";

export const FILTER_OPTIONS: { value: FilterOption; label: string }[] = [
  { value: "all", label: "All" },
  { value: "veg", label: "Veg" },
  { value: "non-veg", label: "Non-Veg" },
];
