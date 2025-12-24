// /app/chat/ChatInput.tsx
"use client";

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: (message: string) => void;
}

export default function ChatInput({ input, setInput, handleSend }: ChatInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      handleSend(input);
      setInput("");
    }
  };

  return (
    <div className="flex gap-2 mt-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type your message..."
        className="flex-1 p-2 border rounded"
      />
      <button
        onClick={() => { handleSend(input); setInput(""); }}
        className="px-4 bg-blue-500 text-white rounded"
      >
        Send
      </button>
    </div>
  );
}
