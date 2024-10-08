import Hero from "@/components/hero";
import { getSession } from "@/lib/session";

export default async function Home({ basicData }) {
  const authenticated = false;
  const token = getSession();

  return (
    <main className="flex min-h-screen  flex-col items-center justify-between p-12 gap-y-10">
      <div className=" flex flex-col items-center">
        <h1 className="text-6xl">SATOOV</h1>
        <p className="text-xl">
          The simplest way to save and explore online tools
        </p>
      </div>

      <Hero></Hero>
    </main>
  );
}
