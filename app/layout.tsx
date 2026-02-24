import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NextTopLoader from "nextjs-toploader";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hype Cut - Professional Video Editing Services",
  description:
    "Elevate your content with Hype Cut's expert video editing services. Fast turnaround, tailored edits, and social media optimization to boost your brand's impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} antialiased bg-[#FAF4F8]`}>
        <NextTopLoader color="#750037" showSpinner={false} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
