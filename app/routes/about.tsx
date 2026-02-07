import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Bloom" },
      {
        name: "description",
        content:
          "Learn about the Flower Industry Directory - a comprehensive database of florists, nurseries, wholesalers, and flower businesses worldwide.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-section">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute bottom-10 left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl px-content text-center">
          {/* Decorative flower */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
            <svg
              className="h-8 w-8 text-secondary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M12 3c-1.5 2-2.5 4-2.5 6 0 1.5.5 2.5 2.5 3.5 2-1 2.5-2 2.5-3.5 0-2-1-4-2.5-6z"
                fill="currentColor"
                opacity="0.2"
              />
              <path
                d="M12 9.5c-2-1.5-4-2.5-6-2.5-1.5 0-2.5.5-3.5 2.5 1 2 2 2.5 3.5 2.5 2 0 4-1 6-2.5z"
                fill="currentColor"
                opacity="0.2"
              />
              <path
                d="M12 9.5c2-1.5 4-2.5 6-2.5 1.5 0 2.5.5 3.5 2.5-1 2-2 2.5-3.5 2.5-2 0-4-1-6-2.5z"
                fill="currentColor"
                opacity="0.2"
              />
              <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
              <path d="M12 15v6" strokeLinecap="round" />
            </svg>
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About <span className="text-primary">Bloom</span>
          </h1>
          <p className="mt-6 text-lg text-foreground-muted">
            Connecting the global flower industry, one bloom at a time.
          </p>
        </div>
      </section>

      {/* Mission Section with Cards */}
      <section className="bg-surface py-section">
        <div className="mx-auto max-w-6xl px-content">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card: Our Mission */}
            <div className="rounded-card bg-background p-card shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  className="h-6 w-6 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <h2 className="mt-4 font-heading text-xl font-semibold text-foreground">
                Our Mission
              </h2>
              <p className="mt-3 text-foreground-muted">
                To create the most comprehensive and accessible directory of flower industry
                businesses worldwide, helping buyers find suppliers and enabling businesses to grow
                their reach.
              </p>
            </div>

            {/* Card: What We Offer */}
            <div className="rounded-card bg-background p-card shadow-card">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <svg
                  className="h-6 w-6 text-secondary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  <path d="M3.27 6.96L12 12.01l8.73-5.05" />
                  <path d="M12 22.08V12" />
                </svg>
              </div>
              <h2 className="mt-4 font-heading text-xl font-semibold text-foreground">
                What We Offer
              </h2>
              <p className="mt-3 text-foreground-muted">
                A curated database of over 1,000 flower companies spanning florists, nurseries,
                wholesalers, growers, and more - all searchable by category, location, and
                specialty.
              </p>
            </div>

            {/* Card: Our Commitment */}
            <div className="rounded-card bg-background p-card shadow-card md:col-span-2 lg:col-span-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <svg
                  className="h-6 w-6 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
              <h2 className="mt-4 font-heading text-xl font-semibold text-foreground">
                Our Commitment
              </h2>
              <p className="mt-3 text-foreground-muted">
                We're dedicated to supporting the flower industry by providing accurate, up-to-date
                information and insights to help businesses thrive in a global marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-section">
        <div className="mx-auto max-w-6xl px-content">
          <h2 className="text-center font-heading text-3xl font-semibold text-foreground">
            Why Choose Bloom?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-foreground-muted">
            We've built a directory that serves everyone in the flower industry.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success/10">
                <svg
                  className="h-5 w-5 text-success"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Powerful Search
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  Filter by category, specialty, location, business type, certifications, and more
                  to find exactly what you need.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  className="h-5 w-5 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Global Coverage
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  Companies from over 20 countries, with strong representation from major flower
                  markets worldwide.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                <svg
                  className="h-5 w-5 text-secondary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 20V10" />
                  <path d="M18 20V4" />
                  <path d="M6 20v-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Industry Insights
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  Visual analytics and charts showing trends, distributions, and patterns across the
                  flower industry.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <svg
                  className="h-5 w-5 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  Verified Data
                </h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  Comprehensive company profiles with certifications, specialties, and business
                  details you can trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface py-section">
        <div className="mx-auto max-w-4xl px-content text-center">
          {/* Decorative petals */}
          <div className="relative inline-block">
            <div className="absolute -left-8 -top-4 h-6 w-6 rotate-45 rounded-full bg-primary/20" />
            <div className="absolute -right-6 -top-2 h-4 w-4 rounded-full bg-secondary/20" />
            <div className="absolute -bottom-2 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-accent/20" />

            <h2 className="font-heading text-3xl font-semibold text-foreground">
              Ready to explore?
            </h2>
          </div>
          <p className="mt-4 text-foreground-muted">
            Start browsing our comprehensive directory of flower industry businesses.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/companies"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Browse Companies
            </Link>
            <Link
              to="/insights"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-transparent px-8 text-base font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              View Insights
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
