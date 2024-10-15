"use client";
import { ComboboxForm } from "@/components/custom/combobox-form";
import { DatePickerWithRange } from "@/components/custom/date-range-picker";
import { Button } from "@/components/ui/button";
import { CreateMedsos, CreateMedsosSchema } from "@/constants/media-sosial/data";
import { KotaGO, SekretariatList } from "@/constants/nomor-telphone/data";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const VerfikasiActions = () => {
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
    <div>
      <div className="flex gap-3">
        <div>
          <ComboboxForm
            form={form}
            label="Kota Go"
            items={KotaGO}
            fieldName={"city"}
            placeholder={"select..."}
          />
          <ComboboxForm
            form={form}
            label="Sekretariat"
            items={SekretariatList}
            fieldName={"sekretariat"}
            placeholder={"select..."}
          />
          <ComboboxForm
            form={form}
            label="Sekretariat"
            items={SekretariatList}
            fieldName={"sekretariat"}
            placeholder={"select..."}
          />
        </div>
        <div>
          <ComboboxForm
            form={form}
            label="Sekretariat"
            items={SekretariatList}
            fieldName={"sekretariat"}
            placeholder={"select..."}
          />
          <DatePickerWithRange
            form={form}
            fieldName="dateRange"
            placeholder="Pick a date range"
          />
          <Button
            onClick={() => {
              handleCheckBeforeSubmit(); // Log values before submit
              form.handleSubmit(onSubmit)(); // Proceed with submit
            }}
          >
            Simpan Data
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default VerfikasiActions;
