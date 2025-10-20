import z from "zod";

export const imageAllowedTypes = ["image/jpeg", "image/png"];

// export const uploadImageSchema = z
//   .instanceof(FileList)
//   .refine((files) => files.length, { error: "A imagem e obrigatoria" })
//   .refine(
//     (files) => files.length && imageAllowedTypes.includes(files[0].type),
//     { error: "Apenas imagens .jpeg e .png sao permitidas" },
//   )
//   .transform((files) => files[0] as File);

export const newProductSchema = z.object({
  category: z.string().nonempty({ error: "A categoria e obrigatoria." }),
  name: z.string().nonempty({ error: "O nome e obrigatorio." }),
  price: z.string().nonempty({ error: "O preco e obrigatorio." }),
  description: z.string().nonempty({ error: "A descricao e obrigatoria." }),
  image: z
    .instanceof(FileList)
    .refine((files) => files.length, { error: "A imagem e obrigatoria" })
    .refine(
      (files) => files.length && imageAllowedTypes.includes(files[0].type),
      { error: "Apenas imagens .jpeg e .png sao permitidas" },
    )
    .transform((files) => files[0] as File),
});

export type NewProductSchema = z.infer<typeof newProductSchema>;
