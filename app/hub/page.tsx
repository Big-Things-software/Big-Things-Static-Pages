import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse All Software",
  description:
    "The Master Directory & Content Hub — browse all software tools in the Big Things catalog.",
};

export default function HubPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Browse All Software</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Browse the full directory of software tools indexed by Big Things.
      </p>
    </main>
  );
}
