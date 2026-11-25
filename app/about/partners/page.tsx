import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partners",
  description: "Organizations and sponsors in partnership with Big Things.",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Partners</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Organizations and sponsors in partnership with Big Things.
      </p>
    </main>
  );
}
