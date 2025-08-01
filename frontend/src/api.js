
const BASE = "http://localhost:8000";

export async function fetchLeaderboard() {
  const res = await fetch(`${BASE}/api/leaderboard/`);
  if (!res.ok) throw new Error("fetch failed");
  return res.json();
}

export async function fetchUser() {
  const res = await fetch(`${BASE}/api/user/`);
  if (!res.ok) throw new Error("fetch failed");
  return res.json();
}

export async function fetchRewards() {
  const res = await fetch(`${BASE}/api/rewards/`);
  if (!res.ok) throw new Error("fetch failed");
  return res.json();
}
