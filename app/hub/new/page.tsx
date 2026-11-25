import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New & Noteworthy",
  description: "Recently added software tools and standout releases.",
};

export default function NewPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">New &amp; Noteworthy</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Newly added tools and recent standout releases in the catalog.
      </p>
    </main>
  );
}
