"use server";

import axios from "axios";

import { api } from "@/lib/axios";
import { getCookieServer } from "@/lib/cookie-server";
import { ErrorResponse } from "@/types/api";
import { CategoryResponse } from "@/types/api";

interface GetCategoriesResponse {
  data?: CategoryResponse[];
  error?: Omit<ErrorResponse, "status">;
}

export const getCategories = async (): Promise<GetCategoriesResponse> => {
  const token = await getCookieServer();
  if (!token) {
    return {
      error: { message: "Usuario nao autenticado." },
    };
  }

  try {
    const { data: categories } = await api.get<CategoryResponse[]>(
      "/categories",
      { headers: { Authorization: `Bearer ${token}` } },
    );
    return { data: categories as CategoryResponse[] };
  } catch (error) {
    if (axios.isAxiosError<ErrorResponse>(error) && error.response?.data) {
      return {
        error: { message: error.response.data.message },
      };
    }
    return {
      error: {
        message: "Um erro inesperado aconteceu, tente novamente.",
      },
    };
  }
};
