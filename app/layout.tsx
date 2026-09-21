import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://itechosnepal.com"),
  title: "iTechOS Nepal | Your Trusted Partner for Technology Solutions",
  description:
    "iTech Office Support empowers your digital future with seamless IT solutions, offering top-tier products and services as a leading IT distributor in Nepal.",
  openGraph: {
    title: "iTechOS Nepal | Your Trusted Partner for Technology Solutions",
    description:
      "iTech Office Support empowers your digital future with seamless IT solutions, offering top-tier products and services as a leading IT distributor in Nepal.",
    type: "website",
    images: [
      {
        url: "/api/og-images/root",
        width: 1200,
        height: 630,
        alt: "iTechOS Nepal Technology Solutions Homepage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iTechOS Nepal | Your Trusted Partner for Technology Solutions",
    description:
      "iTech Office Support empowers your digital future with seamless IT solutions, offering top-tier products and services as a leading IT distributor in Nepal.",
    images: ["/api/og-images/root"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
