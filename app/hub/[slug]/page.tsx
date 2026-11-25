import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Individual Software Store Page",
  description: "Software details and store page for a single tool.",
};

export default function SoftwarePage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Software Store</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Details for a single software tool from the Hub catalog.
      </p>
    </main>
  );
}
