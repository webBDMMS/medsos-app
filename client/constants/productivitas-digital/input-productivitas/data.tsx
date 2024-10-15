import { z } from "zod";

export const ProductivitasSchema = z.object({
  id: z.string().optional(),
  sekretariat: z.string(),
  date: z.string(),
  platform: z.string().min(1),
  link: z.string().min(1),
});

export type Productivitas = z.infer<typeof ProductivitasSchema>;
