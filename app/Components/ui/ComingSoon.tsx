import Link from "next/link";
import AppTopNav from "../navigation/AppTopNav";
import AppBottomNav from "../navigation/AppBottomNav";
import styles from "./ComingSoon.module.css";

type ComingSoonProps = {
  eyebrow?: string;
  title: string;
  description: string;
  icon: string;
  returnHref?: string;
  returnLabel?: string;
};

export default function ComingSoon({
  eyebrow = "Under construction",
  title,
  description,
  icon,
  returnHref = "/world",
  returnLabel = "Return to world",
}: ComingSoonProps) {
  return (
    <>
      <AppTopNav />

      <main className={styles.page}>
        <div className={styles.backgroundGlow} />

        <section className={styles.card}>
          <div
            className={styles.icon}
            aria-hidden="true"
          >
            {icon}
          </div>

          <p className={styles.eyebrow}>
            {eyebrow}
          </p>

          <h1 className={styles.title}>
            {title}
          </h1>

          <p className={styles.description}>
            {description}
          </p>

          <div className={styles.divider}>
            <span />
            <i />
            <span />
          </div>

          <p className={styles.message}>
            This area will unlock during a future
            Projekt Fret update.
          </p>

          <Link
            href={returnHref}
            className={styles.button}
          >
            {returnLabel}
            <span aria-hidden="true"> →</span>
          </Link>
        </section>
      </main>

      <AppBottomNav />
    </>
  );
}