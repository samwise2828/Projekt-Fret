"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/Lib/supabase";
import { worldOne } from "../../data/worlds/WorldOne";
import WorldNode from "./WorldNode";
import styles from "./WorldMap.module.css";

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

export type LessonStatus = "completed" | "ready" | "locked";

export default function WorldMap() {
  const router = useRouter();

  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

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
        console.error("Could not load progress:", error);
        setErrorMessage("We could not load your progress.");
        setLoading(false);
        return;
      }

      setProgress(data as UserProgress);
      setLoading(false);
    }

    loadProgress();
  }, [router]);

  if (loading) {
    return (
      <main className={styles.worldMap}>
        <section className={styles.worldIntroduction}>
          <span className={styles.worldLabel}>LOADING JOURNEY</span>

          <h1 className={styles.worldTitle}>
            Preparing Your World...
          </h1>
        </section>
      </main>
    );
  }

  if (errorMessage || !progress) {
    return (
      <main className={styles.worldMap}>
        <section className={styles.worldIntroduction}>
          <span className={styles.worldLabel}>PROGRESS ERROR</span>

          <h1 className={styles.worldTitle}>
            Journey Unavailable
          </h1>

          <p className={styles.worldDescription}>
            {errorMessage || "Your progress could not be found."}
          </p>
        </section>
      </main>
    );
  }

  const completedLessons = progress.completed_lessons ?? [];
  const totalLessons = worldOne.lessons.length;

  const completedLessonCount = worldOne.lessons.filter((lesson) =>
    completedLessons.includes(lesson.id)
  ).length;

  const completionPercentage =
    totalLessons > 0
      ? Math.round((completedLessonCount / totalLessons) * 100)
      : 0;

  function getLessonStatus(lessonId: number): LessonStatus {
    if (completedLessons.includes(lessonId)) {
      return "completed";
    }

    if (lessonId === progress.current_lesson) {
      return "ready";
    }

    return "locked";
  }

  return (
    <main className={styles.worldMap}>
      <div className={styles.backgroundGlow} />

      <section className={styles.worldIntroduction}>
        <span className={styles.worldLabel}>
          {worldOne.label}
        </span>

        <h1 className={styles.worldTitle}>
          {worldOne.title}
        </h1>

        <div className={styles.divider}>
          <span />
          <i />
          <span />
        </div>

        <p className={styles.worldDescription}>
          {worldOne.description}
        </p>

        <div className={styles.progressCard}>
          <div className={styles.progressHeading}>
            <span className={styles.fireIcon}>🔥</span>

            <div>
              <strong>
                {completedLessonCount} / {totalLessons}
              </strong>

              <span>Lessons Completed</span>
            </div>
          </div>

          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{
                width: `${completionPercentage}%`,
              }}
            />
          </div>
        </div>
      </section>

      <section className={styles.pathArea}>
        <div className={styles.moon} />

        <div className={styles.campfire}>
          <span className={styles.flame}>🔥</span>
        </div>

        <svg
          className={styles.pathLine}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="
              M68 10
              C77 15 82 20 78 25
              C74 31 78 36 73 42
              C69 49 64 53 58 57
              C52 63 48 70 43 74
              C37 69 34 63 29 58
              C30 50 35 43 38 36
            "
          />
        </svg>

        {worldOne.lessons.map((lesson) => {
          const status = getLessonStatus(lesson.id);

          return (
            <WorldNode
              key={lesson.id}
              lesson={lesson}
              status={status}
            />
          );
        })}
      </section>
    </main>
  );
}