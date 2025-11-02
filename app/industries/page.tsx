
import React from "react";
import {
  Building2,
  GraduationCap,
  Rocket,
  Shield,
  CheckCircle,
  Award,
} from "lucide-react";
import { Metadata } from "next";

// ✅ Proper Next.js metadata (replaces <Head>)
export const metadata: Metadata = {
  title: "Industries We Serve | NextGen Tech",
  description:
    "Explore the diverse industries served by NextGen Tech including SMBs, Startups, Government, and Education sectors with tailored technology solutions.",
  keywords:
    "industries, IT solutions, startups, SMB, government technology, education, NextGen Tech",
  alternates: { canonical: "https://www.nextgenteches.com/industries" },
  openGraph: {
    title: "Industries We Serve | NextGen Tech",
    description:
      "Explore tailored IT solutions for SMBs, startups, government, and education sectors.",
    url: "https://www.nextgenteches.com/industries",
    siteName: "NextGen Tech",
    type: "website",
    images: [
      {
        url: "https://www.nextgenteches.com/og-industries.jpg",
        width: 1200,
        height: 630,
        alt: "Industries served by NextGen Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | NextGen Tech",
    description:
      "NextGen Tech delivers industry-focused IT solutions for SMBs, Startups, Government, and Education.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function Industries() {
  const industries = [
    {
      icon: Building2,
      title: "Small & Medium Businesses",
      description:
        "Affordable, scalable technology solutions designed to help SMBs compete effectively in the digital marketplace.",
      projects: [
        "Custom CRM Systems",
        "E-commerce Platforms",
        "Business Process Automation",
        "Cloud Migration Services",
      ],
      benefits: [
        "Cost-effective solutions",
        "Quick implementation and ROI",
        "Scalable infrastructure solutions",
        "Ongoing support and maintenance",
      ],
      stats: { projects: "15+", clients: "10+", growth: "40%" },
      image: "/sme-small-and-medium-enterprise.png",
    },
    {
      icon: Rocket,
      title: "Startups & Technology Companies",
      description:
        "Rapid development and deployment solutions for startups looking to scale quickly and efficiently.",
      projects: [
        "MVP Development",
        "Fintech Solutions",
        "SaaS Platform Development",
        "Mobile App Development",
      ],
      benefits: [
        "Agile development methodology",
        "MVP to full product evolution",
        "Modern technology stack optimization",
        "Investor-ready documentation",
      ],
      stats: { startups: "8+", funding: "$2M+", success: "90%" },
      image: "/Startups.jpg",
    },
    {
      icon: Shield,
      title: "Government & Public Sector Ready",
      description:
        "Government-grade solutions designed with compliance and security in mind, ready for public sector deployment.",
      projects: [
        "Digital Governance Platforms (Ready)",
        "Citizen Service Portals (Designed)",
        "Document Management Systems",
        "Secure Communication Platforms",
      ],
      benefits: [
        "Government-grade security compliance",
        "Transparent development process",
        "Scalable infrastructure solutions",
        "Citizen-centric service design",
      ],
      stats: { solutions: "5+", compliance: "100%", ready: "Yes" },
      image: "/govpub-edited.jpg",
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description:
        "Educational technology solutions and professional development programs for academic institutions.",
      projects: [
        "Learning Management Systems",
        "Student Information Systems",
        "Online Certification Platforms",
        "Skill Assessment Tools",
      ],
      benefits: [
        "Enhanced learning experiences",
        "Administrative efficiency",
        "Data-driven insights",
        "Flexible learning solutions",
      ],
      stats: { institutions: "30+", students: "5000+", courses: "200+" },
      image: "/Education.png",
    },
  ];

  const sectors = [
    { name: "Healthcare", projects: 25, growth: "+30%" },
    { name: "Financial Services", projects: 40, growth: "+25%" },
    { name: "Manufacturing", projects: 35, growth: "+20%" },
    { name: "Retail & E-commerce", projects: 60, growth: "+45%" },
    { name: "Non-Profit Organizations", projects: 20, growth: "+15%" },
    { name: "Real Estate", projects: 30, growth: "+35%" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Industries We <span className="text-blue-600">Serve</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Specialized technology solutions tailored to meet the unique
            challenges and requirements of diverse industries and business
            sectors.
          </p>
        </div>
      </section>

      {/* Industry Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    <industry.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    {industry.title}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {industry.description}
                </p>

                {/* Projects */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Projects:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {industry.projects.map((project, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Benefits:
                  </h4>
                  <div className="space-y-3">
                    {industry.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex space-x-8">
                  {Object.entries(industry.stats).map(([key, value], i) => (
                    <div key={i} className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {value}
                      </div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div
                className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <img
                  src={industry.image}
                  alt={`${industry.title} sector`}
                  className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Sectors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Other Sectors We Support
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Expanding our expertise across various business domains
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {sector.name}
                  </h3>
                  <span className="text-green-600 font-medium text-sm">
                    {sector.growth}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Projects Completed</span>
                  <span className="text-2xl font-bold text-blue-600">
                    {sector.projects}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry Impact
          </h2>
          <p className="text-xl text-blue-100 mb-16">
            Measurable results across all sectors we serve
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "4+", label: "Core Industries" },
              { value: "6+", label: "Business Sectors" },
              { value: "5+", label: "Active Projects" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// export default Industries;