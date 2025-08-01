import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  if (!user) return <Login onLogin={(name) => setUser(name)} />;

  return (
    <div className="container">
      <div className="header">
        <div>
          <h2 style={{ margin: 0 }}>Intern Portal</h2>
          <div style={{ fontSize: "0.9rem", color: "#555" }}>
            Logged in as: <strong>{user}</strong>
          </div>
        </div>
        <div>
          <button
            className="btn btn-secondary"
            onClick={() => window.location.reload()}
            style={{ marginLeft: 6 }}
          >
            Logout
          </button>
        </div>
      </div>
      <Dashboard displayName={user} />
      <Leaderboard />
    </div>
  );
}

export default App;
