"use server";

import axios from "axios";

import { api } from "@/lib/axios";
import { getCookieServer } from "@/lib/cookie-server";
import { ErrorResponse, OrderResponse } from "@/types/api";

interface GetOrdersResponse {
  data?: OrderResponse[];
  error?: ErrorResponse;
}

export const getOrders = async (): Promise<GetOrdersResponse> => {
  const token = await getCookieServer();
  if (!token) {
    return {
      error: { message: "Usuario nao autenticado." },
    };
  }

  try {
    const { data: orders } = await api.get<OrderResponse[]>("/orders", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return { data: orders || [] };
  } catch (error) {
    if (axios.isAxiosError<ErrorResponse>(error) && error.response?.data) {
      return {
        error: { message: error.response.data.message },
      };
    }
    return {
      error: {
        message: "Erro inesperado ao buscar pedidos",
      },
    };
  }
};
