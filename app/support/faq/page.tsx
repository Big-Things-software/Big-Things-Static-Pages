import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Big Things.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">FAQ</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Frequently asked questions about Big Things.
      </p>
    </main>
  );
}
