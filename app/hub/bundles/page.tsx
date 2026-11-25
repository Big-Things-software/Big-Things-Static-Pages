import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curated Software Packs",
  description: "Browse curated bundles and packs of software tools.",
};

export default function BundlesPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Curated Software Packs</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Explore hand-picked packs of software bundled together for common use cases.
      </p>
    </main>
  );
}
