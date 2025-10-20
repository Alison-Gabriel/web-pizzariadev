import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import RootProvider from "@/providers/root-provider";

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pizzaria Dev",
  description: "A maior pizzaria com tema de T.I do Brasil!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
