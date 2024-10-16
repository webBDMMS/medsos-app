/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/custom/data-table/data-table-column-header";
import { VerifikasiMedsos } from "@/constants/productivitas-digital/verifikasi-productivitas/data";

export const columnsMedsos: ColumnDef<VerifikasiMedsos>[] = [
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
    accessorKey: "city",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-center"
        column={column}
        title="city"
      />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("city")}
      </div>
    ),
  },
  {
    accessorKey: "account",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-center"
        column={column}
        title="Akun"
      />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("account")}
      </div>
    ),
  },
  {
    accessorKey: "school_year",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-center"
        column={column}
        title="school year"
      />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("school_year")}
      </div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-center"
        column={column}
        title="Date"
      />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("date")}
      </div>
    ),
  },
  {
    accessorKey: "link",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-center"
        column={column}
        title="Link"
      />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        <a href={row.getValue("link")}>{row.getValue("link")}</a>
      </div>
    ),
  },
  {
    accessorKey: "platform",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-center"
        column={column}
        title="Platform"
      />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("platform")}
      </div>
    ),
  },
  {
    accessorKey: "status_productivity",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-center"
        column={column}
        title="status productivity"
      />
    ),
    cell: ({ row }) => (
      <div className="max-w-[500px] truncate font-medium">
        {row.getValue("status_productivity")}
      </div>
    ),
  },
  {
    accessorKey: "informations",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-center"
        column={column}
        title="Informations"
      />
    ),
    cell: ({ row }) => {
      const val: string = row.getValue("informations");
      return (
        <div className="max-w-[500px] truncate font-medium">
          {val && val.length > 0 ? val : "-"}
        </div>
      );
    },
  },
];
