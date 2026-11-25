import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing use of Big Things.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Terms of Service</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        The terms and conditions governing use of Big Things.
      </p>
    </main>
  );
}
