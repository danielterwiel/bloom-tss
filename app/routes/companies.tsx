import { createFileRoute } from "@tanstack/react-router";
import { companies } from "@repo/data";
import type { FlowerCompany } from "@repo/data";
import { CompanyExplorer } from "../components/CompanyExplorer";

type CompaniesSearch = {
  q?: string;
  cat?: string;
  spec?: string;
  cert?: string;
  country?: string;
  emp?: string;
  biz?: string;
  rev?: string;
  fmin?: number;
  fmax?: number;
};

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "Browse Companies | Bloom" },
      {
        name: "description",
        content:
          "Explore our comprehensive directory of 1000+ flower industry companies. Filter by category, location, specialty, and more.",
      },
    ],
  }),
  validateSearch: (search: Record<string, unknown>): CompaniesSearch => {
    return {
      q: typeof search.q === "string" ? search.q : undefined,
      cat: typeof search.cat === "string" ? search.cat : undefined,
      spec: typeof search.spec === "string" ? search.spec : undefined,
      cert: typeof search.cert === "string" ? search.cert : undefined,
      country: typeof search.country === "string" ? search.country : undefined,
      emp: typeof search.emp === "string" ? search.emp : undefined,
      biz: typeof search.biz === "string" ? search.biz : undefined,
      rev: typeof search.rev === "string" ? search.rev : undefined,
      fmin:
        typeof search.fmin === "number"
          ? search.fmin
          : typeof search.fmin === "string"
            ? Number(search.fmin) || undefined
            : undefined,
      fmax:
        typeof search.fmax === "number"
          ? search.fmax
          : typeof search.fmax === "string"
            ? Number(search.fmax) || undefined
            : undefined,
    };
  },
  loader: (): FlowerCompany[] => {
    return companies;
  },
  component: CompaniesPage,
});

function CompaniesPage() {
  const allCompanies = Route.useLoaderData();
  const search = Route.useSearch();

  return (
    <>
      {/* Hero Section */}
      <section className="border-b border-border py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-content">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Browse <span className="text-primary">Companies</span>
          </h1>
          <p className="mt-2 text-sm text-foreground-muted sm:text-base">
            Explore over 1,000 flower industry companies. Filter by category, location, specialty,
            and more.
          </p>
        </div>
      </section>

      {/* Company Explorer Section */}
      <section className="bg-surface py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-content">
          <CompanyExplorer companies={allCompanies} search={search} />
        </div>
      </section>
    </>
  );
}
