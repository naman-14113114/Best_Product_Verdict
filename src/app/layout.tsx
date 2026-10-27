import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Script from "next/script";
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
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
        <Script id="microsoft-uet-355062041" strategy="afterInteractive">
          {`(function(w, d, t, u, o) {w[u] = w[u] || [], o.ts = (new Date).getTime();var n = d.createElement(t);n.src = "https://bat.bing.net/bat.js?ti=" + o.ti + ("uetq" != u ? "&q=" + u : ""),n.async = 1, n.onload = n.onreadystatechange = function() {var s = this.readyState;s && "loaded" !== s && "complete" !== s ||(o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad"),n.onload = n.onreadystatechange = null)};var i = d.getElementsByTagName(t)[0];i.parentNode.insertBefore(n, i);})(window, document, "script", "uetq", {ti: "355062041",enableAutoSpaTracking: true});`}
        </Script>
        <script src="/assets/visitor-tracking.js?v=20261018" defer />
      </body>
    </html>
  );
}
