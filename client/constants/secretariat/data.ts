import { z } from "zod";

export const secretariatSchema = z.object({
  secretariat: z.string().min(1),
  coverage_level: z.string(),
  address: z.string().min(1),
  google_maps: z.string().url(),
  instagram_account: z.string().url(),
  no_halo: z.string(),
  fix_phone: z.string(),
});

export type Secretariat = z.infer<typeof secretariatSchema>;

export const secretariatData = [
  {
    value: "coverage_level",
    label: "Bandoeng",
  },
];
