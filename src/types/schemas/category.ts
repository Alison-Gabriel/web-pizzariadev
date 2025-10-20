import z from "zod";

const newCategorySchema = z.object({
  name: z.string("O nome inserido é inválido.").min(1, "O nome é obrigatório."),
});

type NewCategorySchema = z.infer<typeof newCategorySchema>;

export { type NewCategorySchema, newCategorySchema };

export type CategoryProps = {
  id: string;
  name: string;
};
