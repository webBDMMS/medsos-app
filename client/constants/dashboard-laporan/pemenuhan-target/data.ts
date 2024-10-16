import { z } from "zod";

export const PemenuhanSchema = z.object({
  id: z.string().optional(),
  branch: z.string().min(1),
  account_name: z.string(),
  number_of_publication: z.string().min(1),
  phone: z.string().min(1),
});

export type Pemenuhan = z.infer<typeof PemenuhanSchema>;
