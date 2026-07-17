import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Projekt Fret",
  description: "A new way to learn guitar.",
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