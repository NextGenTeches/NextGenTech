"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Database,
  Cloud,
  Network,
  TestTube,
  Code,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const ServicesContent = () => {
  const searchParams = useSearchParams();

  // ✅ Smooth scroll + temporary highlight on hash navigation
  React.useEffect(() => {
    const hash = window.location.hash?.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        element.classList.add("ring-4", "ring-blue-400", "rounded-xl");
        setTimeout(() => {
          element.classList.remove("ring-4", "ring-blue-400", "rounded-xl");
        }, 2000);
      }
    }
  }, [searchParams]);

  const mainServices = [
    {
      id: "crm",
      icon: Database,
      title: "CRM Development",
      description:
        "Custom Customer Relationship Management systems designed to streamline your business processes and enhance customer experiences.",
      features: [
        "Modern CRM solutions built with latest technologies",
        "Seamless integration with existing business systems",
        "Advanced analytics and reporting",
        "Mobile-first responsive design",
        "Workflow automation",
        "AI-powered lead management and tracking",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "MongoDB", "AI/ML"],
      image: "/crm-implementation-process-1555x1200.jpg",
    },
    {
      id: "cloud",
      icon: Cloud,
      title: "Cloud Integration",
      description:
        "Seamless cloud migration and API integration services to modernize your infrastructure and improve scalability.",
      features: [
        "Cloud migration strategy and implementation",
        "Multi-cloud architecture design",
        "API development and integration",
        "Microservices architecture",
        "DevOps and CI/CD pipeline setup",
        "Cloud security and compliance",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
      image: "/832404.png",
    },
    {
      id: "network",
      icon: Network,
      title: "Network Consulting",
      description:
        "Expert network architecture design and optimization services for enterprise-grade performance and security.",
      features: [
        "Network architecture design",
        "Security assessment and hardening",
        "Performance optimization",
        "Disaster recovery planning",
        "Network monitoring and management",
        "Infrastructure modernization",
      ],
      technologies: ["Cisco", "Juniper", "Fortinet", "VMware", "Linux"],
      image: "/network-consulting.png",
    },
    {
      id: "testing",
      icon: TestTube,
      title: "Performance Testing",
      description:
        "Comprehensive application testing using industry-standard tools to ensure optimal performance under load.",
      features: [
        "Load testing with LoadRunner",
        "Performance testing with JMeter",
        "Stress and volume testing",
        "API performance testing",
        "Mobile app performance testing",
        "Detailed performance reports",
      ],
      technologies: [
        "LoadRunner",
        "JMeter",
        "BlazeMeter",
        "New Relic",
        "AppDynamics",
      ],
      image: "/performance-testing.png",
    },
  ];

  const additionalServices = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "End-to-end software development solutions for web, mobile, and desktop applications.",
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description:
        "Comprehensive security solutions including vulnerability assessments and compliance audits.",
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description:
        "Strategic consulting to help organizations adopt digital technologies and modernize operations.",
    },
    {
      icon: Users,
      title: "IT Support & Maintenance",
      description:
        "24/7 technical support and maintenance services to keep your systems running smoothly.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We analyze your current systems and understand your business requirements.",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description:
        "Develop a comprehensive strategy and detailed project roadmap.",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Execute the solution using agile methodologies and best practices.",
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing to ensure reliability, performance, and security.",
    },
    {
      step: "05",
      title: "Deployment & Support",
      description:
        "Seamless deployment with ongoing support and maintenance.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-white animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to transform your business operations
            and drive digital excellence across all industries.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {mainServices.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-32 ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Technologies We Use:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, j) => (
                      <span
                        key={j}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Additional <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            Comprehensive solutions to meet all your technology needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Development Process</span>
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            A proven methodology that ensures successful project delivery
          </p>
          <div className="space-y-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business operations
            and drive digital success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center justify-center group"
            >
              Request Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};


export default ServicesContent;