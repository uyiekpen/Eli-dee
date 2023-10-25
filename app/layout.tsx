import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { useEffect } from "react";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel And Elizabeth",
  description: "we want you to celebrate with us",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./pix2.jpg" type="image/jpg" sizes="32x32" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
