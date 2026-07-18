import Link from "next/link";

export default function LessonOnePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#071011",
        color: "#fff8e9",
        padding: "3rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <Link
          href="/dashboard"
          style={{
            color: "#f59e0b",
            textDecoration: "none",
          }}
        >
          ← Back to Dashboard
        </Link>

        <p
          style={{
            marginTop: "3rem",
            color: "#f59e0b",
            fontWeight: "bold",
          }}
        >
          CAMPFIRE VALLEY · LESSON 1
        </p>

        <h1
          style={{
            marginTop: "0.75rem",
            fontSize: "3rem",
          }}
        >
          Your First Notes
        </h1>

        <p
          style={{
            marginTop: "1.25rem",
            fontSize: "1.2rem",
            lineHeight: 1.7,
            opacity: 0.85,
          }}
        >
          Welcome to your first Project Fret lesson. This is where the lesson
          content will go.
        </p>
      </div>
    </main>
  );
}