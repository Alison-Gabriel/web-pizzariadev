"use server";

import { cookies } from "next/headers";

const getCookieServer = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  return token || null;
};

export { getCookieServer };
