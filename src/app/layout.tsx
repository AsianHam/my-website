import type { Metadata } from "next";
import "./globals.css";
import { HorizontalNavBar } from "@/components/horizontal-nav-bar";

export const metadata: Metadata = {
  title: "Abraham Oh Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-shark">
        <HorizontalNavBar />
        <main className="ml-20">{children}</main>
      </body>
    </html>
  );
}
