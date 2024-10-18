"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { secretariatData } from "@/constants/secretariat/data";
import { useParams, usePathname } from "next/navigation";
import { Fragment } from "react";
import { ArrowLeft, Plus } from "lucide-react";
import useDialogStore from "@/hooks/use-dialog";
import { Label } from "@/components/ui/label";
import { Combobox } from "@/components/ui/combobox";
import { items } from "@/constants/media-sosial/data";
import Link from "next/link";

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
  const params = useParams<{ id: string }>();
  const id = params.id;
  // console.log("params id", id);
  // console.log("current path", pathname);

  const pathConditions = {
    isSekretariat: pathname === "/gedung",
    isNoHandphone: pathname === "/aset-digital/nomor-telepon",
    isViewNoHandphone: pathname === `/aset-digital/nomor-telepon/${id}`,
    isMedsos: pathname === "/aset-digital/media-sosial",
    isGMaps: pathname === "/aset-digital/google-maps",
    isCompletePorductivity:
      pathname === `/dashboard-laporan/complete-productivity`,
    // Add more conditions as needed
  };

  // You can now access the conditions like this:
  const {
    isSekretariat,
    isViewNoHandphone,
    isMedsos,
    isGMaps,
    isCompletePorductivity,
  } = pathConditions;
  //? ===== management path conditions =====

  const handleCreate = () => {
    if (isViewNoHandphone) {
      openDialog(null, "phone");
    }
    if (isMedsos) {
      openDialog(null, "medsos");
    }
    if (isGMaps) {
      openDialog(null, "gmaps");
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {isCompletePorductivity && (
          <Link href={"/dashboard-laporan/pemenuhan-target"}>
            <Button className="h-[30px] px-2 lg:px-3">
              <ArrowLeft className=" h-4 w-4 mr-1" />
              Kembali
            </Button>
          </Link>
        )}

        {/* view no handphone */}
        {isViewNoHandphone && (
          <div className="flex justify-center gap-5">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Kota Go</Label>
              <Input
                className="h-8 w-[150px] lg:w-[250px]"
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Sekretariat</Label>
              <Input
                className="h-8 w-[150px] lg:w-[250px]"
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>
        )}
        {/* view no handphone */}
        {/* Update Input to handle global filtering */}
        <Input
          placeholder="Search all data..."
          value={globalFilterValue}
          onChange={(event) => table.setGlobalFilter(event.target.value)} // Set global filter
          className={`h-8 w-[150px] lg:w-[250px] ${
            isViewNoHandphone ? "hidden" : ""
          }`}
        />

        {(isMedsos || isGMaps) && <Combobox items={items} />}

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

        {/* create button */}
        {(isViewNoHandphone || isMedsos || isGMaps) && (
          <Fragment>
            <Button
              onClick={handleCreate}
              variant="default"
              className={`h-8 px-2 lg:px-3 ${isViewNoHandphone ? "mt-4" : ""}`}
            >
              Tambah Data
              <Plus className="ml-2 h-4 w-4" />
            </Button>
          </Fragment>
        )}
        {/* create button */}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
