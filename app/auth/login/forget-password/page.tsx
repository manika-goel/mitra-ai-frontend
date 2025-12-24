"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react"; // Added
import { useRouter } from "next/navigation"; // Added

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleReset = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/reset-password/normal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          username: email, 
          new_password: newPassword 
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Password updated successfully! 🎉 Ab aap login kar sakte hain.");
        router.push("/auth/login/email");
      } else {
        alert("Error: " + (data.error || "Reset failed"));
      }
    } catch (error) {
      console.error("Connection Error:", error);
      alert("Backend se connect nahi ho paya!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/80 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl p-10 max-w-md w-full"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4"> Reset Password 🔒 </h1>

        <p className="text-gray-600 mb-6 text-sm">
          Apna registered email aur naya password enter kijiye.
        </p>

        <input
          type="email"
          placeholder="Registered Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />

        <button 
          onClick={handleReset}
          disabled={loading}
          className="w-full px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-all duration-300"
        >
          {loading ? "Updating..." : "Reset Password"}
        </button>

        <p className="text-gray-600 text-sm mt-6">
          Remembered your password?{" "}
          <Link href="/auth/login/email" className="text-indigo-600 hover:underline">
            Back to Login
          </Link>
        </p>
      </motion.div>
    </main>
  );
}