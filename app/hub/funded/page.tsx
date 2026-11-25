import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recently Funded",
  description: "Software tools and projects that recently secured funding.",
};

export default function FundedPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Recently Funded</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Tools that recently secured funding or investment.
      </p>
    </main>
  );
}
