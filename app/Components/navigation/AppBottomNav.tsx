"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./AppBottomNav.module.css";

const navigationItems = [
  {
    label: "Profile",
    href: "/profile",
    icon: "👤",
  },
  {
    label: "Maps",
    href: "/realms/emberlands",
    icon: "🗺️",
  },
  {
    label: "Songs",
    href: "/songs",
    icon: "🎵",
  },
  {
    label: "Skills",
    href: "/skills",
    icon: "🌳",
  },
];

export default function AppBottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (
      href === "/world" &&
      pathname.startsWith("/lesson/")
    ) {
      return true;
    }

    return pathname === href;
  };

  return (
    <nav
      className={styles.bottomNav}
      aria-label="Main navigation"
    >
      {navigationItems.map((item) => {
        const active = isActive(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navItem} ${
              active ? styles.active : ""
            }`}
          >
            <span
              className={styles.icon}
              aria-hidden="true"
            >
              {item.icon}
            </span>

            <span className={styles.label}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}