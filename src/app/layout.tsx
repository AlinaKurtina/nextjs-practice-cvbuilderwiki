import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CV Builder Wiki",
  description:
    "Build and customize a professional resume online with our modern CV Builder. Easily edit profile details, tailor resume sections, and preview your CV in real time.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn(roboto.className)}>
      <body className="mt-auto flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
