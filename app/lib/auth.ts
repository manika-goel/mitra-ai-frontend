// app/lib/auth.ts

const BASE_URL = "http://127.0.0.1:5000";

type AnonymousLoginPayload = {
  nickname: string;
  password: string;
};

export async function anonymousLogin(payload: AnonymousLoginPayload) {
  const res = await fetch(`${BASE_URL}/api/login/anonymous`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Anonymous login failed");
  }

  return data; // { token, nickname }
}
