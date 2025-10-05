
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "FaceGen.io - AI Avatar Generator API",
  description: "Generate unique AI-powered avatars based on text descriptions. Our API is simple to use and provides high-quality avatars in seconds.",
  keywords: "AI, avatar, generator, API, documentation, text to image, machine learning, FaceGen",
  authors: [{ name: "FaceGen.io" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "FaceGen.io - AI Avatar Generator API",
    description: "Generate unique AI-powered avatars based on text descriptions. Our API is simple to use and provides high-quality avatars in seconds.",
    url: "https://example.com", // Replace with your actual domain
    siteName: "FaceGen.io",
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
