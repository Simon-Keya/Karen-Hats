"use client";

import { useState } from "react";
import { updateUserSettings } from "../../utils/api"; // Adjusted import path

const Settings = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUserSettings({ username, email });
      alert("Settings updated successfully");
    } catch (err) {
      setError("Failed to update settings. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium mb-1">
            Username:
          </label>
          <input
            id="username" // Added id for better accessibility
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded p-2 w-full"
            required
            placeholder="Enter your username" // Added placeholder
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email:
          </label>
          <input
            id="email" // Added id for better accessibility
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded p-2 w-full"
            required
            placeholder="Enter your email" // Added placeholder
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
