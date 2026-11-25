import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Builders",
  description: "Resources for developers and builders of software on the platform.",
};

export default function BuildersPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">For Builders</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Resources for developers and builders of software on the platform.
      </p>
    </main>
  );
}
