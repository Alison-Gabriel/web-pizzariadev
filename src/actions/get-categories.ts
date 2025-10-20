"use server";

import axios from "axios";

import { api } from "@/lib/axios";
import { getCookieServer } from "@/lib/cookie-server";
import { ErrorResponse } from "@/types/api";
import { CategoryProps } from "@/types/schemas/category";

interface GetCategoriesResponse {
  data?: CategoryProps[];
  error?: ErrorResponse;
}

export const getCategories = async (): Promise<GetCategoriesResponse> => {
  const token = await getCookieServer();

  try {
    const { data: categories } = await api.get<CategoryProps[]>("/categories", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { data: categories as CategoryProps[] };
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
