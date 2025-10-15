"use server";

import axios from "axios";
import { cookies } from "next/headers";

import { api } from "@/lib/axios";
import { AuthApiResponse } from "@/types/api/auth.type";
import { ErrorApiResponse } from "@/types/api/error.type";
import { AuthSchema, authSchema } from "@/types/schemas/auth.schema";

export const authenticateUser = async (data: AuthSchema) => {
  const result = authSchema.safeParse(data);
  if (!result.success) {
    return { error: "Dados inválidos" };
  }

  try {
    const { data: authUser } = await api.post<AuthApiResponse>("/auth", {
      email: result.data.email,
      password: result.data.password,
    });

    const expressTime = 60 * 60 * 24 * 30;
    const cookieStore = await cookies();

    cookieStore.set("user-session", authUser.token, {
      maxAge: expressTime,
      path: "/",
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
    });

    return { data: authUser };
  } catch (error) {
    if (axios.isAxiosError<ErrorApiResponse>(error)) {
      return { error: error.response?.data.error };
    }
    return { error: "Um erro inesperado aconteceu, tente novamente." };
  }
};
