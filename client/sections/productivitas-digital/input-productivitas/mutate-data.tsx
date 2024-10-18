"use client";
import React from "react";
import TOCWrapper from "./tree/toc";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/custom/date-picker";
import { Textarea } from "@/components/ui/textarea";
import { DataTable } from "@/components/custom/data-table";
import { columns } from "./table/columns";
import productivitas from "@/constants/productivitas-digital/input-productivitas/productivitas.json";
import {
  Productivitas,
  ProductivitasSchema,
} from "@/constants/productivitas-digital/input-productivitas/data";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const ProductivitasActions = () => {
  // const validatedData = productivitas.data.map((item) => {
  //   // Convert string date to Date object
  //   if (typeof item.date === "string") {
  //     item.date = new Date(item.date);
  //   }

  //   // Validate data using Zod schema
  //   return ProductivitasSchema.parse(item);
  // });

  const form = useForm<Productivitas>({
    resolver: zodResolver(ProductivitasSchema),
  });

  const onSubmit = (data: Productivitas) => {
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="p-3">
                <div className="flex gap-3 mx-auto">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="grid w-full max-w-lg items-center gap-1.5">
                        <FormLabel htmlFor="kota">Kota</FormLabel>
                        <FormControl>
                          <Input id="kota" placeholder="Kota" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="sekretariat"
                    render={({ field }) => (
                      <FormItem className="grid w-full max-w-lg items-center gap-1.5">
                        <FormLabel htmlFor="sekretariat">Sekretariat</FormLabel>
                        <FormControl>
                          <Input
                            id="sekretariat"
                            placeholder="Sekretariat"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="grid w-full max-w-lg items-center gap-1.5">
                        <FormLabel htmlFor="date">Tanggal</FormLabel>
                        <FormControl>
                          <DatePicker
                            value={field.value}
                            onChange={(date: Date | undefined) =>
                              field.onChange(date)
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mt-3 border rounded-md grid grid-cols-5 px-1 h-[570px]">
                  <div className="col-span-1 p-3 border-r">
                    <FormField
                      control={form.control}
                      name="link"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Input Link Productivitas</FormLabel>
                          <FormControl>
                            <Textarea className="h-[93%]" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="col-span-4 p-3">
                    <p className="text-sm mb-3">Daftar Productivitas</p>
                    <DataTable columns={columns} data={productivitas.data} />
                  </div>
                </div>
              </CardContent>
              <Separator />
              <CardFooter className="flex justify-end mt-3 -mb-2">
                <Button
                  type="submit"
                  onClick={() => {
                    handleCheckBeforeSubmit();
                  }}
                >
                  Simpan Data
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default ProductivitasActions;
