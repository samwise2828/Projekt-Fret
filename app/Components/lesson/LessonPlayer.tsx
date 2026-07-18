"use client";

import { useState } from "react";
import Link from "next/link";
import LessonHeader from "./LessonHeader";
import LessonProgress from "./LessonProgress";
import LessonStep from "./LessonStep";
import AppBottomNav from "../navigation/AppBottomNav";
import { completeLesson } from "@/Lib/progression";
import styles from "./LessonPlayer.module.css";

export type LessonTab = {
  title: string;
  content: string | string[];
};

export type LessonStepData = {
  id: string;
  title: string;
  subtitle?: string;
  instruction: string;
  tabs?: LessonTab[];
};

export type LessonData = {
  id: string;
  lessonNumber: number;
  title: string;
  description: string;
  estimatedMinutes?: number;
  xpReward?: number;
  difficulty?: "Beginner" | "Easy" | "Intermediate" | "Advanced";
  steps: LessonStepData[];
};

type LessonPlayerProps = {
  lesson: LessonData;
};

export default function LessonPlayer({
  lesson,
}: LessonPlayerProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [lessonComplete, setLessonComplete] = useState(false);
  const [savingProgress, setSavingProgress] = useState(false);
  const [saveError, setSaveError] = useState("");

  const totalSteps = lesson.steps.length;
  const currentStep = lesson.steps[currentStepIndex];

  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === totalSteps - 1;
  const isFinalWorldOneLesson = lesson.lessonNumber === 7;

  const currentStepComplete = currentStep
    ? completedSteps.includes(currentStep.id)
    : false;

  const progressPercentage =
    totalSteps > 0
      ? ((currentStepIndex + 1) / totalSteps) * 100
      : 0;

  const markCurrentStepComplete = () => {
    if (!currentStep || currentStepComplete) {
      return;
    }

    setCompletedSteps((previousSteps) => [
      ...previousSteps,
      currentStep.id,
    ]);
  };

  const handlePreviousStep = () => {
    if (isFirstStep || savingProgress) {
      return;
    }

    setCurrentStepIndex(
      (previousIndex) => previousIndex - 1
    );
  };

  const handleNextStep = async () => {
    if (savingProgress) {
      return;
    }

    markCurrentStepComplete();
    setSaveError("");

    if (!isLastStep) {
      setCurrentStepIndex(
        (previousIndex) => previousIndex + 1
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    setSavingProgress(true);

    try {
      await completeLesson(lesson.lessonNumber);
      setLessonComplete(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Could not save lesson progress:", error);

      setSaveError(
        error instanceof Error
          ? error.message
          : "Your progress could not be saved. Please try again."
      );
    } finally {
      setSavingProgress(false);
    }
  };

  const handleRestartLesson = () => {
    setCurrentStepIndex(0);
    setCompletedSteps([]);
    setLessonComplete(false);
    setSaveError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!currentStep || totalSteps === 0) {
    return (
      <>
        <main className={styles.lessonPlayer}>
          <div className={styles.empty}>
            <h1>Lesson unavailable</h1>

            <p>
              This lesson does not have any steps yet.
            </p>

            <Link
              href="/world"
              className={`${styles.actionButton} ${styles.primary}`}
            >
              Return to world
            </Link>
          </div>
        </main>

        <AppBottomNav />
      </>
    );
  }

  if (lessonComplete) {
    return (
      <>
        <main
          className={`${styles.lessonPlayer} ${styles.complete}`}
        >
          <section className={styles.completeCard}>
            <div
              className={styles.completeIcon}
              aria-hidden="true"
            >
              ✓
            </div>

            <p className={styles.completeEyebrow}>
              Boss defeated
            </p>

            <h1 className={styles.completeTitle}>
              You finished {lesson.title}
            </h1>

            <p className={styles.completeDescription}>
              You completed all {totalSteps} steps and
              earned {lesson.xpReward ?? 100} XP. Your
              progress has been saved.
            </p>

            <div className={styles.actions}>
              <button
                type="button"
                className={`${styles.actionButton} ${styles.secondary}`}
                onClick={handleRestartLesson}
              >
                Practice again
              </button>

              <Link
                className={`${styles.actionButton} ${styles.primary}`}
                href={
                  isFinalWorldOneLesson
                    ? "/world"
                    : `/lesson/${lesson.lessonNumber + 1}`
                }
              >
                {isFinalWorldOneLesson
                  ? "Return to World Map"
                  : `Continue to Lesson ${
                      lesson.lessonNumber + 1
                    }`}

                <span aria-hidden="true"> →</span>
              </Link>
            </div>
          </section>
        </main>

        <AppBottomNav />
      </>
    );
  }

  return (
    <>
      <main className={styles.lessonPlayer}>
        <LessonHeader
          lessonNumber={lesson.lessonNumber}
          title={lesson.title}
          description={lesson.description}
          estimatedMinutes={lesson.estimatedMinutes}
          xpReward={lesson.xpReward}
          difficulty={lesson.difficulty}
        />

        <section className={styles.body}>
          <LessonProgress
            currentStep={currentStepIndex + 1}
            totalSteps={totalSteps}
            progressPercentage={progressPercentage}
            completedSteps={completedSteps.length}
          />

          <LessonStep
            step={currentStep}
            stepNumber={currentStepIndex + 1}
            totalSteps={totalSteps}
          />

          {saveError && (
            <p
              role="alert"
              style={{
                color: "#ffb6b6",
                textAlign: "center",
                marginTop: "18px",
              }}
            >
              {saveError}
            </p>
          )}

          <nav
            className={styles.navigation}
            aria-label="Lesson navigation"
          >
            <button
              type="button"
              className={`${styles.button} ${styles.previous}`}
              onClick={handlePreviousStep}
              disabled={isFirstStep || savingProgress}
            >
              <span aria-hidden="true">←</span>
              Previous
            </button>

            <button
              type="button"
              className={`${styles.button} ${styles.next}`}
              onClick={handleNextStep}
              disabled={savingProgress}
            >
              {savingProgress
                ? "Saving progress..."
                : isLastStep
                  ? "Defeat boss"
                  : "Continue"}

              {!savingProgress && (
                <span aria-hidden="true">
                  {isLastStep ? "⚔" : "→"}
                </span>
              )}
            </button>
          </nav>
        </section>
      </main>

      <AppBottomNav />
    </>
  );
}