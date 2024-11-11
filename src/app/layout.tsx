import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "intern design",
  description: "build by sarad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
