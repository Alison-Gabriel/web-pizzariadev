import z from "zod";

const loginSchema = z.object({
  email: z
    .email("Digite um e-mail válido.")
    .min(1, "O e-mail não pode ser vazio."),
  password: z
    .string("Digite uma senha válida")
    .min(6, "Digite uma senha forte."),
});

type LoginSchema = z.infer<typeof loginSchema>;

export { type LoginSchema, loginSchema };

const signUpSchema = z.object({
  name: z.string("Digite um nome válido.").min(1, "O nome não pode ser vazio."),
  email: z
    .email("Digite um e-mail válido.")
    .min(1, "O e-mail não pode ser vazio."),
  password: z
    .string("Digite uma senha válida")
    .min(6, "Digite uma senha forte."),
});

type SignUpSchema = z.infer<typeof signUpSchema>;

export { type SignUpSchema, signUpSchema };
