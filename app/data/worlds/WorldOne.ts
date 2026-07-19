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
    "Here you will learn the strings, build proper technique, play basic chords, keep rhythm, and finish your first song.",

  completedLessons: 0,

  lessons: [
    {
      id: 1,
      title: "Welcome to the Guitar",
      href: "/lesson/1",
      x: 68,
      y: 10,
    },
    {
      id: 2,
      title: "Know Your Guitar",
      href: "/lesson/2",
      x: 78,
      y: 25,
    },
    {
      id: 3,
      title: "Reading Tabs",
      href: "/lesson/3",
      x: 73,
      y: 42,
    },
    {
      id: 4,
      title: "Playing Clean Notes",
      href: "/lesson/4",
      x: 58,
      y: 57,
    },
    {
      id: 5,
      title: "Picking & Rhythm",
      href: "/lesson/5",
      x: 43,
      y: 74,
    },
    {
      id: 6,
      title: "Your First Riff",
      href: "/lesson/6",
      x: 29,
      y: 58,
    },
    {
      id: 7,
      title: "Campfire Trial",
      href: "/lesson/7",
      x: 38,
      y: 36,
    },
  ],
};