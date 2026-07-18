import Link from "next/link";
import type { WorldLesson } from "../../data/worlds/WorldOne";
import styles from "./WorldNode.module.css";

type Props = {
  lesson: WorldLesson;
};

export default function WorldNode({
  lesson,
}: Props) {
  const className = [
    styles.node,
    styles[lesson.status],
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <div className={styles.lessonMarker}>
        <span className={styles.statusIcon}>
          {lesson.status === "complete"
            ? "✓"
            : lesson.status === "available"
            ? "▶"
            : "🔒"}
        </span>

        <span className={styles.lessonNumber}>
          {lesson.id}
        </span>
      </div>

      <div className={styles.lessonInformation}>
        <span className={styles.lessonTitle}>
          {lesson.title}
        </span>

        <span className={styles.lessonStatus}>
          {lesson.status === "complete"
            ? "Complete"
            : lesson.status === "available"
            ? "Ready"
            : "Locked"}
        </span>
      </div>
    </>
  );

  const position = {
    left: `${lesson.x}%`,
    top: `${lesson.y}%`,
  };

  if (lesson.status === "locked") {
    return (
      <div
        className={className}
        style={position}
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      href={lesson.href}
      className={className}
      style={position}
    >
      {content}
    </Link>
  );
}