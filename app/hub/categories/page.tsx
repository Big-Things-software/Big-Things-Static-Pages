import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse by Topic",
  description: "Browse software tools by topic or category.",
};

export default function CategoriesPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Browse by Topic</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Filter the software directory by topic or category.
      </p>
    </main>
  );
}
