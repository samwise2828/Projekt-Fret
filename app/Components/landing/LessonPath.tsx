import { campfireValleyLessons } from "../../data/campfireValley";
import LessonNode from "./LessonNode";

export default function LessonPath() {
  return (
    <section
      className="lessonPath"
      aria-label="Campfire Valley lesson path"
    >
      <div className="mountainPath" />

      {campfireValleyLessons.map((lesson) => (
        <LessonNode key={lesson.id} lesson={lesson} />
      ))}
    </section>
  );
}