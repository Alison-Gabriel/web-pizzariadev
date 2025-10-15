import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

import { api } from "@/lib/axios";
import { getCookieServer } from "@/lib/cookie-server";

export const middleware = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/_next") || pathname === "/") {
    return NextResponse.next();
  }

  const token = await getCookieServer();

  if (pathname.startsWith("/dashboard")) {
    if (!token) return NextResponse.redirect(new URL("/", req.url));

    const isValidToken = await validateToken(token);

    if (!isValidToken) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
};

const validateToken = async (token: string) => {
  if (!token) return false;

  try {
    await api.get("/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return false;
    }
    return false;
  }
};
