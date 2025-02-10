// src/app/layout.tsx
import "../globals.scss";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Default Title",
  description: "Default Description",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
