export type SkillStatus = "completed" | "available" | "locked";

export type Skill = {
  id: string;
  name: string;
  description: string;
  icon: string;

  /**
   * The lesson that completes this skill.
   */
  lessonNumber: number;

  lesson: string;
  lessonHref: string;

  learn: string[];
  unlocks: string[];
};

export type SkillBranch = {
  id: string;
  name: string;
  icon: string;
  description: string;
  skills: Skill[];
};

export type SkillWithProgress = Skill & {
  status: SkillStatus;
  progress: number;
};