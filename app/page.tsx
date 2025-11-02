'use client';

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Zap,
  Database,
  Cloud,
  Network,
  TestTube,
  Building,
  GraduationCap,
} from "lucide-react";
import Head from "next/head";
// import e from "express";

export default function Home() {
  const services = [
    {
      icon: Database,
      title: "CRM Development",
      description:
        "Custom CRM solutions tailored to your business needs with advanced analytics and automation.",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description:
        "Seamless cloud migration and API integration services for scalable business operations.",
    },
    {
      icon: Network,
      title: "Website & App Development",
      description:
        "Modern responsive websites and mobile applications built with cutting-edge technologies.",
    },
    {
      icon: TestTube,
      title: "Digital Marketing",
      description:
        "Complete digital marketing solutions including SEO, social media, and online advertising.",
    },
  ];

  const stats = [
    { number: "5+", label: "Projects in Progress" },
    { number: "10+", label: "Early Clients" },
    { number: "1", label: "Month Since Launch" },
    { number: "8+", label: "Team Members" },
  ];

  const testimonials = [
    {
      quote:
        "Working with NextGen Tech has been an amazing experience. Their fresh approach and dedication to quality is exactly what we needed for our startup.",
      author: "A Satisfied Client",
      title: "Startup Founder",
    },
    {
      quote:
        "The team's energy and innovative solutions helped us launch our digital platform successfully. Highly recommend their services!",
      author: "Happy Customer",
      title: "Business Owner",
    },
    {
      quote:
        "NextGen Tech delivered beyond our expectations. Their modern approach and attention to detail made all the difference.",
      author: "Delighted Client",
      title: "Project Manager",
    },
  ];

  return (
    <div>
      <Head>
        <title>NextGen Tech | Empowering Digital Features for Modern Businesses</title>
        <meta
          name="description"
          content="NextGen Tech is a modern IT solutions provider specializing in CRM development, cloud integration, website & app development, and digital marketing."
        />
        <meta
          name="keywords"
          content="NextGen Tech, IT solutions, CRM development, cloud integration, website development, app development, digital marketing, system integrators, modern business solutions"
        />
        <link rel="canonical" href="https://nextgentech.in/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="NextGen Tech | Empowering Digital Features for Modern Businesses"
        />
        <meta
          property="og:description"
          content="Fresh IT solutions provider specializing in CRM, cloud integration, and digital transformation for startups, SMEs, and enterprises."
        />
        <meta property="og:image" content="https://nextgentech.in/og-image.png" />
        <meta property="og:url" content="https://nextgentech.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta */}
        <meta
          name="twitter:title"
          content="NextGen Tech | Empowering Digital Features"
        />
        <meta
          name="twitter:description"
          content="Fresh IT solutions provider specializing in CRM, cloud integration, and app development."
        />
        <meta name="twitter:image" content="https://nextgentech.in/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NextGen Tech",
              url: "https://nextgentech.in/",
              logo: "https://nextgentech.in/Untitled%20design.png",
              sameAs: [
                "https://www.facebook.com/share/19uyWEqDBY/?mibextid=wwXIfr",
                "https://www.linkedin.com/company/nextgenteches/",
                "https://www.instagram.com/nextgenteches",
              ],
              description:
                "NextGen Tech is a system integrator providing CRM development, cloud integration, web and app development, and digital marketing solutions.",
              founder: {
                "@type": "Person",
                name: "Praveen Rai",
              },
              foundingDate: "2024",
              address: {
                "@type": "PostalAddress",
                addressCountry: "India",
              },
            }),
          }}
        />
      </Head>

      {/* ✅ Hero Section */}
      <section className="relative pt-32 pb-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden animate-fade-in min-h-screen flex items-center">
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20">
          {/* Logo Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10 animate-pulse-slow">
            <img
              src="/untitled-design.png"
              alt="NextGen Tech Logo Background"
              className="w-[500px] h-[500px] object-contain transform rotate-12 scale-125 animate-float"
            />
          </div>
        </div>

        {/* Animated Background Shapes */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-2xl animate-pulse-slow"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
          {/* Title */}
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight animate-slide-up">
            Empowering{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
              Digital Futures
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up font-medium"
            style={{ animationDelay: "0.2s" }}
          >
            Fresh IT solutions provider specializing in{" "}
            <span className="text-blue-600 font-semibold">CRM development</span>,{" "}
            <span className="text-indigo-600 font-semibold">cloud integration</span>, and{" "}
            <span className="text-purple-600 font-semibold">
              cutting-edge technology services
            </span>{" "}
            for modern businesses.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-10 py-5 rounded-2xl hover:shadow-2xl transition-all duration-500 font-bold text-xl inline-flex items-center justify-center group transform hover:-translate-y-3 hover:scale-110 shadow-lg"
            >
              Get Started Today
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            <Link
              href="/portfolio"
              className="border-2 border-blue-600 text-blue-600 px-10 py-5 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 font-bold text-xl backdrop-blur-sm bg-white/30 hover:shadow-2xl transform hover:-translate-y-3 hover:scale-110 shadow-lg"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <p className="text-gray-500 text-sm mb-6 font-medium">
              Trusted by forward-thinking businesses
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {[
                { emoji: "🏢", label: "SMEs" },
                { emoji: "🚀", label: "Startups" },
                { emoji: "🏛️", label: "Gov-Ready" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg"
                >
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-gray-700 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ✅ Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div
          className="absolute top-10 right-10 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions designed to drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 group service-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-3 w-fit mb-6 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-blue-100">
              Delivering excellence across all our projects and partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose NextGen Tech?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine technical expertise with industry knowledge to deliver
                solutions that drive real business results.
              </p>

              <div className="space-y-6">
                {[
                  "Government-grade security and compliance",
                  "Proven track record with RISL, NTRO projects",
                  "Expert team with 10+ years experience",
                  "Comprehensive training and career programs",
                  "24/7 support and maintenance services",
                  "Scalable solutions for growing businesses",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Expert Team
                </h3>
                <p className="text-gray-600">
                  Skilled professionals with deep industry knowledge
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quality Assured
                </h3>
                <p className="text-gray-600">
                  ISO certified processes and quality standards
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Fast Delivery
                </h3>
                <p className="text-gray-600">
                  Agile methodologies for rapid project completion
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Enterprise Ready
                </h3>
                <p className="text-gray-600">
                  Scalable solutions for businesses of all sizes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from organizations that trust NextGen Tech
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of organizations that trust NextGen Tech for their
              digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/careers"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg inline-flex items-center justify-center"
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Explore Careers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
