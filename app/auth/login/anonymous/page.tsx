"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AnonymousLogin() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center 
      bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 px-6 py-16 text-center">

      {/* Wavy Background */}
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
            width="140"
            height="140"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 70 Q 35 40, 70 70 T 140 70"
              fill="none"
              stroke="rgba(59,130,246,0.3)"
              strokeWidth="3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavePattern)" />
      </svg>

      {/* Floating Blobs */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute w-[380px] h-[380px] bg-blue-300/25 
          rounded-full blur-[100px] top-16 left-16 will-change-transform"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute w-[420px] h-[420px] bg-indigo-300/25 
          rounded-full blur-[120px] bottom-14 right-16 will-change-transform"
      />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative z-10 max-w-md w-full bg-white/85 backdrop-blur-xl 
          border border-white/50 rounded-3xl shadow-xl p-10 flex flex-col items-center justify-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Login
        </h2>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-5 py-4 mb-4 rounded-full border border-gray-300
            bg-white/80 text-gray-800 placeholder:text-gray-400
            focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-5 py-4 mb-2 rounded-full border border-gray-300
            bg-white/80 text-gray-800 placeholder:text-gray-400
            focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Forgot Password (Centered) */}
        <div className="w-full text-center mb-6">
          <Link
            href="/auth/register/security-question"
            className="text-indigo-600 text-sm hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 
            text-white font-semibold rounded-full shadow-lg transition-all mb-4"
        >
          Login
        </motion.button>

        {/* Back Link */}
        <Link href="/auth" className="text-indigo-600 mt-2 hover:underline">
          ← Back
        </Link>
      </motion.div>
    </main>
  );
}
