export type WorldLessonStatus = "complete" | "available" | "locked";

export type WorldLesson = {
  id: number;
  title: string;
  href: string;
  status: WorldLessonStatus;
  x: number;
  y: number;
};

export type WorldData = {
  id: number;
  label: string;
  title: string;
  description: string;
  completedLessons: number;
  lessons: WorldLesson[];
};

export const worldOne: WorldData = {
  id: 1,
  label: "World 1",
  title: "The First Campfire",
  description:
    "Begin your journey. Learn the basics, one step at a time.",

  completedLessons: 1,

  lessons: [
    {
      id: 1,
      title: "First Notes",
      href: "/lesson/1",
      status: "complete",
      x: 68,
      y: 10,
    },
    {
      id: 2,
      title: "String Names",
      href: "/lesson/2",
      status: "available",
      x: 78,
      y: 25,
    },
    {
      id: 3,
      title: "Holding the Pick",
      href: "/lesson/3",
      status: "locked",
      x: 73,
      y: 42,
    },
    {
      id: 4,
      title: "Your First Rhythm",
      href: "/lesson/4",
      status: "locked",
      x: 58,
      y: 57,
    },
    {
      id: 5,
      title: "First Chord",
      href: "/lesson/5",
      status: "locked",
      x: 43,
      y: 74,
    },
    {
      id: 6,
      title: "Chord Switching",
      href: "/lesson/6",
      status: "locked",
      x: 29,
      y: 58,
    },
    {
      id: 7,
      title: "First Song Challenge",
      href: "/lesson/7",
      status: "locked",
      x: 38,
      y: 36,
    },
  ],
};