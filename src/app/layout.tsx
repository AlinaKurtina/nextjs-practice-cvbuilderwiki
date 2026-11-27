import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV Builder Wiki",
  description: "Build and customize a professional resume online with our modern CV Builder. Easily edit profile details, tailor resume sections, and preview your CV in real time.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("", "", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="mt-auto flex items-center justify-center">{children}</body>
    </html>
  );
}
