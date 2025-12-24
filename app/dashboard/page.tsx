"use client";

import { motion } from "framer-motion";
import { MessageCircle, Briefcase, BarChart3, Settings, LogOut } from "lucide-react";

export default function Dashboard() {
  // Option B: Soft, Friendly and Comforting Labels
  const cards = [
    { 
      title: "MitrAI Chatbot", 
      desc: "Talk to your AI companion about your feelings in a safe, judgment-free space.", 
      icon: <MessageCircle className="w-8 h-8" />,
      color: "from-blue-500 to-sky-400",
      buttonText: "Talk to Mitr" 
    },
    { 
      title: "Self Help Toolkit", 
      desc: "Access guided exercises, breathing techniques, and activities to calm your mind.", 
      icon: <Briefcase className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-400",
      buttonText: "Calm Your Mind" 
    },
    { 
      title: "Mood Tracker", 
      desc: "Visualize your emotional journey and understand patterns in your daily moods.", 
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-teal-500 to-emerald-400",
      buttonText: "Check Your Vibe" 
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 px-6 py-12">
      
      {/* Background Wave Pattern (Matching Info Page) */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <pattern id="wavePattern" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
            <path d="M 0 90 Q 45 50, 90 90 T 180 90" fill="none" stroke="rgba(99,102,241,0.22)" strokeWidth="3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavePattern)" />
      </svg>

      {/* Content Layer */}
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        
        {/* Header Section */}
        <header className="flex justify-between items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight font-sans">
              MitrAI <span className="text-indigo-600">Dashboard</span>
            </h1>
            <p className="text-gray-500 font-medium">What would you like to explore today? ✨</p>
          </motion.div>

          <motion.button whileHover={{ scale: 1.1, rotate: 45 }} className="p-3 bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 shadow-sm text-indigo-500 transition-all">
            <Settings size={22} />
          </motion.button>
        </header>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative group bg-white/75 backdrop-blur-xl border border-white/60 rounded-[2.5rem] p-10 shadow-xl transition-all duration-300 overflow-hidden flex flex-col min-h-[440px]"
            >
              <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${card.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full items-center text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${card.color} text-white rounded-2xl flex items-center justify-center shadow-lg mb-8 group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
                
                <p className="text-gray-500 font-medium mb-10 leading-relaxed text-sm">
                  {card.desc}
                </p>

                {/* Unique Action Buttons (Option B) */}
                <button className="mt-auto w-full py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-[1.4rem] font-bold text-lg shadow-lg shadow-indigo-200 transition-all hover:shadow-indigo-300 hover:brightness-110 active:scale-95">
                  {card.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="bg-white/40 backdrop-blur-lg border border-white/50 rounded-[2.5rem] p-8 text-center max-w-3xl mx-auto">
          <p className="italic text-gray-600 font-medium leading-relaxed">
            "Your journey to a calmer mind starts with a single step."
          </p>
        </motion.div>
      </div>

      {/* Logout */}
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="fixed bottom-8 right-8 flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-md text-red-500 rounded-full shadow-2xl border border-red-50 font-bold z-20">
        <LogOut size={18} />
        <span>Logout</span>
      </motion.button>
    </main>
  );
}