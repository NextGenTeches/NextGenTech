// app/services/page.tsx
import ServicesContent from "@/components/ServicesContent";
import { Suspense } from "react";

export const metadata = {
  title:
    "IT & Software Services | CRM, Cloud, Network & Performance Testing | NextGen Tech",
  description:
    "Explore NextGen Tech's professional IT services including CRM development, cloud integration, network consulting, and performance testing solutions tailored for enterprises and startups.",
  keywords: [
    "CRM Development",
    "Cloud Integration",
    "Network Consulting",
    "Performance Testing",
    "Custom Software",
    "IT Services",
    "Digital Transformation",
    "Cybersecurity",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.nextgenteches.com/services",
  },
  openGraph: {
    title: "NextGen Tech | IT & Software Services",
    description:
      "NextGen Tech provides CRM, Cloud, Network, and Testing services to modernize your business with cutting-edge technologies.",
    url: "https://www.nextgenteches.com/services",
    siteName: "NextGen Tech",
    type: "website",
    images: [
      {
        url: "https://www.nextgenteches.com/og/services.jpg",
        width: 1200,
        height: 630,
        alt: "NextGen Tech Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGen Tech | IT & Software Services",
    description:
      "Explore CRM, Cloud, and Performance Testing services designed for digital success.",
    images: ["https://www.nextgenteches.com/og/services.jpg"],
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "IT & Software Services | NextGen Tech",
      url: "https://www.nextgenteches.com/services",
      description:
        "Professional IT services including CRM, Cloud, Network, and Performance Testing solutions tailored for modern businesses.",
      provider: {
        "@type": "Organization",
        name: "NextGen Tech",
        url: "https://www.nextgenteches.com",
        logo: "https://www.nextgenteches.com/logo.png",
        sameAs: [
          "https://www.facebook.com/nextgenteches",
          "https://www.linkedin.com/company/nextgenteches",
          "https://www.instagram.com/nextgenteches",
        ],
      },
      areaServed: "Global",
      serviceType: [
        "CRM Development",
        "Cloud Integration",
        "Network Consulting",
        "Performance Testing",
      ],
    }),
  },
};

export default function ServicesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesContent />
    </Suspense>
  );
}
