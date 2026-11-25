import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with the Big Things platform and its tools.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Support</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Get help with the Big Things platform and its tools.
      </p>
    </main>
  );
}
