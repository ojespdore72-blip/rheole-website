import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import CookieConsent from "@/components/CookieConsent";
import ClientMotionConfig from "@/components/ClientMotionConfig";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rheole",
  description: "The intelligence layer between people and the physical world. Re-imagining local communities, real-world events, and spatial discovery.",
  keywords: "local intelligence, spatial intelligence, communities, discovery, networking, events",
  openGraph: {
    title: "Rheole",
    description: "The intelligence layer between people and the physical world.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rheole",
    description: "The intelligence layer between people and the physical world.",
  },
  icons: {
    icon: [
      { url: "/rheole-app-icon-transparent.png", type: "image/png" }
    ],
    apple: [
      { url: "/rheole-app-icon-transparent.png", sizes: "180x180", type: "image/png" }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-luxury-white dark:bg-luxury-black text-brand-blue dark:text-luxury-white selection:bg-brand-gold/30 selection:text-brand-blue dark:selection:text-luxury-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rheole",
              "url": "https://rheole.com",
              "logo": "https://rheole.com/logo.png",
              "description": "The intelligence layer between people and the physical world. Re-imagining local communities, real-world events, and spatial discovery.",
              "sameAs": [
                "https://x.com/rheole",
                "https://github.com/rheole"
              ]
            })
          }}
        />
        <Navbar isGlobal />
        <main className="flex-grow flex flex-col w-full">
          <ClientMotionConfig>
            <ErrorBoundary>
              {children}
            </ErrorBoundary>
          </ClientMotionConfig>
        </main>
        <Footer isGlobal />
        <CookieConsent />
      </body>
    </html>
  );
}
