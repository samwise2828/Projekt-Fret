import Link from "next/link";

export default function CampfireScene() {
  return (
    <section className="campfireScene">
      <div className="sceneShade" />

      <div className="landingContent">
        <section className="introPanel">
          <p className="eyebrow">Welcome to</p>

          <h1>Campfire Valley</h1>

          <p className="slogan">
            Learn. Level up. Play.
          </p>

          <div className="lockedMessage">
            <span className="largeLock">🔒</span>

            <div>
              <strong>Campfire Valley is locked</strong>
              <p>Create your free account to begin your journey.</p>
            </div>
          </div>

          <Link href="/signup" className="journeyButton">
            Start Your Journey
          </Link>
        </section>
      </div>
    </section>
  );
}