// /app/chat/page.tsx
"use client";
import { useState, useEffect } from "react";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import { sendMessage, getChatHistory } from "./api";

interface Message {
  user: "user" | "bot";
  text: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchHistory = async () => {
      const history: Message[] = await getChatHistory();
      setMessages(history);
    };
    fetchHistory();
  }, []);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    const newMsg: Message = { user: "user", text };
    setMessages((prev) => [...prev, newMsg]);
    setLoading(true);

    const res = await sendMessage(text);
    if (res.error) {
      setMessages((prev) => [...prev, { user: "bot", text: "Failed to send message" }]);
    } else {
      setMessages((prev) => [...prev, { user: "bot", text: res.reply || "Bot response" }]);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 flex flex-col">
      <ChatWindow messages={messages} loading={loading} />
      <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
    </div>
  );
}
