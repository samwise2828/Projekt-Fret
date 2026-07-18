import styles from "./LessonProgress.module.css";

type LessonProgressProps = {
  currentStep: number;
  totalSteps: number;
  progressPercentage: number;
  completedSteps: number;
};

export default function LessonProgress({
  currentStep,
  totalSteps,
  progressPercentage,
  completedSteps,
}: LessonProgressProps) {
  const safeProgress = Math.min(100, Math.max(0, progressPercentage));

  return (
    <section
      className={styles.progress}
      aria-label="Lesson progress"
    >
      <div className={styles.topRow}>
        <div>
          <p className={styles.label}>
            Lesson progress
          </p>

          <p className={styles.stepCount}>
            Step {currentStep} of {totalSteps}
          </p>
        </div>

        <div className={styles.summary}>
          <span className={styles.completed}>
            {completedSteps} completed
          </span>

          <span className={styles.percentage}>
            {Math.round(safeProgress)}% complete
          </span>
        </div>
      </div>

      <div
        className={styles.track}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(safeProgress)}
        aria-label={`${Math.round(safeProgress)}% complete`}
      >
        <div
          className={styles.fill}
          style={{ width: `${safeProgress}%` }}
        />
      </div>

      <div
        className={styles.steps}
        aria-label="Lesson steps"
      >
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isCurrent = stepNumber === currentStep;
          const isCompleted = stepNumber <= completedSteps;

          const dotClassName = [
            styles.dot,
            isCurrent ? styles.current : "",
            isCompleted ? styles.completedDot : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <span
              key={stepNumber}
              className={dotClassName}
              aria-label={`Step ${stepNumber}${
                isCompleted
                  ? ", completed"
                  : isCurrent
                    ? ", current"
                    : ""
              }`}
            >
              {isCompleted ? "✓" : stepNumber}
            </span>
          );
        })}
      </div>
    </section>
  );
}