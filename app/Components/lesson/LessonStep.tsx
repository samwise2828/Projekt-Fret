import type { LessonStepData } from "./LessonPlayer";
import LessonTabs from "./LessonTabs";
import styles from "./LessonStep.module.css";

type LessonStepProps = {
  step: LessonStepData;
  stepNumber: number;
  totalSteps: number;
};

export default function LessonStep({
  step,
  stepNumber,
  totalSteps,
}: LessonStepProps) {
  return (
    <article className={styles.step}>
      <div className={styles.heading}>
        <div className={styles.number}>
          <span className={styles.numberLabel}>
            Step
          </span>

          <span className={styles.numberValue}>
            {stepNumber}
          </span>
        </div>

        <div className={styles.titleGroup}>
          <p className={styles.eyebrow}>
            Step {stepNumber} of {totalSteps}
          </p>

          <h2 className={styles.title}>
            {step.title}
          </h2>

          {step.subtitle && (
            <p className={styles.subtitle}>
              {step.subtitle}
            </p>
          )}
        </div>
      </div>

      <section className={styles.instruction}>
        <div
          className={styles.instructionIcon}
          aria-hidden="true"
        >
          🎸
        </div>

        <div className={styles.instructionContent}>
          <p className={styles.instructionLabel}>
            What to do
          </p>

          <p className={styles.instructionText}>
            {step.instruction}
          </p>
        </div>
      </section>

      {step.tabs && step.tabs.length > 0 && (
        <LessonTabs tabs={step.tabs} />
      )}
    </article>
  );
}