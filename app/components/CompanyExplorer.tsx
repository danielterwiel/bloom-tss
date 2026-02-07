import * as React from "react";
import { useNavigate } from "@tanstack/react-router";
import type { FlowerCompany, CompanyFilters } from "@repo/data";
import { applyAllFilters } from "@repo/data";
import { VirtualList } from "./VirtualList";
import { FilterPanel } from "./FilterPanel";

interface CompanyExplorerProps {
  companies: FlowerCompany[];
  search: {
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
}

function searchToFilters(search: CompanyExplorerProps["search"]): CompanyFilters {
  return {
    text: search.q || undefined,
    categories: search.cat ? search.cat.split(",") : undefined,
    specialties: search.spec ? search.spec.split(",") : undefined,
    certifications: search.cert ? search.cert.split(",") : undefined,
    countries: search.country ? search.country.split(",") : undefined,
    employees: search.emp ? search.emp.split(",") : undefined,
    businessTypes: search.biz ? search.biz.split(",") : undefined,
    revenues: search.rev ? search.rev.split(",") : undefined,
    foundedMin: search.fmin,
    foundedMax: search.fmax,
  };
}

function filtersToSearch(filters: CompanyFilters): CompanyExplorerProps["search"] {
  return {
    q: filters.text || undefined,
    cat: filters.categories?.join(",") || undefined,
    spec: filters.specialties?.join(",") || undefined,
    cert: filters.certifications?.join(",") || undefined,
    country: filters.countries?.join(",") || undefined,
    emp: filters.employees?.join(",") || undefined,
    biz: filters.businessTypes?.join(",") || undefined,
    rev: filters.revenues?.join(",") || undefined,
    fmin: filters.foundedMin,
    fmax: filters.foundedMax,
  };
}

export function CompanyExplorer({ companies, search }: CompanyExplorerProps) {
  const navigate = useNavigate();
  const filters = React.useMemo(() => searchToFilters(search), [search]);

  const filteredData = React.useMemo(
    () => applyAllFilters(companies, filters),
    [companies, filters],
  );

  const handleFiltersChange = React.useCallback(
    (newFilters: CompanyFilters) => {
      void navigate({
        to: "/companies",
        search: filtersToSearch(newFilters),
        replace: true,
      });
    },
    [navigate],
  );

  return (
    <div className="flex flex-col gap-6">
      <FilterPanel
        filters={filters}
        onFiltersChange={handleFiltersChange}
        resultsCount={filteredData.length}
        totalCount={companies.length}
      />
      <div>
        <div style={{ height: "calc(100vh - 340px)", minHeight: "500px" }}>
          <VirtualList items={filteredData} />
        </div>
      </div>
    </div>
  );
}

CompanyExplorer.displayName = "CompanyExplorer";
