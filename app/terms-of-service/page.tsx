import * as React from "react";
import { FileText, Shield, AlertTriangle, Scale, Users, Zap } from "lucide-react";

// ✅ Next.js SEO Metadata
export const metadata = {
  title: "Terms of Service | NextGen Tech",
  description:
    "Read the Terms of Service for NextGen Tech. Understand the policies, payment terms, user responsibilities, and legal framework that govern our services.",
  keywords: [
    "NextGen Tech",
    "Terms of Service",
    "NextGen policies",
    "IT services",
    "CRM",
    "network consulting",
    "software development",
    "legal terms",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.nextgenteches.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | NextGen Tech",
    description:
      "Review NextGen Tech’s Terms of Service, outlining legal obligations, payment terms, and client responsibilities.",
    url: "https://www.nextgenteches.com/terms-of-service",
    siteName: "NextGen Tech",
    type: "article",
    images: [
      {
        url: "https://www.nextgenteches.com/og/terms.jpg",
        width: 1200,
        height: 630,
        alt: "Terms of Service - NextGen Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | NextGen Tech",
    description:
      "Learn about NextGen Tech’s service policies, user terms, and payment conditions.",
    images: ["https://www.nextgenteches.com/og/terms.jpg"],
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Terms of Service | NextGen Tech",
      url: "https://www.nextgenteches.com/terms-of-service",
      description:
        "Detailed Terms of Service for NextGen Tech, covering user responsibilities, payments, and legal framework.",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.nextgenteches.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Terms of Service",
            item: "https://www.nextgenteches.com/terms-of-service",
          },
        ],
      },
      publisher: {
        "@type": "Organization",
        name: "NextGen Tech",
        url: "https://www.nextgenteches.com",
        logo: "https://www.nextgenteches.com/logo.png",
      },
    }),
  },
};

export default function TermsOfService() {
  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using NextGen Tech services, you accept and agree to be bound by these terms.",
        "If you do not agree to these terms, you may not use our services.",
        "We reserve the right to modify these terms at any time with notice.",
        "Your continued use constitutes acceptance of any modifications.",
      ],
    },
    {
      icon: Zap,
      title: "Services Description",
      content: [
        "CRM development and custom software solutions.",
        "Cloud integration and API development services.",
        "Network consulting and infrastructure design.",
        "Performance testing using LoadRunner and JMeter.",
        "Training and certification programs.",
        "Government and enterprise IT solutions.",
      ],
    },
    {
      icon: Scale,
      title: "User Responsibilities",
      content: [
        "Provide accurate and complete information.",
        "Maintain confidentiality of account credentials.",
        "Use services in compliance with applicable laws.",
        "Respect intellectual property rights.",
        "Report any security vulnerabilities promptly.",
      ],
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: [
        "All content and materials are owned by NextGen Tech or licensed to us.",
        "You may not reproduce, distribute, or create derivative works.",
        "Client data and custom solutions remain client property.",
        "We retain rights to general methodologies and know-how.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6">
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              These terms govern your use of NextGen Tech services and establish
              the legal framework for our business relationship.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Effective date: June 16, 2025
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Agreement Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service ("Terms") constitute a legally binding
              agreement between you and NextGen Tech regarding your use of our
              website, services, and products. Please read these terms carefully
              before using our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These terms apply to all users of our services, including clients,
              website visitors, training participants, and anyone accessing our
              digital platforms.
            </p>
          </div>

          {/* Dynamic Sections */}
          <div className="grid gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 rounded-xl p-3 mr-4">
                    <section.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Payment Terms
            </h2>
            <ul className="space-y-2 ml-4 text-gray-700">
              <li>50% advance payment for project initiation.</li>
              <li>Milestone-based payments for larger projects.</li>
              <li>Net 30 payment terms for ongoing services.</li>
              <li>Late payment fees may apply after 30 days.</li>
            </ul>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NextGen Tech’s liability is limited to the maximum extent
              permitted by law. We provide services “as is” and make no
              warranties regarding uninterrupted or error-free operation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our total liability for any claims arising from our services shall
              not exceed the amount paid by you for the specific service giving
              rise to the claim.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Termination
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Either party may terminate services with appropriate notice as
              specified in individual service agreements. We reserve the right
              to suspend or terminate access for violations of these terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, you must cease using our services and return any
              confidential information. Provisions regarding intellectual
              property, confidentiality, and limitation of liability shall
              survive termination.
            </p>
          </div>

          {/* Warning */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mt-8">
            <div className="flex items-center mb-3">
              <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-red-800">
                Important Notice
              </h3>
            </div>
            <p className="text-red-700 text-sm leading-relaxed">
              These terms are legally binding. If you do not understand any
              provision, please consult legal counsel before using our services.
              Violation of these terms may result in termination and legal
              action.
            </p>
          </div>

          {/* Legal Contact */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 shadow-xl mt-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Legal Contact</h2>
            <p className="text-purple-100 mb-4">
              For questions about these Terms of Service or legal matters,
              contact our legal department:
            </p>
            <p>Email: info@nextgenteches.com</p>
            <p>Phone: +91 6387793352</p>
            <p className="mt-2 text-sm">
              Business hours: Monday - Friday, 9:00 AM - 6:30 PM IST
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
