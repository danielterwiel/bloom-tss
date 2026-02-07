import { useEffect, useRef, useCallback, useState } from "react";
import type uPlotType from "uplot";

export interface BaseChartProps {
  /** uPlot options configuration */
  options: Omit<uPlotType.Options, "width" | "height">;
  /** Chart data in uPlot format [xValues, ...ySeriesValues] */
  data: uPlotType.AlignedData;
  /** Additional CSS class names */
  className?: string;
  /** Callback when chart instance is created */
  onCreate?: (chart: uPlotType) => void;
  /** Callback when chart is destroyed */
  onDestroy?: () => void;
}

/**
 * Base chart wrapper component for uPlot with lifecycle management.
 * Handles responsive sizing via ResizeObserver and cleanup on unmount.
 * uPlot is dynamically imported to avoid SSR crashes (it accesses DOM APIs at init).
 */
export function BaseChart({ options, data, className, onCreate, onDestroy }: BaseChartProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<uPlotType | null>(null);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  // ResizeObserver callback to update dimensions
  const handleResize = useCallback((entries: ResizeObserverEntry[]) => {
    const entry = entries[0];
    if (entry) {
      const { width, height } = entry.contentRect;
      // Only update if dimensions actually changed (avoid unnecessary re-renders)
      setDimensions((prev) => {
        if (prev && prev.width === width && prev.height === height) {
          return prev;
        }
        return { width, height };
      });
    }
  }, []);

  // Set up ResizeObserver
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Initial size measurement
    const rect = container.getBoundingClientRect();
    setDimensions({ width: rect.width, height: rect.height });

    return () => {
      resizeObserver.disconnect();
    };
  }, [handleResize]);

  // Create/update chart when dimensions or options/data change
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !dimensions || dimensions.width === 0) return;

    let cancelled = false;

    // Dynamically import uPlot - only runs on client (useEffect)
    // CSS is loaded via side-effect import alongside the module
    // @ts-expect-error -- CSS module has no type declarations
    Promise.all([import("uplot"), import("uplot/dist/uPlot.min.css")]).then(([uPlotModule]) => {
      if (cancelled) return;

      const uPlot = uPlotModule.default;

      // Destroy existing chart
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }

      // Create new chart with current dimensions
      const chartOptions: uPlotType.Options = {
        ...options,
        width: dimensions.width,
        height: dimensions.height,
      };

      const chart = new uPlot(chartOptions, data, container);
      chartRef.current = chart;

      onCreate?.(chart);
    });

    return () => {
      cancelled = true;
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
        onDestroy?.();
      }
    };
  }, [dimensions, options, data, onCreate, onDestroy]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", minHeight: 200, overflow: "hidden" }}
      data-testid="base-chart-container"
    />
  );
}

BaseChart.displayName = "BaseChart";

export type { uPlotType as uPlot };
