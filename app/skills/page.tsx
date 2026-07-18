"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import AppTopNav from "../Components/navigation/AppTopNav";
import AppBottomNav from "../Components/navigation/AppBottomNav";
import styles from "./SkillsPage.module.css";

type SkillStatus = "completed" | "available" | "locked";

type Skill = {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: SkillStatus;
  progress: number;
  lesson: string;
  lessonHref: string;
  learn: string[];
  unlocks: string[];
};

type SkillBranch = {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: Skill[];
};

const skillBranches: SkillBranch[] = [
  {
    id: "basics",
    name: "Guitar Basics",
    icon: "🎸",
    description: "Learn your instrument and build strong beginner habits.",
    skills: [
      {
        id: "anatomy",
        name: "Guitar Anatomy",
        description:
          "Learn the main parts of the guitar and understand what each part does.",
        icon: "🎸",
        status: "completed",
        progress: 100,
        lesson: "Meet Your Guitar",
        lessonHref: "/lesson/1",
        learn: [
          "Headstock",
          "Neck",
          "Fretboard",
          "Frets",
          "Bridge",
          "Strings",
          "Tuners",
        ],
        unlocks: ["Proper Position", "Holding the Pick"],
      },
      {
        id: "position",
        name: "Proper Position",
        description:
          "Hold the guitar comfortably while keeping your shoulders and arms relaxed.",
        icon: "🪑",
        status: "completed",
        progress: 100,
        lesson: "Meet Your Guitar",
        lessonHref: "/lesson/1",
        learn: [
          "Sitting posture",
          "Standing posture",
          "Relaxed shoulders",
          "Guitar balance",
        ],
        unlocks: ["Finger Placement", "Clean Fretting"],
      },
      {
        id: "pick",
        name: "Holding the Pick",
        description:
          "Learn a relaxed and controlled pick grip before playing your first patterns.",
        icon: "🔻",
        status: "available",
        progress: 25,
        lesson: "Holding the Pick",
        lessonHref: "/lesson/2",
        learn: [
          "Proper pick grip",
          "Pick angle",
          "Grip pressure",
          "Relaxed wrist",
        ],
        unlocks: ["Downstrokes", "Upstrokes", "Alternate Picking"],
      },
      {
        id: "learning-system",
        name: "Learning System",
        description:
          "Understand how lessons, practice checkpoints, bosses, and rewards work.",
        icon: "📖",
        status: "completed",
        progress: 100,
        lesson: "Meet Your Guitar",
        lessonHref: "/lesson/1",
        learn: ["Lessons", "Practice", "Boss Battles", "Rewards"],
        unlocks: ["World Progress", "Skill Rewards"],
      },
    ],
  },
  {
    id: "technique",
    name: "Technique",
    icon: "⚔️",
    description: "Build control in both hands and learn to play cleanly.",
    skills: [
      {
        id: "downstrokes",
        name: "Downstrokes",
        description:
          "Strike the strings downward with a relaxed wrist and consistent motion.",
        icon: "↓",
        status: "locked",
        progress: 0,
        lesson: "Holding the Pick",
        lessonHref: "/lesson/2",
        learn: [
          "Downward pick motion",
          "Wrist control",
          "Consistent volume",
          "String accuracy",
        ],
        unlocks: ["Upstrokes", "Basic Rhythm"],
      },
      {
        id: "upstrokes",
        name: "Upstrokes",
        description:
          "Bring the pick upward through the string without tensing your hand.",
        icon: "↑",
        status: "locked",
        progress: 0,
        lesson: "Holding the Pick",
        lessonHref: "/lesson/2",
        learn: [
          "Upward pick motion",
          "Relaxed recovery",
          "String control",
          "Even sound",
        ],
        unlocks: ["Alternate Picking"],
      },
      {
        id: "alternate-picking",
        name: "Alternate Picking",
        description:
          "Combine downstrokes and upstrokes into one efficient picking motion.",
        icon: "↕",
        status: "locked",
        progress: 0,
        lesson: "Holding the Pick",
        lessonHref: "/lesson/2",
        learn: [
          "Down-up motion",
          "Pick efficiency",
          "Slow repetition",
          "Consistent timing",
        ],
        unlocks: ["Faster melodies", "String crossing"],
      },
      {
        id: "finger-placement",
        name: "Finger Placement",
        description:
          "Place your fingertips correctly behind the frets to produce clear notes.",
        icon: "☝️",
        status: "locked",
        progress: 0,
        lesson: "Your First Notes",
        lessonHref: "/lesson/3",
        learn: [
          "Fingertip position",
          "Thumb placement",
          "Finger pressure",
          "Curved fingers",
        ],
        unlocks: ["Clean Notes", "First Chord"],
      },
    ],
  },
  {
    id: "strings",
    name: "Strings & Notes",
    icon: "🎼",
    description: "Navigate the strings and begin playing individual notes.",
    skills: [
      {
        id: "string-numbers",
        name: "String Numbers",
        description:
          "Learn how guitar strings are numbered from the thinnest to the thickest.",
        icon: "6️⃣",
        status: "locked",
        progress: 0,
        lesson: "The Strings",
        lessonHref: "/lesson/4",
        learn: [
          "First string",
          "Sixth string",
          "String order",
          "Quick string finding",
        ],
        unlocks: ["String Names", "Tab Reading"],
      },
      {
        id: "string-names",
        name: "String Names",
        description:
          "Memorize the open-string names and find them without hesitation.",
        icon: "E",
        status: "locked",
        progress: 0,
        lesson: "The Strings",
        lessonHref: "/lesson/4",
        learn: [
          "Low E",
          "A",
          "D",
          "G",
          "B",
          "High E",
        ],
        unlocks: ["Tuning", "Note Navigation"],
      },
      {
        id: "clean-notes",
        name: "Clean Notes",
        description:
          "Play fretted notes without buzzing, muting, or unwanted string noise.",
        icon: "✨",
        status: "locked",
        progress: 0,
        lesson: "Your First Notes",
        lessonHref: "/lesson/3",
        learn: [
          "Clear sound",
          "Correct pressure",
          "Avoiding fret buzz",
          "Muting unused strings",
        ],
        unlocks: ["Melodies", "Chord Clarity"],
      },
    ],
  },
  {
    id: "rhythm",
    name: "Rhythm",
    icon: "🥁",
    description: "Learn to count, keep time, and play with a steady pulse.",
    skills: [
      {
        id: "quarter-notes",
        name: "Quarter Notes",
        description:
          "Play one steady beat at a time and understand the basic musical pulse.",
        icon: "♩",
        status: "locked",
        progress: 0,
        lesson: "First Rhythm",
        lessonHref: "/lesson/5",
        learn: [
          "Four-beat measures",
          "One note per beat",
          "Steady pulse",
          "Basic counting",
        ],
        unlocks: ["Eighth Notes", "Strumming Patterns"],
      },
      {
        id: "counting",
        name: "Counting Time",
        description:
          "Count aloud while playing so your hands stay connected to the beat.",
        icon: "1️⃣",
        status: "locked",
        progress: 0,
        lesson: "First Rhythm",
        lessonHref: "/lesson/5",
        learn: [
          "Count 1-2-3-4",
          "Start on beat one",
          "Stay consistent",
          "Restart without rushing",
        ],
        unlocks: ["Metronome Practice"],
      },
      {
        id: "metronome",
        name: "Metronome Practice",
        description:
          "Use a metronome to build reliable timing and measure improvement.",
        icon: "⏱️",
        status: "locked",
        progress: 0,
        lesson: "First Rhythm",
        lessonHref: "/lesson/5",
        learn: [
          "Follow the click",
          "Slow practice",
          "Tempo control",
          "Gradual speed increases",
        ],
        unlocks: ["Song Timing", "Rhythm Challenges"],
      },
    ],
  },
  {
    id: "chords",
    name: "Chords",
    icon: "🎶",
    description: "Combine multiple notes and begin playing full musical shapes.",
    skills: [
      {
        id: "em-chord",
        name: "E Minor Chord",
        description:
          "Learn your first full chord and make every string ring clearly.",
        icon: "Em",
        status: "locked",
        progress: 0,
        lesson: "First Chord",
        lessonHref: "/lesson/6",
        learn: [
          "Em shape",
          "Finger numbers",
          "Chord pressure",
          "Clear open strings",
        ],
        unlocks: ["Chord Changes", "First Song"],
      },
      {
        id: "chord-diagrams",
        name: "Chord Diagrams",
        description:
          "Understand the visual maps used to show chord shapes on the fretboard.",
        icon: "▦",
        status: "locked",
        progress: 0,
        lesson: "First Chord",
        lessonHref: "/lesson/6",
        learn: [
          "Vertical strings",
          "Horizontal frets",
          "Finger dots",
          "Open and muted strings",
        ],
        unlocks: ["Independent chord learning"],
      },
    ],
  },
  {
    id: "songs",
    name: "Song Skills",
    icon: "🎵",
    description: "Combine everything you have learned into real music.",
    skills: [
      {
        id: "first-song",
        name: "First Song Challenge",
        description:
          "Combine notes, rhythm, picking, and your first chord in one final challenge.",
        icon: "🏆",
        status: "locked",
        progress: 0,
        lesson: "Song Challenge",
        lessonHref: "/lesson/7",
        learn: [
          "Start to finish performance",
          "Recover from mistakes",
          "Keep steady timing",
          "Complete a full song section",
        ],
        unlocks: ["World 2", "Campfire Explorer Badge"],
      },
    ],
  },
];

function getStatusLabel(status: SkillStatus) {
  if (status === "completed") return "Completed";
  if (status === "available") return "Available";
  return "Locked";
}

export default function SkillsPage() {
  const [activeBranchId, setActiveBranchId] = useState("basics");
  const [selectedSkillId, setSelectedSkillId] = useState("pick");

  const activeBranch = useMemo(
    () =>
      skillBranches.find((branch) => branch.id === activeBranchId) ??
      skillBranches[0],
    [activeBranchId]
  );

  const selectedSkill = useMemo(() => {
    const skill =
      activeBranch.skills.find((item) => item.id === selectedSkillId) ??
      activeBranch.skills[0];

    return skill;
  }, [activeBranch, selectedSkillId]);

  function changeBranch(branchId: string) {
    const branch = skillBranches.find((item) => item.id === branchId);

    if (!branch) return;

    setActiveBranchId(branchId);
    setSelectedSkillId(branch.skills[0].id);
  }

  const completedSkills = skillBranches
    .flatMap((branch) => branch.skills)
    .filter((skill) => skill.status === "completed").length;

  const totalSkills = skillBranches.flatMap(
    (branch) => branch.skills
  ).length;

  const totalProgress = Math.round(
    (completedSkills / totalSkills) * 100
  );

  return (
    <>
      <AppTopNav />

      <main className={styles.page}>
        <div className={styles.pageGlow} />

        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Your progression</p>
            <h1>Skill Tree</h1>
            <p>
              Learn new techniques, complete lessons, and unlock songs and
              worlds.
            </p>
          </div>

          <div className={styles.xpPill}>
            <span>🔥</span>
            <strong>120 XP</strong>
          </div>
        </header>

        <section className={styles.dashboard}>
          <aside className={styles.leftPanel}>
            <article className={styles.progressCard}>
              <div className={styles.cardHeading}>
                <span>Total Progress</span>
                <strong>{totalProgress}%</strong>
              </div>

              <div className={styles.progressTrack}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${totalProgress}%` }}
                />
              </div>

              <div className={styles.progressStat}>
                <span>Skills unlocked</span>
                <strong>
                  {completedSkills} / {totalSkills}
                </strong>
              </div>

              <div className={styles.progressStat}>
                <span>Skill points</span>
                <strong>0</strong>
              </div>
            </article>

            <article className={styles.journeyCard}>
              <p className={styles.cardLabel}>Current Journey</p>

              <div className={styles.journeyArtwork}>
                <span>🔥</span>
              </div>

              <div className={styles.journeyText}>
                <small>World 1</small>
                <h2>The First Campfire</h2>

                <div>
                  <span>Next lesson</span>
                  <strong>Holding the Pick</strong>
                </div>
              </div>

              <Link href="/lesson/2" className={styles.journeyLink}>
                Continue
                <span>→</span>
              </Link>
            </article>

            <article className={styles.levelCard}>
              <div className={styles.levelShield}>🔥</div>

              <div>
                <strong>Level 1</strong>
                <span>120 / 500 XP</span>

                <div className={styles.smallProgressTrack}>
                  <div style={{ width: "24%" }} />
                </div>
              </div>
            </article>
          </aside>

          <section className={styles.treePanel}>
            <nav
              className={styles.branchTabs}
              aria-label="Skill categories"
            >
              {skillBranches.map((branch) => (
                <button
                  key={branch.id}
                  type="button"
                  className={`${styles.branchTab} ${
                    activeBranch.id === branch.id
                      ? styles.activeBranch
                      : ""
                  }`}
                  onClick={() => changeBranch(branch.id)}
                >
                  <span>{branch.icon}</span>
                  <small>{branch.name}</small>
                </button>
              ))}
            </nav>

            <div className={styles.treeHeader}>
              <div>
                <p>World 1: The First Campfire</p>
                <h2>{activeBranch.name}</h2>
                <span>{activeBranch.description}</span>
              </div>

              <div className={styles.branchProgress}>
                <strong>
                  {
                    activeBranch.skills.filter(
                      (skill) => skill.status === "completed"
                    ).length
                  }
                  /{activeBranch.skills.length}
                </strong>
                <small>Completed</small>
              </div>
            </div>

            <div className={styles.skillTree}>
              <div className={styles.rootNode}>
                <div>{activeBranch.icon}</div>
                <strong>{activeBranch.name}</strong>
              </div>

              <div className={styles.treeLine} />

              <div className={styles.skillGrid}>
                {activeBranch.skills.map((skill) => (
                  <button
                    type="button"
                    key={skill.id}
                    className={`${styles.skillNode} ${
                      styles[skill.status]
                    } ${
                      selectedSkill.id === skill.id
                        ? styles.selectedNode
                        : ""
                    }`}
                    onClick={() => setSelectedSkillId(skill.id)}
                  >
                    <span className={styles.nodeConnector} />

                    <span className={styles.skillCircle}>
                      {skill.status === "locked" ? "🔒" : skill.icon}
                    </span>

                    <strong>{skill.name}</strong>

                    <small>{getStatusLabel(skill.status)}</small>

                    <div className={styles.nodeProgress}>
                      <div
                        style={{ width: `${skill.progress}%` }}
                      />
                    </div>
                  </button>
                ))}
              </div>

              <div className={styles.bossConnector} />

              <article className={styles.bossNode}>
                <div>👹</div>
                <strong>
                  {activeBranch.id === "basics"
                    ? "Guitar Guardian"
                    : `${activeBranch.name} Guardian`}
                </strong>
                <small>
                  {activeBranch.skills.every(
                    (skill) => skill.status === "completed"
                  )
                    ? "Boss Defeated"
                    : "Boss Locked"}
                </small>
              </article>
            </div>
          </section>

          <aside className={styles.detailPanel}>
            <div
              className={`${styles.detailIcon} ${
                styles[selectedSkill.status]
              }`}
            >
              {selectedSkill.status === "locked"
                ? "🔒"
                : selectedSkill.icon}
            </div>

            <div className={styles.detailTitle}>
              <div>
                <h2>{selectedSkill.name}</h2>
                <span
                  className={`${styles.statusBadge} ${
                    styles[selectedSkill.status]
                  }`}
                >
                  {getStatusLabel(selectedSkill.status)}
                </span>
              </div>
            </div>

            <p className={styles.detailDescription}>
              {selectedSkill.description}
            </p>

            <div className={styles.detailSection}>
              <h3>You Will Learn</h3>

              <ul>
                {selectedSkill.learn.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.detailSection}>
              <h3>Unlocks</h3>

              <ul>
                {selectedSkill.unlocks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.lessonSection}>
              <span>Lesson</span>
              <strong>{selectedSkill.lesson}</strong>
            </div>

            <Link
              href={selectedSkill.lessonHref}
              className={`${styles.lessonButton} ${
                selectedSkill.status === "locked"
                  ? styles.lockedButton
                  : ""
              }`}
            >
              {selectedSkill.status === "completed"
                ? "Review Lesson"
                : selectedSkill.status === "available"
                ? "Continue Lesson"
                : "View Requirement"}
              <span>→</span>
            </Link>
          </aside>
        </section>
      </main>

      <AppBottomNav />
    </>
  );
}