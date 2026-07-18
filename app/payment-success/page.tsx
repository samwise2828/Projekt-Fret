import Link from "next/link";

export default function PaymentSuccessPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#071011",
        color: "#fff8e9",
        padding: "2rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        <div style={{ fontSize: "4rem" }}>🎸</div>

        <h1 style={{ marginTop: "1rem" }}>Welcome, Pathfinder!</h1>

        <p
          style={{
            marginTop: "1rem",
            fontSize: "1.2rem",
            lineHeight: 1.6,
          }}
        >
          Your subscription was successful. Your Project Fret journey begins
          now.
        </p>

        <Link
          href="/dashboard"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            padding: "16px 36px",
            borderRadius: "12px",
            background: "#f59e0b",
            color: "#071011",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Continue to Project Fret
        </Link>
      </div>
    </main>
  );
}