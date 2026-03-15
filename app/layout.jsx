import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata = {
  title: {
    default: "Extrudly — Upload. Print. Ship.",
    template: "%s | Extrudly",
  },
  description:
    "Professional 3D printing on demand. Browse our catalog or upload your own design. Printed in premium filament and shipped within 48 hours.",
  keywords: ["3D printing", "print on demand", "custom prints", "STL", "FDM", "PLA", "PETG"],
  metadataBase: new URL("https://extrudly.com"),
  openGraph: {
    title: "Extrudly — Upload. Print. Ship.",
    description: "Professional 3D print-on-demand. Upload your design or browse 50+ ready-to-print products.",
    type: "website",
    url: "https://extrudly.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Extrudly — Upload. Print. Ship.",
    description: "Professional 3D print-on-demand. Upload your design or browse 50+ ready-to-print products.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
        <Analytics />
      </html>
    </ClerkProvider>
  );
}
