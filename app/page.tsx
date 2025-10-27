import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-4xl font-bold">DevOps Exams Number One !!</h1>
        <p className="mt-4 text-lg">
          If you see this page, the Next.js app is successfully running.
        </p>
      </main>
    </div>
  );
}
