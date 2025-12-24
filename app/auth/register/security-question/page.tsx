"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Added for redirect

export default function SecurityQuestionPage() {
  // States for all required fields
  const [nickname, setNickname] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const securityQuestion = "What is the name of a person you trust the most?";

  // Connection Logic
  const handleReset = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/api/reset-password/anonymous", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nickname: nickname,
          security_answer: answer,
          new_password: newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Success! Password changed. 🎉");
        router.push("/auth/login/anonymous");
      } else {
        alert("Error: " + (data.error || "Reset failed"));
      }
    } catch (error) {
      alert("Server error! Backend check kijiye.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center 
    bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 px-6 py-16">

      {/* Wavy Background & Blobs (Keeping Gatik's design) */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="wavePattern" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
            <path d="M 0 70 Q 35 40, 70 70 T 140 70" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavePattern)" />
      </svg>

      <motion.div animate={{ y: [0, 25, 0] }} transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }} className="absolute w-[380px] h-[380px] bg-blue-300/30 rounded-full blur-[100px] top-16 left-16 will-change-transform" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-xl w-full bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl shadow-xl px-12 py-10"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 text-center">Reset Access</h1>
        <p className="text-gray-600 text-center mb-8 leading-relaxed">Recover your anonymous account securely.</p>

        {/* 1. Nickname Input */}
        <input
          type="text"
          placeholder="Your Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full px-6 py-4 rounded-full border border-gray-300 bg-white mb-4 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        {/* 2. Security Question (Display Only) */}
        <div className="mb-4">
          <label className="block mb-2 text-sm text-gray-600 font-semibold px-2">Security Question:</label>
          <div className="w-full px-6 py-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-gray-900 text-sm font-medium">
            {securityQuestion}
          </div>
        </div>

        {/* 3. Answer Input */}
        <input
          type="text"
          placeholder="Type your answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full px-6 py-4 rounded-full border border-gray-300 bg-white mb-4 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        {/* 4. New Password Input */}
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-6 py-4 rounded-full border border-gray-300 bg-white mb-8 text-gray-900 focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        {/* Reset Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleReset}
          disabled={!answer || !nickname || !newPassword || loading}
          className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white text-lg font-semibold rounded-full shadow-lg transition-all"
        >
          {loading ? "Updating..." : "Reset & Login"}
        </motion.button>
      </motion.div>

      <p className="absolute bottom-6 text-gray-600 text-sm z-10">© 2025 MitrAI | 💙</p>
    </main>
  );
}