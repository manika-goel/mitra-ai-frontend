"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MoodPage() {
  return (
    <main className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 px-6">

      {/* Stripes */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="waves" width="180" height="180" patternUnits="userSpaceOnUse">
            <path d="M0 90 Q45 50 90 90 T180 90" fill="none" stroke="rgba(99,102,241,0.25)" strokeWidth="3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waves)" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-xl text-center max-w-md"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Mood Tracker
        </h1>
        <p className="text-gray-600 mb-6">
          This is a dummy Mood Tracker page.
        </p>

        <Link href="/dashboard" className="text-indigo-600 font-semibold hover:underline">
          ← Back to Dashboard
        </Link>
      </motion.div>
    </main>
  );
}
