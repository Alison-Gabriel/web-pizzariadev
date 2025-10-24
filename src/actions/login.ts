"use server";

import axios from "axios";
import { cookies } from "next/headers";

import { COOKIE_EXPIRATION_TIME } from "@/constants/cookie";
import { api } from "@/lib/axios";
import { LoginResponse } from "@/types/api";
import { ErrorResponse } from "@/types/api";
import { LoginSchema, loginSchema } from "@/types/schemas/authentication";

interface LoginResponseData {
  data?: LoginResponse;
  error?: ErrorResponse;
}

export const login = async (data: LoginSchema): Promise<LoginResponseData> => {
  const { success } = loginSchema.safeParse(data);
  if (!success) {
    return {
      error: {
        message: "Os dados fornecidos nao atendem ao esperado.",
      },
    };
  }

  try {
    const { data: user } = await api.post<LoginResponse>("/auth", data);

    const cookieStore = await cookies();
    cookieStore.set("session", user.token, {
      maxAge: COOKIE_EXPIRATION_TIME,
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    return { data: user };
  } catch (error) {
    if (axios.isAxiosError<ErrorResponse>(error) && error.response?.data) {
      return {
        error: { message: error.response.data.message },
      };
    }
    return {
      error: {
        message: "Erro inesperado ao fazer login.",
      },
    };
  }
};
