import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Extrudly — Upload. Print. Ship.",
    template: "%s | Extrudly",
  },
  description:
    "Professional 3D printing on demand. Browse 50+ ready-to-print designs or upload your own STL file. Printed in premium filament and shipped to your door in 48 hours.",
  keywords: [
    "3D printing",
    "print on demand",
    "custom 3D prints",
    "STL printing",
    "FDM printing",
    "PLA",
    "PETG",
    "3D printed parts",
    "tabletop gaming prints",
    "desk accessories",
    "home organization",
  ],
  metadataBase: new URL("https://extrudly.com"),
  openGraph: {
    title: "Extrudly — Upload. Print. Ship.",
    description:
      "Professional 3D printing on demand. Upload your design or browse 50+ ready-to-print products. Ships in 48 hours.",
    url: "https://extrudly.com",
    siteName: "Extrudly",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Extrudly — Upload. Print. Ship.",
    description:
      "Professional 3D printing on demand. Upload your design or browse 50+ ready-to-print products. Ships in 48 hours.",
    creator: "@extrudly",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
