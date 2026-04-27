"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Menu, Plus, Settings, X, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MitrChatPro() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  // Abhi ke liye hum constant user_id use kar rahe hain
  const [currentUser_id, setCurrentUserId] = useState<string | null>(null); 
  const [isLoading, setIsLoading] = useState(true);
  // --- FEATURE: Purani Chat Load Karna ---

  useEffect(() => {
  const checkAuth = () => {
    const savedUser = localStorage.getItem("user_id");
    if (savedUser) {
      setCurrentUserId(savedUser);
      setIsLoading(false); // ID mil gayi, ab loading band
    } else {
      // 500ms ka chota sa delay taaki storage check ho sake
      setTimeout(() => {
        if (!localStorage.getItem("user_id")) {
          router.push("/auth");
        } else {
          setCurrentUserId(localStorage.getItem("user_id"));
          setIsLoading(false);
        }
      }, 500);
    }
  };

  checkAuth();
}, []);

  useEffect(() => {
  // Sabse zaroori check: Agar ID null hai toh fetch mat karo
  if (!currentUser_id) return; 

  const loadChatHistory = async () => {
    try {
      console.log("Fetching history for:", currentUser_id);
      const response = await fetch(`http://127.0.0.1:5000/api/chat/history/${currentUser_id}`);
      
      if (!response.ok) throw new Error("Backend error");

      const data = await response.json();
      
      if (Array.isArray(data)) {
        const formattedMessages = data
          .filter((msg: any) => msg.text) // Khali messages hatao
          .map((msg: any, index: number) => ({
            text: msg.text,
            sender: msg.sender,
            id: `hist-${index}`
          }));
        setMessages(formattedMessages);
      }
    } catch (error) {
      console.error("History load nahi ho payi:", error);
    }
  };

  loadChatHistory();
}, [currentUser_id]);

useEffect(() => {
  if (!currentUser_id) return;
    const loadChatHistory = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/chat/history/${currentUser_id}`);
        const data = await response.json();
        if (Array.isArray(data)) {
          // Filter out empty messages and format correctly
          const formattedMessages = data
            .filter((msg: any) => msg.text && msg.text.trim() !== "") // Khali message hatane ke liye
            .map((msg: any, index: number) => ({
              text: msg.text,
              sender: msg.sender === "user" ? "user" : "bot",
              id: `hist-${index}-${Date.now()}` // Unique ID
            }));
          setMessages(formattedMessages);
        }
      } catch (error) {
        console.error("History loading failed:", error);
      }
    };
    loadChatHistory();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSend = async (text = "") => {
    const messageToSend = typeof text === "string" && text !== "" ? text : input;
    if (!messageToSend || !messageToSend.trim()) return;

    if (!currentUser_id) {
      alert("User session not found. Please login again.");
      router.push("/auth");
      return;
    }
    
    const userId = "u-" + Date.now();
    setMessages((prev) => [...prev, { text: messageToSend, sender: "user", id: userId }]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          message: messageToSend,
          user_id: currentUser_id // Backend ko user_id bhej rahe hain save karne ke liye
        })
      });
      //if (!response.ok) throw new Error("Server error");
      const data = await response.json();
      //const botId = "b-" + Date.now();

      
      if (response.ok && data.reply) {
      const botId = "b-" + Date.now();
      setMessages((prev) => [...prev, { 
        text: data.reply, 
        sender: "bot", 
        id: botId 
      }]);
      } else {
      // Agar backend se 'reply' nahi aaya toh custom message dikhao
      throw new Error("Invalid response from server");
    }

    } catch (error) {
      console.error("Connection Error:", error);
      setMessages((prev) => [...prev, { 
        text: "MitrAI abhi so raha hai. Please check if Backend is running!", 
        sender: "bot", 
        id: "err-" + Date.now() 
      }]);
    } finally {
      setIsTyping(false);
    }
  };
  if (isLoading) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-[#f8fafc]">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-slate-600 font-medium">Loading MitrAI...</p>
      </div>
    );
  }
  return (
    <main className="flex h-screen w-full bg-[#f8fafc] overflow-hidden font-sans text-slate-900">
      
      {/* Sidebar remains the same */}
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
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2 mb-2">Recent Chats (Saved)</p>
              {/* Aap yahan messages ki history list bhi dikha sakti hain */}
              <div className="text-xs text-slate-500 ml-2 bg-white/50 p-2 rounded-lg border border-blue-50">
                Conversation 1
              </div>
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
                  <motion.div 
                    animate={{ y: [0, -10, 0] }} 
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-6 relative w-24 h-24 rounded-full overflow-hidden shadow-xl"
                  >
                    <Image src="/logo.png" alt="MitrAI" fill className="object-cover" />
                  </motion.div>

                  <h2 className="text-2xl font-bold text-slate-800">How can I support you today?</h2>
                  <p className="text-sm text-slate-400 mt-2 mb-8">History is loaded. You can continue our previous talk.</p>
                  
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
                {messages.map((msg, index) => {
  // Agar message mein text nahi hai, toh render mat karo
                if (!msg.text) return null; 

                return (
                  <div key={msg.id || index} className={"flex " + (msg.sender === "user" ? "justify-end" : "justify-start")}>
                    <div className={"max-w-[75%] p-4 rounded-3xl " + (
                      msg.sender === "user" 
                      ? "bg-indigo-600 text-white rounded-br-none" 
                      : "bg-white text-slate-700 rounded-bl-none shadow-sm border border-slate-100"
                    )}>
                      {msg.text}
                    </div>
                  </div>
                );
              })}
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