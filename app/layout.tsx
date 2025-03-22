import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import seoConfig from "@/data/seo-config.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: seoConfig.defaultTitle,
  description: seoConfig.defaultDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
