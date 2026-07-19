import styles from "./LessonProgress.module.css";

type StepTitleValue =
  | string
  | {
      title?: unknown;
    };

type LessonProgressProps = {
  currentStep: number;
  totalSteps: number;
  progressPercentage: number;
  completedSteps: number;
  stepTitles?: StepTitleValue[];
};

function getStepTitle(
  value: StepTitleValue | undefined,
  fallbackNumber: number
): string {
  if (typeof value === "string") {
    return value;
  }

  if (
    value &&
    typeof value === "object" &&
    typeof value.title === "string"
  ) {
    return value.title;
  }

  return `Step ${fallbackNumber}`;
}

export default function LessonProgress({
  currentStep,
  totalSteps,
  progressPercentage,
  completedSteps,
  stepTitles = [],
}: LessonProgressProps) {
  const safeProgress = Math.min(
    100,
    Math.max(0, progressPercentage)
  );

  const visibleSteps = Array.from(
    { length: totalSteps },
    (_, index) => {
      const stepNumber = index + 1;

      return {
        number: stepNumber,
        title: getStepTitle(
          stepTitles[index],
          stepNumber
        ),
      };
    }
  );

  return (
    <section
      className={styles.progress}
      aria-label="Lesson progress"
    >
      <div className={styles.topRow}>
        <p className={styles.label}>
          Campfire Valley
        </p>

        <p className={styles.stepCount}>
          Step {currentStep} of {totalSteps}
        </p>

        <div className={styles.summary}>
          <span className={styles.completed}>
            {completedSteps} completed
          </span>

          <span className={styles.percentage}>
            {Math.round(safeProgress)}%
          </span>
        </div>
      </div>

      <div
        className={styles.steps}
        aria-label="Lesson steps"
      >
        {visibleSteps.map(({ number, title }) => {
          const isCurrent = number === currentStep;
          const isCompleted =
            number <= completedSteps;

          const dotClassName = [
            styles.dot,
            isCurrent ? styles.current : "",
            isCompleted
              ? styles.completedDot
              : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <div
              key={number}
              className={styles.stepRow}
            >
              <span
                className={dotClassName}
                aria-label={`${title}${
                  isCompleted
                    ? ", completed"
                    : isCurrent
                      ? ", current"
                      : ", upcoming"
                }`}
                aria-current={
                  isCurrent ? "step" : undefined
                }
              >
                {isCompleted ? "✓" : number}
              </span>

              <span className={styles.stepLabel}>
                {title}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}