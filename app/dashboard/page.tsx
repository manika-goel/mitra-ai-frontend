"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Briefcase,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const cards = [
    {
      title: "MitrAI Chatbot",
      desc: "Talk to your AI companion about your feelings in a safe, judgment-free space.",
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-blue-500 to-sky-400",
      buttonText: "Talk to Mitr",
      route: "/chat",
    },
    {
      title: "Self Help Toolkit",
      desc: "Access guided exercises, breathing techniques, and activities to calm your mind.",
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-400",
      buttonText: "Calm Your Mind",
      route: "/toolkit",
    },
    {
      title: "Mood Tracker",
      desc: "Visualize your emotional journey and understand patterns in your daily moods.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-teal-500 to-emerald-400",
      buttonText: "Check Your Vibe",
      route: "/mood",
    },
  ];

  const handleLogout = () => {
    localStorage.clear();
    router.push("/auth");
  };

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 px-4 sm:px-6 py-10 sm:py-12">
      
      {/* Background Stripes */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="wavePattern" x="0" y="0" width="180" height="180">
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

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 sm:mb-16 gap-6 sm:gap-0">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
              MitrAI <span className="text-indigo-600">Dashboard</span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base">
              What would you like to explore today? ✨
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 45 }}
            onClick={() => router.push("/settings")}
            className="p-3 bg-white/80 rounded-2xl shadow text-indigo-500 cursor-pointer"
          >
            <Settings size={22} />
          </motion.button>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 sm:mb-16">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => router.push(card.route)}
              className="cursor-pointer bg-white/75 backdrop-blur-xl rounded-[2rem] p-6 sm:p-10 shadow-xl flex flex-col min-h-[360px] sm:min-h-[420px]"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${card.color} text-white rounded-2xl flex items-center justify-center mb-6 sm:mb-8`}
              >
                {card.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                {card.title}
              </h3>

              <p className="text-gray-600 mb-6 sm:mb-10 text-sm sm:text-base">
                {card.desc}
              </p>

              <button
                onClick={() => router.push(card.route)}
                className="mt-auto w-full py-3 sm:py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-full font-bold text-sm sm:text-base"
              >
                {card.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-white/40 rounded-3xl p-6 sm:p-8 text-center max-w-3xl mx-auto">
          <p className="italic text-gray-600 text-sm sm:text-base">
            "Your journey to a calmer mind starts with a single step."
          </p>
        </div>
      </div>

      {/* Logout */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLogout}
        className="fixed bottom-6 sm:bottom-8 right-4 sm:right-8 flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-red-500 rounded-full shadow-xl font-bold text-sm sm:text-base"
      >
        <LogOut size={18} />
        Logout
      </motion.button>
    </main>
  );
}
