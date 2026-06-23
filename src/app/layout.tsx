import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Editorial display serif used for section headings.
const fraunces = Fraunces({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

// Geometric display sans used for the hero headline.
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coaching with Anu",
  description:
    "Learn to build multiple income streams with Anu's proven coaching program.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" id="top">
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
