import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Misbehavity Website Foundation",
  description: "Technical foundation for a one-page animated landing website.",
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
