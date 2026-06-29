import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import CookieConsent from "@/components/CookieConsent";
import ClientMotionConfig from "@/components/ClientMotionConfig";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rheole",
  description: "The intelligence layer between people and the physical world.",
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
      { url: "/rheole-app-icon-small.png?v=9", type: "image/png" }
    ],
    apple: [
      { url: "/rheole-app-icon-small.png?v=9", sizes: "180x180", type: "image/png" }
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
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth dark`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-[#F2F2F0] selection:bg-[#4F6EF7]/30 selection:text-[#F2F2F0] animate-in fade-in duration-1000">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rheole",
              "url": "https://rheole.com",
              "logo": "https://rheole.com/logo.png",
              "description": "The intelligence layer between people and the physical world.",
              "sameAs": [
                "https://x.com/rheole",
                "https://github.com/rheole"
              ]
            })
          }}
        />
        
        {/* Subtle top gradient glow */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4F6EF7] rounded-full blur-[120px] opacity-[0.04] pointer-events-none -translate-y-1/2 z-0" />
        
        <CustomCursor />
        
        <Navbar isGlobal />
        <main className="flex-grow flex flex-col w-full relative z-10">
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
