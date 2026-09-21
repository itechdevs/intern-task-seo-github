import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "itechosNepal",
  openGraph: {
    title: "itechosNepal",
    description:
      "iTech Office Support empowers your digital future with seamless IT solutions, offering top-tier products and services as a leading IT distributor in Nepal",
    type: "website",
    images: [
      {
        url: "http://localhost:3000/api/og-images/root",
        width: 1200,
        height: 630,
        alt: "og-image-for-home-page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "itechosNepal",
    description:
      "iTech Office Support empowers your digital future with seamless IT solutions, offering top-tier products and services as a leading IT distributor in Nepal",
    images: ["http://localhost:3000/api/og-images/root"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
