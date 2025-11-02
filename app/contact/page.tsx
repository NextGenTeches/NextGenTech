import ContactForm from "@/components/ContactForm";
import { Suspense } from "react";

export const metadata = {
  title: "Contact Us | NextGen Tech – System Integrators",
  description:
    "Contact NextGen Tech – a leading IT system integrator offering software development, cloud integration, and network solutions. Reach us today for your next project!",
  keywords:
    "NextGen Tech contact, IT services, system integrators, software development, CRM, cloud integration, network solutions, support",
  alternates: {
    canonical: "https://www.nextgenteches.com/contact",
  },
  openGraph: {
    title: "Contact NextGen Tech – Let's Build Something Great",
    description:
      "Get in touch with NextGen Tech for IT solutions, system integration, and digital transformation services.",
    url: "https://www.nextgenteches.com/contact",
    siteName: "NextGen Tech",
    type: "website",
    images: [
      {
        url: "https://www.nextgenteches.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NextGen Tech – System Integrators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact NextGen Tech – System Integrators",
    description:
      "Reach out to NextGen Tech for system integration, IT services, and professional support.",
    images: ["https://www.nextgenteches.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.nextgenteches.com"),
  other: {
    "ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact NextGen Tech",
      url: "https://www.nextgenteches.com/contact",
      publisher: {
        "@type": "Organization",
        name: "NextGen Tech",
        logo: "https://www.nextgenteches.com/logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-6387793352",
          contactType: "customer support",
          email: "info@nextgenteches.com",
          availableLanguage: ["English", "Hindi"],
        },
      },
    }),
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact NextGen Tech
          </h1>
          <p className="text-lg text-gray-600">
            We’d love to hear from you! Fill out the form below or reach us at{" "}
            <a
              href="mailto:info@nextgenteches.com"
              className="text-blue-600 hover:underline"
            >
              info@nextgenteches.com
            </a>
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 w-full">
          <Suspense fallback={<div>Loading...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
