import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "4mulate- Design, Develop, and Define Brands",
  description: "4mulate empowers businesses with next-gen branding, web design, and scalable development. From concept to launch, we engineer digital experiences that inspire trust and growth.",
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    title: "4mulate- Design, Develop, and Define Brands",
    description: "4mulate empowers businesses with next-gen branding, web design, and scalable development. From concept to launch, we engineer digital experiences that inspire trust and growth.",
    url: "https://www.4mulate.tech",
    siteName: "4mulate",
    images: [
      {
        url: "https://www.4mulate.tech/ogImage-optimized.jpg",
        width: 1200,
        height: 621,
        alt: "4mulate - Design, Develop, and Define Brands",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "4mulate- Design, Develop, and Define Brands",
    description: "4mulate empowers businesses with next-gen branding, web design, and scalable development. From concept to launch, we engineer digital experiences that inspire trust and growth.",
    images: ["https://www.4mulate.tech/ogImage-optimized.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
