import Link from "next/link";
import styles from "./AppTopNav.module.css";

export default function AppTopNav() {
  return (
    <header className={styles.topNav}>
      <Link href="/world" className={styles.brand}>
        PROJEKT FRET
      </Link>
    </header>
  );
}