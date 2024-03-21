import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aswin Rajeev",
  description: "Software engineer by profession. Writes about software engineering career, emerging trends in software development, and development tips & tricks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="64x64" href="/favicon/favicon-64x64.png"/>
        <link rel="icon" type="image/png" sizes="128x128" href="/favicon/favicon-128x128.png"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
