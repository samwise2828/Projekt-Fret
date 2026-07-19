import Link from "next/link";
import AppBottomNav from "../../Components/navigation/AppBottomNav";
import styles from "./page.module.css";

export default function EmberlandsPage() {
  return (
    <main className={styles.realmPage}>
      <div className={styles.overlay} />

      <section className={styles.realmHeader}>
        <p>Realm 1</p>

        <h1>Emberlands</h1>

        <span>Stop Quitting, Start Playing!</span>
      </section>

      <Link
        href="/world/1"
        className={`${styles.worldMarker} ${styles.worldOne}`}
      >
        <span className={styles.markerIcon}>🔥</span>

        <strong>The First Campfire</strong>

        <small>World 1</small>
      </Link>

      <button
        className={`${styles.worldMarker} ${styles.worldTwo} ${styles.locked}`}
        disabled
      >
        <span className={styles.markerIcon}>🔒</span>

        <strong>Chord Canyon</strong>

        <small>World 2</small>
      </button>

      <button
        className={`${styles.worldMarker} ${styles.worldThree} ${styles.locked}`}
        disabled
      >
        <span className={styles.markerIcon}>🔒</span>

        <strong>Rhythm Ridge</strong>

        <small>World 3</small>
      </button>

      <AppBottomNav />
    </main>
  );
}