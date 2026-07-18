import LessonPlayer from "@/app/Components/lesson/LessonPlayer";
import { lessonOne } from "@/app/data/lessons/lessonOne";

export default function LessonOnePage() {
  return <LessonPlayer lesson={lessonOne} />;
}