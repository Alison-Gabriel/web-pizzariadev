"use server";

import axios from "axios";

import { api } from "@/lib/axios";
import { getCookieServer } from "@/lib/cookie-server";
import { CategoryResponse, ErrorResponse } from "@/types/api";
import { NewCategorySchema, newCategorySchema } from "@/types/schemas/category";

interface CreateCategoryResponse {
  data?: CategoryResponse;
  error?: Omit<ErrorResponse, "status">;
}

export const createCategory = async (
  data: NewCategorySchema,
): Promise<CreateCategoryResponse> => {
  const token = await getCookieServer();
  if (!token) {
    return {
      error: { message: "Usuario nao autenticado." },
    };
  }

  const { success } = newCategorySchema.safeParse(data);
  if (!success) {
    return {
      error: { message: "Os dados fornecidos nao atendem ao esperado." },
    };
  }

  try {
    const { data: category } = await api.post<CategoryResponse>(
      "/category",
      data,
      { headers: { Authorization: `Bearer ${token}` } },
    );
    return { data: category };
  } catch (error) {
    if (axios.isAxiosError<ErrorResponse>(error) && error.response?.data) {
      return {
        error: { message: error.response.data.message },
      };
    }
    return {
      error: {
        message: "Um erro inesperado aconteceu, tente novamente ",
      },
    };
  }
};
