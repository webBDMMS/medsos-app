import { z } from "zod";

// Zod schema
export const SekretariatSchema = z.object({
  id: z.number(),
  id_unit: z.number(),
  pj_pusat: z.number(),
  id_cabang: z.number(),
  cabang: z.string(),
  id_kota: z.number(),
  kota: z.string(),
  unit: z.string(),
  nama_gedung: z.string(),
  is_sekretariat: z.string().nullable(), // Updated to reflect the null value
  id_pj_cabang: z.string(),
  nama_pj_cabang: z.string(),
  updated_at: z.string().nullable(), // Updated to reflect the null value
  created_at: z.string().nullable(), // Updated to reflect the null value
  alamat: z.string(),
  instagram: z.string().nullable(), // Updated to reflect the null value
  url_google_maps: z.string().nullable(), // Updated to reflect the null value
});

export type TypeSekretariat = z.infer<typeof SekretariatSchema>;


export const secretariatSchema = z.object({
  id: z.string().optional(),
  secretariat: z.string().min(1),
  coverage_level: z.string(),
  address: z.string().min(1),
  google_maps: z.string().url(),
  instagram_account: z.string().url(),
  no_halo: z.string(),
  fix_phone: z.string(),
});

export type Secretariat = z.infer<typeof secretariatSchema>;