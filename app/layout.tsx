import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"], // 400 is Normal, 600 is Semibold
  variable: "--font-montserrat", // Optional: Used if you use Tailwind CSS
});

export const metadata: Metadata = {
  title: "Big Things",
  description: "Empowering Open Source Innovation Via Funding and exposure.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
