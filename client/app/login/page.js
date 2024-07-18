import LoginForm from "@/components/login-form";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default function page() {
  if (getSession()) redirect("/");

  return (
    <div className="flex flex-col items-center gap-y-6">
      <h1>LOGIN</h1>
      <div className="w-[350px] p-6 m-auto border-2  rounded-md ">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
