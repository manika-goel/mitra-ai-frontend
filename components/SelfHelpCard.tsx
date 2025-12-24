"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function SelfHelpCard({ onClick }: { onClick?: () => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      className="relative bg-white/75 backdrop-blur-xl border border-white/60 
      rounded-[2.5rem] p-10 shadow-xl flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-400 
        text-white rounded-2xl flex items-center justify-center shadow-lg mb-6">
        <Briefcase className="w-8 h-8" />
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Self Help Toolkit
      </h3>

      <p className="text-gray-500 text-sm leading-relaxed mb-8">
        Access guided exercises, breathing techniques, and activities to calm your mind.
      </p>

      <button
        onClick={onClick}
        className="mt-auto w-full py-4 bg-gradient-to-r from-indigo-500 to-blue-500 
        text-white rounded-[1.4rem] font-bold shadow-lg hover:brightness-110"
      >
        Calm Your Mind
      </button>
    </motion.div>
  );
}
