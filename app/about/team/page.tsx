import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "The team behind Big Things.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Team</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        The people behind Big Things.
      </p>
    </main>
  );
}
