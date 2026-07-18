"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import LessonHeader from "./LessonHeader";
import LessonProgress from "./LessonProgress";
import LessonStep from "./LessonStep";
import StringDiagram from "./StringDiagram";
import FretboardDiagram from "./FretboardDiagram";
import AppBottomNav from "../navigation/AppBottomNav";
import { completeLesson } from "@/Lib/progression";
import styles from "./LessonPlayer.module.css";

export type LessonTab = {
  title: string;
  content: string | string[];
};

export type QuickCheck = {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  xpReward?: number;
};

export type OptionalChallenge = {
  id: string;
  title: string;
  description: string;
  achievement?: string;
  xpReward?: number;
};

export type LessonVisual =
  | {
      type: "stringDiagram";
      highlight?: number;
      showNames?: boolean;
    }
  | {
      type: "fretboardDiagram";
      string?: number;
      fret?: number;
      showStringNames?: boolean;
    };

export type LessonStepData = {
  id: string;
  title: string;
  subtitle?: string;
  instruction: string;
  tabs?: LessonTab[];
  visual?: LessonVisual;
  quickCheck?: QuickCheck;
  optionalChallenge?: OptionalChallenge;
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

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});

  const [completedChallenges, setCompletedChallenges] = useState<
    string[]
  >([]);

  const [bonusXp, setBonusXp] = useState(0);

  const totalSteps = lesson.steps.length;
  const currentStep = lesson.steps[currentStepIndex];

  const quickCheckSteps = useMemo(
    () => lesson.steps.filter((step) => Boolean(step.quickCheck)),
    [lesson.steps]
  );

  const totalQuickChecks = quickCheckSteps.length;

  const completedQuickChecks = useMemo(
    () =>
      quickCheckSteps.filter(
        (step) =>
          selectedAnswers[step.id] === step.quickCheck?.correctAnswer
      ).length,
    [quickCheckSteps, selectedAnswers]
  );

  const currentQuickCheckNumber = currentStep?.quickCheck
    ? quickCheckSteps.findIndex((step) => step.id === currentStep.id) + 1
    : 0;

  const quickChecksRemaining = Math.max(
    0,
    totalQuickChecks - completedQuickChecks
  );

  const quickCheckProgressPercentage =
    totalQuickChecks > 0
      ? Math.round((completedQuickChecks / totalQuickChecks) * 100)
      : 100;

  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === totalSteps - 1;
  const isFinalWorldOneLesson = lesson.lessonNumber === 7;

  const selectedAnswer = currentStep
    ? selectedAnswers[currentStep.id]
    : undefined;

  const quickCheckIsCorrect =
    !currentStep?.quickCheck ||
    selectedAnswer === currentStep.quickCheck.correctAnswer;

  const quickCheckWasAnswered = Boolean(selectedAnswer);

  const currentChallengeComplete =
    currentStep?.optionalChallenge
      ? completedChallenges.includes(currentStep.optionalChallenge.id)
      : false;

  const currentStepComplete = currentStep
    ? completedSteps.includes(currentStep.id)
    : false;

  const progressPercentage =
    totalSteps > 0
      ? ((currentStepIndex + 1) / totalSteps) * 100
      : 0;

  const allQuickChecksComplete =
    totalQuickChecks === 0 ||
    completedQuickChecks === totalQuickChecks;

  const lessonStepsComplete =
    completedSteps.length >= Math.max(0, totalSteps - 1);

  const markCurrentStepComplete = () => {
    if (!currentStep || currentStepComplete) {
      return;
    }

    setCompletedSteps((previousSteps) => [
      ...previousSteps,
      currentStep.id,
    ]);
  };

  const handleAnswerSelect = (answer: string) => {
    if (!currentStep?.quickCheck) {
      return;
    }

    const alreadyAnsweredCorrectly =
      selectedAnswers[currentStep.id] ===
      currentStep.quickCheck.correctAnswer;

    setSelectedAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentStep.id]: answer,
    }));

    const isCorrect =
      answer === currentStep.quickCheck.correctAnswer;

    if (isCorrect && !alreadyAnsweredCorrectly) {
      setBonusXp(
        (previousXp) =>
          previousXp + (currentStep.quickCheck?.xpReward ?? 5)
      );
    }
  };

  const handleChallengeToggle = () => {
    const challenge = currentStep?.optionalChallenge;

    if (!challenge) {
      return;
    }

    if (completedChallenges.includes(challenge.id)) {
      setCompletedChallenges((previousChallenges) =>
        previousChallenges.filter(
          (challengeId) => challengeId !== challenge.id
        )
      );

      setBonusXp((previousXp) =>
        Math.max(0, previousXp - (challenge.xpReward ?? 5))
      );

      return;
    }

    setCompletedChallenges((previousChallenges) => [
      ...previousChallenges,
      challenge.id,
    ]);

    setBonusXp(
      (previousXp) =>
        previousXp + (challenge.xpReward ?? 5)
    );
  };

  const handlePreviousStep = () => {
    if (isFirstStep || savingProgress) {
      return;
    }

    setCurrentStepIndex((previousIndex) => previousIndex - 1);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextStep = async () => {
    if (savingProgress) {
      return;
    }

    if (currentStep.quickCheck && !quickCheckIsCorrect) {
      return;
    }

    markCurrentStepComplete();
    setSaveError("");

    if (!isLastStep) {
      setCurrentStepIndex((previousIndex) => previousIndex + 1);

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
    setSelectedAnswers({});
    setCompletedChallenges([]);
    setBonusXp(0);
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

            <p>This lesson does not have any steps yet.</p>

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
              Mission complete
            </p>

            <h1 className={styles.completeTitle}>
              You finished {lesson.title}
            </h1>

            <p className={styles.completeDescription}>
              You completed all {totalSteps} steps and all{" "}
              {totalQuickChecks} quick checks. You earned{" "}
              {lesson.xpReward ?? 100} XP, and your progress has
              been saved.
            </p>

            <div className={styles.missionSummary}>
              <div>
                <span>Lesson steps</span>
                <strong>
                  {totalSteps} / {totalSteps}
                </strong>
              </div>

              <div>
                <span>Quick checks</span>
                <strong>
                  {totalQuickChecks} / {totalQuickChecks}
                </strong>
              </div>

              <div>
                <span>Boss battle</span>
                <strong>Defeated</strong>
              </div>
            </div>

            {bonusXp > 0 && (
              <div className={styles.bonusSummary}>
                <span>Lesson bonus</span>
                <strong>+{bonusXp} XP</strong>
              </div>
            )}

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

          <section className={styles.missionStatus}>
            <div className={styles.missionStatusHeading}>
              <div>
                <p className={styles.interactiveEyebrow}>
                  Mission status
                </p>
                <h2>Lesson objectives</h2>
              </div>

              <span className={styles.missionPercent}>
                {Math.round(progressPercentage)}%
              </span>
            </div>

            <div className={styles.objectiveList}>
              <div className={styles.objectiveItem}>
                <span
                  className={
                    currentStepIndex > 0 || lessonStepsComplete
                      ? styles.objectiveComplete
                      : styles.objectivePending
                  }
                  aria-hidden="true"
                >
                  {currentStepIndex > 0 || lessonStepsComplete
                    ? "✓"
                    : "○"}
                </span>

                <span>Begin the lesson mission</span>
              </div>

              <div className={styles.objectiveItem}>
                <span
                  className={
                    allQuickChecksComplete
                      ? styles.objectiveComplete
                      : styles.objectivePending
                  }
                  aria-hidden="true"
                >
                  {allQuickChecksComplete ? "✓" : "○"}
                </span>

                <span>
                  Complete quick checks ({completedQuickChecks}/
                  {totalQuickChecks})
                </span>
              </div>

              <div className={styles.objectiveItem}>
                <span
                  className={
                    isLastStep
                      ? styles.objectiveActive
                      : styles.objectivePending
                  }
                  aria-hidden="true"
                >
                  {isLastStep ? "⚔" : "○"}
                </span>

                <span>Defeat the lesson boss</span>
              </div>
            </div>
          </section>

          {totalQuickChecks > 0 && (
            <section className={styles.quickCheckOverview}>
              <div className={styles.quickCheckOverviewHeading}>
                <div>
                  <span>Quick check progress</span>
                  <strong>
                    {completedQuickChecks} / {totalQuickChecks}
                  </strong>
                </div>

                <small>
                  {quickChecksRemaining === 0
                    ? "All checks complete"
                    : `${quickChecksRemaining} ${
                        quickChecksRemaining === 1 ? "check" : "checks"
                      } left`}
                </small>
              </div>

              <div
                className={styles.quickCheckTrack}
                role="progressbar"
                aria-label="Quick check progress"
                aria-valuemin={0}
                aria-valuemax={totalQuickChecks}
                aria-valuenow={completedQuickChecks}
              >
                <div
                  className={styles.quickCheckFill}
                  style={{
                    width: `${quickCheckProgressPercentage}%`,
                  }}
                />
              </div>
            </section>
          )}

          <div className={styles.bonusXpBar}>
            <span>Bonus XP</span>
            <strong>+{bonusXp}</strong>
          </div>

          <LessonStep
            step={currentStep}
            stepNumber={currentStepIndex + 1}
            totalSteps={totalSteps}
          />

          {currentStep.visual?.type === "stringDiagram" && (
            <StringDiagram
              highlight={currentStep.visual.highlight}
              showNames={currentStep.visual.showNames}
            />
          )}

          {currentStep.visual?.type === "fretboardDiagram" && (
            <FretboardDiagram
              string={currentStep.visual.string}
              fret={currentStep.visual.fret}
              showStringNames={
                currentStep.visual.showStringNames
              }
            />
          )}

          {currentStep.quickCheck && (
            <section className={styles.quickCheck}>
              <div className={styles.interactiveHeading}>
                <div>
                  <p className={styles.interactiveEyebrow}>
                    Quick Check {currentQuickCheckNumber} /{" "}
                    {totalQuickChecks}
                  </p>

                  <h2>{currentStep.quickCheck.question}</h2>

                  <p className={styles.quickCheckCounter}>
                    {completedQuickChecks} of {totalQuickChecks} complete
                    · {quickChecksRemaining} remaining
                  </p>
                </div>

                <span className={styles.xpPill}>
                  +{currentStep.quickCheck.xpReward ?? 5} XP
                </span>
              </div>

              <div className={styles.answerGrid}>
                {currentStep.quickCheck.options.map((option) => {
                  const isSelected =
                    selectedAnswer === option;

                  const isCorrectOption =
                    option ===
                    currentStep.quickCheck?.correctAnswer;

                  let answerClass = styles.answerButton;

                  if (isSelected && isCorrectOption) {
                    answerClass = `${styles.answerButton} ${styles.correctAnswer}`;
                  } else if (
                    isSelected &&
                    !isCorrectOption
                  ) {
                    answerClass = `${styles.answerButton} ${styles.incorrectAnswer}`;
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      className={answerClass}
                      onClick={() =>
                        handleAnswerSelect(option)
                      }
                    >
                      <span
                        className={styles.answerCircle}
                        aria-hidden="true"
                      />

                      {option}
                    </button>
                  );
                })}
              </div>

              {quickCheckWasAnswered && (
                <div
                  className={
                    quickCheckIsCorrect
                      ? styles.correctFeedback
                      : styles.incorrectFeedback
                  }
                >
                  <strong>
                    {quickCheckIsCorrect
                      ? `Correct! ${completedQuickChecks} / ${totalQuickChecks} complete`
                      : "Not quite."}
                  </strong>

                  <span>
                    {quickCheckIsCorrect
                      ? currentStep.quickCheck.explanation ??
                        "Great work. You are ready to continue."
                      : "Review the lesson information and try again."}
                  </span>
                </div>
              )}
            </section>
          )}

          {currentStep.optionalChallenge && (
            <section className={styles.optionalChallenge}>
              <div className={styles.interactiveHeading}>
                <div>
                  <p className={styles.interactiveEyebrow}>
                    Optional Challenge
                  </p>

                  <h2>
                    {currentStep.optionalChallenge.title}
                  </h2>
                </div>

                <span className={styles.xpPill}>
                  +
                  {currentStep.optionalChallenge.xpReward ?? 5} XP
                </span>
              </div>

              <p className={styles.challengeDescription}>
                {currentStep.optionalChallenge.description}
              </p>

              {currentStep.optionalChallenge.achievement && (
                <div className={styles.achievementPreview}>
                  <span aria-hidden="true">🏆</span>

                  <div>
                    <small>Mini achievement</small>
                    <strong>
                      {
                        currentStep.optionalChallenge
                          .achievement
                      }
                    </strong>
                  </div>
                </div>
              )}

              <button
                type="button"
                className={
                  currentChallengeComplete
                    ? `${styles.challengeButton} ${styles.challengeComplete}`
                    : styles.challengeButton
                }
                onClick={handleChallengeToggle}
              >
                {currentChallengeComplete
                  ? "✓ Challenge completed"
                  : "Mark challenge complete"}
              </button>
            </section>
          )}

          {saveError && (
            <p role="alert" className={styles.saveError}>
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
              disabled={
                savingProgress ||
                Boolean(
                  currentStep.quickCheck &&
                    !quickCheckIsCorrect
                )
              }
            >
              {savingProgress
                ? "Saving progress..."
                : currentStep.quickCheck &&
                    !quickCheckIsCorrect
                  ? "Complete quick check"
                  : isLastStep
                    ? "Defeat boss"
                    : "Continue"}

              {!savingProgress &&
                (!currentStep.quickCheck ||
                  quickCheckIsCorrect) && (
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