"use server";

import axios from "axios";
import { cookies } from "next/headers";

import { api } from "@/lib/axios";
import { LoginResponse } from "@/types/api";
import { ErrorResponse } from "@/types/api";
import { LoginSchema, loginSchema } from "@/types/schemas/auth.schema";

export const login = async (data: LoginSchema) => {
  const result = loginSchema.safeParse(data);

  if (!result.success) {
    return { error: { message: "E-mail ou senha inválidos" } as ErrorResponse };
  }

  try {
    const { data: authUser } = await api.post<LoginResponse>("/auth", {
      email: result.data.email,
      password: result.data.password,
    });

    const expressTime = 60 * 60 * 24 * 30;
    const cookieStore = await cookies();

    cookieStore.set("session", authUser.token, {
      maxAge: expressTime,
      path: "/",
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
    });

    return { data: authUser };
  } catch (error) {
    if (axios.isAxiosError<ErrorResponse>(error)) {
      return {
        error: { message: error.response?.data.message } as ErrorResponse,
      };
    }

    return {
      error: {
        message: "Um erro inesperado aconteceu, tente novamente.",
      } as ErrorResponse,
    };
  }
};
