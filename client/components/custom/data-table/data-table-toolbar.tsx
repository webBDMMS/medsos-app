"use client";

"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { secretariatData } from "@/constants/secretariat/data";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const globalFilterValue = table.getState().globalFilter ?? ""; // Get global filter state

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {/* Update Input to handle global filtering */}
        <Input
          placeholder="Search all data..."
          value={globalFilterValue}
          onChange={(event) => table.setGlobalFilter(event.target.value)} // Set global filter
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table.getColumn("coverage_level") && (
          <DataTableFacetedFilter
            column={table.getColumn("coverage_level")}
            title="Sekretariat"
            options={secretariatData}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
