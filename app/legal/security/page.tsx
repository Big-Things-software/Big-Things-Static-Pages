import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security",
  description: "Our security policies and practices.",
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Security</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Our security policies and practices.
      </p>
    </main>
  );
}
