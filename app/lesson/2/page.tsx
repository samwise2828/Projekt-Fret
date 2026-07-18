import LessonPlayer from "@/app/Components/lesson/LessonPlayer";
import { lessonTwo } from "@/app/data/lessons/lessonTwo";

export default function LessonTwoPage() {
  return <LessonPlayer lesson={lessonTwo} />;
}