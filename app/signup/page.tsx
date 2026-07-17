import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="signupPage">
      <div className="signupOverlay" />

      <section className="signupCard">
        <Link href="/" className="signupBrand">
          <span className="signupBrandMark">PF</span>
          <span className="signupBrandName">PROJEKT FRET</span>
        </Link>

        <div className="signupHeading">
          <p className="signupEyebrow">Welcome, traveler</p>
          <h1>Begin Your Journey</h1>
          <p>
            Create your account and take your first step into Campfire Valley.
          </p>
        </div>

        <form className="signupForm">
          <label className="signupField">
            <span>Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              autoComplete="name"
            />
          </label>

          <label className="signupField">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>

          <label className="signupField">
            <span>Password</span>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              autoComplete="new-password"
            />
          </label>

          <button type="submit" className="signupSubmitButton">
            Create Free Account
          </button>
        </form>

        <p className="signupLoginText">
          Already have an account?{" "}
          <Link href="/login">Log in</Link>
        </p>
      </section>
    </main>
  );
}