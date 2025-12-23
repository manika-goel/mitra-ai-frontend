"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function SecurityQuestionPage() {
  const [answer, setAnswer] = useState("");

  const securityQuestion =
    "What is the name of a person you trust the most?";

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center 
    bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 px-6 py-16">

      {/* Wavy Background (static) */}
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

      {/* Floating Blobs (lighter & slower) */}
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute w-[380px] h-[380px] bg-blue-300/30 
        rounded-full blur-[100px] top-16 left-16 will-change-transform"
      />
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute w-[460px] h-[460px] bg-indigo-300/25 
        rounded-full blur-[120px] bottom-14 right-16 will-change-transform"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-xl w-full bg-white/90 backdrop-blur-xl 
        border border-white/60 rounded-3xl shadow-xl px-12 py-14"
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl font-extrabold text-gray-900 mb-4 text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Security Question
        </motion.h1>

        {/* Description */}
        <p className="text-gray-800 text-center mb-10 leading-relaxed">
          This question will be used to recover your account
          <br />
          if you ever lose access.
        </p>

        {/* Fixed Question */}
        <div className="mb-8">
          <label className="block mb-3 text-gray-900 font-semibold">
            Your security question
          </label>

          <div className="w-full px-6 py-5 rounded-2xl bg-indigo-50 
          border border-indigo-200 text-gray-900 font-medium">
            {securityQuestion}
          </div>
        </div>

        {/* Answer Input */}
        <motion.input
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          type="text"
          placeholder="Type your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full px-6 py-5 rounded-full border border-gray-400 bg-white
          text-gray-900 placeholder:text-gray-500
          focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-8"
        />

        {/* Save Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          disabled={!answer}
          className="w-full py-5 bg-indigo-600 hover:bg-indigo-700
          disabled:opacity-40 disabled:cursor-not-allowed
          text-white text-lg font-semibold rounded-full shadow-lg"
        >
          Login
        </motion.button>
      </motion.div>

      {/* Footer */}
      <p className="absolute bottom-6 text-gray-600 text-sm z-10">
        © 2025 MitrAI | Your Emotional Wellbeing Partner 💙
      </p>
    </main>
  );
}
