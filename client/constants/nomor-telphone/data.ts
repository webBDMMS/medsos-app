import { z } from "zod";

export const NomorSchema = z.object({
  id: z.string().optional(),
  city: z.string().min(1),
  sekretariat: z.string(),
  address_sekretariat: z.string().min(1),
});

export type Nomor = z.infer<typeof NomorSchema>;
