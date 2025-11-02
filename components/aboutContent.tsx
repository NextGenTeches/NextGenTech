"use client";
import * as React from "react";
import { Target, Eye, Users, Shield, Zap, CheckCircle } from "lucide-react";

const AboutContent = () => {
  const values = [
    { icon: Target, title: "Innovation First", description: "We embrace cutting-edge technologies to deliver future-ready solutions." },
    { icon: Shield, title: "Security & Trust", description: "Government-grade security standards in every project we undertake." },
    { icon: Users, title: "Client Success", description: "Your success is our priority. We build lasting partnerships." },
    { icon: Zap, title: "Excellence", description: "Commitment to quality and continuous improvement in all our services." },
  ];

  const team = [
    {
      name: "Praveen Rai",
      title: "Managing Director",
      phone: "+91 6387793352",
      linkedin: "https://www.linkedin.com/in/praveen-rai-615668255/",
      image: "/praveen.jpg",
      specialty: "Strategic Leadership & Business Development",
    },
    {
      name: "Harsh Rai",
      title: "Web Developer",
      phone: "+91 6307953590",
      linkedin: "https://www.linkedin.com/in/harshkumarrai01m/",
      image: "/harsh.jpg",
      specialty: "Full Stack Development & UI/UX Design",
    },
    {
      name: "Aman Verma",
      title: "Operations Manager",
      phone: "+91 9517384638",
      linkedin: "https://www.linkedin.com/in/aman-verma-ba854236b/",
      image: "/aman.png",
      specialty: "Project Management & Client Relations",
    },
    {
      name: "Sadiq Khan",
      title: "Digital Media Manager",
      phone: "+91 9792408077",
      linkedin: "https://www.linkedin.com/in/sadiq-khan-234049250",
      image: "/sadik.jpg",
      specialty: "Digital Marketing & Social Media Strategy",
    },
    {
      name: "Pulkit Bhardwaj",
      title: "Web Developer",
      phone: "+91 6397045756",
      linkedin: "https://www.linkedin.com/in/pulkit-bhardwaj-60b78924a",
      image: "/pulkit.jpg",
      specialty: "Full Stack Development",
    },
  ];

  const milestones = [
    { year: "June 2025", title: "Company Founded", description: "NextGen Tech officially launched with a vision to transform the technology landscape." },
    { year: "June 2025", title: "First Client Projects", description: "Secured our first clients and began delivering innovative solutions." },
    { year: "June 2025", title: "Team Expansion", description: "Growing our core team with talented professionals who share our vision." },
    { year: "July 2025", title: "Service Portfolio", description: "Expanding our service offerings to include comprehensive digital solutions." },
    { year: "Aug 2025", title: "Market Presence", description: "Building strong market presence and establishing key partnerships." },
    { year: "2025", title: "Future Goals", description: "Aiming to become a recognized leader in innovative technology solutions." },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NextGen Tech",
    url: "https://www.nextgenteches.com/about",
    logo: "https://www.nextgenteches.com/nextgen-logo.png",
    sameAs: [
      "https://www.linkedin.com/company/nextgenteches/",
      "https://www.instagram.com/nextgenteches/",
      "https://www.facebook.com/nextgenteches/"
    ],
    founder: { "@type": "Person", name: "Praveen Rai", jobTitle: "Managing Director" },
    description:
      "NextGen Tech is a system integrator and technology solutions company offering software development, system integration, and digital transformation services across India.",
    foundingDate: "2025-06-01",
    address: { "@type": "PostalAddress", addressCountry: "IN" },
  };

  return (
    <div>
      {/* ✅ Your original layout and sections (unchanged) */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">NextGen Tech</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A fresh start in the technology industry, bringing innovative solutions and modern approaches to system integration, software development, and digital transformation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To revolutionize the technology landscape with fresh, innovative solutions that empower businesses to achieve digital excellence.
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become India's most trusted technology partner for startups, SMEs, and forward-thinking organizations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 mb-12">The principles that guide everything we do</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group hover:-translate-y-2">
                <div className="bg-blue-100 rounded-full p-4 w-fit mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <value.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <p className="text-xl text-gray-600 mb-12">Experienced professionals leading our vision forward</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-blue-100"
                />
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.title}</p>
                <p className="text-sm text-gray-600 mb-3">{member.specialty}</p>
                <a href={`tel:${member.phone}`} className="block text-blue-600 hover:text-blue-800 text-sm mb-2">
                  {member.phone}
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                >
                  LinkedIn Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 mb-12">Key milestones in our growth and evolution</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((m, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="text-2xl font-bold text-blue-600 mb-2">{m.year}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{m.title}</h3>
                <p className="text-gray-600">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">NextGen Tech by Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div><div className="text-4xl font-bold text-blue-600 mb-2">5+</div><p>Active Projects</p></div>
            <div><div className="text-4xl font-bold text-blue-600 mb-2">10+</div><p>Early Clients</p></div>
            <div><div className="text-4xl font-bold text-blue-600 mb-2">8+</div><p>Team Members</p></div>
            <div><div className="text-4xl font-bold text-blue-600 mb-2">30+</div><p>Days Since Launch</p></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Modern Tech Stack", "Agile Methodology", "Client-First Approach", "Innovation Focused"].map((item, i) => (
              <div key={i} className="flex items-center justify-center space-x-3 bg-gray-50 rounded-lg p-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
