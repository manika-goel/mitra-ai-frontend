"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LoginPage() {
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
        className="absolute w-[540px] h-[540px] bg-blue-300/40 rounded-full blur-3xl top-10 left-10"
      />
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute w-[680px] h-[680px] bg-indigo-300/30 rounded-full blur-3xl bottom-10 right-10"
      />

      {/* Cards Wrapper */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-14 w-full max-w-5xl">

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full bg-white/90 backdrop-blur-2xl border border-white/60 
          rounded-3xl shadow-2xl px-12 py-16 flex flex-col items-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-12">
            Login
          </h1>

          <div className="flex flex-col gap-8 w-full">
            {/* Login as Anonymous – EXACT purple */}
            <Link href="/auth/login/anonymous">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-full min-h-[64px]
                bg-[#615FFF] hover:bg-[#514DFF]
                text-white text-lg font-semibold
                rounded-full
                shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
              >
                Login as Anonymous
              </motion.button>
            </Link>

            {/* Login with Email – EXACT blue */}
            <Link href="/auth/login/email">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-full min-h-[64px]
                bg-[#2B7FFF] hover:bg-[#1F6FFF]
                text-white text-lg font-semibold
                rounded-full
                shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
              >
                Login with Email
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Register Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="w-full bg-white/90 backdrop-blur-2xl border border-white/60 
          rounded-3xl shadow-2xl px-12 py-16 flex flex-col items-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-12">
            Register
          </h1>

          <div className="flex flex-col gap-8 w-full">
            {/* Register with Email – SAME blue */}
            <Link href="/auth/register/email">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-full min-h-[64px]
                bg-[#2B7FFF] hover:bg-[#1F6FFF]
                text-white text-lg font-semibold
                rounded-full
                shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
              >
                Register with Email
              </motion.button>
            </Link>

            {/* Register as Anonymous – SAME purple */}
            <Link href="/auth/register/anonymous">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="w-full min-h-[64px]
                bg-[#615FFF] hover:bg-[#514DFF]
                text-white text-lg font-semibold
                rounded-full
                shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
              >
                Register as Anonymous
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>

      {/* Footer */}
      <p className="absolute bottom-6 text-gray-600 text-sm z-10">
        © 2025 MitrAI | Your Emotional Wellbeing Partner 💙
      </p>
    </main>
  );
}
