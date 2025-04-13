"use client";
import React, { useState } from "react";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleReset = () => {
    if (!password || !confirmPassword) {
      setError("Both fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    // onReset(password);
  };

  return (
    <div className="reset-container">
      <h4>Reset Your Password</h4>
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm New Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <button className="reset-btn" onClick={handleReset}>
        Reset Password
      </button>
    </div>
  );
};

export default ResetPassword;
