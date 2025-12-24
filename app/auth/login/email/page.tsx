"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react"; // Added for capturing input
import { useRouter } from "next/navigation"; // Added for redirection

export default function EmailLogin() {
  // 1. State banayein input data save karne ke liye
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // 2. Backend Connection Logic
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/api/login/normal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Backend 'username' expect kar raha hai, isliye email ko username key mein bhejenge
        body: JSON.stringify({ 
          username: email, 
          password: password 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login Successful! 🎉");
        localStorage.setItem("token", data.token); // JWT Token save kar liya
        router.push("/dashboard"); // Successful login ke baad dashboard par bhejein
      } else {
        alert("Login Failed: " + (data.error || "Invalid Credentials"));
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert("Backend server se connect nahi ho paya. Check if Flask is running!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 px-6 py-16 text-center">
      
      {/* Background (Same as before) */}
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

        {/* 3. Inputs ko connect kiya state se */}
        <input 
          type="email" 
          placeholder="Enter your email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400" 
        />
        <input 
          type="password" 
          placeholder="Enter your password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 mb-3 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400" 
        />

        <Link href="/auth/login/forget-password" className="text-indigo-600 hover:underline text-sm mb-6 block">
          Forget Password?
        </Link>

        {/* 4. Button click par handleLogin chalega */}
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.97 }} 
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full shadow-lg transition-all mb-4"
        >
          {loading ? "Logging in..." : "Login"}
        </motion.button>

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