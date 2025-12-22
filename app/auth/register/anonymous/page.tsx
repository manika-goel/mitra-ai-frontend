"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AnonymousLoginPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 px-6 py-16 text-center">

      {/* Wavy Background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="wavePattern"
            x="0"
            y="0"
            width="140"
            height="140"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 70 Q 35 40, 70 70 T 140 70"
              fill="none"
              stroke="rgba(59,130,246,0.35)"
              strokeWidth="3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavePattern)" />
      </svg>

      {/* Animated Blobs */}
      <motion.div
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute w-[500px] h-[500px] bg-blue-300/40 rounded-full blur-3xl top-10 left-10"
      />
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute w-[600px] h-[600px] bg-indigo-300/30 rounded-full blur-3xl bottom-10 right-10"
      />

      {/* Anonymous Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-md w-full bg-white/80 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl p-10 flex flex-col items-center"
      >
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Stay Anonymous
        </motion.h1>

        <p className="text-gray-600 text-sm mb-8">
          No email. No phone. Just a safe space for you 💙
        </p>

        {/* Nickname Input */}
        <input
          type="text"
          placeholder="Choose a nickname (optional)"
          className="w-full px-5 py-4 rounded-full
          border border-gray-300
          bg-white/80
          text-gray-800
          placeholder:text-gray-400
          caret-indigo-500
          focus:bg-white
          focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
        />

        {/* Trusted Person Input */}
        <input
          type="text"
          placeholder="Who is the person you trust most?"
          className="w-full px-5 py-4 rounded-full
          border border-gray-300
          bg-white/80
          text-gray-800
          placeholder:text-gray-400
          caret-indigo-500
          focus:bg-white
          focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-6"
        />

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full shadow-lg transition-all mb-6"
        >
          Register
        </motion.button>

        {/* Footer */}
        <p className="text-sm text-gray-500">
          Want full access?{" "}
          <Link
            href="/auth/login/email"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login with Email
          </Link>
        </p>
      </motion.div>

      <p className="absolute bottom-6 text-gray-500 text-sm z-10">
        © 2025 MitrAI | Your Emotional Wellbeing Partner 💙
      </p>
    </main>
  );
}
