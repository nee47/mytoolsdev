import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-900 flex-col items-center justify-between p-12">
      <div className="text-white flex flex-col items-center">
        <h1 className="text-6xl">SATOOLS</h1>
        <p className="text-xl">The simplest way to save your online tools</p>
      </div>
    </main>
  );
}
