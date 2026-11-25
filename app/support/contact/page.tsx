import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Big Things team.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Get in touch with the Big Things team.
      </p>
    </main>
  );
}
