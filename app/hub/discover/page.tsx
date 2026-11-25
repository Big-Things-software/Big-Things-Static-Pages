import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover",
  description: "Blog, spotlights & release notes from the Big Things ecosystem.",
};

export default function DiscoverPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Discover</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Blog posts, spotlights, and release notes published via Sanity.
      </p>
    </main>
  );
}
