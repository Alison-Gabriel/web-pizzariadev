import z from "zod";

export const loginSchema = z.object({
  email: z
    .email("Digite um e-mail válido.")
    .min(1, { error: "O e-mail não pode ser vazio." }),
  password: z
    .string("Digite uma senha válida")
    .min(6, { error: "Digite uma senha forte." }),
});

export const signUpSchema = z.object({
  name: z
    .string("Digite um nome válido.")
    .min(1, { error: "O nome não pode ser vazio." }),
  email: z
    .email("Digite um e-mail válido.")
    .min(1, { error: "O e-mail não pode ser vazio." }),
  password: z
    .string("Digite uma senha válida")
    .min(6, { error: "Digite uma senha forte." }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type SignUpSchema = z.infer<typeof signUpSchema>;
