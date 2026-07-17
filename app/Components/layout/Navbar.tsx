import Link from "next/link";

export default function Navbar() {
  return (
    <header className="topNav">
      <div className="brand">
        <span className="brandMark">PF</span>
        <span className="brandName">PROJEKT FRET</span>
      </div>

      <div className="topNavActions">
        <Link href="/login" className="loginButton">
          Log In
        </Link>

        <Link href="/signup" className="startFreeButton">
          Start Free
        </Link>
      </div>
    </header>
  );
}