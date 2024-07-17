import RegisterForm from "@/components/register-form";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default function page() {
  if (getSession()) redirect("/");

  return (
    <div className="w-[350px] m-auto">
      <RegisterForm />
    </div>
  );
}
