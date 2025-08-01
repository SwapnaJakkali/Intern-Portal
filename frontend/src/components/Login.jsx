import { useState } from "react";

export default function Login({ onLogin }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(name || "Intern");
  };

  return (
    <div className="login-box card">
      <h2 style={{ marginBottom: 8 }}>Login / Signup</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", marginBottom: 6 }}>
            Name
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "4px",
                borderRadius: "6px",
                border: "1px solid #d1d5db",
                fontSize: "1rem",
              }}
            />
          </label>
        </div>
        <button type="submit" className="btn" style={{ width: "100%" }}>
          Enter Dashboard
        </button>
      </form>
    </div>
  );
}
