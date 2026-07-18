"use client";

import { supabase } from "@/Lib/supabase";
import {
  getUserProgress,
  type UserProgress,
} from "@/Lib/progression";

export type PlayerBadge = {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
};

export type PlayerAchievement = {
  title: string;
  description: string;
  reward: string;
  icon: string;
};

export type PlayerProgress = {
  name: string;
  avatarLetter: string;
  level: number;
  totalXp: number;
  currentLevelXp: number;
  xpNeededForNextLevel: number;
  xpPercentage: number;
  streak: number;
  lessonsCompleted: number;
  bossesDefeated: number;
  worldsCompleted: number;
  songsCompleted: number;
  currentWorld: number;
  currentLesson: number;
  nextLessonTitle: string;
  nextLessonHref: string;
  completedLessons: number[];
  unlockedSkills: string[];
  earnedBadgeIds: string[];
  badges: PlayerBadge[];
  achievements: PlayerAchievement[];
};

const XP_PER_LEVEL = 500;

const lessonTitles: Record<number, string> = {
  1: "First Notes",
  2: "Holding the Pick",
  3: "The Six Strings",
  4: "Your First Fretted Notes",
  5: "Your First Rhythm",
  6: "Your First Chord",
  7: "Your First Song",
};

const badgeDefinitions = [
  {
    id: "guitar-guardian",
    name: "Guitar Guardian",
    description: "Complete Lesson 1.",
    icon: "⚔️",
  },
  {
    id: "pick-master",
    name: "Pick Master",
    description: "Complete Lesson 2.",
    icon: "🎸",
  },
  {
    id: "string-explorer",
    name: "String Explorer",
    description: "Learn all six strings.",
    icon: "🧭",
  },
  {
    id: "clean-note-rookie",
    name: "Clean Note Rookie",
    description: "Produce your first clean fretted notes.",
    icon: "✨",
  },
  {
    id: "rhythm-spirit",
    name: "Rhythm Spirit",
    description: "Complete your first rhythm lesson.",
    icon: "🥁",
  },
  {
    id: "chord-guardian",
    name: "Chord Guardian",
    description: "Learn your first chord.",
    icon: "🎶",
  },
  {
    id: "campfire-explorer",
    name: "Campfire Explorer",
    description: "Complete World 1.",
    icon: "🏕️",
  },
];

function getPlayerName(
  email?: string | null,
  metadata?: Record<string, unknown>
): string {
  const possibleName =
    metadata?.display_name ??
    metadata?.full_name ??
    metadata?.name;

  if (typeof possibleName === "string" && possibleName.trim()) {
    return possibleName.trim();
  }

  if (email) {
    return email.split("@")[0];
  }

  return "Pathfinder";
}

function buildAchievements(
  progress: UserProgress
): PlayerAchievement[] {
  const completedLessons = [...progress.completed_lessons].sort(
    (a, b) => b - a
  );

  const lessonAchievements = completedLessons.map((lessonNumber) => ({
    title: `Completed ${lessonTitles[lessonNumber] ?? `Lesson ${lessonNumber}`}`,
    description: `Finished Lesson ${lessonNumber} in World 1.`,
    reward: lessonNumber === 7 ? "+200 XP" : "+100 XP",
    icon: "✓",
  }));

  const badgeAchievements = progress.earned_badges.map((badgeId) => {
    const badge = badgeDefinitions.find(
      (definition) => definition.id === badgeId
    );

    return {
      title: badge ? `Unlocked ${badge.name}` : "Badge Unlocked",
      description:
        badge?.description ?? "Earned a new Projekt Fret badge.",
      reward: "Badge unlocked",
      icon: badge?.icon ?? "🏆",
    };
  });

  return [...badgeAchievements.reverse(), ...lessonAchievements].slice(
    0,
    6
  );
}

export async function getPlayerProgress(): Promise<PlayerProgress> {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("You must be logged in to load your profile.");
  }

  const progress = await getUserProgress();

  const name = getPlayerName(
    user.email,
    user.user_metadata as Record<string, unknown>
  );

  const currentLevelXp = progress.xp % XP_PER_LEVEL;
  const xpPercentage = Math.min(
    100,
    Math.round((currentLevelXp / XP_PER_LEVEL) * 100)
  );

  const completedWorldOne =
    progress.completed_lessons.includes(7);

  const currentLesson = Math.min(
    Math.max(progress.current_lesson, 1),
    7
  );

  const badges = badgeDefinitions.map((badge) => ({
    ...badge,
    unlocked: progress.earned_badges.includes(badge.id),
  }));

  return {
    name,
    avatarLetter: name.charAt(0).toUpperCase(),
    level: progress.level,
    totalXp: progress.xp,
    currentLevelXp,
    xpNeededForNextLevel: XP_PER_LEVEL,
    xpPercentage,
    streak: progress.streak,
    lessonsCompleted: progress.completed_lessons.length,
    bossesDefeated: progress.completed_lessons.length,
    worldsCompleted: completedWorldOne ? 1 : 0,
    songsCompleted: progress.completed_songs.length,
    currentWorld: progress.current_world,
    currentLesson,
    nextLessonTitle:
      lessonTitles[currentLesson] ?? `Lesson ${currentLesson}`,
    nextLessonHref: completedWorldOne
      ? "/world"
      : `/lesson/${currentLesson}`,
    completedLessons: progress.completed_lessons,
    unlockedSkills: progress.unlocked_skills,
    earnedBadgeIds: progress.earned_badges,
    badges,
    achievements: buildAchievements(progress),
  };
}