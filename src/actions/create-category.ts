"use server";

import axios from "axios";

import { api } from "@/lib/axios";
import { getCookieServer } from "@/lib/cookie-server";
import { ErrorResponse } from "@/types/api";
import {
  NewCategorySchema,
  newCategorySchema,
} from "@/types/schemas/category.schema";

export const createCategory = async (data: NewCategorySchema) => {
  const result = newCategorySchema.safeParse(data);
  if (!result.success) {
    return {
      error: { message: "Nome da categoria inválido" } as ErrorResponse,
    };
  }

  try {
    const token = await getCookieServer();

    const { data: createdCategory } = await api.post("/category", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { data: createdCategory };
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
