export default function Home() {
  return (
    <main
      style={{
        background: "#07140b",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "64px", color: "#f4c542" }}>
        🔥 Projekt Fret
      </h1>

      <h2>Welcome to Campfire Valley</h2>

      <button
        style={{
          marginTop: "30px",
          padding: "18px 40px",
          fontSize: "24px",
          borderRadius: "16px",
          border: "none",
          background: "#f4c542",
          cursor: "pointer",
        }}
      >
        Continue Journey
      </button>
    </main>
  );
}