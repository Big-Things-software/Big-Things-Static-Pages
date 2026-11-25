import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transparency & Financials",
  description: "Financials, funding sources, and transparency reports.",
};

export default function TransparencyPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Transparency &amp; Financials</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Our financials, funding sources, and transparency reports.
      </p>
    </main>
  );
}
