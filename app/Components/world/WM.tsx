"use client";

import Link from "next/link";
import styles from "./WM.module.css";

type Realm = {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  href: string;
  locked: boolean;
  positionClass: string;
};

const realms: Realm[] = [
  {
    id: "emberlands",
    name: "Emberlands",
    subtitle: "The journey begins",
    icon: "🔥",
    href: "/realms/emberlands",
    locked: false,
    positionClass: styles.emberlands,
  },
  {
    id: "chord-canyon",
    name: "Chord Canyon",
    subtitle: "Master open chords",
    icon: "🏜️",
    href: "#",
    locked: true,
    positionClass: styles.chordCanyon,
  },
  {
    id: "rhythm-ridge",
    name: "Rhythm Ridge",
    subtitle: "Build rhythm and timing",
    icon: "🎵",
    href: "#",
    locked: true,
    positionClass: styles.rhythmRidge,
  },
  {
    id: "coast-of-echoes",
    name: "Coast of Echoes",
    subtitle: "Melody and expression",
    icon: "🌊",
    href: "#",
    locked: true,
    positionClass: styles.coastOfEchoes,
  },
  {
    id: "frost-peaks",
    name: "Frost Peaks",
    subtitle: "Precision and control",
    icon: "❄️",
    href: "#",
    locked: true,
    positionClass: styles.frostPeaks,
  },
  {
    id: "dragons-forge",
    name: "Dragon's Forge",
    subtitle: "Advanced techniques",
    icon: "🌋",
    href: "#",
    locked: true,
    positionClass: styles.dragonsForge,
  },
];

export default function WM() {
  return (
    <main className={styles.worldMap}>
      <div className={styles.backgroundOverlay} />
      <div className={styles.vignette} />
      <div className={styles.topGlow} />

      <header className={styles.worldHeader}>
        <span className={styles.eyebrow}>THE WORLD OF</span>

        <h1>Projekt Fret</h1>

        <div className={styles.divider}>
          <span />
          <i />
          <span />
        </div>

        <p>
          Explore each realm, master new guitar skills, and unlock the path
          ahead.
        </p>
      </header>

      <section
        className={styles.mapArea}
        aria-label="Projekt Fret world map"
      >
        <svg
          className={styles.routeLines}
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M500 405 C415 360 335 305 260 245" />
          <path d="M505 395 C540 315 585 235 640 160" />
          <path d="M515 410 C625 390 710 350 790 290" />
          <path d="M490 435 C390 475 315 525 235 585" />
          <path d="M520 440 C625 485 710 535 790 585" />
        </svg>

        {realms.map((realm) => {
          const markerClassName = [
            styles.realmMarker,
            realm.positionClass,
            realm.locked ? styles.locked : styles.unlocked,
          ].join(" ");

          if (realm.locked) {
            return (
              <article
                key={realm.id}
                className={markerClassName}
                aria-disabled="true"
              >
                <span className={styles.realmIcon}>
                  {realm.icon}
                </span>

                <div className={styles.realmText}>
                  <strong>{realm.name}</strong>
                  <small>{realm.subtitle}</small>
                </div>

                <span className={styles.lockIcon}>
                  🔒
                </span>
              </article>
            );
          }

          return (
            <Link
              key={realm.id}
              href={realm.href}
              className={markerClassName}
            >
              <span className={styles.realmIcon}>
                {realm.icon}
              </span>

              <div className={styles.realmText}>
                <strong>{realm.name}</strong>
                <small>{realm.subtitle}</small>
              </div>

              <span className={styles.enterLabel}>
                ENTER
              </span>
            </Link>
          );
        })}
      </section>

      <aside className={styles.worldStatus}>
        <div className={styles.statusHeading}>
          <span className={styles.statusFlame}>
            ◆
          </span>

          <div>
            <strong>1 of 6</strong>
            <small>Realms Available</small>
          </div>
        </div>

        <div className={styles.progressTrack}>
          <div className={styles.progressFill} />
        </div>
      </aside>

      <div className={styles.legend}>
        <span>
          <i className={styles.availableDot} />
          Available
        </span>

        <span>
          <i className={styles.lockedDot} />
          Locked
        </span>
      </div>
    </main>
  );
}