import { cookies } from "next/headers";

export const getSession = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  return !!token;
};
