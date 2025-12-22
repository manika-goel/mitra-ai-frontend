"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-100 via-sky-100 to-cyan-50 text-center font-sans">
      {/* ===== Animated Gradient Overlay ===== */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-indigo-200/30 via-sky-100/20 to-transparent"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* ===== Floating Glow Orbs ===== */}
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-3xl top-20 left-10"
      />
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] bg-sky-300/30 rounded-full blur-3xl bottom-10 right-10"
      />

      {/* ===== Particle Background (subtle) ===== */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1.5 h-1.5 bg-indigo-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* ===== Main Content Card ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl w-full bg-white/70 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-[0_10px_60px_-10px_rgba(99,102,241,0.25)] p-12 flex flex-col items-center justify-center"
      >
        {/* ===== Logo Section ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-6"
        >
          <img
            src="/logo.png"
            alt="MitrAI Logo"
            className="w-28 h-28 rounded-full shadow-xl border border-indigo-100 mb-4"
          />
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 text-transparent bg-clip-text">
              MitrAI
            </span>
          </motion.h1>
        </motion.div>

        {/* ===== Description ===== */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Your AI-powered companion for{" "}
          <span className="font-semibold text-indigo-600">mental wellness</span> 🌿  
          <br />
          <span className="italic text-gray-600">
            "Where emotions find understanding and minds find peace."
          </span>
          <br />
          Let’s begin your journey toward clarity, calmness, and balance 💙
        </motion.p>

        {/* ===== Get Started Button ===== */}
        <Link href="/information">
          <motion.button
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 25px rgba(99,102,241,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-12 py-4 text-lg font-semibold text-white rounded-full 
                       bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 
                       shadow-lg transition-all duration-300 overflow-hidden group"
          >
            <span className="relative z-10">Get Started ➜</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
            />
          </motion.button>
        </Link>
      </motion.div>

      {/* ===== Footer ===== */}
      <p className="absolute bottom-6 text-gray-500 text-sm z-10">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-indigo-600">MitrAI</span> | Your Emotional Wellbeing Partner 💙
      </p>
    </main>
  );
}
