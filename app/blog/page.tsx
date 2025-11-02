// app/blog/page.tsx
import React, { Suspense } from "react";
import BlogContent from "@/components/BlogContent";

export const metadata = {
  title: "Blog | NextGen Tech – Technology, Careers & Insights",
  description:
    "Explore technology insights, tutorials, performance testing, government digitalization, and career growth articles from NextGen Tech experts.",
  keywords:
    "NextGen Tech Blog, technology blog, career advice, system integration, performance testing, cybersecurity, government tech, CRM development",
  alternates: {
    canonical: "https://www.nextgenteches.com/blog",
  },
  openGraph: {
    title: "NextGen Tech Blog – Tech, Careers & Innovation",
    description:
      "Stay updated with NextGen Tech’s latest blogs on technology, innovation, system integration, and IT career development.",
    url: "https://www.nextgenteches.com/blog",
    type: "website",
    siteName: "NextGen Tech",
    images: [
      {
        url: "https://www.nextgenteches.com/assets/nextgen-blog-preview.jpg",
        width: 1200,
        height: 630,
        alt: "NextGen Tech Blog – Technology, Careers & Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGen Tech Blog",
    description:
      "Technology, innovation, performance testing, and career insights from NextGen Tech.",
    images: ["https://www.nextgenteches.com/assets/nextgen-blog-preview.jpg"],
    site: "@NextGenTech",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.nextgenteches.com"),
  authors: [{ name: "NextGen Tech Editorial Team" }],
  category: "Technology",
};

export default function BlogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogContent />
    </Suspense>
  );
}
