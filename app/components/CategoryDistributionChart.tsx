import { useMemo } from "react";
import { DonutChart, type DonutChartSegment } from "@repo/ui";
import { companies, CATEGORIES } from "@repo/data";

export function CategoryDistributionChart() {
  const segments: DonutChartSegment[] = useMemo(() => {
    const categoryCounts = new Map<string, number>();
    for (const category of CATEGORIES) {
      categoryCounts.set(category, 0);
    }

    for (const company of companies) {
      const count = categoryCounts.get(company.category) ?? 0;
      categoryCounts.set(company.category, count + 1);
    }

    return Array.from(categoryCounts.entries())
      .filter(([, count]) => count > 0)
      .sort((a, b) => b[1] - a[1])
      .map(([label, value]) => ({ label, value }));
  }, []);

  return (
    <DonutChart
      segments={segments}
      showLegend={true}
      showPercentages={true}
      innerRadius={0.6}
      className="h-64"
    />
  );
}

CategoryDistributionChart.displayName = "CategoryDistributionChart";
