import CareersContent from "@/components/CareersContent";
import { Suspense } from "react";

export const metadata = {
  title: "Careers & Training | NextGen Tech",
  description:
    "Explore exciting career opportunities, internships, and professional training programs at NextGen Tech.",
  keywords: [
    "NextGen Tech careers",
    "IT jobs India",
    "internships tech India",
    "technology training programs",
    "system integration jobs",
  ],
  alternates: {
    canonical: "https://www.nextgenteches.com/careers",
  },
  openGraph: {
    title: "Careers & Training | NextGen Tech",
    description:
      "Join NextGen Tech for job openings, internships, and professional development programs.",
    url: "https://www.nextgenteches.com/careers",
    siteName: "NextGen Tech",
    type: "website",
    images: [
      {
        url: "https://www.nextgenteches.com/assets/careers-preview.jpg",
        width: 1200,
        height: 630,
        alt: "NextGen Tech Careers – Join Our Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers & Training | NextGen Tech",
    description:
      "Launch your career with NextGen Tech — explore jobs, internships, and certification programs.",
    images: ["https://www.nextgenteches.com/assets/careers-preview.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.nextgenteches.com"),
};

export default function CareersPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CareersContent />
    </Suspense>
  );
}
