import { useMemo } from "react";
import { BarChart, type BarChartSeries } from "@repo/ui";
import { companies, BUSINESS_TYPES } from "@repo/data";

export function BusinessTypeChart() {
  const series: BarChartSeries[] = useMemo(() => {
    const typeCounts = new Map<string, number>();
    for (const type of BUSINESS_TYPES) {
      typeCounts.set(type, 0);
    }

    for (const company of companies) {
      const count = typeCounts.get(company.businessType) ?? 0;
      typeCounts.set(company.businessType, count + 1);
    }

    const data = BUSINESS_TYPES.map((type) => ({
      label: type,
      value: typeCounts.get(type) ?? 0,
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

BusinessTypeChart.displayName = "BusinessTypeChart";
