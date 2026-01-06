"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  AlertTriangle,
  ChevronDown
} from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const faqs = [
    {
      q: "How can a support agent help me?",
      a: "Our agents can help you with app usage, account issues, and general concerns."
    },
    {
      q: "Is my conversation private?",
      a: "Yes. Your messages are treated with care and confidentiality."
    },
    {
      q: "When should I contact emergency support?",
      a: "If you feel unsafe, overwhelmed, or in immediate distress, please reach out to helplines."
    }
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen relative overflow-hidden px-6 py-20 
        bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100">

        {/* ===== Background Waves ===== */}
        <svg
          className="absolute inset-0 w-full h-full opacity-25"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="wavePattern"
              x="0"
              y="0"
              width="180"
              height="180"
              patternUnits="userSpaceOnUse"
            >
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

        {/* ===== Floating Blurs ===== */}
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
          className="absolute w-[420px] h-[420px] bg-blue-300/25 
          rounded-full blur-[100px] top-16 left-20"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
          className="absolute w-[520px] h-[520px] bg-indigo-300/25 
          rounded-full blur-[120px] bottom-16 right-20"
        />

        {/* ===== Content ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto space-y-12"
        >

          {/* Header */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
              We’re here for you 💙
            </h1>
            <p className="text-gray-800 text-lg max-w-2xl mx-auto">
              If something feels confusing or overwhelming, our support team is ready to help.
            </p>
          </div>

          {/* Chat With Agent */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white/80 backdrop-blur-xl border border-white/50 
            rounded-3xl shadow-lg p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="text-indigo-500" />
              <h2 className="text-2xl font-semibold text-indigo-600">
                Chat with a Support Agent
              </h2>
            </div>

            <p className="text-gray-800 mb-6">
              Talk to a real person if you need help using mitrAI.
              Average response time: 5–10 minutes.
            </p>

            <button
              onClick={() => router.push("/settings/support/chat")}
              className="w-full py-4 bg-gradient-to-r from-indigo-500 to-blue-500 
              text-white rounded-full font-semibold shadow-md
              hover:scale-[1.03] transition"
            >
              Start Chat
            </button>
          </motion.div>

          {/* Raise a Concern */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-white/80 backdrop-blur-xl border border-white/50 
            rounded-3xl shadow-lg p-10"
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-6">
              Raise a Concern
            </h2>

            <div className="space-y-4">
              <select className="w-full p-4 rounded-xl border border-gray-300 text-gray-800">
                <option>App not working</option>
                <option>Account or login issue</option>
                <option>Chat problem</option>
                <option>Data & privacy</option>
                <option>Something else</option>
              </select>

              <textarea
                rows={4}
                placeholder="Describe what you’re facing..."
                className="w-full p-4 rounded-xl border border-gray-300 resize-none text-gray-800 placeholder-gray-500"
              />

              <button
                onClick={() => setSubmitted(true)}
                className="w-full py-4 bg-indigo-500 text-white 
                rounded-full font-semibold hover:bg-indigo-600 transition"
              >
                {submitted ? "Submitted" : "Submit"}
              </button>

              <p className="text-sm text-gray-700 text-center">
                We usually respond within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Emergency Support */}
          <motion.div
            whileHover={{ y: -4 }}
            className="bg-yellow-50 border border-yellow-300 
            rounded-3xl p-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-yellow-500" />
              <h2 className="text-xl font-semibold text-gray-800">
                Need immediate help?
              </h2>
            </div>

            <p className="text-gray-800 mb-6">
              If you feel unsafe or overwhelmed, please reach out immediately.
            </p>

            <div className="space-y-3">
              <a
                href="tel:18005990019"
                className="flex items-center gap-3 p-4 bg-white 
                rounded-xl shadow hover:bg-yellow-100 transition text-gray-800"
              >
                <Phone className="text-yellow-500" />
                <span>Kiran Helpline – 1800-599-0019</span>
              </a>

              <a
                href="tel:919820466726"
                className="flex items-center gap-3 p-4 bg-white 
                rounded-xl shadow hover:bg-yellow-100 transition text-gray-800"
              >
                <Phone className="text-yellow-500" />
                <span>AASRA – 91-9820466726</span>
              </a>
            </div>

            <p className="text-xs text-gray-700 mt-4">
              mitrAI is not a replacement for professional medical care.
            </p>
          </motion.div>

          {/* FAQ */}
          <div className="bg-white/80 backdrop-blur-xl border border-white/50 
            rounded-3xl shadow-lg p-10">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-6">
              Quick Help
            </h2>

            {faqs.map((item, i) => (
              <div key={i} className="border-b last:border-none">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="text-gray-900">{item.q}</span>
                  <ChevronDown
                    className={`text-gray-900 transition ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === i && (
                  <p className="pb-4 text-gray-800">{item.a}</p>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center space-y-4">
            <p className="text-gray-700 text-sm">
              🔒 Your conversations are private and under your control.
            </p>

            <Link
              href="/settings"
              className="text-indigo-600 font-medium hover:underline"
            >
              ← Back to Settings
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
}
