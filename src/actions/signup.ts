"use server";

import axios from "axios";

import { api } from "@/lib/axios";
import { ErrorResponse, SignUpResponse } from "@/types/api";
import { SignUpSchema, signUpSchema } from "@/types/schemas/auth.schema";

export const signUp = async (data: SignUpSchema) => {
  const result = signUpSchema.safeParse(data);

  if (!result.success) {
    return {
      error: { message: "Todos os campos são obrigatórios." } as ErrorResponse,
    };
  }

  try {
    const { data: userCreated } = await api.post<SignUpResponse>("/user", {
      name: data.name,
      email: data.email,
      password: data.password,
    });

    return { data: userCreated };
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
