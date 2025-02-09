import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import type React from "react"; // Import React

export const metadata: Metadata = {
  title: "Tobias Burman",
  description:
    "Tobias Burman Frontend UI/UX Developer Personal Website Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
