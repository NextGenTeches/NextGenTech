'use client';

import * as React from "react";
import { useState } from 'react';
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Users, Award, Briefcase, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const [loading, setLoading] = useState(false);

  // Updated to POST to Next.js API route
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        alert(data.error || 'Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      alert('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['12/15 Kanchan Nagar A', 'Shuklaganj Unnao 209861', 'UttarPradesh India'],
      action: 'Get Directions'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['6387793352', 'Available 24/7'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@nextgenteches.com', 'support@nextgenteches.com'],
      action: 'Send Email'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:30 PM'],
      action: 'Schedule Meeting'
    }
  ];

  const services = [
    'CRM Development',
    'Cloud Integration',
    'Network Consulting',
    'Performance Testing',
    'Custom Software Development',
    'Digital Transformation',
    'IT Support & Maintenance',
    'Training & Certification',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹5 Lakhs',
    '₹5 - 15 Lakhs',
    '₹15 - 50 Lakhs',
    '₹50 Lakhs - 1 Crore',
    'Above ₹1 Crore',
    'Need Consultation'
  ];

  const officeLocation = {
    city: "Unnao Office",
    address: "12/15 Kanchan Nagar A, Shuklaganj",
    state: "Unnao 209861, Uttar Pradesh",
    country: "India",
    phone: "+91 6387793352",
    email: "info@nextgenteches.com",
    mapUrl:
      "https://www.google.com/maps?q=12/15%20Kanchan%20Nagar%20A,%20Shuklaganj,%20Unnao%20209861,%20Uttar%20Pradesh,%20India&output=embed",
  };
  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. Small projects take 4-8 weeks, medium projects 3-6 months, and large enterprise solutions 6-12 months.'
    },
    {
      question: 'Do you provide post-deployment support?',
      answer: 'Yes, we offer comprehensive support packages including maintenance, updates, technical support, and enhancement services.'
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We can augment your existing team or work collaboratively with your in-house developers and IT staff.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in React, Node.js, Python, cloud platforms (AWS, Azure), databases (PostgreSQL, MongoDB), and enterprise technologies.'
    }
  ];

  return (
    <div>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="w-full px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge technology solutions?
              Let's discuss your project requirements and explore how we can help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* ==================== LEFT COLUMN ==================== */}
            <div>
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-green-700">Message sent successfully! We'll be in touch soon.</span>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Budget</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the terms and conditions and privacy policy
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center group transition-colors
              ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"}`}
                >
                  {loading ? (
                    <>
                      Sending...
                      <svg
                        className="animate-spin h-5 w-5 ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              {/* ✅ Social Media Buttons — Single Line Below Form */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                {[
                  {
                    name: "LinkedIn",
                    color: "from-blue-700 to-blue-500",
                    icon: () => <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />,
                    link: "https://www.linkedin.com/company/nextgenteches/",
                  },
                  {
                    name: "Instagram",
                    color: "from-pink-600 to-orange-500",
                    icon: () => <FontAwesomeIcon icon={faInstagram} className="text-2xl" />,
                    link: "https://www.instagram.com/nextgenteches/",
                  },
                  {
                    name: "WhatsApp",
                    color: "from-green-500 to-green-400",
                    icon: () => <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />,
                    link: "https://wa.me/916387793352",
                  },
                  {
                    name: "Facebook",
                    color: "from-blue-600 to-blue-400",
                    icon: () => <FontAwesomeIcon icon={faFacebook} className="text-2xl" />,
                    link: "https://www.facebook.com/share/16FqEZbv5B/?mibextid=wwXIfr",
                  },
                  {
                    name: "Email Us",
                    color: "from-purple-600 to-indigo-500",
                    icon: () => <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />, // ✉️ Email icon
                    link: "mailto:info@nextgenteches.com?subject=Inquiry%20from%20Website&body=Hello%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services.",
                  },
                ].map((btn, i) => (
                  <motion.a
                    key={i}
                    href={btn.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className={`flex items-center space-x-2 px-5 py-3 rounded-full font-medium text-white bg-gradient-to-r ${btn.color} shadow-md hover:shadow-xl transition-all duration-300`}
                  >
                    {btn.icon()}
                    <span>{btn.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* ==================== RIGHT COLUMN ==================== */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-lg text-gray-600">
                  Multiple ways to reach us for your convenience.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-lg p-3">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600">{detail}</p>
                          ))}
                        </div>
                        {info.action && (
                          <button
                            className="text-blue-600 hover:text-blue-700 font-medium mt-3"
                            onClick={() => {
                              if (info.title === "Phone Numbers") {
                                window.open(
                                  `https://wa.me/916387793353?text=${encodeURIComponent(
                                    "Hello! I would like to know more about NextGen Tech services."
                                  )}`,
                                  "_blank"
                                );
                              }
                            }}
                          >
                            {info.action}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-700">Support Available</div>
                </div>
                <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">&lt;24h</div>
                  <div className="text-gray-700">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <MessageSquare className="h-5 w-5 text-blue-600 mr-3" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Have more questions? We're here to help!
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait any longer. Contact us today and let's discuss how we can
            bring your technology vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
