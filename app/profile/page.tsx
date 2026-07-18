import Link from "next/link";
import AppTopNav from "../Components/navigation/AppTopNav";
import AppBottomNav from "../Components/navigation/AppBottomNav";
import styles from "./ProfilePage.module.css";

const profileStats = [
  {
    value: "1",
    label: "Lesson",
    icon: "📖",
  },
  {
    value: "0",
    label: "Worlds",
    icon: "🗺️",
  },
  {
    value: "1",
    label: "Boss",
    icon: "⚔️",
  },
  {
    value: "0",
    label: "Songs",
    icon: "🎵",
  },
];

const badges = [
  {
    name: "First Steps",
    description: "Begin your guitar journey.",
    icon: "🔥",
    unlocked: true,
  },
  {
    name: "Guitar Guardian",
    description: "Complete your first boss battle.",
    icon: "⚔️",
    unlocked: true,
  },
  {
    name: "Campfire Explorer",
    description: "Complete your first lesson.",
    icon: "🏕️",
    unlocked: true,
  },
  {
    name: "Pick Apprentice",
    description: "Master the basics of holding a pick.",
    icon: "🎸",
    unlocked: false,
  },
  {
    name: "Rhythm Keeper",
    description: "Complete your first rhythm challenge.",
    icon: "🥁",
    unlocked: false,
  },
];

const achievements = [
  {
    title: "Defeated Guitar Guardian",
    description: "Completed the first boss battle.",
    reward: "+100 XP",
    icon: "⚔️",
  },
  {
    title: "Completed Meet Your Guitar",
    description: "Finished Lesson 1 in The First Campfire.",
    reward: "Lesson complete",
    icon: "✓",
  },
  {
    title: "Journey Started",
    description: "Began your adventure through Projekt Fret.",
    reward: "First Steps badge",
    icon: "🔥",
  },
];

export default function ProfilePage() {
  const currentXp = 100;
  const xpNeeded = 500;

  const xpPercentage = Math.min(
    100,
    Math.round((currentXp / xpNeeded) * 100)
  );

  return (
    <>
      <AppTopNav />

      <main className={styles.page}>
        <div className={styles.backgroundGlow} />

        <header className={styles.pageHeader}>
          <p className={styles.eyebrow}>Your adventurer</p>
          <h1 className={styles.pageTitle}>Profile</h1>
          <p className={styles.pageDescription}>
            Track your progress, collect rewards, and continue your guitar
            journey.
          </p>
        </header>

        <section className={styles.profileCard}>
          <div className={styles.profileIdentity}>
            <div className={styles.avatarArea}>
              <div className={styles.avatarRing}>
                <div className={styles.avatar} aria-hidden="true">
                  S
                </div>
              </div>

              <span className={styles.levelBadge}>Level 1</span>
            </div>

            <div className={styles.playerInformation}>
              <p className={styles.playerLabel}>Projekt Fret Adventurer</p>

              <h2 className={styles.playerName}>Sam</h2>

              <p className={styles.playerTitle}>
                <span aria-hidden="true">🔥</span>
                Campfire Beginner
              </p>

              <div className={styles.xpSection}>
                <div className={styles.xpHeading}>
                  <span>Level progress</span>

                  <strong>
                    {currentXp} / {xpNeeded} XP
                  </strong>
                </div>

                <div
                  className={styles.xpTrack}
                  role="progressbar"
                  aria-label="Level progress"
                  aria-valuemin={0}
                  aria-valuemax={xpNeeded}
                  aria-valuenow={currentXp}
                >
                  <div
                    className={styles.xpFill}
                    style={{
                      width: `${xpPercentage}%`,
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
              <strong>1 Day</strong>
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

              <strong className={styles.statValue}>{stat.value}</strong>

              <span className={styles.statLabel}>{stat.label}</span>
            </article>
          ))}
        </section>

        <section className={styles.contentSection}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionEyebrow}>Continue playing</p>
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
              <p className={styles.worldLabel}>World 1</p>

              <h3>The First Campfire</h3>

              <p className={styles.journeyDescription}>
                Learn the foundations of guitar and prepare for your first
                song.
              </p>

              <div className={styles.nextLesson}>
                <span>Next lesson</span>
                <strong>Holding the Pick</strong>
              </div>

              <Link href="/lesson/2" className={styles.continueButton}>
                Continue Journey
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        </section>

        <section className={styles.contentSection}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionEyebrow}>Your collection</p>
              <h2>Badges</h2>
            </div>

            <span className={styles.badgeCount}>
              3 / {badges.length}
            </span>
          </div>

          <div className={styles.badgeGrid}>
            {badges.map((badge) => (
              <article
                key={badge.name}
                className={`${styles.badgeCard} ${
                  badge.unlocked ? styles.unlocked : styles.locked
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
              <p className={styles.sectionEyebrow}>Recent progress</p>
              <h2>Achievements</h2>
            </div>

            <span className={styles.sectionIcon} aria-hidden="true">
              🏆
            </span>
          </div>

          <div className={styles.achievementList}>
            {achievements.map((achievement) => (
              <article
                className={styles.achievementCard}
                key={achievement.title}
              >
                <div className={styles.achievementIcon} aria-hidden="true">
                  {achievement.icon}
                </div>

                <div className={styles.achievementInformation}>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>

                <span className={styles.achievementReward}>
                  {achievement.reward}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.accountSection}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.sectionEyebrow}>Player options</p>
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