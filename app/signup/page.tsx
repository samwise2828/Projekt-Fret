"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/Lib/supabase";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage("");

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    router.push("/check-email");
  }

  return (
    <main className="signupPage">
      <section className="signupCard">
        <p className="signupEyebrow">BEGIN YOUR JOURNEY</p>

        <h1 className="signupTitle">
          Enter Campfire
          <br />
          Valley
        </h1>

        <p className="signupDescription">
          Create your free account and start building your guitar skills.
        </p>

        <form className="signupForm" onSubmit={handleSignup}>
          <input
            className="signupInput"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            className="signupInput"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="signupInput"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            className="signupInput"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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

          <button
            className="signupSubmit"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Free Account"}
          </button>
        </form>

        <p className="signupFooter">
          Already have an account?{" "}
          <Link href="/login">Log in</Link>
        </p>
      </section>
    </main>
  );
}