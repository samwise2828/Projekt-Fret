import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="loginPage">
      <div className="loginCard">
        <p className="loginEyebrow">WELCOME BACK</p>

        <h1 className="loginTitle">
          Continue Your
          <br />
          Journey
        </h1>

        <p className="loginDescription">
          Log in to continue leveling up your guitar skills.
        </p>

        <form className="loginForm">
          <input
            type="email"
            placeholder="Email"
            className="loginInput"
          />

          <input
            type="password"
            placeholder="Password"
            className="loginInput"
          />

          <button className="loginSubmit">
            Log In
          </button>
        </form>

        <p className="loginFooter">
          Don't have an account?
          <Link href="/signup">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}