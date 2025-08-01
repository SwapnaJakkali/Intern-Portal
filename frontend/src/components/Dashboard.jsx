import { useEffect, useState } from "react";
import { fetchUser, fetchRewards } from "../api";

export default function Dashboard({ displayName }) {
  const [userData, setUserData] = useState(null);
  const [rewards, setRewards] = useState([]);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchUser()
      .then(setUserData)
      .catch((e) => setError("User fetch error: " + e.message));
    fetchRewards()
      .then(setRewards)
      .catch((e) => console.warn("Rewards fetch failed", e));
  }, []);

  const copyReferral = () => {
    const code = userData?.referral_code || userData?.referralCode;
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (error)
    return (
      <div className="card">
        <div style={{ color: "crimson" }}>{error}</div>
      </div>
    );

  if (!userData)
    return (
      <div className="card">
        <div>Loading user data...</div>
      </div>
    );

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="header">
          <div>
            <h1>Welcome, {displayName}</h1>
            <p className="small">Intern Name: {userData.intern_name || userData.internName}</p>
          </div>
          <div>
            <div style={{ fontSize: "0.9rem" }}>
              <div>
                <span className="field-label">Referral Code:</span>{" "}
                <span className="inline-code">
                  {userData.referral_code || userData.referralCode}
                </span>{" "}
                <button
                  className="btn btn-small"
                  style={{ marginLeft: 6 }}
                  onClick={copyReferral}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <div style={{ marginTop: 6 }}>
                Total Donations Raised:{" "}
                <strong>${userData.total_donations || userData.totalDonations}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Rewards / Unlockables</h2>
        <div className="flex">
          {rewards.map((r) => (
            <div
              key={r.title}
              style={{
                flex: "1 1 150px",
              }}
              className="card"
            >
              <div style={{ marginBottom: 6, fontWeight: 600 }}>{r.title}</div>
              <div>
                {r.unlocked ? (
                  <span className="badge unlocked">Unlocked</span>
                ) : (
                  <span className="badge locked">Locked</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
