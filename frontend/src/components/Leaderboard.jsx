import { useEffect, useState } from "react";
import { fetchLeaderboard } from "../api";

export default function Leaderboard() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLeaderboard()
      .then(setList)
      .catch((e) => setError("Leaderboard fetch failed: " + e.message));
  }, []);

  if (error)
    return (
      <div className="card">
        <div style={{ color: "crimson" }}>{error}</div>
      </div>
    );
  if (!list.length)
    return (
      <div className="card">
        <div>Loading leaderboard...</div>
      </div>
    );

  return (
    <div className="card">
      <h2>Leaderboard</h2>
      <ol>
        {list.map((item, idx) => (
          <li key={idx}>
            {item.name} — {item.score} pts
          </li>
        ))}
      </ol>
    </div>
  );
}
