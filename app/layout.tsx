import type { Metadata } from "next";
import {
  DM_Sans,
  Playfair_Display,
  Vazirmatn,
} from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const siteUrl = "https://ceramicse.ir";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "سفارش روشویی سنگی شعبه مشهد | Ceramicse",
    template: "%s | Ceramicse",
  },

  description:
    "سفارش روشویی سنگی در شعبه مشهد Ceramicse. مشاهده نمونه‌کارهای واقعی، آشنایی با کارگاه و تماس مستقیم برای سفارش و استعلام.",

  keywords: [
    "سفارش روشویی سنگی",
    "روشویی سنگی مشهد",
    "سفارش روشویی سنگی مشهد",
    "روشویی سنگی شعبه مشهد",
    "روشویی سرامیکی مشهد",
    "سینک سرامیکی مشهد",
    "روشویی",
    "سینک",
    "Ceramicse",
  ],

  applicationName: "Ceramicse",

  authors: [
    {
      name: "Ceramicse",
      url: siteUrl,
    },
  ],

  creator: "Ceramicse",
  publisher: "Ceramicse",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "Ceramicse",
    title: "سفارش روشویی سنگی شعبه مشهد | Ceramicse",
    description:
      "مشاهده نمونه‌کارهای واقعی و سفارش روشویی سنگی در شعبه مشهد Ceramicse.",
  },

  twitter: {
    card: "summary",
    title: "سفارش روشویی سنگی شعبه مشهد | Ceramicse",
    description:
      "سفارش روشویی سنگی و مشاهده نمونه‌کارهای واقعی Ceramicse در مشهد.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`
        ${vazirmatn.variable}
        ${dmSans.variable}
        ${playfairDisplay.variable}
      `}
    >
      <body>{children}</body>
    </html>
  );
}