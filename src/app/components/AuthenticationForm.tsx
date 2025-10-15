"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { authenticateUser } from "@/actions/authenticate-user";
import { AuthSchema, authSchema } from "@/types/schemas/auth.schema";

import { Button } from "./Button";
import { Input } from "./Input";

export const AuthenticationForm = () => {
  const { push } = useRouter();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const authenticate = async (data: AuthSchema) => {
    try {
      const { data: authUser, error } = await authenticateUser(data);

      if (!!error) {
        throw new Error(error);
      } else if (!authUser || !authUser.token) {
        return;
      }

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
      onSubmit={handleSubmit(authenticate)}
      className="flex w-full flex-col gap-3"
    >
      <Input.Root>
        <Input.Label htmlFor="email">E-mail</Input.Label>
        <Input.Field
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        {errors.email?.message && (
          <Input.Error>{errors.email.message}</Input.Error>
        )}
      </Input.Root>

      <Input.Root>
        <Input.Label htmlFor="password">Senha</Input.Label>
        <Input.Field
          id="password"
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
