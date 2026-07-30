"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../../../Lib/supabase";
import styles from "./AppTopNav.module.css";

export default function AppTopNav() {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (isMounted) {
        setIsLoggedIn(Boolean(user));
        setLoadingUser(false);
      }
    }

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(Boolean(session?.user));
      setLoadingUser(false);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();

    router.push("/");
    router.refresh();
  }

  return (
    <header className={styles.navbar}>
      <div className={styles.navInner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandMark} aria-hidden="true">
            PF
          </span>

          <span className={styles.brandName}>
            Projekt Fret
          </span>
        </Link>

        <nav
          className={styles.navLinks}
          aria-label="Main navigation"
        >
          <Link href="/world">Worlds</Link>
          <Link href="/songs">Songs</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/#about">About</Link>
        </nav>

        <div className={styles.navActions}>
          {!loadingUser &&
            (isLoggedIn ? (
              <>
                <Link
                  href="/profile"
                  className={styles.secondaryButton}
                >
                  Account
                </Link>

                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className={styles.secondaryButton}
                >
                  Log In
                </Link>

                <Link
                  href="/auth/signup"
                  className={styles.primaryButton}
                >
                  Start Free
                </Link>
              </>
            ))}
        </div>
      </div>
    </header>
  );
}