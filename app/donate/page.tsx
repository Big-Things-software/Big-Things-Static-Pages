import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support the Mission",
  description: "Donate to support Big Things and open source innovation.",
};

export default function DonatePage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Support the Mission</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Donate to support Big Things and open source innovation.
      </p>
    </main>
  );
}
