// /app/chat/ChatWindow.tsx
"use client";
import { useEffect, useRef } from "react";

interface Message {
  user: "user" | "bot";
  text: string;
}

interface ChatWindowProps {
  messages: Message[];
  loading: boolean;
}

export default function ChatWindow({ messages, loading }: ChatWindowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="h-[400px] overflow-y-auto border p-2 rounded flex flex-col">
      {messages.length === 0 && !loading && <p className="text-gray-400">No messages yet</p>}
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`my-1 p-2 rounded max-w-[70%] ${
            msg.user === "bot" ? "bg-gray-200 text-black self-start" : "bg-blue-500 text-white self-end"
          }`}
        >
          {msg.text}
        </div>
      ))}
      {loading && <p className="text-gray-500">Bot is typing...</p>}
      <div ref={scrollRef}></div>
    </div>
  );
}
