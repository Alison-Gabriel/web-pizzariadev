"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { login } from "@/actions/login";
import { LoginSchema, loginSchema } from "@/types/schemas/auth.schema";

import { Button } from "./Button";
import { Input } from "./Input";

export const LoginForm = () => {
  const { push } = useRouter();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async ({ password, email }: LoginSchema) => {
    try {
      const { data: user, error } = await login({
        password,
        email,
      });

      if (error) throw new Error(error.message);
      if (!user || !user.token) return;

      push("/dashboard");
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
      onSubmit={handleSubmit(handleLogin)}
      className="flex w-full flex-col gap-3"
    >
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
        <Button.Content>Acessar</Button.Content>
      </Button.Root>
    </form>
  );
};
