import { useMemo } from "react";
import { LineChart, type LineChartSeries } from "@repo/ui";
import { companies } from "@repo/data";

export function FoundingYearChart() {
  const series: LineChartSeries[] = useMemo(() => {
    const yearCounts = new Map<number, number>();

    for (const company of companies) {
      const count = yearCounts.get(company.founded) ?? 0;
      yearCounts.set(company.founded, count + 1);
    }

    const data = Array.from(yearCounts.entries())
      .sort((a, b) => a[0] - b[0])
      .map(([year, count]) => ({
        x: year,
        y: count,
      }));

    return [
      {
        name: "Companies Founded",
        data,
        fill: true,
        fillOpacity: 0.15,
      },
    ];
  }, []);

  return <LineChart series={series} showLegend={false} className="h-64" />;
}

FoundingYearChart.displayName = "FoundingYearChart";
