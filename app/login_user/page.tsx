"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SimpleWelcomePage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 2500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center 
    bg-gradient-to-br from-indigo-100 via-blue-50 to-sky-100 px-6">

      {/* ===== Wavy Background Strips ===== */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="wavePattern"
            width="180"
            height="180"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 90 Q 45 50, 90 90 T 180 90"
              fill="none"
              stroke="rgba(99,102,241,0.15)"
              strokeWidth="3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavePattern)" />
      </svg>

      {/* ===== Soft Floating Glow ===== */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-indigo-300/30 
        rounded-full blur-[140px] -top-32 -left-32"
      />

      <motion.div
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-blue-300/30 
        rounded-full blur-[150px] -bottom-32 -right-32"
      />

      {/* ===== Main Content ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Hey{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-blue-500 
          bg-clip-text text-transparent">
            Gatik
          </span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto mb-10">
          “It’s okay to feel overwhelmed. You are still moving forward.”
        </p>

        {/* ===== 3 Animated Dots ===== */}
        <div className="flex justify-center space-x-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
              transition={{
                repeat: Infinity,
                duration: 0.9,
                delay: i * 0.2,
              }}
              className="w-3 h-3 bg-indigo-500 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
