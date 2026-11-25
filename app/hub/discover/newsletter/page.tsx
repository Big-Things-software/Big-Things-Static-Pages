import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter & Archive",
  description: "Weekly newsletter for the software ecosystem, with an archive of past issues.",
};

export default function NewsletterPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Newsletter &amp; Archive</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Newsletter signups and an archive of past issues.
      </p>
    </main>
  );
}
