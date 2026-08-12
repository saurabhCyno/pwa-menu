import { cn } from "@/lib/cn";

interface BadgeProps {
  variant: "veg" | "non-veg";
  className?: string;
}

export function Badge({ variant, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
        variant === "veg"
          ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
          : "bg-red-50 text-red-700 ring-1 ring-red-200",
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          variant === "veg" ? "bg-emerald-500" : "bg-red-500"
        )}
        aria-hidden
      />
      {variant === "veg" ? "Veg" : "Non-Veg"}
    </span>
  );
}
