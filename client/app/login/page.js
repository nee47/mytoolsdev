import LoginForm from "@/components/login-form";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default function page() {
  if (getSession()) redirect("/");

  return (
    <div className="w-[350px] p-6 m-auto border-2 rounded-md ">
      <LoginForm></LoginForm>
    </div>
  );
}
