import {
  Cookie,
  Settings,
  BarChart,
  Shield,
  Eye,
  Trash2,
} from "lucide-react";
import React from "react";

export const metadata = {
  title: "Cookie Policy | NextGen Tech",
  description:
    "Understand how NextGen Tech uses cookies to enhance user experience, analyze site performance, and provide personalized services.",
  keywords:
    "cookie policy, NextGen Tech, cookies, privacy, analytics, consent, data protection",
  alternates: {
    canonical: "https://www.nextgenteches.com/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | NextGen Tech",
    description:
      "Learn about how NextGen Tech uses cookies and how you can manage your preferences.",
    url: "https://www.nextgenteches.com/cookie-policy",
    siteName: "NextGen Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | NextGen Tech",
    description:
      "Understand how NextGen Tech uses cookies to enhance user experience and ensure data privacy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicy() {
  const cookieTypes = [
    {
      icon: Shield,
      title: "Essential Cookies",
      description: "Required for basic website functionality and security",
      examples: ["Session management", "Security tokens", "Load balancing"],
      canDisable: false,
      color: "green",
    },
    {
      icon: BarChart,
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website",
      examples: ["Google Analytics", "Page views", "User behavior tracking"],
      canDisable: true,
      color: "blue",
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      description:
        "Remember your preferences and personalize your experience",
      examples: ["Language preferences", "Theme settings", "Form data"],
      canDisable: true,
      color: "purple",
    },
    {
      icon: Eye,
      title: "Marketing Cookies",
      description:
        "Used to deliver relevant advertisements and track campaign performance",
      examples: [
        "Ad targeting",
        "Social media integration",
        "Conversion tracking",
      ],
      canDisable: true,
      color: "orange",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "bg-green-100 text-green-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBadgeColor = (color: string) => {
    const colors = {
      green: "bg-green-500",
      blue: "bg-blue-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-yellow-50 animate-fade-in">
      {/* ✅ Page Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-yellow-600/10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-float">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-6">
              <Cookie className="h-8 w-8 text-orange-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Learn how NextGen Tech uses cookies and similar technologies to
              enhance your browsing experience and improve our services.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: January 15, 2025
            </div>
          </div>
        </div>
      </section>


      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Introduction */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What Are Cookies?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device when
              you visit our website. They help us provide you with a better
              browsing experience by remembering your preferences and analyzing
              how you use our site.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We use both session cookies (which expire when you close your
              browser) and persistent cookies (which remain on your device for a
              set period) to enhance functionality and improve our services.
            </p>
          </div>

          {/* Cookie Types */}
          <div className="grid gap-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Types of Cookies We Use
            </h2>
            {cookieTypes.map((cookie, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 animate-fade-in"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div
                      className={`rounded-xl p-3 mr-4 ${getColorClasses(
                        cookie.color
                      )}`}
                    >
                      <cookie.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {cookie.title}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        {cookie.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-3 h-3 rounded-full ${getBadgeColor(
                        cookie.color
                      )}`}
                    />
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full ${cookie.canDisable
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                        }`}
                    >
                      {cookie.canDisable ? "Optional" : "Required"}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cookie.examples.map((example, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                {cookie.canDisable && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                      <Settings className="h-4 w-4 inline mr-1" />
                      You can disable these cookies in your browser settings or
                      through our cookie preferences.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Cookie Management */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Managing Your Cookie Preferences
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-blue-900 mb-3">
                  Browser Settings
                </h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Most browsers allow you to control cookies through their
                  settings. You can typically find these options in the
                  "Privacy" or "Security" section of your browser preferences.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-900 mb-3">
                  Cookie Consent
                </h3>
                <p className="text-green-800 text-sm leading-relaxed">
                  When you first visit our site, you'll see a cookie consent
                  banner where you can choose which types of cookies to accept
                  or reject.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">
                Popular Browser Cookie Settings:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p>
                    <strong>Chrome:</strong> Settings → Privacy and Security →
                    Cookies
                  </p>
                  <p>
                    <strong>Firefox:</strong> Options → Privacy & Security →
                    Cookies
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <strong>Safari:</strong> Preferences → Privacy → Cookies
                  </p>
                  <p>
                    <strong>Edge:</strong> Settings → Cookies and Site
                    Permissions
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party Cookies */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We use several third-party services that may set their own
              cookies. These services help us analyze website performance,
              provide customer support, and deliver relevant content.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                ["Google Analytics", "Website traffic analysis"],
                ["Social Media", "Social sharing features"],
                ["Customer Support", "Live chat and help desk"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-gray-50 rounded-lg p-4 text-center"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Retention */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cookie Retention Periods
            </h2>
            <div className="space-y-4">
              {[
                ["Session Cookies", "Until browser is closed"],
                ["Analytics Cookies", "2 years"],
                ["Preference Cookies", "1 year"],
                ["Marketing Cookies", "30–90 days"],
              ].map(([name, duration]) => (
                <div
                  key={name}
                  className="flex justify-between items-center py-3 border-b border-gray-200"
                >
                  <span className="font-medium text-gray-900">{name}</span>
                  <span className="text-gray-600">{duration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact and Updates */}
          <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 shadow-xl text-white animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Questions About Cookies?</h2>
            <p className="text-orange-100 mb-6 leading-relaxed">
              If you have any questions about our use of cookies or this Cookie
              Policy, please don't hesitate to contact us.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-orange-100 mb-2">
                  Email: info@nextgenteches.com
                </p>
                <p className="text-orange-100">Phone: +91 6387793352</p>
              </div>
              <div className="flex items-center">
                <Trash2 className="h-5 w-5 text-orange-200 mr-2" />
                <span className="text-orange-100 text-sm">
                  You can request cookie deletion at any time
                </span>
              </div>
            </div>
          </div>

          {/* Policy Updates */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mt-8">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">
              Policy Updates
            </h3>
            <p className="text-amber-700 text-sm leading-relaxed">
              We may update this Cookie Policy periodically to reflect changes
              in our practices or applicable laws. We will notify you of
              significant changes by posting a notice on our website or updating
              the "Last updated" date above.
            </p>
          </div>
        </div>
      </section>
    </div >
  );
};


