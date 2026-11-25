import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides & Playbooks",
  description: "Guides and playbooks to help you use the software tools.",
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Guides &amp; Playbooks</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Longer-form guides and playbooks for using the software in this catalog.
      </p>
    </main>
  );
}
