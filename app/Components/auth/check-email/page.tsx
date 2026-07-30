import Link from "next/link";

export default function CheckEmailPage() {
  return (
    <main className="signupPage">
      <section className="signupCard">
        <p className="signupEyebrow">ONE LAST STEP</p>

        <h1 className="signupTitle">
          Check
          <br />
          Your Email
        </h1>

        <p className="signupDescription">
          We've sent you a verification email.
          <br />
          Click the link inside it to activate your Project Fret account.
        </p>

        <div style={{ marginTop: "2rem" }}>
          <Link href="/login" className="signupSubmit">
            Go to Login
          </Link>
        </div>

        <p
          style={{
            marginTop: "2rem",
            opacity: 0.8,
            textAlign: "center",
          }}
        >
          Didn't receive it?
          <br />
          Check your spam folder or wait a minute and try again.
        </p>
      </section>
    </main>
  );
}