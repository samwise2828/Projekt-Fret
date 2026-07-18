import Link from "next/link";

export default function DashboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#071011",
        color: "#fff8e9",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "2.75rem",
            marginBottom: "1rem",
          }}
        >
          Welcome to Project Fret 🎸
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            opacity: 0.8,
            lineHeight: 1.6,
          }}
        >
          Your guitar journey starts here.
        </p>

        <Link
          href="/world"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            padding: "14px 28px",
            borderRadius: "10px",
            background: "#f59e0b",
            color: "#071011",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Start Your First Lesson
        </Link>
      </div>
    </main>
  );
}