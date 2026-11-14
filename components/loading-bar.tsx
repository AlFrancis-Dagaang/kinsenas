import { cn } from "cn";

/** Suspense fallback: docs/design.md's 12 blocks with a clay run moving across them, centered in the content area. */
export function LoadingBar() {
  return (
    <div role="status" className="flex min-h-[50vh] items-center justify-center">
      <span className="sr-only">Loading</span>
      <div aria-hidden className="flex gap-[3px]">
        {Array.from({ length: 12 }, (_, i) => (
          <span
            key={i}
            className={cn("size-[11px] bg-border motion-safe:animate-load", i < 6 && "motion-reduce:bg-primary")}
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
