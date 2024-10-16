/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Secretariat } from "@/constants/secretariat/data";
import { DataTableColumnHeader } from "@/components/custom/data-table/data-table-column-header";

export const columns: ColumnDef<Secretariat>[] = [
  {
    accessorKey: "no",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-center w-[30px]"
        column={column}
        title="No"
      />
    ),
    cell: ({ row }: { row: any }) => (
      <div className="w-[30px] text-center">{row.index + 1}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "secretariat",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sekretariat" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("secretariat")}
      </div>
    ),
  },
  {
    accessorKey: "coverage_level",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tingkat Cakupan" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("coverage_level")}
      </div>
    ),
  },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Alamat" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("address")}
      </div>
    ),
  },
  {
    accessorKey: "google_maps",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Titik Google Maps" />
    ),
    cell: ({ row }) => (
      <a target="_blank" href={row.getValue("google_maps")}>
        <div className="max-w-[500px] truncate font-medium cursor-pointer hover:underline">
          <span className="text-primary">{row.getValue("google_maps")}</span>
        </div>
      </a>
    ),
  },
  {
    accessorKey: "instagram_account",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Akun Instagram" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("instagram_account")}
      </div>
    ),
  },
  // {
  //   accessorKey: "no_halo",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Nomor Halo" />
  //   ),
  //   cell: ({ row }) => (
  //     <div className="max-w-[500px] truncate font-medium">
  //       {row.getValue("no_halo")}
  //     </div>
  //   ),
  // },
  {
    accessorKey: "fix_phone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fix Phone" />
    ),
    cell: ({ row }) => {
      const vFixPhone: string | null = row.getValue("fix_phone");
      return (
        <div className="max-w-[500px] truncate font-medium">
          {vFixPhone ? vFixPhone : <span className="text-center">-</span>}
        </div>
      );
    },
  },
];
