import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="signupPage">
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
            <input type="text" placeholder="Your name" />
          </label>

          <label className="signupField">
            <span>Email</span>
            <input type="email" placeholder="you@example.com" />
          </label>

          <label className="signupField">
            <span>Password</span>
            <input type="password" placeholder="Create a password" />
          </label>

          <button type="submit" className="signupSubmitButton">
            Create Free Account
          </button>
        </form>
      </section>
    </main>
  );
}