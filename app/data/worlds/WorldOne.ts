export type WorldLesson = {
  id: number;
  title: string;
  href: string;
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

  completedLessons: 0,

  lessons: [
    {
      id: 1,
      title: "First Notes",
      href: "/lesson/1",
      x: 68,
      y: 10,
    },
    {
      id: 2,
      title: "Holding the Pick",
      href: "/lesson/2",
      x: 78,
      y: 25,
    },
    {
      id: 3,
      title: "String Names",
      href: "/lesson/3",
      x: 73,
      y: 42,
    },
    {
      id: 4,
      title: "Your First Rhythm",
      href: "/lesson/4",
      x: 58,
      y: 57,
    },
    {
      id: 5,
      title: "Basic Chords",
      href: "/lesson/5",
      x: 43,
      y: 74,
    },
    {
      id: 6,
      title: "Chord Switching",
      href: "/lesson/6",
      x: 29,
      y: 58,
    },
    {
      id: 7,
      title: "First Song Challenge",
      href: "/lesson/7",
      x: 38,
      y: 36,
    },
  ],
};