import { supabase } from "@/Lib/supabase";

export type UserProgress = {
  user_id: string;
  current_world: number;
  current_lesson: number;
  completed_lessons: number[];
  unlocked_skills: string[];
  earned_badges: string[];
  completed_songs: string[];
  xp: number;
  level: number;
  streak: number;
};

type LessonReward = {
  xp: number;
  skills: string[];
  badges?: string[];
};

const lessonRewards: Record<number, LessonReward> = {
  1: {
    xp: 100,
    skills: [
      "guitar-anatomy",
      "proper-position",
      "guitar-care",
      "learning-system",
    ],
    badges: ["guitar-guardian"],
  },

  2: {
    xp: 100,
    skills: [
      "pick-grip",
      "downstrokes",
      "upstrokes",
      "alternate-picking",
    ],
    badges: ["pick-master"],
  },

  3: {
    xp: 100,
    skills: [
      "string-numbers",
      "string-names",
      "finding-strings",
      "open-strings",
    ],
    badges: ["string-explorer"],
  },

  4: {
    xp: 100,
    skills: [
      "fret-numbers",
      "finger-placement",
      "fretting-notes",
      "clean-notes",
      "hand-position",
    ],
    badges: ["clean-note-rookie"],
  },

  5: {
    xp: 100,
    skills: [
      "quarter-notes",
      "counting",
      "metronome",
      "keeping-time",
    ],
    badges: ["rhythm-spirit"],
  },

  6: {
    xp: 100,
    skills: [
      "em-chord",
      "chord-diagrams",
      "finger-independence",
    ],
    badges: ["chord-guardian"],
  },

  7: {
    xp: 200,
    skills: ["first-song"],
    badges: ["campfire-explorer"],
  },
};

function removeDuplicates<T>(items: T[]): T[] {
  return [...new Set(items)];
}

function calculateLevel(xp: number): number {
  return Math.floor(xp / 500) + 1;
}

export async function getUserProgress(): Promise<UserProgress> {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("You must be logged in to load progress.");
  }

  const { data, error } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as UserProgress;
}

export async function completeLesson(
  lessonNumber: number
): Promise<UserProgress> {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    throw new Error("You must be logged in to complete a lesson.");
  }

  const reward = lessonRewards[lessonNumber];

  if (!reward) {
    throw new Error(
      `No rewards were configured for Lesson ${lessonNumber}.`
    );
  }

  const { data: currentProgress, error: progressError } =
    await supabase
      .from("user_progress")
      .select("*")
      .eq("user_id", user.id)
      .single();

  if (progressError || !currentProgress) {
    throw new Error(
      progressError?.message ||
        "Your progress could not be found."
    );
  }

  const progress = currentProgress as UserProgress;

  if (progress.completed_lessons.includes(lessonNumber)) {
    return progress;
  }

  const completedLessons = removeDuplicates([
    ...progress.completed_lessons,
    lessonNumber,
  ]);

  const unlockedSkills = removeDuplicates([
    ...progress.unlocked_skills,
    ...reward.skills,
  ]);

  const earnedBadges = removeDuplicates([
    ...progress.earned_badges,
    ...(reward.badges ?? []),
  ]);

  const newXp = progress.xp + reward.xp;
  const newLevel = calculateLevel(newXp);

  const nextLesson =
    lessonNumber < 7
      ? Math.max(progress.current_lesson, lessonNumber + 1)
      : progress.current_lesson;

  const { data: updatedProgress, error: updateError } =
    await supabase
      .from("user_progress")
      .update({
        completed_lessons: completedLessons,
        unlocked_skills: unlockedSkills,
        earned_badges: earnedBadges,
        current_lesson: nextLesson,
        xp: newXp,
        level: newLevel,
        updated_at: new Date().toISOString(),
      })
      .eq("user_id", user.id)
      .select()
      .single();

  if (updateError || !updatedProgress) {
    throw new Error(
      updateError?.message ||
        "Your lesson progress could not be saved."
    );
  }

  return updatedProgress as UserProgress;
}