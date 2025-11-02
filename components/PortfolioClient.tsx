"use client";

import { useState } from "react";
import Image from "next/image";
import {
    ExternalLink,
    Github,
    Calendar,
    Users,
    TrendingUp,
    Award,
    Filter,
} from "lucide-react";

export default function PortfolioClient() {
    const [activeFilter, setActiveFilter] = useState("all");

    const projects = [
        {
            id: 1,
            title: "Enterprise CRM Solution",
            category: "crm",
            description:
                "Advanced customer relationship management system with AI-powered analytics and automation for growing businesses.",
            image:
                "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
            features: [
                "Lead Management",
                "Sales Analytics",
                "Automation",
                "Mobile App",
            ],
            stats: { leads: "5K+", conversion: "35%", automation: "70%" },
            year: 2025,
            status: "In Progress",
        },
        {
            id: 2,
            title: "Cloud Migration Platform",
            category: "web",
            description:
                "Comprehensive cloud migration solution helping businesses transition from legacy systems to modern cloud infrastructure.",
            image:
                "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
            features: [
                "Auto Migration",
                "Cost Optimization",
                "Security Compliance",
                "Monitoring",
            ],
            stats: { migrations: "20+", savings: "40%", uptime: "99.9%" },
            year: 2025,
            status: "In Progress",
        },
        {
            id: 3,
            title: "E-Learning Management System",
            category: "education",
            description:
                "Modern learning management system with interactive features, progress tracking, and certification management.",
            image:
                "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
            features: [
                "Video Streaming",
                "Interactive Quizzes",
                "Progress Tracking",
                "Certificates",
            ],
            stats: { students: "2K+", courses: "50+", completion: "80%" },
            year: 2025,
            status: "Planning",
        },
        {
            id: 4,
            title: "E-Commerce Platform",
            category: "web",
            description:
                "Scalable e-commerce solution with integrated payment gateway and inventory management.",
            image:
                "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            features: ["Product Catalog", "Payment Gateway", "Inventory", "Analytics"],
            stats: { products: "2K+", transactions: "$500K+", performance: "1.5s" },
            year: 2025,
            status: "Completed",
        },
        {
            id: 5,
            title: "Fintech Mobile App",
            category: "mobile",
            description:
                "Modern fintech application with secure payment processing, budget tracking, and financial analytics.",
            image:
                "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["React Native", "Node.js", "PostgreSQL", "Blockchain"],
            features: [
                "Secure Payments",
                "Budget Tracking",
                "Analytics",
                "Multi-currency",
            ],
            stats: {
                downloads: "10K+",
                rating: "4.7/5",
                transactions: "50K+",
            },
            year: 2025,
            status: "Completed",
        },
        {
            id: 6,
            title: "Healthcare Management Portal",
            category: "web",
            description:
                "Digital healthcare platform connecting patients, doctors, and healthcare providers with appointment scheduling and telemedicine.",
            image:
                "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["React", "Node.js", "PostgreSQL", "WebRTC"],
            features: [
                "Appointment Booking",
                "Telemedicine",
                "Patient Records",
                "Prescription Management",
            ],
            stats: { patients: "1K+", doctors: "100+", appointments: "5K+" },
            year: 2025,
            status: "In Progress",
        },
    ];

    const categories = [
        { id: "all", name: "All Projects", count: projects.length },
        { id: "government", name: "Government", count: projects.filter((p) => p.category === "government").length },
        { id: "crm", name: "CRM Systems", count: projects.filter((p) => p.category === "crm").length },
        { id: "web", name: "Web Applications", count: projects.filter((p) => p.category === "web").length },
        { id: "mobile", name: "Mobile Apps", count: projects.filter((p) => p.category === "mobile").length },
        { id: "education", name: "Education", count: projects.filter((p) => p.category === "education").length },
    ];

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    const testimonials = [
        {
            quote:
                "Working with NextGen Tech has been fantastic. Their team delivered exactly what we needed with great attention to detail and professionalism.",
            author: "Satisfied Client",
            title: "Business Owner",
            project: "Custom Web Application",
        },
        {
            quote:
                "The digital marketing campaign they created for us significantly improved our online presence. Highly recommend their services!",
            author: "Happy Customer",
            title: "Marketing Manager",
            project: "Digital Marketing Campaign",
        },
        {
            quote:
                "NextGen Tech's innovative approach and dedication to quality made our project a success. Great team to work with!",
            author: "Delighted Client",
            title: "Project Coordinator",
            project: "Mobile Application Development",
        },
    ];

    return (
        <div>
            {/* ===== HERO SECTION ===== */}
            <section className="bg-gradient-to-b from-blue-50 to-white py-24 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                        Our <span className="text-blue-600">Portfolio</span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        Showcasing successful projects that demonstrate our expertise in delivering
                        innovative technology solutions.
                    </p>
                </div>
            </section>

            {/* ===== STATS SECTION ===== */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-3">
                            Key <span className="text-blue-600">Highlights</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            A quick snapshot of our achievements and ongoing success stories.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
                            <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                            <div className="text-gray-700 font-medium">Active Projects</div>
                        </div>
                        <div className="text-center bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
                            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                            <div className="text-gray-700 font-medium">Early Clients</div>
                        </div>
                        <div className="text-center bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
                            <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                            <div className="text-gray-700 font-medium">Client Satisfaction</div>
                        </div>
                        <div className="text-center bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition">
                            <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
                            <div className="text-gray-700 font-medium">Month Since Launch</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FILTER SECTION ===== */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Explore by <span className="text-blue-600">Category</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 mb-6">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setActiveFilter(category.id)}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeFilter === category.id
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROJECTS SECTION ===== */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Featured <span className="text-blue-600">Projects</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Dive into our recent work that highlights our ability to innovate and deliver value across industries.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map(project => (
                            <div
                                key={project.id}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'Completed'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-blue-100 text-blue-800'
                                                }`}
                                        >
                                            {project.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                                        <span className="text-sm text-gray-500">{project.year}</span>
                                    </div>

                                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.features.slice(0, 3).map((feature, i) => (
                                                <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                                    {feature}
                                                </span>
                                            ))}
                                            {project.features.length > 3 && (
                                                <span className="text-blue-600 text-xs">
                                                    +{project.features.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, i) => (
                                                <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Project Stats:</h4>
                                        <div className="grid grid-cols-3 gap-2 text-center">
                                            {Object.entries(project.stats).map(([k, v], i) => (
                                                <div key={i} className="bg-gray-50 rounded p-2">
                                                    <div className="text-sm font-bold text-blue-600">{v}</div>
                                                    <div className="text-xs text-gray-600 capitalize">{k}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Testimonials */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gray-900">Client </span>
                        <span className="text-blue-600">Testimonials</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        What our clients say about their experience
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all"
                            >
                                <p className="text-gray-700 mb-6 italic leading-relaxed">
                                    "{t.quote}"
                                </p>
                                <div className="font-semibold text-gray-900">{t.author}</div>
                                <div className="text-gray-600 text-sm">{t.title}</div>
                                <div className="text-blue-600 text-sm mt-2 font-medium">
                                    Project: {t.project}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gray-900">Technology </span>
                        <span className="text-blue-600">Stack</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-16">
                        Cutting-edge technologies powering our innovative solutions
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {[
                            "React",
                            "Node.js",
                            "Python",
                            "PostgreSQL",
                            "MongoDB",
                            "Docker",
                            "Kubernetes",
                            "AWS",
                            "Azure",
                            "Linux",
                            "Redis",
                            "Elasticsearch",
                        ].map((tech, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <div className="text-lg font-semibold text-gray-900">{tech}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-blue-600 text-center text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join our growing list of successful projects. Let’s turn your idea into
                        reality with NextGen Tech.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 font-semibold text-lg"
                        >
                            Start Your Project
                        </a>
                        <a
                            href="/services"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 font-semibold text-lg"
                        >
                            View Our Services
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}
