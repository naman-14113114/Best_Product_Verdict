import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Best Product Verdict UK",
    default: "Best Product Verdict | Product Comparisons & Buying Guides UK",
  },
  description:
    "UK-focused product comparisons and buying guides for kitchen thermometers, water flossers and massage guns. Research methods and commercial relationships are disclosed.",
  alternates: { canonical: "https://www.bestproductverdict.com" },
  metadataBase: new URL("https://www.bestproductverdict.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className={`min-h-screen flex flex-col bg-[#f7f9fb] text-slate-900 antialiased font-sans ${rubik.className}`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
