"use client";

import { motion } from "framer-motion";
import {
  Users,
  MessageCircle,
  Smile,
  BarChart3,
  CheckCircle,
  Activity,
} from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "120",
      icon: <Users className="w-7 h-7" />,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Total Chats",
      value: "540",
      icon: <MessageCircle className="w-7 h-7" />,
      color: "from-blue-500 to-sky-400",
    },
    {
      title: "Mood Entries",
      value: "310",
      icon: <Smile className="w-7 h-7" />,
      color: "from-emerald-500 to-teal-400",
    },
    {
      title: "Feedback Count",
      value: "78",
      icon: <BarChart3 className="w-7 h-7" />,
      color: "from-purple-500 to-indigo-400",
    },
  ];

  const activities = [
    "User A started a chat session",
    "User B submitted mood: Stressed",
    "User C provided feedback",
    "User D logged in",
  ];

  const feedbacks = [
    "⭐⭐⭐⭐⭐ Very calming responses",
    "⭐⭐⭐⭐ Helpful for stress relief",
    "⭐⭐⭐ Needs quicker replies",
  ];

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 px-4 sm:px-6 py-10 sm:py-12">

      {/* Background Pattern */}
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

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
            Admin <span className="text-indigo-600">Dashboard</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            System monitoring and overview panel
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ scale: 1.04, y: -5 }}
              className="bg-white/75 backdrop-blur-xl rounded-[2rem] p-6 shadow-xl"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${item.color} text-white rounded-2xl flex items-center justify-center mb-6`}
              >
                {item.icon}
              </div>
              <h3 className="text-gray-600 text-sm mb-1">{item.title}</h3>
              <p className="text-3xl font-bold text-gray-800">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <Activity className="text-indigo-500" />
              <h2 className="text-xl font-bold text-gray-800">
                Recent Activity
              </h2>
            </div>

            <ul className="space-y-3 text-gray-600 text-sm">
              {activities.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* System Status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="text-emerald-500" />
              <h2 className="text-xl font-bold text-gray-800">
                System Status
              </h2>
            </div>

            <div className="space-y-4 text-sm">
              <Status label="AI Service" />
              <Status label="Database" />
              <Status label="Server" />
            </div>
          </motion.div>
        </div>

        {/* Feedback Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-lg max-w-4xl mx-auto"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Recent User Feedback
          </h2>

          <ul className="space-y-3 text-gray-600 text-sm text-center">
            {feedbacks.map((fb, i) => (
              <li key={i}>"{fb}"</li>
            ))}
          </ul>
        </motion.div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 text-sm mt-12">
          Admin dashboard is used for monitoring and evaluation purposes.
        </p>
      </div>
    </main>
  );
}

function Status({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between bg-white/60 rounded-xl px-4 py-3">
      <span className="text-gray-700">{label}</span>
      <span className="flex items-center gap-1 text-emerald-600 font-medium">
        <CheckCircle size={16} /> Running
      </span>
    </div>
  );
}
