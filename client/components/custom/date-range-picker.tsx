/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
// import { id } from "date-fns/locale"; // Indonesian locale
import { DateRange } from "react-day-picker";
import { useState } from "react";

interface DatePickerWithRangeProps {
  form: ReturnType<typeof useForm<any>>;
  fieldName: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function DatePickerWithRange({
  form,
  fieldName,
  placeholder,
  disabled,
  className,
}: DatePickerWithRangeProps) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name={fieldName as any}
        render={({ field }) => (
          <FormItem>
            <Popover>
              <FormLabel>{placeholder}</FormLabel>
              <FormControl>
                <div className={cn("grid gap-2", className)}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        disabled={disabled}
                        id="date"
                        variant={"outline"}
                        className={cn(
                          "w-[300px] h-10 justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "LLL dd, y")} -{" "}
                              {format(date.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={(newDate) => {
                          setDate(newDate);
                          // Update form field value when date changes
                          field.onChange(newDate); // Inform react-hook-form about the change
                        }}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </FormControl>
              <FormMessage />
            </Popover>
          </FormItem>
        )}
      />
    </Form>
  );
}
