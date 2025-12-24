// /app/chat/api.ts
const BASE_URL = "http://127.0.0.1:5000/api";

export const sendMessage = async (message: string) => {
  try {
    const res = await fetch(`${BASE_URL}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    return await res.json();
  } catch (error) {
    console.error("Send message error:", error);
    return { error: true };
  }
};

export const getChatHistory = async () => {
  try {
    const res = await fetch(`${BASE_URL}/getChatHistory`);
    return await res.json();
  } catch (error) {
    console.error("Get chat history error:", error);
    return [];
  }
};
