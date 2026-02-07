import { createFileRoute, Link } from "@tanstack/react-router";
import { companies, COUNTRIES } from "@repo/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flower Industry Directory | Bloom" },
      {
        name: "description",
        content:
          "Discover and explore the global flower industry. Browse 1000+ companies, from florists to wholesalers, nurseries to exporters.",
      },
    ],
  }),
  loader: () => {
    const featuredCompanies = companies.slice(0, 6);

    const countryStats = COUNTRIES.map((country) => {
      const count = companies.filter((c) => c.country === country).length;
      return { country, count };
    })
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);

    const totalCountries = new Set(companies.map((c) => c.country)).size;
    const totalCategories = new Set(companies.map((c) => c.category)).size;
    const totalSpecialties = new Set(companies.flatMap((c) => c.specialty)).size;

    return {
      featuredCompanies,
      countryStats,
      totalCountries,
      totalCategories,
      totalSpecialties,
      totalCompanies: companies.length,
    };
  },
  component: HomePage,
});

const galleryImages = [
  {
    seed: "bloom-gallery-1",
    w: 600,
    h: 400,
    alt: "Vibrant flower arrangements in a boutique florist shop",
  },
  {
    seed: "bloom-gallery-2",
    w: 400,
    h: 600,
    alt: "Rows of tulips in a commercial greenhouse",
  },
  {
    seed: "bloom-gallery-3",
    w: 600,
    h: 400,
    alt: "Fresh cut roses ready for wholesale distribution",
  },
  {
    seed: "bloom-gallery-4",
    w: 400,
    h: 500,
    alt: "Colorful mixed bouquet being prepared for delivery",
  },
  {
    seed: "bloom-gallery-5",
    w: 600,
    h: 400,
    alt: "Aerial view of flower fields in bloom",
  },
  {
    seed: "bloom-gallery-6",
    w: 400,
    h: 600,
    alt: "Wedding floral centerpiece arrangement",
  },
  {
    seed: "bloom-gallery-7",
    w: 600,
    h: 400,
    alt: "Flower market stalls with diverse selections",
  },
  {
    seed: "bloom-gallery-8",
    w: 400,
    h: 500,
    alt: "Orchid nursery with exotic varieties",
  },
];

function HomePage() {
  const {
    featuredCompanies,
    countryStats,
    totalCountries,
    totalCategories,
    totalSpecialties,
    totalCompanies,
  } = Route.useLoaderData();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-section">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute top-40 right-1/4 w-48 h-48 rounded-full bg-accent/5 blur-2xl" />
        </div>

        <div className="mx-auto max-w-6xl px-content text-center">
          {/* Flower icon */}
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <svg
              className="h-10 w-10 text-primary"
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
              <path
                d="M12 9.5c-2 1.5-4 2.5-6 2.5-1.5 0-2.5-.5-3.5-2.5 1-2 2-2.5 3.5-2.5 2 0 4 1 6 2.5z"
                fill="currentColor"
                opacity="0.15"
              />
              <path
                d="M12 9.5c2 1.5 4 2.5 6 2.5 1.5 0 2.5-.5 3.5-2.5-1-2-2-2.5-3.5-2.5-2 0-4 1-6 2.5z"
                fill="currentColor"
                opacity="0.15"
              />
              <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
              <path d="M12 15v6" strokeLinecap="round" />
              <path
                d="M10 18c0-1.5 1-2.5 2-3 1 .5 2 1.5 2 3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Flower Industry
            <span className="block text-primary">Directory</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground-muted sm:text-xl">
            Discover and explore the global flower industry. Browse our comprehensive database of
            florists, nurseries, wholesalers, and more from around the world.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/companies"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Explore Companies
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              to="/insights"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-transparent px-8 text-base font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              View Insights
            </Link>
          </div>

          {/* Stats preview */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary sm:text-4xl">1000+</div>
              <div className="mt-1 text-sm text-foreground-muted">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary sm:text-4xl">20+</div>
              <div className="mt-1 text-sm text-foreground-muted">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent sm:text-4xl">10</div>
              <div className="mt-1 text-sm text-foreground-muted">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-chart-4 sm:text-4xl">20+</div>
              <div className="mt-1 text-sm text-foreground-muted">Specialties</div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore by Category */}
      <section className="bg-surface py-section">
        <div className="mx-auto max-w-6xl px-content">
          <h2 className="text-center font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Explore by Category
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-foreground-muted">
            From local florists to international wholesalers, find the perfect partner for your
            floral needs.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Category Card: Florist */}
            <Link
              to="/companies"
              search={{ cat: "Florist" }}
              className="group rounded-card bg-background p-card shadow-card transition-shadow hover:shadow-elevated"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 3c-1.5 2-2.5 4-2.5 6 0 1.5.5 2.5 2.5 3.5 2-1 2.5-2 2.5-3.5 0-2-1-4-2.5-6z" />
                  <path d="M12 12.5V21" />
                </svg>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground group-hover:text-primary">
                Florists
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">
                Retail flower shops and boutiques serving local customers with arrangements and
                bouquets.
              </p>
            </Link>

            {/* Category Card: Nursery */}
            <Link
              to="/companies"
              search={{ cat: "Nursery" }}
              className="group rounded-card bg-background p-card shadow-card transition-shadow hover:shadow-elevated"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 21h10" />
                  <path d="M12 21V11" />
                  <path d="M12 11C12 11 8 7 8 4a4 4 0 018 0c0 3-4 7-4 7z" />
                </svg>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground group-hover:text-secondary">
                Nurseries
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">
                Plant nurseries growing and cultivating flowers, plants, and seedlings for wholesale
                and retail.
              </p>
            </Link>

            {/* Category Card: Wholesale */}
            <Link
              to="/companies"
              search={{ cat: "Wholesale" }}
              className="group rounded-card bg-background p-card shadow-card transition-shadow hover:shadow-elevated"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                  <path d="M12 12v4" />
                  <path d="M10 14h4" />
                </svg>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground group-hover:text-accent">
                Wholesalers
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">
                Bulk flower distributors supplying florists, event planners, and retailers with
                fresh inventory.
              </p>
            </Link>

            {/* Category Card: Grower */}
            <Link
              to="/companies"
              search={{ cat: "Grower" }}
              className="group rounded-card bg-background p-card shadow-card transition-shadow hover:shadow-elevated"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success/10 text-success">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22V12" />
                  <path d="M12 12c2-2 4-3 6-3 0 3-2 5-6 6" />
                  <path d="M12 12c-2-2-4-3-6-3 0 3 2 5 6 6" />
                  <path d="M12 8c1-1.5 2-2.5 3-2.5 0 1.5-1 2.5-3 3" />
                  <path d="M12 8c-1-1.5-2-2.5-3-2.5 0 1.5 1 2.5 3 3" />
                </svg>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground group-hover:text-success">
                Growers
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">
                Flower farms and growers producing fresh-cut flowers and plants for domestic and
                export markets.
              </p>
            </Link>

            {/* Category Card: Importer/Exporter */}
            <Link
              to="/companies"
              search={{ cat: "Importer/Exporter" }}
              className="group rounded-card bg-background p-card shadow-card transition-shadow hover:shadow-elevated"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-4/10 text-chart-4">
                <svg
                  className="h-6 w-6"
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
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground group-hover:text-chart-4">
                Importers/Exporters
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">
                International traders moving flowers across borders, connecting global markets.
              </p>
            </Link>

            {/* Category Card: Event/Wedding */}
            <Link
              to="/companies"
              search={{ cat: "Event Florist" }}
              className="group rounded-card bg-background p-card shadow-card transition-shadow hover:shadow-elevated"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-chart-5/10 text-chart-5">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground group-hover:text-chart-5">
                Event & Wedding
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">
                Specialists in wedding flowers, corporate events, and special occasion arrangements.
              </p>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/companies"
              className="inline-flex items-center text-primary hover:text-primary-hover"
            >
              View all categories
              <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
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

      {/* How It Works */}
      <section className="py-section">
        <div className="mx-auto max-w-6xl px-content">
          <h2 className="text-center font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-foreground-muted">
            Find the right flower industry partner in three simple steps.
          </p>

          <div className="mt-14 grid gap-12 sm:grid-cols-3">
            {/* Step 1 */}
            <div className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                Search & Filter
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">
                Browse by category, country, specialty, or business type. Our filters narrow 1,000+
                companies to exactly what you need.
              </p>
              <div
                className="absolute right-0 top-7 hidden h-px w-[calc(50%-2rem)] bg-border sm:block"
                aria-hidden="true"
              />
            </div>

            {/* Step 2 */}
            <div className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                Compare & Evaluate
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">
                View detailed company profiles with certifications, specialties, revenue ranges, and
                employee counts side by side.
              </p>
              <div
                className="absolute left-0 top-7 hidden h-px w-[calc(50%-2rem)] bg-border sm:block"
                aria-hidden="true"
              />
              <div
                className="absolute right-0 top-7 hidden h-px w-[calc(50%-2rem)] bg-border sm:block"
                aria-hidden="true"
              />
            </div>

            {/* Step 3 */}
            <div className="relative text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                Connect & Grow
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">
                Reach out directly to businesses that match your requirements and build lasting
                industry partnerships.
              </p>
              <div
                className="absolute left-0 top-7 hidden h-px w-[calc(50%-2rem)] bg-border sm:block"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companies */}
      <section className="bg-surface py-section">
        <div className="mx-auto max-w-6xl px-content">
          <h2 className="text-center font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Featured Companies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-foreground-muted">
            A sample from our directory of {totalCompanies.toLocaleString()} businesses worldwide.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCompanies.map((company) => (
              <article
                key={company.id}
                className="group overflow-hidden rounded-card bg-background shadow-card transition-shadow hover:shadow-elevated"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={company.imageUrl}
                    alt={`${company.name} — ${company.category}`}
                    width="400"
                    height="300"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-card">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading text-base font-semibold text-foreground leading-tight">
                      {company.name}
                    </h3>
                    <span className="shrink-0 rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {company.category}
                    </span>
                  </div>
                  <p className="mt-2 flex items-center gap-1 text-sm text-foreground-muted">
                    <svg
                      className="h-3.5 w-3.5 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {company.headquarters}, {company.country}
                  </p>
                  <p className="mt-1.5 text-sm text-foreground-muted line-clamp-2">
                    {company.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {company.specialty.slice(0, 3).map((spec) => (
                      <span
                        key={spec}
                        className="rounded-full bg-muted px-2 py-0.5 text-xs text-foreground-muted"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/companies"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Browse All {totalCompanies.toLocaleString()} Companies
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

      {/* Global Reach */}
      <section className="py-section">
        <div className="mx-auto max-w-6xl px-content">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
                Global Reach, <span className="text-primary">Local Expertise</span>
              </h2>
              <p className="mt-4 text-foreground-muted">
                Our directory spans {totalCountries} countries and {totalCategories} categories,
                connecting the world's flower industry from Dutch auction houses to Colombian rose
                farms.
              </p>
              <div className="mt-8 space-y-3">
                {countryStats.map((stat) => (
                  <div
                    key={stat.country}
                    className="flex items-center justify-between rounded-lg bg-surface px-4 py-2.5"
                  >
                    <span className="text-sm font-medium text-foreground">{stat.country}</span>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 overflow-hidden rounded-full bg-muted sm:w-32">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{
                            width: `${(stat.count / countryStats[0].count) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="w-10 text-right text-sm tabular-nums text-foreground-muted">
                        {stat.count}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/insights"
                className="mt-8 inline-flex items-center text-sm font-medium text-primary hover:text-primary-hover"
              >
                Explore full industry insights
                <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            {/* Key numbers panel */}
            <div className="rounded-card bg-surface p-8 shadow-card">
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Industry at a Glance
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div className="rounded-lg bg-background p-4 text-center">
                  <div className="text-3xl font-bold text-primary">
                    {totalCompanies.toLocaleString()}+
                  </div>
                  <div className="mt-1 text-xs text-foreground-muted">Listed Companies</div>
                </div>
                <div className="rounded-lg bg-background p-4 text-center">
                  <div className="text-3xl font-bold text-secondary">{totalCountries}</div>
                  <div className="mt-1 text-xs text-foreground-muted">Countries</div>
                </div>
                <div className="rounded-lg bg-background p-4 text-center">
                  <div className="text-3xl font-bold text-accent">{totalCategories}</div>
                  <div className="mt-1 text-xs text-foreground-muted">Categories</div>
                </div>
                <div className="rounded-lg bg-background p-4 text-center">
                  <div className="text-3xl font-bold text-success">{totalSpecialties}+</div>
                  <div className="mt-1 text-xs text-foreground-muted">Specialties</div>
                </div>
              </div>
              <div className="mt-6 rounded-lg border border-border bg-background p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <svg
                    className="h-4 w-4 text-success"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  Verified & Updated
                </div>
                <p className="mt-1 text-xs text-foreground-muted">
                  Company profiles include certifications, revenue data, and specialties reviewed
                  for accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-surface py-section">
        <div className="mx-auto max-w-6xl px-content">
          <h2 className="text-center font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            The World of Flowers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-foreground-muted">
            From greenhouse to bouquet — a glimpse into the industry we serve.
          </p>

          <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4">
            {galleryImages.map((img) => (
              <div key={img.seed} className="mb-4 break-inside-avoid overflow-hidden rounded-card">
                <img
                  src={`https://picsum.photos/seed/${img.seed}/${img.w}/${img.h}`}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-section">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl px-content text-center">
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Ready to Find Your Next Partner?
          </h2>
          <p className="mt-4 text-lg text-foreground-muted">
            Whether you're sourcing wholesale flowers, finding a local florist, or exploring global
            growers — Bloom connects you with the right businesses.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/companies"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Start Exploring
              <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              to="/about"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-transparent px-8 text-base font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Learn More About Bloom
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
