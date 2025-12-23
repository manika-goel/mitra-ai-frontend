"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Heart } from "lucide-react";

export default function InformationPage() {
  return (
    <main
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center 
      bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 px-6 py-20 text-center"
    >
      {/* ===== Background Waves (static – GPU friendly) ===== */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="wavePattern"
            x="0"
            y="0"
            width="180"
            height="180"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 90 Q 45 50, 90 90 T 180 90"
              fill="none"
              stroke="rgba(99,102,241,0.22)"
              strokeWidth="3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavePattern)" />
      </svg>

      {/* ===== Floating Bubbles (lighter & slower) ===== */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute w-[420px] h-[420px] bg-blue-300/25 
        rounded-full blur-[100px] top-16 left-20 will-change-transform"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute w-[520px] h-[520px] bg-indigo-300/25 
        rounded-full blur-[120px] bottom-12 right-20 will-change-transform"
      />

      {/* ===== Main Content ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-5xl w-full"
      >
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6"
        >
          🌿 Welcome to <span className="text-indigo-600">MitrAI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          Discover your digital companion for emotional wellness.{" "}
          <span className="text-indigo-700 font-semibold">
            Understand, express, and feel supported — safely and calmly.
          </span>
        </motion.p>

        {/* ===== Info Cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            className="relative bg-white/80 backdrop-blur-xl border border-white/50 
            rounded-3xl shadow-lg p-10 transition-all duration-300"
          >
            <div
              className="absolute -top-7 left-1/2 -translate-x-1/2 
              bg-indigo-500 text-white p-4 rounded-full shadow-md"
            >
              <Brain className="w-7 h-7" />
            </div>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
              What is MitrAI?
            </h2>

            <p className="text-gray-700 text-base leading-relaxed">
              MitrAI is your AI-powered emotional companion 🤍  
              A calm, judgment-free space where you can talk freely, reflect honestly,
              and feel heard whenever you need.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            className="relative bg-white/80 backdrop-blur-xl border border-white/50 
            rounded-3xl shadow-lg p-10 transition-all duration-300"
          >
            <div
              className="absolute -top-7 left-1/2 -translate-x-1/2 
              bg-blue-500 text-white p-4 rounded-full shadow-md"
            >
              <Heart className="w-7 h-7" />
            </div>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
              Why MitrAI?
            </h2>

            <p className="text-gray-700 text-base leading-relaxed">
              Because every mind deserves support. 🌱  
              MitrAI helps you navigate stress, confusion, and loneliness with empathy,
              clarity, and calm — at your own pace.
            </p>
          </motion.div>
        </div>

        {/* Privacy Line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-gray-600 text-sm"
        >
          🔒 Your conversations are private, secure, and always under your control.
        </motion.p>

        {/* Next Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-14"
        >
          <Link href="/language">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="px-14 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 
              text-white text-lg font-semibold rounded-full shadow-lg 
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
