import type { Metadata, Viewport } from "next";
import "./globals.css";
import ServiceWorkerRegister from "./ServiceWorkerRegister";
import PWAInstallPrompt from "./PWAInstallPrompt";

export const metadata: Metadata = {
  title: "Sofia",
  description: "Sofia Software Company",

  manifest: "/manifest.webmanifest",

  icons: {
    icon: [
      {
        url: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    shortcut: "/icon-192x192.png",

    apple: [
      {
        url: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  },

  appleWebApp: {
    capable: true,
    title: "Sofia",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#14b8a6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ServiceWorkerRegister />

        <PWAInstallPrompt />

        {children}
      </body>
    </html>
  );
}
