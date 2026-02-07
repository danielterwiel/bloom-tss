import { createFileRoute, Link } from "@tanstack/react-router";
import { CategoryDistributionChart } from "../components/CategoryDistributionChart";
import { BusinessTypeChart } from "../components/BusinessTypeChart";
import { FoundingYearChart } from "../components/FoundingYearChart";
import { GeographicDistributionChart } from "../components/GeographicDistributionChart";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Industry Insights | Bloom" },
      {
        name: "description",
        content:
          "Explore visual analytics and data-driven insights about the global flower industry, including category distributions, business trends, and geographic patterns.",
      },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-section">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-20 w-72 h-72 rounded-full bg-chart-1/5 blur-3xl" />
          <div className="absolute bottom-10 right-20 w-64 h-64 rounded-full bg-chart-2/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-chart-3/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl px-content text-center">
          {/* Chart icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-chart-1/10">
            <svg
              className="h-8 w-8 text-chart-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M18 20V10" strokeLinecap="round" />
              <path d="M12 20V4" strokeLinecap="round" />
              <path d="M6 20v-6" strokeLinecap="round" />
            </svg>
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Industry <span className="text-chart-1">Insights</span>
          </h1>
          <p className="mt-6 text-lg text-foreground-muted">
            Discover patterns and trends in the global flower industry through interactive charts
            and data visualizations.
          </p>
        </div>
      </section>

      {/* Charts Grid Section */}
      <section className="bg-surface py-section">
        <div className="mx-auto max-w-6xl px-content">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Category Distribution Chart */}
            <div
              className="rounded-card bg-background p-card shadow-card overflow-hidden"
              id="category-chart"
            >
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Category Distribution
              </h2>
              <p className="mt-2 text-sm text-foreground-muted">
                Breakdown of companies by business category
              </p>
              <div className="mt-6">
                <CategoryDistributionChart />
              </div>
            </div>

            {/* Business Type Chart */}
            <div
              className="rounded-card bg-background p-card shadow-card overflow-hidden"
              id="business-type-chart"
            >
              <h2 className="font-heading text-xl font-semibold text-foreground">Business Types</h2>
              <p className="mt-2 text-sm text-foreground-muted">
                Distribution of B2B, B2C, and hybrid businesses
              </p>
              <div className="mt-6">
                <BusinessTypeChart />
              </div>
            </div>

            {/* Founding Year Chart */}
            <div
              className="rounded-card bg-background p-card shadow-card overflow-hidden"
              id="founding-year-chart"
            >
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Companies by Founding Year
              </h2>
              <p className="mt-2 text-sm text-foreground-muted">
                Timeline of company establishments over the years
              </p>
              <div className="mt-6">
                <FoundingYearChart />
              </div>
            </div>

            {/* Geographic Distribution Chart */}
            <div
              className="rounded-card bg-background p-card shadow-card overflow-hidden"
              id="geographic-chart"
            >
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Geographic Distribution
              </h2>
              <p className="mt-2 text-sm text-foreground-muted">
                Top countries by number of flower companies
              </p>
              <div className="mt-6">
                <GeographicDistributionChart />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Stats Section */}
      <section className="py-section">
        <div className="mx-auto max-w-6xl px-content">
          <h2 className="text-center font-heading text-3xl font-semibold text-foreground">
            Key Statistics
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-foreground-muted">
            A snapshot of the flower industry data in our directory.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-card bg-surface p-card text-center shadow-card">
              <div className="text-4xl font-bold text-chart-1">1,000+</div>
              <div className="mt-2 text-sm text-foreground-muted">Total Companies</div>
            </div>
            <div className="rounded-card bg-surface p-card text-center shadow-card">
              <div className="text-4xl font-bold text-chart-2">10</div>
              <div className="mt-2 text-sm text-foreground-muted">Categories</div>
            </div>
            <div className="rounded-card bg-surface p-card text-center shadow-card">
              <div className="text-4xl font-bold text-chart-3">20+</div>
              <div className="mt-2 text-sm text-foreground-muted">Countries</div>
            </div>
            <div className="rounded-card bg-surface p-card text-center shadow-card">
              <div className="text-4xl font-bold text-chart-4">20+</div>
              <div className="mt-2 text-sm text-foreground-muted">Specialties</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface py-section">
        <div className="mx-auto max-w-4xl px-content text-center">
          <h2 className="font-heading text-3xl font-semibold text-foreground">Explore the Data</h2>
          <p className="mt-4 text-foreground-muted">
            Want to dive deeper? Browse our comprehensive company directory with powerful filters.
          </p>
          <div className="mt-8">
            <Link
              to="/companies"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Browse Companies
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
