"use client";

import * as React from "react";
import { useState } from "react";
import { Calendar, User, ArrowRight, Search, Clock, TrendingUp, BookOpen, Code } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";


const BlogContent = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const blogPosts = [
        {
            id: 1,
            title: "The Future of System Integration in Government Sector",
            category: "government",
            excerpt:
                "Fresh perspectives on how new-age companies like NextGen Tech are bringing innovative approaches to government digitalization.",
            content:
                "As a newly launched company, we bring fresh insights to government digital transformation...",
            date: "2025-06-25",
            readTime: "8 min read",
            image:
                "https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=600",
            tags: ["Government", "Digital Transformation", "System Integration"],
            featured: true,
        },
        {
            id: 2,
            title: "Building Scalable CRM Systems: Best Practices",
            category: "technology",
            excerpt:
                "How NextGen Tech approaches CRM development with modern methodologies and fresh thinking for growing businesses.",
            content: "Starting fresh in 2025, we bring new perspectives to CRM development...",
            date: "2025-07-02",
            readTime: "6 min read",
            image:
                "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
            tags: ["CRM", "Software Development", "Scalability"],
            featured: false,
        },
        {
            id: 3,
            title: "Career Transition: From Non-Tech to IT Professional",
            category: "career",
            excerpt:
                "Join NextGen Tech's journey! Opportunities for fresh graduates and career changers in our growing startup.",
            content: "As a new company, we offer unique opportunities for career growth...",
            date: "2025-07-10",
            readTime: "10 min read",
            image:
                "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600",
            tags: ["Career Development", "Training", "Professional Growth"],
            featured: false,
        },
        {
            id: 4,
            title: "Cloud Security: Essential Considerations for SMBs",
            category: "technology",
            excerpt:
                "Key security measures that small and medium businesses should implement when moving to the cloud.",
            content: "Cloud security is paramount for businesses of all sizes...",
            date: "2025-07-18",
            readTime: "7 min read",
            image:
                "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
            tags: ["Cloud Security", "Cybersecurity", "SMB"],
            featured: false,
        },
        {
            id: 5,
            title: "Performance Testing Strategies for Modern Applications",
            category: "technology",
            excerpt:
                "Comprehensive approaches to testing application performance using industry-standard tools.",
            content: "Performance testing is crucial for application success...",
            author: "Vikram Singh",
            date: "2025-07-25",
            readTime: "9 min read",
            image:
                "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600",
            tags: ["Performance Testing", "LoadRunner", "JMeter"],
            featured: false,
        },
    ];

    const categories = [
        { id: "all", name: "All Posts", icon: BookOpen, count: blogPosts.length },
        { id: "technology", name: "Technology", icon: Code, count: blogPosts.filter((p) => p.category === "technology").length },
        { id: "career", name: "Career Development", icon: TrendingUp, count: blogPosts.filter((p) => p.category === "career").length },
    ];

    const featuredPost = blogPosts.find((post) => post.featured);
    const regularPosts = blogPosts.filter((post) => !post.featured);

    const filteredPosts = regularPosts.filter((post) => {
        const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
        const matchesSearch =
            searchQuery === "" ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
    });

    const trendingTopics = [
        "Digital Transformation",
        "Cloud Migration",
        "Career Development",
        "Government Technology",
        "System Integration",
        "Performance Testing",
        "CRM Development",
        "Cybersecurity",
    ];

    return (
        <>

            {/* Hero Section */}
            <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            NextGen Tech <span className="text-blue-600">Blog</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Insights, tutorials, and industry perspectives on system integration,
                            technology trends, and career development in the IT sector.
                        </p>
                    </div>
                </div>
            </section>

            {/* Search and Categories */}
            <section className="py-12 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto mb-8">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles, topics, or technologies..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                            />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category.id
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <category.icon className="h-5 w-5 mr-2" />
                                {category.name} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && selectedCategory === 'all' && searchQuery === '' && (
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium w-fit mb-4">
                                    Featured
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    {featuredPost.excerpt}
                                </p>

                                <div className="flex items-center space-x-6 mb-6">
                                    <div className="flex items-center text-gray-500">
                                        <User className="h-4 w-4 mr-2" />
                                        <span>{featuredPost.author}</span>
                                    </div>
                                    <div className="flex items-center text-gray-500">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center text-gray-500">
                                        <Clock className="h-4 w-4 mr-2" />
                                        <span>{featuredPost.readTime}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {featuredPost.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center group">
                                    Read Full Article
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            <div>
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Blog Posts Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {searchQuery ? `Search Results (${filteredPosts.length})` : 'Latest Articles'}
                                </h2>
                            </div>

                            <div className="space-y-8">
                                {filteredPosts.length > 0 ? (
                                    filteredPosts.map((post) => (
                                        <article
                                            key={post.id}
                                            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
                                        >
                                            <div className="md:flex">
                                                <div className="md:w-1/3">
                                                    <img
                                                        src={post.image}
                                                        alt={post.title}
                                                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div className="md:w-2/3 p-6">
                                                    <div className="flex items-center space-x-4 mb-3">
                                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                                                            {post.category}
                                                        </span>
                                                        <div className="flex items-center text-gray-500 text-sm">
                                                            <Clock className="h-4 w-4 mr-1" />
                                                            <span>{post.readTime}</span>
                                                        </div>
                                                    </div>

                                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                        {post.title}
                                                    </h3>

                                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                                        {post.excerpt}
                                                    </p>

                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {post.tags.slice(0, 3).map((tag, index) => (
                                                            <span
                                                                key={index}
                                                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center space-x-4">
                                                            <div className="flex items-center text-gray-500 text-sm">
                                                                <User className="h-4 w-4 mr-1" />
                                                                <span>{post.author}</span>
                                                            </div>
                                                            <div className="flex items-center text-gray-500 text-sm">
                                                                <Calendar className="h-4 w-4 mr-1" />
                                                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                                            </div>
                                                        </div>

                                                        <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group">
                                                            Read More
                                                            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    ))
                                ) : (
                                    <div className="text-center py-12">
                                        <div className="text-gray-400 mb-4">
                                            <Search className="h-16 w-16 mx-auto" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No Articles Found</h3>
                                        <p className="text-gray-600">
                                            Try adjusting your search terms or category filter.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="space-y-8">
                                {/* Trending Topics */}
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                        <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                                        Trending Topics
                                    </h3>
                                    <div className="space-y-2">
                                        {trendingTopics.map((topic, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSearchQuery(topic)}
                                                className="block w-full text-left text-gray-700 hover:text-blue-600 hover:bg-white px-3 py-2 rounded-lg transition-colors"
                                            >
                                                #{topic}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Newsletter Signup */}
                                <div className="bg-blue-600 rounded-xl p-6 text-white">
                                    <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                                    <p className="text-blue-100 mb-4">
                                        Get the latest insights and tutorials delivered to your inbox.
                                    </p>
                                    <div className="space-y-3">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full px-4 py-3 rounded-lg text-gray-900"
                                        />
                                        <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>

                                {/* Recent Categories */}
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                                    <div className="space-y-2">
                                        {categories.filter(cat => cat.id !== 'all').map((category) => (
                                            <button
                                                key={category.id}
                                                onClick={() => setSelectedCategory(category.id)}
                                                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition-colors ${selectedCategory === category.id
                                                        ? 'bg-blue-100 text-blue-600'
                                                        : 'text-gray-700 hover:bg-white'
                                                    }`}
                                            >
                                                <span className="flex items-center">
                                                    <category.icon className="h-4 w-4 mr-2" />
                                                    {category.name}
                                                </span>
                                                <span className="text-sm text-gray-500">({category.count})</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-20 bg-blue-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Want to Contribute?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Share your expertise with our community. We welcome guest posts
                        from industry professionals and thought leaders.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
                            Submit Article
                        </button>

                        {/* Contact Us Button */}
                        <Link href="/contact">
                            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

        </>
    );
};

export default BlogContent;
