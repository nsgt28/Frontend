import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ConnectSphere - Web3 Learning Platform",
  description: "Empowering the next generation of Web3 developers with zero-knowledge proofs and cutting-edge blockchain education.",
  keywords: ["Web3", "Blockchain", "Zero-Knowledge Proofs", "Education", "Learning", "Cryptocurrency"],
  authors: [{ name: "ConnectSphere Team" }],
  openGraph: {
    title: "ConnectSphere - Web3 Learning Platform",
    description: "Empowering the next generation of Web3 developers with zero-knowledge proofs and cutting-edge blockchain education.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConnectSphere - Web3 Learning Platform",
    description: "Empowering the next generation of Web3 developers with zero-knowledge proofs and cutting-edge blockchain education.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <ErrorBoundary>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ErrorBoundary>
      </body>
    </html>
  );
}
