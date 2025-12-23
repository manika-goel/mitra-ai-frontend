// lib/api.ts

export async function getDashboardStats() {
  // ⏳ fake delay (real API jaisa)
  await new Promise((resolve) => setTimeout(resolve, 800));

  // 🧪 fake data
  return {
    userId: "anon_123",
    userName: "Anonymous",
    mood: "Calm",
    streak: 4,
  };
}
