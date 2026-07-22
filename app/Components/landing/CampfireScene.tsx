import Link from "next/link";

export default function CampfireScene() {
  return (
    <>
      <section className="campfireScene">
        <div className="heroOverlay" />

        <div className="heroContent">
          <p className="introEyebrow">
            LEARN. LEVEL UP. PLAY.
          </p>

          <div className="eyebrowDivider" />

          <h1 className="introTitle">
            
          </h1>

          <p className="introDescription">
            Master guitar through guided lessons, immersive worlds, and
            skill-based progression that keeps you motivated from your first
            chord to your first song.
          </p>

          <div className="heroActions">
            <Link href="/signup" className="journeyButton">
              Start Your Journey
              <span>›</span>
            </Link>

            <Link href="/login" className="secondaryHeroButton">
              Log In
            </Link>
          </div>
        </div>

        <div className="heroBottomFade" />
      </section>

      <section className="worldPreview">
        <p className="worldPreviewEyebrow">
          sTOP QUITTING
        
        </p>

        <h2>START PLAYING</h2>

        <div className="worldPreviewDivider" />
      </section>
    </>
  );
}