// components/CareersContent.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    GraduationCap,
    Briefcase,
    Award,
    Users,
    CheckCircle,
    MapPin,
    DollarSign,
    Send,
    Building,
} from "lucide-react";

const CareersContent: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState<"jobs" | "internships" | "training">("jobs");
    const [highlightId, setHighlightId] = useState<string | null>(null);

    // Refs for sections
    const jobsRef = useRef<HTMLDivElement | null>(null);
    const internshipsRef = useRef<HTMLDivElement | null>(null);
    const trainingRef = useRef<HTMLDivElement | null>(null);

    // Form state (simple)
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        experience: "",
        interest: "",
        message: "",
        agree: false,
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<string | null>(null);

    // --- Content (kept intact) ---
    const jobOpenings = [
        {
            id: 1,
            title: "Full Stack Developer",
            type: "Full-time",
            location: "Remote",
            salary: "Unpaid (Equity + Experience)",
            experience: "1-3 years",
            skills: ["React", "Node.js", "PostgreSQL", "AWS"],
            description:
                "Join our founding team to build innovative solutions as we launch NextGen Tech. Great opportunity for equity and rapid career growth.",
            requirements: [
                "Experience in React and Node.js",
                "Database design and optimization skills",
                "Willingness to learn cloud platforms (AWS/Azure)",
                "Startup mindset and eagerness to grow with the company",
            ],
        },
        {
            id: 2,
            title: "DevOps Engineer",
            type: "Full-time",
            location: "Remote",
            salary: "Unpaid (Equity + Experience)",
            experience: "2-4 years",
            skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
            description:
                "Help us build robust infrastructure from the ground up. Perfect role for someone wanting to shape a company's technical foundation.",
            requirements: [
                "Knowledge of containerization and orchestration",
                "CI/CD pipeline design and implementation",
                "Basic cloud infrastructure knowledge",
                "Passion for building scalable systems",
            ],
        },
        {
            id: 3,
            title: "Business Analyst",
            type: "Full-time",
            location: "Remote",
            salary: "Unpaid (Equity + Experience)",
            experience: "1-2 years",
            skills: ["Requirements Analysis", "Documentation", "Stakeholder Management"],
            description:
                "Be part of our core team defining business processes and client relationships as we establish NextGen Tech in the market.",
            requirements: [
                "Strong analytical and communication skills",
                "Basic experience in requirements gathering",
                "Knowledge of software development lifecycle",
                "Enthusiasm for startup environment and client interaction",
            ],
        },
    ];

    const internshipPrograms = [
        {
            title: "Software Development Internship",
            duration: "3-6 months",
            stipend: "Unpaid (Equity + Experience)",
            type: "Technical",
            description: "Hands-on experience with real projects using modern web technologies.",
            skills: ["JavaScript", "React", "Database", "API Development"],
            benefits: ["Mentorship", "Certificate", "Job Opportunity", "Live Projects"],
        },
        {
            title: "Digital Marketing Internship",
            duration: "3 months",
            stipend: "Unpaid (Equity + Experience)",
            type: "Non-Technical",
            description: "Learn digital marketing strategies for technology companies.",
            skills: ["Social Media", "Content Creation", "SEO", "Analytics"],
            benefits: ["Industry Exposure", "Portfolio Building", "Networking", "Certification"],
        },
        {
            title: "Business Operations Internship",
            duration: "4 months",
            stipend: "Unpaid (Equity + Experience)",
            type: "Non-Technical",
            description: "Support business operations and client relationship management.",
            skills: ["Project Management", "Client Communication", "Documentation", "Analysis"],
            benefits: ["Business Skills", "Client Interaction", "Process Learning", "Career Guidance"],
        },
    ];

    const certificationPrograms = [
        {
            title: "Full Stack Web Development",
            duration: "6 months",
            mode: "Online + Offline",
            fee: "₹",
            topics: ["HTML/CSS/JS", "React", "Node.js", "Database", "Deployment"],
            certification: "Industry Recognized",
            placement: "85% Job Placement Rate",
        },
        {
            title: "Cloud Computing & DevOps",
            duration: "4 months",
            mode: "Online",
            fee: "₹",
            topics: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
            certification: "AWS/Azure Certified",
            placement: "90% Job Placement Rate",
        },
        {
            title: "Performance Testing Specialist",
            duration: "3 months",
            mode: "Offline",
            fee: "₹",
            topics: ["LoadRunner", "JMeter", "Performance Analysis", "Test Planning"],
            certification: "HP LoadRunner Certified",
            placement: "80% Job Placement Rate",
        },
    ];

    const benefits = [
        {
            icon: GraduationCap,
            title: "Learning & Development",
            description: "Continuous skill development with latest technologies and certifications.",
        },
        {
            icon: Users,
            title: "Collaborative Environment",
            description: "Work with experienced professionals on challenging and meaningful projects.",
        },
        {
            icon: Award,
            title: "Recognition & Growth",
            description: "Performance-based promotions and recognition for outstanding contributions.",
        },
        {
            icon: Building,
            title: "Work-Life Balance",
            description: "Flexible working arrangements and comprehensive wellness programs.",
        },
    ];

    const tabs = [
        { id: "jobs", name: "Job Openings", icon: Briefcase },
        { id: "internships", name: "Internships", icon: GraduationCap },
        { id: "training", name: "Training Programs", icon: Award },
    ] as const;

    // Map id -> ref
    const sectionsMap: Record<string, React.RefObject<HTMLDivElement>> = {
        jobs: jobsRef,
        internships: internshipsRef,
        training: trainingRef,
    };

    // Smooth scroll with small delay to ensure DOM is ready
    const scrollToSection = (id: string) => {
        // set selected tab (keeps UI tab highlighted)
        if (id === "jobs" || id === "internships" || id === "training") {
            setSelectedTab(id);
        }

        // update URL hash without page reload
        try {
            if (typeof window !== "undefined") {
                const url = new URL(window.location.href);
                url.hash = `#${id}`;
                window.history.replaceState({}, "", url.toString());
            }
        } catch (e) {
            // ignore
        }

        // slight delay so React finishes re-rendering if needed
        setTimeout(() => {
            const ref = sectionsMap[id];
            const el = ref?.current;
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });

                // add temporary highlight
                setHighlightId(id);
                setTimeout(() => setHighlightId(null), 1700);
            }
        }, 50);
    };

    // On mount: if URL has hash, scroll to it
    useEffect(() => {
        if (typeof window === "undefined") return;

        const hash = (window.location.hash || "").replace("#", "");
        if (hash && sectionsMap[hash]) {
            // Ensure slight delay to allow layout/render
            setTimeout(() => {
                scrollToSection(hash);
            }, 120);
        }

        // Also handle future hashchanges (e.g. user clicks nav dropdown link)
        const onHashChange = () => {
            const newHash = (window.location.hash || "").replace("#", "");
            if (newHash && sectionsMap[newHash]) {
                scrollToSection(newHash);
            }
        };
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // --- Form handlers ---
    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    };
    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setForm((s) => ({ ...s, [name]: checked }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.phone || !form.interest || !form.agree) {
            setSubmitMessage("⚠️ Please fill in all required fields before submitting.");
            return;
        }

        setSubmitting(true);
        setSubmitMessage(null);

        try {
            const res = await fetch("/api/careers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!data.success) {
                throw new Error(data.error || "Submission failed");
            }

            setSubmitMessage("✅ Application submitted successfully. We'll contact you soon.");
            setForm({
                name: "",
                email: "",
                phone: "",
                experience: "",
                interest: "",
                message: "",
                agree: false,
            });
        } catch (err: any) {
            console.error(err);
            setSubmitMessage(
                err.message || "Something went wrong — please try again or email info@nextgenteches.com"
            );
        } finally {
            setSubmitting(false);
        }
    };


    // helper class when section is highlighted
    const highlightClass = (id: string) =>
        highlightId === id ? "ring-4 ring-yellow-200 bg-yellow-50 transition-all" : "";

    return (
        <div>
            {/* Hero */}
            <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Careers & Training <span className="text-blue-600">Hub</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Launch your career in technology with NextGen Tech. Explore job opportunities, internships,
                        professional training programs, and government job assistance.
                    </p>


                </div>
            </section>

            {/* Navigation Tabs (keeps prior UI) */}
            <section className="py-8 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => scrollToSection(tab.id)}
                                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${selectedTab === tab.id ? "bg-blue-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                <tab.icon className="h-5 w-5 mr-2" />
                                {tab.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Openings Section */}
            <div id="jobs" ref={jobsRef} className={`pt-8 ${highlightClass("jobs")}`}>
                {selectedTab === "jobs" || true ? ( // keep content rendered; selectedTab controls highlight and nav
                    <section className="py-20 bg-gray-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Job Openings</h2>
                                <p className="text-xl text-gray-600">Join our team of innovators and work on cutting-edge projects</p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                                {jobOpenings.map((job) => (
                                    <div key={job.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                        <div className="mb-6">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{job.type}</span>
                                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{job.experience}</span>
                                            </div>
                                        </div>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center text-gray-600">
                                                <MapPin className="h-4 w-4 mr-2" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <DollarSign className="h-4 w-4 mr-2" />
                                                <span>{job.salary}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-6">{job.description}</p>

                                        <div className="mb-4">
                                            <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                                            <ul className="list-disc list-inside text-gray-700">
                                                {job.requirements.map((req, idx) => (
                                                    <li key={idx}>{req}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="font-semibold text-gray-900 mb-2">Required Skills:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {job.skills.map((skill, index) => (
                                                    <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">{skill}</span>
                                                ))}
                                            </div>
                                        </div>

                                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">Apply Now</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ) : null}
            </div>

            {/* Internships Section */}
            <div id="internships" ref={internshipsRef} className={`pt-8 ${highlightClass("internships")}`}>
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Internship Programs</h2>
                            <p className="text-xl text-gray-600">Gain practical experience and launch your career with us</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {internshipPrograms.map((program, index) => (
                                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{program.type}</span>
                                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{program.duration}</span>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="flex items-center text-gray-600 mb-2">
                                            <DollarSign className="h-4 w-4 mr-2" />
                                            <span>Stipend: {program.stipend}</span>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-6">{program.description}</p>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-3">Skills You'll Learn:</h4>
                                        <div className="space-y-2">
                                            {program.skills.map((skill, skillIndex) => (
                                                <div key={skillIndex} className="flex items-center">
                                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                                    <span className="text-gray-700">{skill}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {program.benefits.map((benefit, benefitIndex) => (
                                                <span key={benefitIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{benefit}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">Apply for Internship</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Training Programs Section */}
            <div id="training" ref={trainingRef} className={`pt-8 ${highlightClass("training")}`}>
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NextGen Skill Academy</h2>
                            <p className="text-xl text-gray-600">Professional certification programs designed for career advancement</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {certificationPrograms.map((program, index) => (
                                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{program.duration}</span>
                                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{program.mode}</span>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="text-2xl font-bold text-blue-600 mb-2">{program.fee}</div>
                                        <div className="text-gray-600">Course Fee</div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-3">Course Topics:</h4>
                                        <div className="space-y-2">
                                            {program.topics.map((topic, topicIndex) => (
                                                <div key={topicIndex} className="flex items-center">
                                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                                    <span className="text-gray-700">{topic}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <div className="bg-gray-50 rounded-lg p-4">
                                            <div className="font-semibold text-gray-900 mb-1">{program.certification}</div>
                                            <div className="text-green-600 font-medium">{program.placement}</div>
                                        </div>
                                    </div>

                                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">Enroll Now</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose NextGen Tech?</h2>
                        <p className="text-xl text-gray-600">Benefits and opportunities that set us apart</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center group hover:-translate-y-2 transition-all duration-300">
                                <div className="bg-blue-100 rounded-lg p-4 w-fit mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                                    <benefit.icon className="h-8 w-8 text-blue-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="py-20 bg-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join Our Team?</h2>
                        <p className="text-xl text-blue-100">Submit your application and take the first step towards your dream career</p>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-xl">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                    <input name="name" value={form.name} onChange={handleInput} type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your full name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                    <input name="email" value={form.email} onChange={handleInput} type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                    <input name="phone" value={form.phone} onChange={handleInput} type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your phone number" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                                    <select name="experience" value={form.experience} onChange={handleInput} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                        <option value="">Select experience level</option>
                                        <option>Fresher (0-1 years)</option>
                                        <option>Junior (1-3 years)</option>
                                        <option>Mid-level (3-5 years)</option>
                                        <option>Senior (5+ years)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Interest Area *</label>
                                <select name="interest" value={form.interest} onChange={handleInput} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                                    <option value="">Select your area of interest</option>
                                    <option>Full-time Job</option>
                                    <option>Internship Program</option>
                                    <option>Training & Certification</option>
                                    <option>Government Job Assistance</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea name="message" value={form.message} onChange={handleInput} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Tell us about your background and career goals..." />
                            </div>

                            <div className="flex items-center space-x-3">
                                <input name="agree" checked={form.agree} onChange={handleCheckbox} type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                <span className="text-sm text-gray-700">I agree to the terms and conditions and privacy policy</span>
                            </div>
                            {submitMessage && (
                                <div
                                    className={`text-sm text-center mt-3 ${submitMessage.startsWith("✅") ? "text-green-600" : "text-red-500"
                                        }`}
                                >
                                    {submitMessage}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={submitting}
                                className={`w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center group transition-colors
    ${submitting ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"}`}
                            >
                                {submitting ? (
                                    "Submitting..."
                                ) : (
                                    <>
                                        Submit Application
                                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareersContent;
