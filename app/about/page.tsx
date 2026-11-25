import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Our mission and what we do.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Our Mission</h1>
      <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
        Empowering Open Source Innovation Via Funding and exposure.
      </p>
    </main>
  );
}
