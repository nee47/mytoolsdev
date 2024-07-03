import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/dark-mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-12">
      <div className=" flex flex-col items-center">
        <h1 className="text-6xl">SATOOLS</h1>
        <p className="text-xl">The simplest way to save your online tools</p>
        <Button>CLICK ME</Button>
        <ModeToggle></ModeToggle>
      </div>
    </main>
  );
}
