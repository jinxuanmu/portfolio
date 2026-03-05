import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne, Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap"
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-syne",
  display: "swap"
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Jinxuan Mu — Portfolio",
  description:
    "Senior Product Manager portfolio: case studies across consumer social platforms, UGC ecosystems, and AI-assisted content experiences."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${syne.variable} ${spaceMono.variable} ${dmSans.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

