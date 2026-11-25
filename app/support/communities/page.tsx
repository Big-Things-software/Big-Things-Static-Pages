import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Communities",
  description: "Resources and channels for the software communities around the platform.",
};

export default function CommunitiesPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">For Communities</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Resources and channels for the software communities around the platform.
      </p>
    </main>
  );
}
