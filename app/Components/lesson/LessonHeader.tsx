"use client";

import { useRouter } from "next/navigation";
import styles from "./LessonHeader.module.css";

type LessonHeaderProps = {
  lessonNumber: number;
  title: string;
  description: string;
  estimatedMinutes?: number;
  xpReward?: number;
  difficulty?: "Beginner" | "Easy" | "Intermediate" | "Advanced";
  backHref?: string;
};

export default function LessonHeader({
  lessonNumber,
  title,
  description,
  estimatedMinutes = 10,
  xpReward = 100,
  difficulty = "Beginner",
  backHref = "/dashboard",
}: LessonHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
      return;
    }

    router.push(backHref);
  };

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.backButton}
        onClick={handleBack}
        aria-label="Go back"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>Back to map</span>
      </button>

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span>Lesson {lessonNumber}</span>

          <span className={styles.divider} aria-hidden="true">
            •
          </span>

          <span className={styles.difficulty}>
            {difficulty}
          </span>
        </div>

        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>
          {description}
        </p>

        <div
          className={styles.details}
          aria-label="Lesson information"
        >
          <div className={styles.detail}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="1.8"
              />

              <path
                d="M12 7V12L15.5 14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>{estimatedMinutes} minutes</span>
          </div>

          <div className={styles.detail}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 3L14.4 8.1L20 8.9L16 12.8L17 18.4L12 15.7L7 18.4L8 12.8L4 8.9L9.6 8.1L12 3Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Earn {xpReward} XP</span>
          </div>
        </div>
      </div>
    </header>
  );
}