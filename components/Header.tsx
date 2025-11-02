"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll transparency
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Navigation items
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "CRM Development", href: "/services#crm" },
        { name: "Cloud Integration", href: "/services#cloud" },
        { name: "Network Consulting", href: "/services#network" },
        { name: "Performance Testing", href: "/services#testing" },
      ],
    },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/portfolio" },
    {
      name: "Careers",
      href: "/careers",
      dropdown: [
        { name: "Job Openings", href: "/careers#jobs" },
        { name: "Internships", href: "/careers#internships" },
        { name: "Training Programs", href: "/careers#training" },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md border-b border-gray-200/30"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* --- Logo --- */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center p-1.5 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition duration-300">
              <Logo className="h-9 w-auto" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                NextGen Tech
              </h1>
              <p className="text-xs text-gray-500 -mt-0.5">
                Empowering Digital Futures
              </p>
            </div>
          </Link>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`text-[15px] font-medium transition-all duration-300 px-2 py-1 rounded-lg ${pathname === item.href
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                    }`}
                >
                  <div className="flex items-center gap-1">
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                      />
                    )}
                  </div>
                  <div
                    className={`h-[2px] bg-gradient-to-r from-blue-500 to-green-500 rounded-full mt-1 transition-all duration-300 ${pathname === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                      }`}
                  ></div>
                </Link>

                {/* --- Dropdown --- */}
                {item.dropdown && (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className={`absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100 py-2 transition-all duration-200 ${activeDropdown === item.name
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                      }`}
                  >
                    {item.dropdown.map((d) => (
                      <Link
                        key={d.name}
                        href={d.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50/60 transition duration-200"
                      >
                        {d.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* --- Buttons --- */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-white font-medium bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            >
              Get Quote
            </Link>
            <a
              href="https://wa.me/916387793352?text=Hello! I would like to know more about NextGen Tech services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-green-500 to-green-600 hover:shadow-lg hover:shadow-green-500/30 flex items-center gap-2 transition-all"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7 text-white" />
              WhatsApp
            </a>
          </div>

          {/* --- Mobile Toggle --- */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-all"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* --- Mobile Navigation --- */}
      <div
        className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 transition-all duration-500 overflow-hidden ${isMenuOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-5 py-4 space-y-2">
          {navigation.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2.5 px-4 rounded-lg text-base font-medium ${pathname === item.href
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50/50"
                  }`}
              >
                {item.name}
              </Link>
            </div>
          ))}

          <div className="pt-4 space-y-3">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-xl hover:shadow-lg text-center font-medium transition-all"
            >
              Get Quote
            </Link>
            <a
              href="https://wa.me/916387793352?text=Hello! I would like to know more about NextGen Tech services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl hover:shadow-lg text-center font-medium justify-center items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

