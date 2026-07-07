import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Misbehavity | Build Brands With Moats",
  description:
    "Misbehavity finds your moat and builds a sharper brand out of it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
