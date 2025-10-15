import z from "zod";

const authSchema = z.object({
  email: z
    .email("Digite um e-mail válido.")
    .min(1, "O e-mail não pode ser vazio."),
  password: z
    .string("Digite uma senha válida")
    .min(6, "Digite uma senha forte."),
});

type AuthSchema = z.infer<typeof authSchema>;

export { type AuthSchema, authSchema };
