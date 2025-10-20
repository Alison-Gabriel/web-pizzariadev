import z from "zod";

export const newCategorySchema = z.object({
  name: z
    .string("O nome inserido é inválido.")
    .min(1, { error: "O nome é obrigatório." }),
});

export type NewCategorySchema = z.infer<typeof newCategorySchema>;
