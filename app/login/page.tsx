"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/Lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    router.push("/world");
    router.refresh();
  }

  return (
    <main className="loginPage">
      <section className="loginCard">
        <p className="loginEyebrow">WELCOME BACK</p>

        <h1 className="loginTitle">
          Continue Your
          <br />
          Journey
        </h1>

        <p className="loginDescription">
          Log in to continue leveling up your guitar skills.
        </p>

        <form className="loginForm" onSubmit={handleLogin}>
          <input
            type="email"
            className="loginInput"
            placeholder="Email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="loginInput"
            placeholder="Password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {message && (
            <p
              style={{
                color: "#ffb6b6",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              {message}
            </p>
          )}

          <button className="loginSubmit" disabled={loading}>
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>

        <p className="loginFooter">
          Don&apos;t have an account?{" "}
          <Link href="/signup">Create one</Link>
        </p>
      </section>
    </main>
  );
}