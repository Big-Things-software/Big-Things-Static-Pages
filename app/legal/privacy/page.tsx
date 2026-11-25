import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Big Things collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        How Big Things collects, uses, and protects your data.
      </p>
    </main>
  );
}
