"use client";

import Link from "next/link";
import { useState } from "react";

export default function UpgradePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleUpgrade() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Checkout failed.");
      }

      if (!data.url) {
        throw new Error("No checkout URL returned.");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#071011",
        color: "#fff8e9",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Welcome to Project Fret 🎸
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            opacity: 0.85,
            lineHeight: 1.6,
            marginBottom: "2rem",
          }}
        >
          Continue for free or become a Pathfinder and unlock the full
          Project Fret experience.
        </p>

        <button
          onClick={handleUpgrade}
          disabled={loading}
          style={{
            width: "100%",
            padding: "18px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            borderRadius: "12px",
            border: "none",
            background: "#f59e0b",
            color: "#071011",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading
            ? "Opening Checkout..."
            : "✨ Become a Pathfinder — $9.99/month"}
        </button>

        <div style={{ marginTop: "1.5rem" }}>
          <Link
            href="/dashboard"
            style={{
              color: "#fff8e9",
              textDecoration: "underline",
              fontSize: "1rem",
            }}
          >
            Continue for Free
          </Link>
        </div>

        {error && (
          <p
            style={{
              marginTop: "1rem",
              color: "#ff8a8a",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </main>
  );
}