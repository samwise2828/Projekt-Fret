import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projekt Fret",
  description: "Learn guitar through an interactive skill-tree journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}