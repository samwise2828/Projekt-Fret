"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AppTopNav from "../Components/navigation/AppTopNav";
import AppBottomNav from "../Components/navigation/AppBottomNav";
import {
  getPlayerProgress,
  type PlayerProgress,
} from "@/Lib/playerProgress";
import styles from "./ProfilePage.module.css";

export default function ProfilePage() {
  const [progress, setProgress] =
    useState<PlayerProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadProgress() {
      try {
        const playerProgress = await getPlayerProgress();

        if (active) {
          setProgress(playerProgress);
        }
      } catch (error) {
        console.error("Could not load profile progress:", error);

        if (active) {
          setLoadError(
            error instanceof Error
              ? error.message
              : "Your profile could not be loaded."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadProgress();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <>
        <AppTopNav />

        <main className={styles.page}>
          <header className={styles.pageHeader}>
            <p className={styles.eyebrow}>Your adventurer</p>
            <h1 className={styles.pageTitle}>Loading profile...</h1>
          </header>
        </main>

        <AppBottomNav />
      </>
    );
  }

  if (!progress || loadError) {
    return (
      <>
        <AppTopNav />

        <main className={styles.page}>
          <header className={styles.pageHeader}>
            <p className={styles.eyebrow}>Profile unavailable</p>
            <h1 className={styles.pageTitle}>
              Your progress could not be loaded
            </h1>
            <p className={styles.pageDescription}>
              {loadError || "Please refresh and try again."}
            </p>
          </header>
        </main>

        <AppBottomNav />
      </>
    );
  }

  const profileStats = [
    {
      value: progress.lessonsCompleted,
      label:
        progress.lessonsCompleted === 1 ? "Lesson" : "Lessons",
      icon: "📖",
    },
    {
      value: progress.worldsCompleted,
      label:
        progress.worldsCompleted === 1 ? "World" : "Worlds",
      icon: "🗺️",
    },
    {
      value: progress.bossesDefeated,
      label:
        progress.bossesDefeated === 1 ? "Boss" : "Bosses",
      icon: "⚔️",
    },
    {
      value: progress.songsCompleted,
      label:
        progress.songsCompleted === 1 ? "Song" : "Songs",
      icon: "🎵",
    },
  ];

  const unlockedBadgeCount = progress.badges.filter(
    (badge) => badge.unlocked
  ).length;

  return (
    <>
      <AppTopNav />

      <main className={styles.page}>
        <div className={styles.backgroundGlow} />

        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>Your adventurer</p>
          <h1 className={styles.pageTitle}>Profile</h1>
          <p className={styles.pageDescription}>
            Track your progress, collect rewards, and continue your
            guitar journey.
          </p>
        </header>

        <section className={styles.profileCard}>
          <div className={styles.profileIdentity}>
            <div className={styles.avatarArea}>
              <div className={styles.avatarRing}>
                <div className={styles.avatar} aria-hidden="true">
                  {progress.avatarLetter}
                </div>
              </div>

              <span className={styles.levelBadge}>
                Level {progress.level}
              </span>
            </div>

            <div className={styles.playerInformation}>
              <p className={styles.playerLabel}>
                Projekt Fret Adventurer
              </p>

              <h2 className={styles.playerName}>{progress.name}</h2>

              <p className={styles.playerTitle}>
                <span aria-hidden="true">🔥</span>
                Campfire Beginner
              </p>

              <div className={styles.xpSection}>
                <div className={styles.xpHeading}>
                  <span>Level progress</span>

                  <strong>
                    {progress.currentLevelXp} /{" "}
                    {progress.xpNeededForNextLevel} XP
                  </strong>
                </div>

                <div
                  className={styles.xpTrack}
                  role="progressbar"
                  aria-label="Level progress"
                  aria-valuemin={0}
                  aria-valuemax={
                    progress.xpNeededForNextLevel
                  }
                  aria-valuenow={progress.currentLevelXp}
                >
                  <div
                    className={styles.xpFill}
                    style={{
                      width: `${progress.xpPercentage}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.streakCard}>
            <span className={styles.streakIcon} aria-hidden="true">
              🔥
            </span>

            <div>
              <strong>
                {progress.streak}{" "}
                {progress.streak === 1 ? "Day" : "Days"}
              </strong>
              <span>Current streak</span>
            </div>
          </div>
        </section>

        <section
          className={styles.statsGrid}
          aria-label="Player statistics"
        >
          {profileStats.map((stat) => (
            <article className={styles.statCard} key={stat.label}>
              <span className={styles.statIcon} aria-hidden="true">
                {stat.icon}
              </span>

              <strong className={styles.statValue}>
                {stat.value}
              </strong>

              <span className={styles.statLabel}>
                {stat.label}
              </span>
            </article>
          ))}
        </section>

        <section className={styles.contentSection}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionEyebrow}>
                Continue playing
              </p>
              <h2>Current Journey</h2>
            </div>

            <span className={styles.sectionIcon} aria-hidden="true">
              🗺️
            </span>
          </div>

          <article className={styles.journeyCard}>
            <div className={styles.journeyArtwork}>
              <div className={styles.moon} />

              <div className={styles.campfire} aria-hidden="true">
                🔥
              </div>
            </div>

            <div className={styles.journeyContent}>
              <p className={styles.worldLabel}>
                World {progress.currentWorld}
              </p>

              <h3>The First Campfire</h3>

              <p className={styles.journeyDescription}>
                Learn the foundations of guitar and prepare for your
                first song.
              </p>

              <div className={styles.nextLesson}>
                <span>
                  {progress.worldsCompleted > 0
                    ? "World status"
                    : "Next lesson"}
                </span>
                <strong>
                  {progress.worldsCompleted > 0
                    ? "World 1 Complete"
                    : progress.nextLessonTitle}
                </strong>
              </div>

              <Link
                href={progress.nextLessonHref}
                className={styles.continueButton}
              >
                {progress.worldsCompleted > 0
                  ? "Return to World Map"
                  : "Continue Journey"}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionEyebrow}>
                Your collection
              </p>
              <h2>Badges</h2>
            </div>

            <span className={styles.badgeCount}>
              {unlockedBadgeCount} / {progress.badges.length}
            </span>
          </div>

          <div className={styles.badgeGrid}>
            {progress.badges.map((badge) => (
              <article
                key={badge.id}
                className={`${styles.badgeCard} ${
                  badge.unlocked
                    ? styles.unlocked
                    : styles.locked
                }`}
              >
                <div className={styles.badgeIcon}>
                  <span aria-hidden="true">
                    {badge.unlocked ? badge.icon : "🔒"}
                  </span>
                </div>

                <h3>{badge.name}</h3>
                <p>{badge.description}</p>

                <span className={styles.badgeStatus}>
                  {badge.unlocked ? "Unlocked" : "Locked"}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionEyebrow}>
                Recent progress
              </p>
              <h2>Achievements</h2>
            </div>

            <span className={styles.sectionIcon} aria-hidden="true">
              🏆
            </span>
          </div>

          <div className={styles.achievementList}>
            {progress.achievements.length > 0 ? (
              progress.achievements.map((achievement, index) => (
                <article
                  className={styles.achievementCard}
                  key={`${achievement.title}-${index}`}
                >
                  <div
                    className={styles.achievementIcon}
                    aria-hidden="true"
                  >
                    {achievement.icon}
                  </div>

                  <div
                    className={styles.achievementInformation}
                  >
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                  </div>

                  <span className={styles.achievementReward}>
                    {achievement.reward}
                  </span>
                </article>
              ))
            ) : (
              <p className={styles.pageDescription}>
                Complete your first lesson to begin earning
                achievements.
              </p>
            )}
          </div>
        </section>

        <section className={styles.accountSection}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionEyebrow}>
                Player options
              </p>
              <h2>Account</h2>
            </div>
          </div>

          <div className={styles.accountGrid}>
            <button type="button" className={styles.accountButton}>
              <span aria-hidden="true">✏️</span>
              <span>
                <strong>Edit Profile</strong>
                <small>Change your name and avatar</small>
              </span>
              <i aria-hidden="true">→</i>
            </button>

            <button type="button" className={styles.accountButton}>
              <span aria-hidden="true">⚙️</span>
              <span>
                <strong>Settings</strong>
                <small>Manage your app preferences</small>
              </span>
              <i aria-hidden="true">→</i>
            </button>

            <button type="button" className={styles.accountButton}>
              <span aria-hidden="true">⭐</span>
              <span>
                <strong>Membership</strong>
                <small>View your Projekt Fret plan</small>
              </span>
              <i aria-hidden="true">→</i>
            </button>

            <button
              type="button"
              className={`${styles.accountButton} ${styles.signOutButton}`}
            >
              <span aria-hidden="true">↪</span>
              <span>
                <strong>Sign Out</strong>
                <small>Leave your current account</small>
              </span>
              <i aria-hidden="true">→</i>
            </button>
          </div>
        </section>
      </main>

      <AppBottomNav />
    </>
  );
}