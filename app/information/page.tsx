"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Shield, Brain } from "lucide-react"; // icons from lucide-react

export default function InformationPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 px-6 py-20 text-center">
      {/* ===== Background Waves ===== */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
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
      ></motion.div>
      <motion.div
        animate={{ y: [0, -60, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute w-[700px] h-[700px] bg-indigo-300/30 rounded-full blur-[140px] bottom-10 right-20"
      ></motion.div>

      {/* ===== Main Content ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-6xl w-full"
      >
        {/* Title Section */}
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
          className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed"
        >
          Discover your digital companion for emotional wellness.  
          <span className="text-indigo-700 font-semibold">
            Understand, express, and heal — safely and beautifully.
          </span>
        </motion.p>

        {/* ===== Info Cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-500 text-white p-4 rounded-full shadow-lg">
              <Brain className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-semibold text-indigo-600 mt-6 mb-4">
              What is MitrAI?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              MitrAI is your AI-powered emotional companion 🤖💙  
              It listens, understands, and gently guides you through tough times —  
              offering empathy, mindfulness, and positivity whenever you need it most.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-500 text-white p-4 rounded-full shadow-lg">
              <Heart className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-semibold text-indigo-600 mt-6 mb-4">
              Why we built it
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Because everyone deserves a safe, stigma-free space 🌸  
              MitrAI helps people express, reflect, and heal emotionally —  
              bringing mental health support right to your fingertips.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-600 text-white p-4 rounded-full shadow-lg">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-semibold text-indigo-600 mt-6 mb-4">
              Privacy & Trust
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Your trust is everything 🕊️  
              We use encrypted conversations and zero data sharing.  
              You can open up freely — your words, your emotions, your space.
            </p>
          </motion.div>
        </div>

        {/* ===== Next Button ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <Link href="/language">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="px-12 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
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
