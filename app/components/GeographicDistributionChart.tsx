import { useMemo } from "react";
import { BarChart, type BarChartSeries } from "@repo/ui";
import { companies } from "@repo/data";

export function GeographicDistributionChart() {
  const series: BarChartSeries[] = useMemo(() => {
    const countryCounts = new Map<string, number>();

    for (const company of companies) {
      const count = countryCounts.get(company.country) ?? 0;
      countryCounts.set(company.country, count + 1);
    }

    const sortedCountries = Array.from(countryCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    const data = sortedCountries.map(([country, count]) => ({
      label: country,
      value: count,
    }));

    return [
      {
        name: "Companies",
        data,
      },
    ];
  }, []);

  return <BarChart series={series} showLegend={false} className="h-64" />;
}

GeographicDistributionChart.displayName = "GeographicDistributionChart";
