"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";
import useDialogStore from "@/hooks/use-dialog";
import { usePathname, useRouter } from "next/navigation";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Separator } from "@/components/ui/separator";
import { Delete, Pencil, ScanSearch } from "lucide-react";

interface DataTableProps<TData extends { id?: string }, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData & { id?: string }, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const pathname = usePathname();
  console.log("current path", pathname);
  const router = useRouter();
  const { openDialog } = useDialogStore();

  const pathConditions = {
    isSekretariat: pathname === "/gedung",
    isNoHandphone: pathname === "/aset-digital/nomor-telepon",
    isMedsos: pathname === "/aset-digital/media-sosial",
    isGMaps: pathname === "/aset-digital/google-maps",
    // Add more conditions as needed
  };

  // You can now access the conditions like this:
  const { isSekretariat, isNoHandphone, isMedsos, isGMaps } = pathConditions;

  const handleRowDoubleClick = (rowId: string) => {
    console.log(rowId);
    openDialog(rowId, "sekretariat");
  };

  const handleViews = (rowId: string) => {
    console.log(rowId);
    router.push(`/aset-digital/nomor-telepon/${rowId}`);
  };

  const handleEdit = (rowId: string) => {
    console.log(rowId);
    if (isNoHandphone) {
      openDialog(rowId, "edit phone");
    }
    if (isMedsos) {
      openDialog(null, "edit medsos");
    }
    if (isGMaps) {
      openDialog(null, "edit gmaps");
    }
  };

  const handleDelete = (rowId: string) => {
    console.log(rowId);
  };

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
    globalFilterFn: "includesString", // Set global filter function
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-4">
      <DataTableToolbar table={table} />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <React.Fragment key={row.id}>
                  {isNoHandphone || isMedsos || isGMaps ? ( // Aktifkan ContextMenu hanya jika pathname cocok
                    <ContextMenu>
                      <ContextMenuTrigger asChild>
                        <TableRow
                          className="transition hover:cursor-pointer hover:bg-muted"
                          data-state={row.getIsSelected() && "selected"}
                        >
                          {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuLabel>Actions</ContextMenuLabel>
                        <Separator />
                        <ContextMenuItem
                          className={`${isMedsos || isGMaps ? "hidden" : ""}`}
                          onClick={() => handleViews(row.original.id!)}
                        >
                          View
                          <ContextMenuShortcut>
                            <ScanSearch size={20} />
                          </ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem
                          onClick={() => handleEdit(row.original.id!)}
                        >
                          Edit
                          <ContextMenuShortcut>
                            <Pencil size={17} />
                          </ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem
                          onClick={() => handleDelete(row.original.id!)}
                        >
                          Hapus
                          <ContextMenuShortcut>
                            <Delete size={17} />
                          </ContextMenuShortcut>
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
                  ) : (
                    <TableRow
                      className="transition hover:cursor-pointer hover:bg-muted"
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      {...(isSekretariat
                        ? {
                            onDoubleClick: () =>
                              handleRowDoubleClick(row.original.id!),
                          }
                        : {})}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  )}
                </React.Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
