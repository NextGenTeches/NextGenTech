// app/about/page.tsx
import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import AboutContent from "@/components/aboutContent";

export const metadata: Metadata = {
  title: "About Us | NextGen Tech – System Integrators & Innovators",
  description:
    "Learn about NextGen Tech – a new-age technology company specializing in system integration, software development, and digital transformation.",
  keywords:
    "NextGen Tech, system integrators, technology company India, software development, digital transformation, IT services, Praveen Rai, Harsh Rai, system integration company",
  alternates: {
    canonical: "https://www.nextgenteches.com/about",
  },
  openGraph: {
    type: "website",
    url: "https://www.nextgenteches.com/about",
    title: "About NextGen Tech – System Integrators & Innovators",
    description:
      "Discover NextGen Tech’s story, leadership team, and values. We’re building India’s next-generation technology ecosystem.",
    images: ["https://www.nextgenteches.com/nextgen-banner.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About NextGen Tech – Innovators in System Integration",
    description:
      "Meet the team and vision behind NextGen Tech – shaping the future of system integration and IT innovation in India.",
    images: ["https://www.nextgenteches.com/nextgen-banner.png"],
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function AboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutContent />
    </Suspense>
  );
}
