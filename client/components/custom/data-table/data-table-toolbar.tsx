"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { secretariatData } from "@/constants/secretariat/data";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { Plus } from "lucide-react";
import useDialogStore from "@/hooks/use-dialog";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const globalFilterValue = table.getState().globalFilter ?? ""; // Get global filter state
  const { openDialog } = useDialogStore();
  //? ===== management path conditions =====
  const pathname = usePathname();
  console.log("current path", pathname);

  const pathConditions = {
    isSekretariat: pathname === "/gedung",
    isNoHandphone: pathname === "/aset-digital/nomor-telepon",
    // Add more conditions as needed
  };

  // You can now access the conditions like this:
  const { isSekretariat, isNoHandphone } = pathConditions;
  //? ===== management path conditions =====

  const handleCreate = () => {
    if (isNoHandphone) {
      openDialog(null, "phone");
    }
  };

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
        {isSekretariat && (
          <Fragment>
            {table.getColumn("coverage_level") && (
              <DataTableFacetedFilter
                column={table.getColumn("coverage_level")}
                title="Sekretariat"
                options={secretariatData}
              />
            )}
          </Fragment>
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

        {isNoHandphone && (
          <Fragment>
            <Button
              onClick={handleCreate}
              variant="default"
              className="h-8 px-2 lg:px-3"
            >
              Tambah Data
              <Plus className="ml-2 h-4 w-4" />
            </Button>
          </Fragment>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
