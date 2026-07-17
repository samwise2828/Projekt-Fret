export default function Navbar() {
  return (
    <header className="topNav">
      <a href="/" className="brand">
        <span className="brandMark">PF</span>

        <span className="brandName">
          PROJEKT FRET
        </span>
      </a>

      <div className="topNavActions">
        <button className="loginButton">
          Log In
        </button>

        <button className="startFreeButton">
          Start Free
        </button>
      </div>
    </header>
  );
}