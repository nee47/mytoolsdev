import { Button } from "@/components/ui/button";
import AvatarButton from "@/components/avatar-button";
import { cookies } from "next/headers";

async function getSessionData() {
  const token = cookies().get("token")?.value;
  console.log(`token: ${token}`);
  return token;
}

export default async function Home() {
  const tok = getSessionData();
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-12">
      <div className=" flex flex-col items-center">
        <h1 className="text-6xl">SATOOV</h1>
        <p className="text-xl">The simplest way to save your online tools</p>
        <AvatarButton></AvatarButton>
      </div>

      <div></div>
    </main>
  );
}
