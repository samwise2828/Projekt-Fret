"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./AppBottomNav.module.css";

const navigationItems = [
  {
    label: "Profile",
    href: "/profile",
    icon: "●",
  },
  {
    label: "Worlds",
    href: "/world",
    icon: "◎",
  },
  {
    label: "Songs",
    href: "/songs",
    icon: "♫",
  },
  {
    label: "Skills",
    href: "/skills",
    icon: "☆",
  },
];

export default function AppBottomNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.bottomNav} aria-label="App navigation">
      <div className={styles.navigationContent}>
        {navigationItems.map((item) => {
          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navigationItem} ${
                isActive ? styles.active : ""
              }`}
            >
              <span className={styles.icon} aria-hidden="true">
                {item.icon}
              </span>

              <span className={styles.label}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}