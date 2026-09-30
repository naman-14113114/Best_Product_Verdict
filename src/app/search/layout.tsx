import type { Metadata } from "next";
export const metadata: Metadata = { title: "Search Buying Guides", robots: { index: false, follow: true } };
export default function SearchLayout({ children }: { children: React.ReactNode }) { return children; }
