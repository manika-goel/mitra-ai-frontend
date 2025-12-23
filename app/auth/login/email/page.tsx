"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function EmailLogin() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 px-6 py-16 text-center">
      
      {/* Background */}
      <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="wavePattern" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
            <path d="M 0 70 Q 35 40, 70 70 T 140 70" fill="none" stroke="rgba(59,130,246,0.35)" strokeWidth="3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavePattern)" />
      </svg>

      {/* Animated Blobs */}
      <motion.div animate={{ y: [0, 40, 0] }} transition={{ repeat: Infinity, duration: 8 }} className="absolute w-[500px] h-[500px] bg-blue-300/40 rounded-full blur-3xl top-10 left-10" />
      <motion.div animate={{ y: [0, -40, 0] }} transition={{ repeat: Infinity, duration: 10 }} className="absolute w-[600px] h-[600px] bg-indigo-300/30 rounded-full blur-3xl bottom-10 right-10" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-md w-full bg-white/80 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl p-10 flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Login with Email</h2>

        <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
        <input type="password" placeholder="Enter your password" className="w-full px-4 py-3 mb-3 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400" />

        <Link href="/auth/login/forgot-password" className="text-indigo-600 hover:underline text-sm mb-6 block">
          Forgot Password?
        </Link>

        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full shadow-lg transition-all mb-4">
          Login
        </motion.button>

        {/* Fixed Back Button */}
        <Link href="/auth" className="w-full">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 border border-indigo-500 text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-all"
          >
            ← Back
          </motion.button>
        </Link>
      </motion.div>
    </main>
  );
}
