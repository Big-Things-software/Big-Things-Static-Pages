import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"], // 400 is Normal, 600 is Semibold
  variable: "--font-montserrat", // Optional: Used if you use Tailwind CSS
});

const seoTitle = "Big Things — Empowering Open Source Innovation";
const seoDescription =
  "Discover open source projects on Big Things. We fund and promote open source innovation, giving developers exposure and support for their projects.";

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  keywords: [
    "open source",
    "open source funding",
    "open source grants",
    "open source projects",
    "support open source",
    "developers",
    "software directory",
    "fund open source",
  ],
  openGraph: {
    type: "website",
    siteName: "Big Things",
    url: "https://bigthingssoftware.org",
    title: seoTitle,
    description: seoDescription,
  },
  twitter: {
    card: "summary",
    title: seoTitle,
    description: seoDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
