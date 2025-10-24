import z from "zod";

export const imageAllowedTypes = ["image/jpeg", "image/png"];

export const productSchema = z.object({
  category: z.string().nonempty({ error: "A categoria e obrigatoria." }),
  name: z.string().nonempty({ error: "O nome e obrigatorio." }),
  price: z.string().nonempty({ error: "O preco e obrigatorio." }),
  description: z.string().nonempty({ error: "A descricao e obrigatoria." }),
  image: z
    .instanceof(File, { error: "Envie um arquivo de imagem valido." })
    .nonoptional({ error: "A imagem e obrigatoria." })
    .refine((file) => file && imageAllowedTypes.includes(file.type), {
      error: "Apenas arquivos de imagem PNG e JPEG sao permitidos.",
    }),
});

export type ProductSchema = z.infer<typeof productSchema>;
