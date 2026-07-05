import type { Metadata } from "next";
import "./globals.css";
import ServiceWorkerRegister from "./ServiceWorkerRegister";
export const metadata: Metadata = {
  title: "Sofia",
  description: "Sofia Software Company",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
