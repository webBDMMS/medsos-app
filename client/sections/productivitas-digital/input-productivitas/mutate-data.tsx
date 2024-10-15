"use client";
import React from "react";
import TOCWrapper from "./tree/toc";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateMedsos,
  CreateMedsosSchema,
} from "@/constants/media-sosial/data";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/custom/date-picker";
import { Textarea } from "@/components/ui/textarea";
import { DataTable } from "@/components/custom/data-table";
import { columns } from "./table/columns";
import productivitas from "@/constants/productivitas-digital/input-productivitas/productivitas.json"
import { ProductivitasSchema } from "@/constants/productivitas-digital/input-productivitas/data";

const ProductivitasActions = () => {
  const validatedData = productivitas.data.map((item) =>
    ProductivitasSchema.parse(item)
  );

  const form = useForm<CreateMedsos>({
    resolver: zodResolver(CreateMedsosSchema),
  });

  const onSubmit = (data: CreateMedsos) => {
    console.log("Data Valid:", JSON.stringify(data));
  };

  // Log valid and invalid values before submitting
  const handleCheckBeforeSubmit = () => {
    const values = form.watch(); // Get current form values
    const errors = form.formState.errors; // Get validation errors

    console.log("Current Form Values:", values); // Log current form values
    console.log("Validation Errors:", errors); // Log errors if any
  };

  return (
    <div className="grid grid-cols-7 h-full">
      <div className="col-span-1 ">
        <TOCWrapper />
      </div>
      <div className="col-span-6 p-3 h-full">
        <Card className="w-full border-primary h-[80dvh]">
          <p className="font-bold my-1 text-center">Input Productivitas</p>
          <Separator />
          <CardContent className="p-3">
            <div className="flex gap-3 mx-auto">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Kota</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Sekretariat</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Tanggall</Label>
                <DatePicker />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Jenis Flatform</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
            </div>
            <div className="mt-3 border rounded-md grid grid-cols-5 px-1 h-[560px]">
              <div className="col-span-1  p-3 border-r">
                <p className="text-sm mb-3">Input Link Productivitas</p>
                <Textarea />
              </div>
              <div className="col-span-4 p-3">
                <p className="text-sm mb-3">Daftar Productivitas</p>
                <DataTable columns={columns} data={validatedData} />
              </div>
            </div>
          </CardContent>
          <Separator />
          <CardFooter className="flex justify-end mt-3 -mb-2">
            <Button
              onClick={() => {
                handleCheckBeforeSubmit(); // Log values before submit
                form.handleSubmit(onSubmit)(); // Proceed with submit
              }}
            >
              Simpan Data
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProductivitasActions;
