"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/Lib/supabase";
import AppTopNav from "../Components/navigation/AppTopNav";
import AppBottomNav from "../Components/navigation/AppBottomNav";
import { skillBranches } from "../data/skills/skillBranches";
import type {
  Skill,
  SkillBranch,
  SkillStatus,
  SkillWithProgress,
} from "../data/skills/skillTypes";
import styles from "./SkillsPage.module.css";

type UserProgress = {
  user_id: string;
  current_world: number;
  current_lesson: number;
  completed_lessons: number[];
  unlocked_skills: string[];
  earned_badges: string[];
  completed_songs: string[];
  xp: number;
  level: number;
  streak: number;
};

type SkillBranchWithProgress = Omit<SkillBranch, "skills"> & {
  skills: SkillWithProgress[];
};

function getStatusLabel(status: SkillStatus) {
  if (status === "completed") return "Completed";
  if (status === "available") return "Available";
  return "Locked";
}

function getSkillStatus(
  skill: Skill,
  completedLessons: number[],
  currentLesson: number
): SkillStatus {
  if (completedLessons.includes(skill.lessonNumber)) {
    return "completed";
  }

  if (skill.lessonNumber === currentLesson) {
    return "available";
  }

  return "locked";
}

function addProgressToBranches(
  branches: SkillBranch[],
  completedLessons: number[],
  currentLesson: number
): SkillBranchWithProgress[] {
  return branches.map((branch) => ({
    ...branch,
    skills: branch.skills.map((skill) => {
      const status = getSkillStatus(
        skill,
        completedLessons,
        currentLesson
      );

      return {
        ...skill,
        status,
        progress:
          status === "completed"
            ? 100
            : status === "available"
            ? 25
            : 0,
      };
    }),
  }));
}

export default function SkillsPage() {
  const router = useRouter();

  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [activeBranchId, setActiveBranchId] = useState("basics");
  const [selectedSkillId, setSelectedSkillId] = useState("pick");

  useEffect(() => {
    async function loadProgress() {
      setLoading(true);
      setErrorMessage("");

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        router.push("/login");
        return;
      }

      const { data, error } = await supabase
        .from("user_progress")
        .select("*")
        .eq("user_id", user.id)
        .single();

      if (error) {
        console.error("Could not load skill progress:", error);
        setErrorMessage("We could not load your skill progress.");
        setLoading(false);
        return;
      }

      setProgress(data as UserProgress);
      setLoading(false);
    }

    loadProgress();
  }, [router]);

  const branchesWithProgress = useMemo(() => {
    if (!progress) {
      return addProgressToBranches(skillBranches, [], 1);
    }

    return addProgressToBranches(
      skillBranches,
      progress.completed_lessons ?? [],
      progress.current_lesson ?? 1
    );
  }, [progress]);

  const activeBranch = useMemo(
    () =>
      branchesWithProgress.find(
        (branch) => branch.id === activeBranchId
      ) ?? branchesWithProgress[0],
    [activeBranchId, branchesWithProgress]
  );

  const selectedSkill = useMemo(() => {
    return (
      activeBranch.skills.find(
        (skill) => skill.id === selectedSkillId
      ) ?? activeBranch.skills[0]
    );
  }, [activeBranch, selectedSkillId]);

  const completedSkills = branchesWithProgress
    .flatMap((branch) => branch.skills)
    .filter((skill) => skill.status === "completed").length;

  const totalSkills = branchesWithProgress.flatMap(
    (branch) => branch.skills
  ).length;

  const totalProgress =
    totalSkills > 0
      ? Math.round((completedSkills / totalSkills) * 100)
      : 0;

  const currentLessonNumber = progress?.current_lesson ?? 1;

  const nextLessonSkill =
    branchesWithProgress
      .flatMap((branch) => branch.skills)
      .find(
        (skill) =>
          skill.lessonNumber === currentLessonNumber &&
          skill.status === "available"
      ) ??
    branchesWithProgress
      .flatMap((branch) => branch.skills)
      .find((skill) => skill.status === "available") ??
    branchesWithProgress[0].skills[0];

  const xp = progress?.xp ?? 0;
  const level = progress?.level ?? 1;

  const xpForCurrentLevel = xp % 500;
  const levelProgressPercentage = Math.min(
    Math.round((xpForCurrentLevel / 500) * 100),
    100
  );

  function changeBranch(branchId: string) {
    const branch = branchesWithProgress.find(
      (item) => item.id === branchId
    );

    if (!branch) return;

    setActiveBranchId(branchId);
    setSelectedSkillId(branch.skills[0].id);
  }

  if (loading) {
    return (
      <>
        <AppTopNav />

        <main className={styles.page}>
          <header className={styles.header}>
            <div>
              <p className={styles.eyebrow}>Loading progression</p>
              <h1>Skill Tree</h1>
              <p>Preparing your unlocked skills...</p>
            </div>
          </header>
        </main>

        <AppBottomNav />
      </>
    );
  }

  if (errorMessage || !progress) {
    return (
      <>
        <AppTopNav />

        <main className={styles.page}>
          <header className={styles.header}>
            <div>
              <p className={styles.eyebrow}>Progress error</p>
              <h1>Skill Tree Unavailable</h1>
              <p>
                {errorMessage ||
                  "Your skill progress could not be found."}
              </p>
            </div>
          </header>
        </main>

        <AppBottomNav />
      </>
    );
  }

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
            <strong>{xp} XP</strong>
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
                  <strong>{nextLessonSkill.lesson}</strong>
                </div>
              </div>

              <Link
                href={nextLessonSkill.lessonHref}
                className={styles.journeyLink}
              >
                Continue
                <span>→</span>
              </Link>
            </article>

            <article className={styles.levelCard}>
              <div className={styles.levelShield}>🔥</div>

              <div>
                <strong>Level {level}</strong>
                <span>
                  {xpForCurrentLevel} / 500 XP
                </span>

                <div className={styles.smallProgressTrack}>
                  <div
                    style={{
                      width: `${levelProgressPercentage}%`,
                    }}
                  />
                </div>
              </div>
            </article>
          </aside>

          <section className={styles.treePanel}>
            <nav
              className={styles.branchTabs}
              aria-label="Skill categories"
            >
              {branchesWithProgress.map((branch) => (
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
                      {skill.status === "locked"
                        ? "🔒"
                        : skill.icon}
                    </span>

                    <strong>{skill.name}</strong>

                    <small>{getStatusLabel(skill.status)}</small>

                    <div className={styles.nodeProgress}>
                      <div
                        style={{
                          width: `${skill.progress}%`,
                        }}
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

            {selectedSkill.status === "locked" ? (
              <div
                className={`${styles.lessonButton} ${styles.lockedButton}`}
              >
                View Requirement
                <span>🔒</span>
              </div>
            ) : (
              <Link
                href={selectedSkill.lessonHref}
                className={styles.lessonButton}
              >
                {selectedSkill.status === "completed"
                  ? "Review Lesson"
                  : "Continue Lesson"}

                <span>→</span>
              </Link>
            )}
          </aside>
        </section>
      </main>

      <AppBottomNav />
    </>
  );
}