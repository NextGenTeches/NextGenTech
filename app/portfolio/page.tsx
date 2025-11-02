// File: app/portfolio/page.tsx

import PortfolioClient from "@/components/PortfolioClient";
import { Suspense } from "react";


export const revalidate = 60 * 60 * 24; // ✅ Revalidate every 24 hours (ISR)

export const metadata = {
  title: "Portfolio | NextGen Tech – Innovative IT & Software Projects",
  description:
    "Explore NextGen Tech’s portfolio featuring CRM systems, cloud migration platforms, e-learning apps, fintech solutions, and healthcare portals.",
  keywords:
    "NextGen Tech portfolio, IT projects, CRM solutions, web apps, mobile apps, cloud migration, fintech, education software, React projects",
  alternates: {
    canonical: "https://www.nextgenteches.com/portfolio",
  },
  openGraph: {
    title: "Portfolio | NextGen Tech",
    description:
      "Discover our innovative portfolio — from CRM and fintech apps to cloud and education platforms.",
    url: "https://www.nextgenteches.com/portfolio",
    siteName: "NextGen Tech",
    type: "website",
    images: [
      {
        
        url: "/og-portfolio.jpg", // ✅ use a direct URL, no import needed
        width: 1200,
        height: 630,
        alt: "NextGen Tech Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | NextGen Tech",
    description:
      "Explore our top projects — CRM, fintech, education, and enterprise platforms by NextGen Tech.",
  },
  robots: "index, follow",
  other: {
    // 💠 JSON-LD (Schema)
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "NextGen Tech Portfolio",
      description:
        "Explore NextGen Tech’s diverse portfolio spanning CRM, fintech, education, healthcare, and enterprise solutions.",
      url: "https://www.nextgenteches.com/portfolio",
      publisher: {
        "@type": "Organization",
        name: "NextGen Tech",
        logo: {
          "@type": "ImageObject",
          url: "https://www.nextgenteches.com/logo.png",
        },
      },
    }),
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioClient />
      </Suspense>
    </main>
  );
}
