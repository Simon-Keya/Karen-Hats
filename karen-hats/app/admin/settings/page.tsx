"use client";

import { useState } from "react";
import { updateAdminSettings } from "../../utils/api"; // Adjusted import path

const AdminSettings = () => {
  const [siteName, setSiteName] = useState("");  // Update state for site name
  const [contactEmail, setContactEmail] = useState(""); // Update state for contact email
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateAdminSettings({ siteName, contactEmail }); // Update this line
      alert("Settings updated successfully");
    } catch (err) {
      setError("Failed to update settings. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Account Settings</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="siteName" className="block text-sm font-medium mb-1">
            Site Name:
          </label>
          <input
            id="siteName"
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="border rounded p-2 w-full"
            required
            placeholder="Enter site name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactEmail" className="block text-sm font-medium mb-1">
            Contact Email:
          </label>
          <input
            id="contactEmail"
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            className="border rounded p-2 w-full"
            required
            placeholder="Enter contact email"
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

export default AdminSettings;
