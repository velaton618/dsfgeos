import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.sass";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DSF-GEOS",
  description: "Unveiling Earth's Hidden Treasures: Revolutionize Exploration with GPTS Technology",
  openGraph: {
    images: '/logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
