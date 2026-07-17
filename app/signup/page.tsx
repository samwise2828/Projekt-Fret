import Link from "next/link";

export default function SignupPage() {
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

        <form className="signupForm">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="signupInput"
            autoComplete="name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="signupInput"
            autoComplete="email"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="signupInput"
            autoComplete="new-password"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="signupInput"
            autoComplete="new-password"
            required
          />

          <button type="submit" className="signupSubmit">
            Create Free Account
          </button>
        </form>

        <p className="signupTerms">
          By creating an account, you agree to the Terms of Service and Privacy
          Policy.
        </p>

        <p className="signupFooter">
          Already have an account?
          <Link href="/login">Log in</Link>
        </p>
      </section>
    </main>
  );
}