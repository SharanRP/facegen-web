
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "AI Avatar Generator - API Documentation",
  description: "Generate unique AI-powered avatars based on text descriptions. Our API is simple to use and provides high-quality avatars in seconds.",
  keywords: "AI, avatar, generator, API, documentation, text to image, machine learning",
  authors: [{ name: "AI Avatar Generator" }],
  openGraph: {
    title: "AI Avatar Generator - API Documentation",
    description: "Generate unique AI-powered avatars based on text descriptions. Our API is simple to use and provides high-quality avatars in seconds.",
    url: "https://example.com", // Replace with your actual domain
    siteName: "AI Avatar Generator",
    images: [
      {
        url: "https://example.com/og-image.png", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Avatar Generator - API Documentation",
    description: "Generate unique AI-powered avatars based on text descriptions. Our API is simple to use and provides high-quality avatars in seconds.",
    creator: "@example", // Replace with your Twitter handle
    images: ["https://example.com/twitter-image.png"], // Replace with your actual Twitter image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
