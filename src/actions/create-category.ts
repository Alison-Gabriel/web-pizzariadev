"use server";

import axios from "axios";

import { api } from "@/lib/axios";
import { getCookieServer } from "@/lib/cookie-server";
import { CategoryResponse, ErrorResponse } from "@/types/api";
import { NewCategorySchema, newCategorySchema } from "@/types/schemas/category";

interface CreateCategoryResponse {
  data?: CategoryResponse;
  error?: ErrorResponse;
}

export const createCategory = async (
  data: NewCategorySchema,
): Promise<CreateCategoryResponse> => {
  const token = await getCookieServer();
  if (!token) {
    return {
      error: { message: "Usuario nao autenticado." } as ErrorResponse,
    };
  }

  const result = newCategorySchema.safeParse(data);
  if (!result.success) {
    return {
      error: { message: "Nome da categoria inválido" } as ErrorResponse,
    };
  }

  try {
    const { data: newlyCreatedCategory } = await api.post<CategoryResponse>(
      "/category",
      data,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    return { data: newlyCreatedCategory };
  } catch (error) {
    if (axios.isAxiosError<ErrorResponse>(error)) {
      return {
        error: { message: error.response?.data.message } as ErrorResponse,
      };
    }
    return {
      error: {
        message: "Um erro inesperado aconteceu, tente novamente ",
      } as ErrorResponse,
    };
  }
};
