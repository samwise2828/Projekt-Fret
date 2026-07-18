import Link from "next/link";
import type { WorldLesson } from "../../data/worlds/WorldOne";
import styles from "./WorldNode.module.css";

type Props = {
  lesson: WorldLesson;
  status: "completed" | "ready" | "locked";
};

export default function WorldNode({
  lesson,
  status,
}: Props) {
  const className = [
    styles.node,
    styles[status],
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <div className={styles.lessonMarker}>
        <span className={styles.statusIcon}>
          {status === "completed"
            ? "✓"
            : status === "ready"
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
          {status === "completed"
            ? "Complete"
            : status === "ready"
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

  if (status === "locked") {
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