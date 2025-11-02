

import { Shield, Eye, Lock, Database, Mail, Phone } from "lucide-react";
export const metadata = {
  title: "Privacy Policy | NextGen Tech",
  description:
    "Read NextGen Tech’s Privacy Policy to understand how we collect, use, and protect your personal information in compliance with data protection laws.",
  keywords:
    "privacy policy, data protection, NextGen Tech, information security, IT services",
  alternates: {
    canonical: "https://www.nextgenteches.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | NextGen Tech",
    description:
      "Learn how NextGen Tech collects, uses, and protects your personal information.",
    url: "https://www.nextgenteches.com/privacy-policy",
    siteName: "NextGen Tech",
    type: "website",
    images: [
      {
        url: "https://www.nextgenteches.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NextGen Tech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | NextGen Tech",
    description:
      "Learn how NextGen Tech collects, uses, and protects your personal information.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Privacy Policy | NextGen Tech",
      url: "https://www.nextgenteches.com/privacy-policy",
      description:
        "Learn how NextGen Tech collects, uses, and protects your personal information.",
      publisher: {
        "@type": "Organization",
        name: "NextGen Tech",
        url: "https://www.nextgenteches.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.nextgenteches.com/logo.png",
        },
        sameAs: [
          "https://www.facebook.com/nextgenteches",
          "https://www.linkedin.com/company/nextgenteches",
          "https://www.instagram.com/nextgenteches",
        ],
      },
    }),
  },
};
const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal information you provide when contacting us or using our services",
        "Technical information about your device and how you use our website",
        "Cookies and similar tracking technologies",
        "Information from third-party services when you choose to connect them",
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our IT services and solutions",
        "To communicate with you about projects and support",
        "To personalize your experience on our website",
        "To comply with legal obligations and protect our rights",
      ],
    },
    {
      icon: Shield,
      title: "Information Security",
      content: [
        "We implement industry-standard security measures",
        "Data is encrypted in transit and at rest",
        "Regular security audits and vulnerability assessments",
        "Access controls and employee training on data protection",
      ],
    },
    {
      icon: Lock,
      title: "Your Rights",
      content: [
        "Access, update, or delete your personal information",
        "Opt-out of marketing communications",
        "Request data portability",
        "Lodge complaints with supervisory authorities",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
     
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your privacy is important to us. This policy explains how NextGen Tech collects,
              uses, and protects your personal information.
            </p>
            <div className="mt-6 text-sm text-gray-500">Last updated: June 16, 2025</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              NextGen Tech ("we," "our," or "us") is committed to protecting your privacy and ensuring
              the security of your personal information. This Privacy Policy describes how we collect,
              use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website or services, you consent to the data practices described in this policy.
              If you do not agree with the practices described in this policy, please do not use our website
              or services.
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
                  <div className="bg-blue-100 rounded-xl p-3 mr-4">
                    <section.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Data Retention */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes
              outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When we no longer need your personal information, we will securely delete or anonymize it
              in accordance with our data retention policies and applicable legal requirements.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-xl mt-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Contact Us About Privacy</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices,
              please contact us using the information below:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-200 mr-3" />
                <span className="text-blue-100">info@nextgenteches.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-200 mr-3" />
                <span className="text-blue-100">+91 6387793352</span>
              </div>
            </div>
          </div>

          {/* Updates */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mt-8">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Policy Updates</h3>
            <p className="text-amber-700 text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
