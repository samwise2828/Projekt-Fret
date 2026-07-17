import Link from "next/link";

export default function CampfireScene() {
  return (
    <main className="campfireScene">
      <section className="introPanel">
        <p className="introEyebrow">WELCOME TO</p>

        <h1 className="introTitle">
          CAMPFIRE
          <br />
          VALLEY
        </h1>

        <p className="introDescription">Learn. Level up. Play.</p>

        <div className="lockCard">
          <div className="lockIcon" aria-hidden="true">
            🔒
          </div>

          <div className="lockContent">
            <p className="lockTitle">Campfire Valley is locked</p>

            <p className="lockText">
              Create your free account to begin your journey.
            </p>
          </div>
        </div>

        <Link href="/signup" className="journeyButton">
          Start Your Journey
        </Link>
      </section>
    </main>
  );
}