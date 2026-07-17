export type LessonNodeData = {
  id: number;
  type: "lesson" | "test";
  locked: boolean;
};

export const campfireValleyLessons: LessonNodeData[] = [
  { id: 1, type: "lesson", locked: true },
  { id: 2, type: "lesson", locked: true },
  { id: 3, type: "lesson", locked: true },
  { id: 4, type: "lesson", locked: true },
  { id: 5, type: "lesson", locked: true },
  { id: 6, type: "lesson", locked: true },
  { id: 7, type: "test", locked: true },
];