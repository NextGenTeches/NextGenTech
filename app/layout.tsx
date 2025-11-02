// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";

export const metadata: Metadata = {
  // 👇 Add this line (it removes the "metadataBase not set" warning)
  metadataBase: new URL("https://nextgenteches.com"),

  title: "NextGen Tech – Empowering Digital Futures",
  description:
    "NextGen Tech is a leading IT solutions provider offering CRM development, cloud integration, system integration, and digital transformation services for startups, SMEs, and government agencies.",
  keywords:
    "NextGen Tech, IT solutions, CRM development, cloud integration, system integration, software development, digital transformation, technology services, startup solutions, SaaS, custom software, AI integration",
  authors: [{ name: "NextGen Tech" }],
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://nextgenteches.com",
  },
  openGraph: {
    title: "NextGen Tech – Empowering Digital Futures",
    description:
      "NextGen Tech delivers advanced IT solutions, CRM systems, and cloud integration for modern businesses and organizations.",
    url: "https://nextgenteches.com",
    siteName: "NextGen Tech",
    images: [
      {
        url: "/assets/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "NextGen Tech – Empowering Digital Futures",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGen Tech – Empowering Digital Futures",
    description:
      "Leading IT company specializing in CRM, cloud integration, and enterprise-grade digital transformation.",
    images: ["/assets/og-default.jpg"],
    site: "@nextgenteches",
    creator: "@nextgenteches",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  manifest: "/site.webmanifest",
  other: {
    "google-site-verification": "HeKj-X_FcwQQzToaNaOq-3nb0gotMrdaMJYoMYxYH2E",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>

      <head>
        {/* ✅ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NextGen Tech",
              url: "https://nextgenteches.com",
              logo: "/assets/nextgen-logo.png",
              sameAs: [
                "https://www.instagram.com/nextgenteches",
                "https://www.linkedin.com/company/nextgenteches/",
                "https://www.facebook.com/share/19uyWEqDBY/?mibextid=wwXIfr",
                "https://www.youtube.com/@nextgenteches",
              ],
              description:
                "Leading IT solutions provider specializing in CRM development, system integration, and cloud technologies.",
              foundingDate: "2025",
              founders: [{ "@type": "Person", name: "Praveen Rai" }],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "info@nextgenteches.com",
                areaServed: "IN",
              },
            }),
          }}
        />
      </head>

      <body className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R25JHESH1K"
          strategy="afterInteractive"
        />
        <Script id="ga-setup" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R25JHESH1K');
          `}
        </Script>
      </body>
    </html>
  );
}
