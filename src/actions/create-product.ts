"use server";

import axios from "axios";

import { api } from "@/lib/axios";
import { getCookieServer } from "@/lib/cookie-server";
import { ErrorResponse, ProductResponse } from "@/types/api";
import { ProductSchema, productSchema } from "@/types/schemas/product";

interface CreateProductResponse {
  data?: ProductResponse;
  error?: Omit<ErrorResponse, "status">;
}

export const createProduct = async (
  data: ProductSchema,
): Promise<CreateProductResponse> => {
  const token = await getCookieServer();
  if (!token) {
    return { error: { message: "Usuario nao autenticado." } };
  }

  const { success } = productSchema.safeParse(data);
  if (!success) {
    return {
      error: { message: "Os dados fornecidos nao atendem ao esperado." },
    };
  }

  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("price", data.price);
  formData.append("description", data.description);
  formData.append("category_id", data.category);
  formData.append("file", data.image);

  try {
    const { data: product } = await api.post<ProductResponse>(
      "/product",
      formData,
      { headers: { Authorization: `Bearer ${token}` } },
    );

    return { data: product };
  } catch (error) {
    if (axios.isAxiosError<ErrorResponse>(error) && error.response?.data) {
      return {
        error: { message: error.response.data.message },
      };
    }
    return {
      error: { message: "Erro inesperado ao criar produto." },
    };
  }
};
