"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { authenticateUser } from "@/actions/authenticate-user";
import { AuthSchema, authSchema } from "@/types/schemas/auth.schema";

export const AuthenticationForm = () => {
  const { push } = useRouter();

  const { handleSubmit, register, setError } = useForm<AuthSchema>({
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
      className="flex w-full flex-col gap-3 text-lg"
    >
      <input
        type="email"
        placeholder="Digite seu e-mail"
        {...register("email")}
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        {...register("password")}
      />
      <button type="submit">Acessar</button>
    </form>
  );
};
