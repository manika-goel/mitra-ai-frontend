"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Menu, Plus, Settings, X, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function MitrChatPro() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (scrollRef.current) {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [messages, isTyping]);

  const handleSend = async (text = "") => {
  const messageToSend = typeof text === "string" && text !== "" ? text : input;
  if (!messageToSend || !messageToSend.trim()) return;
  
  // 1. User ka message screen par dikhayein
  const userId = "u-" + Date.now();
  setMessages((prev) => [...prev, { text: messageToSend, sender: "user", id: userId }]);
  setInput("");
  setIsTyping(true); // Loading animation start

  try {
    // 2. Backend (Flask) ko message bhejein
    const response = await fetch("http://127.0.0.1:5000/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: messageToSend })
    });

    const data = await response.json();
    const botId = "b-" + Date.now();

    // 3. Gemini ka asli jawab screen par dikhayein
    setMessages((prev) => [...prev, { 
      text: data.reply, 
      sender: "bot", 
      id: botId 
    }]);

  } catch (error) {
    console.error("Connection Error:", error);
    setMessages((prev) => [...prev, { 
      text: "MitrAI abhi so raha hai. Please check if Backend is running!", 
      sender: "bot", 
      id: "err" 
    }]);
  } finally {
    setIsTyping(false); // Loading stop
  }
};

  return (
    <main className="flex h-screen w-full bg-[#f8fafc] overflow-hidden font-sans text-slate-900">
      
      {/* 1. SIDEBAR */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside 
            key="sidebar-menu"
            initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }}
            className="w-72 bg-[#f0f9ff] border-r border-blue-100 flex flex-col z-50 h-full shadow-lg"
          >
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image src="/logo.png" alt="Logo" fill className="object-cover" priority />
                </div>
                <span className="text-xl font-bold text-slate-800 tracking-tight">MitrAI</span>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="md:hidden text-slate-400">
                <X size={20} />
              </button>
            </div>

            <div className="px-4 mb-4">
              <button onClick={() => setMessages([])} className="w-full flex items-center gap-3 p-3 bg-white border border-blue-100 rounded-2xl text-slate-600 hover:bg-blue-50 transition-all font-semibold shadow-sm">
                <Plus size={18} /> New Conversation
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 space-y-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2 mb-2">Recent</p>
              <div className="text-xs text-slate-400 ml-2 italic">No recent chats</div>
            </div>

            <div className="p-4 border-t border-blue-100 space-y-1">
              <Link href="/dashboard" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white text-slate-600 text-sm font-medium">
                <LayoutDashboard size={18} /> Dashboard
              </Link>
              <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white text-slate-600 text-sm font-medium">
                <Settings size={18} /> Settings
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* 2. MAIN CHAT AREA */}
      <section className="flex-1 flex flex-col relative h-full">
        <header className="h-16 border-b border-slate-100 bg-white/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            {!isSidebarOpen && (
              <button onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500">
                <Menu size={20} />
              </button>
            )}
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-700">Your AI Mitr</span>
              <span className="text-[10px] text-green-500 font-bold uppercase tracking-widest">Active Now</span>
            </div>
          </div>
          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 shadow-sm font-bold">U</div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <AnimatePresence mode="wait">
            {messages.length === 0 ? (
              <motion.div 
                key="welcome-box"
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0 }}
                className="h-full flex flex-col items-center justify-center text-center"
              >
                  {/* Floating Motion Logo */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-6 relative w-24 h-24 rounded-full overflow-hidden shadow-xl"
                  >
                    <Image src="/logo.png" alt="MitrAI" fill className="object-cover" />
                  </motion.div>

                  <h2 className="text-2xl font-bold text-slate-800">How can I support you today?</h2>
                  <p className="text-sm text-slate-400 mt-2 mb-8">Start a conversation to begin your emotional journey.</p>
                  
                  <div className="flex flex-wrap justify-center gap-3 max-w-md">
                    {["I'm feeling stressed", "Let's vent out", "Need motivation"].map((chip, index) => (
                      <button 
                        key={"chip-" + index} 
                        onClick={() => handleSend(chip)}
                        className="px-5 py-2.5 bg-white border border-indigo-50 text-indigo-600 text-sm font-semibold rounded-2xl hover:bg-indigo-50 transition-all shadow-sm active:scale-95"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
              </motion.div>
            ) : (
              <motion.div 
                key="chat-messages-container"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {messages.map((msg) => (
                  <div key={msg.id} className={"flex " + (msg.sender === "user" ? "justify-end" : "justify-start")}>
                    <div className={"max-w-[75%] p-4 rounded-3xl " + (
                      msg.sender === "user" 
                      ? "bg-indigo-600 text-white rounded-br-none" 
                      : "bg-white text-slate-700 rounded-bl-none shadow-sm border border-slate-100"
                    )}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-3xl rounded-bl-none border border-slate-100 flex gap-1 shadow-sm">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          )}
          <div ref={scrollRef} />
        </div>

        {/* Input area remains same but with fixed Send logic */}
        <div className="p-6">
          <div className="max-w-4xl mx-auto flex items-center gap-2 bg-white p-2 rounded-[2rem] shadow-2xl border border-slate-100">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask Mitr anything..." 
              className="flex-1 p-3 ml-4 outline-none text-slate-700 placeholder:text-slate-300"
            />
            <button onClick={() => handleSend()} className="p-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 shadow-lg transition-all active:scale-90">
              <Send size={20} />
            </button>
          </div>
          <p className="text-[9px] text-center mt-4 text-slate-300 font-bold uppercase tracking-widest">Private & Secure AI Counseling</p>
        </div>
      </section>
    </main>
  );
}