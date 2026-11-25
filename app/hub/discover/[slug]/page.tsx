import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Individual Article",
  description: "Full text of a single article from Discover.",
};

export default function ArticlePage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Article</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        An individual article published via Sanity.
      </p>
    </main>
  );
}
