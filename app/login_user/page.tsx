"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function SimpleWelcomePage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/dashboard"); // change route if needed
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-100 via-blue-50 to-sky-100 px-6">
      
      {/* ===== Background Wavy Strips ===== */}
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

      {/* ===== Main Card ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white shadow-2xl rounded-3xl 
        p-16 text-center max-w-2xl w-full"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Welcome User 👋
        </h1>

        <p className="text-gray-600 text-base md:text-lg mb-10">
          Keep moving forward — your best days are still ahead.
        </p>

        <button
          onClick={handleContinue}
          className="px-10 py-4 bg-indigo-600 text-white rounded-full 
          text-lg font-semibold hover:bg-indigo-700 
          transition duration-300 shadow-lg"
        >
          Continue
        </button>
      </motion.div>
    </div>
  );
}
