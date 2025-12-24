"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-xl max-w-md text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Settings
        </h1>
        <p className="text-gray-600 mb-6">
          Language, preferences & account settings.
        </p>

        <Link href="/dashboard" className="text-indigo-600 hover:underline font-semibold">
          ← Back to Dashboard
        </Link>
      </motion.div>
    </main>
  );
}
