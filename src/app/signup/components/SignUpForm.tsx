"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { signUp } from "@/actions/signup";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { SignUpSchema, signUpSchema } from "@/types/schemas/auth.schema";

export const SignUpForm = () => {
  const { push } = useRouter();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSignUp = async (data: SignUpSchema) => {
    try {
      const { data: user, error } = await signUp(data);

      if (error && !user) throw new Error(error.message);

      toast.success("Conta criada com sucesso!");
      push("/");
    } catch (error) {
      if (error instanceof Error) {
        setError("email", { message: error.message }, { shouldFocus: true });
        setError("password", { message: error.message });

        toast.error(error.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleSignUp)}
      className="flex w-full flex-col gap-3"
    >
      <Input.Root>
        <Input.Field
          type="text"
          placeholder="Digite seu nome completo"
          {...register("name")}
        />
        {errors.name?.message && (
          <Input.Error>{errors.name.message}</Input.Error>
        )}
      </Input.Root>

      <Input.Root>
        <Input.Field
          type="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        {errors.email?.message && (
          <Input.Error>{errors.email.message}</Input.Error>
        )}
      </Input.Root>

      <Input.Root>
        <Input.Field
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password?.message && (
          <Input.Error>{errors.password.message}</Input.Error>
        )}
      </Input.Root>

      <Button.Root>
        {isSubmitting && (
          <Button.Icon className="size-4 animate-spin" icon={Loader2} />
        )}
        <Button.Content>Cadastrar</Button.Content>
      </Button.Root>
    </form>
  );
};
