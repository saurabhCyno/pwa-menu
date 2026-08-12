import { Skeleton } from "@/components/ui/Skeleton";

export function MenuSkeleton() {
  return (
    <div className="space-y-4 px-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl border border-neutral-100 bg-white"
        >
          <Skeleton className="aspect-[16/10] w-full rounded-none" />
          <div className="space-y-3 p-4">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
