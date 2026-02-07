import * as React from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import type { FlowerCompany } from "@repo/data";
import { CompanyCard } from "./CompanyCard";

export interface VirtualListProps {
  items: FlowerCompany[];
  estimatedRowHeight?: number;
  gap?: number;
  className?: string;
}

export function VirtualList({
  items,
  estimatedRowHeight = 120,
  gap = 12,
  className,
}: VirtualListProps) {
  // Use state (not ref) for the scroll element so that when it's set after
  // hydration the component re-renders and the virtualizer picks it up.
  const [scrollElement, setScrollElement] = React.useState<HTMLDivElement | null>(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => scrollElement,
    estimateSize: () => estimatedRowHeight,
    overscan: 5,
    gap,
  });

  const virtualItems = virtualizer.getVirtualItems();

  if (items.length === 0) {
    return (
      <div
        className="flex items-center justify-center py-12 text-foreground-muted"
        role="status"
        aria-live="polite"
      >
        No companies found
      </div>
    );
  }

  return (
    <div
      ref={setScrollElement}
      className={className}
      style={{
        height: "100%",
        overflow: "auto",
      }}
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {virtualItems.map((virtualItem) => {
          const company = items[virtualItem.index];
          if (!company) return null;

          return (
            <div
              key={virtualItem.key}
              data-index={virtualItem.index}
              ref={virtualizer.measureElement}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <CompanyCard company={company} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

VirtualList.displayName = "VirtualList";
