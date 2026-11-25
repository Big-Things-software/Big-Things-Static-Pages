import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Kit",
  description: "Media assets, logos, and press materials for journalists.",
};

export default function PressPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Press Kit</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Media assets, logos, and press materials for journalists.
      </p>
    </main>
  );
}
