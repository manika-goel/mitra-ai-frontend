"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Heart } from "lucide-react";

export default function InformationPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center 
    bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 px-6 py-20 text-center">

      {/* ===== Background Waves ===== */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="wavePattern" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
            <path
              d="M 0 90 Q 45 50, 90 90 T 180 90"
              fill="none"
              stroke="rgba(99,102,241,0.25)"
              strokeWidth="3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavePattern)" />
      </svg>

      {/* ===== Floating Bubbles ===== */}
      <motion.div
        animate={{ y: [0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute w-[550px] h-[550px] bg-blue-300/30 rounded-full blur-[120px] top-10 left-20"
      />
      <motion.div
        animate={{ y: [0, -60, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute w-[700px] h-[700px] bg-indigo-300/30 rounded-full blur-[140px] bottom-10 right-20"
      />

      {/* ===== Main Content ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl w-full"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6"
        >
          🌿 Welcome to <span className="text-indigo-600">MitrAI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Discover your digital companion for emotional wellness.{" "}
          <span className="text-indigo-700 font-semibold">
            Understand, express, and feel supported — safely and calmly.
          </span>
        </motion.p>

        {/* ===== Info Cards (ONLY 2) ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-white/80 backdrop-blur-xl border border-white/50 
            rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 
            bg-indigo-500 text-white p-4 rounded-full shadow-lg">
              <Brain className="w-8 h-8" />
            </div>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
              What is MitrAI?
            </h2>

            <p className="text-gray-700 text-base leading-relaxed">
              MitrAI is your AI-powered emotional companion 🤍  
              A safe space where you can talk freely, reflect honestly, and feel heard —  
              without judgment, pressure, or expectations.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-white/80 backdrop-blur-xl border border-white/50 
            rounded-3xl shadow-xl p-10 hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 
            bg-blue-500 text-white p-4 rounded-full shadow-lg">
              <Heart className="w-8 h-8" />
            </div>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
              Why MitrAI?
            </h2>

            <p className="text-gray-700 text-base leading-relaxed">
              Because every mind deserves a companion. 🌱  
              MitrAI exists to support people during moments of stress, confusion, or
              loneliness — offering empathy, clarity, and calm whenever you need it.
            </p>
          </motion.div>
        </div>

        {/* ===== Privacy Line (Single) ===== */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-gray-600 text-sm"
        >
          🔒 Your conversations are private, secure, and always under your control.
        </motion.p>

        {/* ===== Next Button ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-16"
        >
          <Link href="/language">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="px-14 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 
              text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl 
              transition-all duration-300"
            >
              Next ➜
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <p className="absolute bottom-6 text-gray-500 text-sm z-10">
        © 2025 MitrAI | Designed for Your Mind 💙
      </p>
    </main>
  );
}
