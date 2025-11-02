"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 via-white to-blue-100 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-10 max-w-lg border border-blue-100"
      >
        <h1 className="text-9xl font-extrabold text-blue-600 mb-4 drop-shadow-sm">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The page you’re looking for might have been moved, deleted, or never
          existed. Let’s get you back on track!
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-xl"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </motion.button>
        </Link>
      </motion.div>

      <p className="mt-12 text-gray-400 text-sm">
        © {new Date().getFullYear()} NextGen Tech — Empowering Digital Futures
      </p>
    </section>
  );
}
