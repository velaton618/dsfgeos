import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.sass";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DSF-GEOS",
  description: "Unveiling Earth's Hidden Treasures: Revolutionize Exploration with GPTS Technology",
  openGraph: {
    images: 'https://dsfgeos-dlou3sfoc-uaquaxs-projects.vercel.app/og.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
