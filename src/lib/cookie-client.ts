import { getCookie } from "cookies-next";

const getCookieClient = () => {
  const token = getCookie("user-session");
  return token;
};

export { getCookieClient };
