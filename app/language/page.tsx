"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Globe2, MessageSquareHeart } from "lucide-react";

export default function LanguagePage() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 px-6 py-20 text-center">
      {/* ===== Decorative Background Waves ===== */}
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

      {/* ===== Floating Gradient Blobs ===== */}
      <motion.div
        animate={{ y: [0, 50, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute w-[550px] h-[550px] bg-blue-300/30 rounded-full blur-[120px] top-10 left-16"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -50, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
        className="absolute w-[650px] h-[650px] bg-indigo-300/30 rounded-full blur-[140px] bottom-10 right-16"
      ></motion.div>

      {/* ===== Main Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-5xl w-full flex flex-col items-center"
      >
        {/* Title Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="bg-white/60 backdrop-blur-lg p-4 rounded-2xl shadow-lg mb-6">
            <Globe2 className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
            🌍 Choose Your <span className="text-indigo-600">Language</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
            Select the language that feels most natural to you.  
            <span className="font-semibold text-indigo-700">MitrAI</span> adapts its tone to make your experience feel personal, comforting, and human 💙
          </p>
        </div>

        {/* ===== Language Options ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-4">
          {/* English Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => setSelected("English")}
            className={`cursor-pointer relative bg-white/80 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-xl p-10 transition-all duration-300 overflow-hidden ${
              selected === "English"
                ? "ring-4 ring-indigo-400 shadow-2xl scale-[1.02]"
                : "hover:shadow-2xl"
            }`}
          >
            <div className="absolute top-4 right-4 text-3xl">🇬🇧</div>
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
              English
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Communicate, express, and reflect in English effortlessly 💬  
              Perfect for global and formal communication —  
              where empathy meets clarity and understanding.
            </p>
          </motion.div>

          {/* Hindi Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => setSelected("Hindi")}
            className={`cursor-pointer relative bg-white/80 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-xl p-10 transition-all duration-300 overflow-hidden ${
              selected === "Hindi"
                ? "ring-4 ring-indigo-400 shadow-2xl scale-[1.02]"
                : "hover:shadow-2xl"
            }`}
          >
            <div className="absolute top-4 right-4 text-3xl">🇮🇳</div>
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
              हिन्दी
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              अपनी भावनाओं को <b>हिन्दी</b> में व्यक्त करें 💙  
              सहज, अपनापन भरी बातचीत और संवेदनशील प्रतिक्रिया पाएँ।  
              जब शब्द दिल से निकलें — MitrAI समझेगा।
            </p>
          </motion.div>
        </div>

        {/* ===== Continue Button ===== */}
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-14 flex flex-col items-center"
          >
            <Link href="/consent">
              <motion.button
                whileHover={{
                  scale: 1.07,
                  boxShadow: "0 0 25px rgba(99,102,241,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-14 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-lg font-semibold rounded-full shadow-xl transition-all duration-300"
              >
                Continue ➜
              </motion.button>
            </Link>
            <p className="mt-5 text-gray-700 text-base">
              Selected:{" "}
              <span className="font-semibold text-indigo-700">{selected}</span>
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* ===== Footer ===== */}
      <p className="absolute bottom-6 text-gray-500 text-sm z-10">
        © 2025 MitrAI | Language makes emotions clearer 💫
      </p>
    </main>
  );
}
