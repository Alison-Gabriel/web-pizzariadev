"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { authenticateUser } from "@/actions/authenticate-user";
import { AuthSchema, authSchema } from "@/types/schemas/auth.schema";

import { Input } from "./Input";

export const AuthenticationForm = () => {
  const { push } = useRouter();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
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
        <Input.Label inputId="email">E-mail</Input.Label>
        <Input.Field
          id="email"
          type="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        {errors.email?.message && (
          <Input.Error message={errors.email.message} />
        )}
      </Input.Root>

      <Input.Root>
        <Input.Label inputId="password">Senha</Input.Label>
        <Input.Field
          id="password"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        {errors.password?.message && (
          <Input.Error message={errors.password.message} />
        )}
      </Input.Root>

      <button type="submit">Acessar</button>
    </form>
  );
};
