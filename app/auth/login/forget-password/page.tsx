"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white/80 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl p-10 max-w-md w-full"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Forgot Password 🔒
        </h1>

        <p className="text-gray-600 mb-6 text-sm">
          Enter your registered email address below and we’ll send you a link to reset your password.
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
        />

        <button className="w-full px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-all duration-300">
          Send Reset Link
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
