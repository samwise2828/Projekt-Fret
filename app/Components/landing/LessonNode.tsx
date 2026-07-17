import type { LessonNodeData } from "../../data/campfireValley";

type LessonNodeProps = {
  lesson: LessonNodeData;
};

export default function LessonNode({ lesson }: LessonNodeProps) {
  const isTest = lesson.type === "test";

  return (
    <div className={`lessonNodeRow lessonNodeRow${lesson.id}`}>
      <div className={`lessonNode ${isTest ? "lessonNodeTest" : ""}`}>
        <span className="lessonNumber">{lesson.id}</span>
        <span className="lessonLock">🔒</span>
      </div>

      {isTest && (
        <div className="testLabel">
          <strong>Week 1 Test</strong>
          <span>Locked</span>
        </div>
      )}
    </div>
  );
}