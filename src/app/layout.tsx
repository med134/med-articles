import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.medcode.dev"),
  title: "medcode | Best Programming Blog & free components",
  description: `Welcome to medcode Blog! Explore Programming Made Easy for Beginners and Experts. Discover Free Components from medcode for React.js, Next.js, Vue.js, and More. Join Our Community Today!`,
  keywords: [
    "medcode",
    "medcode.dev",
    "medcode programming",
    "programming",
    "freelance",
    "frontend developer",
    "portfolio",
    "make money online",
  ],
  applicationName: "medcode",
  referrer: "origin-when-cross-origin",
  category: "technology",
  openGraph: {
    title: "medcode | Best Programming Blog & free components",
    description: `Welcome to medcode Blog! Explore Programming Made Easy for Beginners and Experts. Discover Free Components from medcode for React.js, Next.js, Vue.js, and More. Join Our Community Today!`,
    url: "https://medcode.dev",
    siteName: "medcode",
    images: [
      {
        url: "https://res.cloudinary.com/djcnq7nmj/image/upload/v1729700169/ogImage_nelsbz.png",
        width: "1200",
        height: "630",
      },
    ],
    type: "website",
  },
  /*   verification: {
    googleSiteVerification:
      "google-site-verification=-cFXi6ELWEfl4UY9OE5i_S5QFU3LbUvdxGgW6RQgHWw",
  }, */
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "en-US/",
    },
    types: {
      "application/rss+xml": "https://medcode.dev/rss",
    },
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
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
