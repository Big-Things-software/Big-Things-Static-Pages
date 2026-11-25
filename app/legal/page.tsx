import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
  description: "Legal notices: privacy, terms, and security policies.",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <h1 className="text-3xl font-semibold">Legal</h1>
      <ul className="mt-4 space-y-2 text-zinc-600 dark:text-zinc-400">
        <li>
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/terms" className="underline">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="/security" className="underline">
            Security
          </a>
        </li>
      </ul>
    </main>
  );
}
