import type { SkillBranch } from "./skillTypes";

export const skillBranches: SkillBranch[] = [
  {
    id: "basics",
    name: "Guitar Basics",
    icon: "🎸",
    description:
      "Learn your instrument and build strong beginner habits.",

    skills: [
      {
        id: "anatomy",
        name: "Guitar Anatomy",
        description:
          "Learn the main parts of the guitar and understand what each part does.",
        icon: "🎸",

        lessonNumber: 1,
        lesson: "First Notes",
        lessonHref: "/lesson/1",

        learn: [
          "Headstock",
          "Neck",
          "Fretboard",
          "Frets",
          "Bridge",
          "Strings",
          "Tuners",
        ],

        unlocks: [
          "Proper Position",
          "Holding the Pick",
        ],
      },

      {
        id: "position",
        name: "Proper Position",
        description:
          "Hold the guitar comfortably while keeping your shoulders and arms relaxed.",
        icon: "🪑",

        lessonNumber: 1,
        lesson: "First Notes",
        lessonHref: "/lesson/1",

        learn: [
          "Sitting posture",
          "Standing posture",
          "Relaxed shoulders",
          "Guitar balance",
        ],

        unlocks: [
          "Finger Placement",
          "Clean Fretting",
        ],
      },

      {
        id: "learning-system",
        name: "Learning System",
        description:
          "Understand how lessons, practice checkpoints, bosses, and rewards work.",
        icon: "📖",

        lessonNumber: 1,
        lesson: "First Notes",
        lessonHref: "/lesson/1",

        learn: [
          "Lessons",
          "Practice",
          "Boss Battles",
          "Rewards",
        ],

        unlocks: [
          "World Progress",
          "Skill Rewards",
        ],
      },

      {
        id: "pick",
        name: "Holding the Pick",
        description:
          "Learn a relaxed and controlled pick grip before playing your first patterns.",
        icon: "🔻",

        lessonNumber: 2,
        lesson: "Holding the Pick",
        lessonHref: "/lesson/2",

        learn: [
          "Proper pick grip",
          "Pick angle",
          "Grip pressure",
          "Relaxed wrist",
        ],

        unlocks: [
          "Downstrokes",
          "Upstrokes",
          "Alternate Picking",
        ],
      },
    ],
  },

  {
    id: "technique",
    name: "Technique",
    icon: "⚔️",
    description:
      "Build control in both hands and learn to play cleanly.",

    skills: [
      {
        id: "downstrokes",
        name: "Downstrokes",
        description:
          "Strike the strings downward with a relaxed wrist and consistent motion.",
        icon: "↓",

        lessonNumber: 2,
        lesson: "Holding the Pick",
        lessonHref: "/lesson/2",

        learn: [
          "Downward pick motion",
          "Wrist control",
          "Consistent volume",
          "String accuracy",
        ],

        unlocks: [
          "Upstrokes",
          "Basic Rhythm",
        ],
      },

      {
        id: "upstrokes",
        name: "Upstrokes",
        description:
          "Bring the pick upward through the string without tensing your hand.",
        icon: "↑",

        lessonNumber: 2,
        lesson: "Holding the Pick",
        lessonHref: "/lesson/2",

        learn: [
          "Upward pick motion",
          "Relaxed recovery",
          "String control",
          "Even sound",
        ],

        unlocks: [
          "Alternate Picking",
        ],
      },

      {
        id: "alternate-picking",
        name: "Alternate Picking",
        description:
          "Combine downstrokes and upstrokes into one efficient picking motion.",
        icon: "↕",

        lessonNumber: 2,
        lesson: "Holding the Pick",
        lessonHref: "/lesson/2",

        learn: [
          "Down-up motion",
          "Pick efficiency",
          "Slow repetition",
          "Consistent timing",
        ],

        unlocks: [
          "Faster melodies",
          "String crossing",
        ],
      },

      {
        id: "finger-placement",
        name: "Finger Placement",
        description:
          "Place your fingertips correctly behind the frets to produce clear notes.",
        icon: "☝️",

        lessonNumber: 3,
        lesson: "String Names",
        lessonHref: "/lesson/3",

        learn: [
          "Fingertip position",
          "Thumb placement",
          "Finger pressure",
          "Curved fingers",
        ],

        unlocks: [
          "Clean Notes",
          "First Chord",
        ],
      },
    ],
  },

  {
    id: "strings",
    name: "Strings & Notes",
    icon: "🎼",
    description:
      "Navigate the strings and begin playing individual notes.",

    skills: [
      {
        id: "string-numbers",
        name: "String Numbers",
        description:
          "Learn how guitar strings are numbered from the thinnest to the thickest.",
        icon: "6️⃣",

        lessonNumber: 3,
        lesson: "String Names",
        lessonHref: "/lesson/3",

        learn: [
          "First string",
          "Sixth string",
          "String order",
          "Quick string finding",
        ],

        unlocks: [
          "String Names",
          "Tab Reading",
        ],
      },

      {
        id: "string-names",
        name: "String Names",
        description:
          "Memorize the open-string names and find them without hesitation.",
        icon: "E",

        lessonNumber: 3,
        lesson: "String Names",
        lessonHref: "/lesson/3",

        learn: [
          "Low E",
          "A",
          "D",
          "G",
          "B",
          "High E",
        ],

        unlocks: [
          "Tuning",
          "Note Navigation",
        ],
      },

      {
        id: "clean-notes",
        name: "Clean Notes",
        description:
          "Play fretted notes without buzzing, muting, or unwanted string noise.",
        icon: "✨",

        lessonNumber: 3,
        lesson: "String Names",
        lessonHref: "/lesson/3",

        learn: [
          "Clear sound",
          "Correct pressure",
          "Avoiding fret buzz",
          "Muting unused strings",
        ],

        unlocks: [
          "Melodies",
          "Chord Clarity",
        ],
      },
    ],
  },

  {
    id: "rhythm",
    name: "Rhythm",
    icon: "🥁",
    description:
      "Learn to count, keep time, and play with a steady pulse.",

    skills: [
      {
        id: "quarter-notes",
        name: "Quarter Notes",
        description:
          "Play one steady beat at a time and understand the basic musical pulse.",
        icon: "♩",

        lessonNumber: 4,
        lesson: "Your First Rhythm",
        lessonHref: "/lesson/4",

        learn: [
          "Four-beat measures",
          "One note per beat",
          "Steady pulse",
          "Basic counting",
        ],

        unlocks: [
          "Eighth Notes",
          "Strumming Patterns",
        ],
      },

      {
        id: "counting",
        name: "Counting Time",
        description:
          "Count aloud while playing so your hands stay connected to the beat.",
        icon: "1️⃣",

        lessonNumber: 4,
        lesson: "Your First Rhythm",
        lessonHref: "/lesson/4",

        learn: [
          "Count 1-2-3-4",
          "Start on beat one",
          "Stay consistent",
          "Restart without rushing",
        ],

        unlocks: [
          "Metronome Practice",
        ],
      },

      {
        id: "metronome",
        name: "Metronome Practice",
        description:
          "Use a metronome to build reliable timing and measure improvement.",
        icon: "⏱️",

        lessonNumber: 4,
        lesson: "Your First Rhythm",
        lessonHref: "/lesson/4",

        learn: [
          "Follow the click",
          "Slow practice",
          "Tempo control",
          "Gradual speed increases",
        ],

        unlocks: [
          "Song Timing",
          "Rhythm Challenges",
        ],
      },
    ],
  },

  {
    id: "chords",
    name: "Chords",
    icon: "🎶",
    description:
      "Combine multiple notes and begin playing full musical shapes.",

    skills: [
      {
        id: "em-chord",
        name: "E Minor Chord",
        description:
          "Learn your first full chord and make every string ring clearly.",
        icon: "Em",

        lessonNumber: 5,
        lesson: "Basic Chords",
        lessonHref: "/lesson/5",

        learn: [
          "Em shape",
          "Finger numbers",
          "Chord pressure",
          "Clear open strings",
        ],

        unlocks: [
          "Chord Changes",
          "First Song",
        ],
      },

      {
        id: "chord-diagrams",
        name: "Chord Diagrams",
        description:
          "Understand the visual maps used to show chord shapes on the fretboard.",
        icon: "▦",

        lessonNumber: 5,
        lesson: "Basic Chords",
        lessonHref: "/lesson/5",

        learn: [
          "Vertical strings",
          "Horizontal frets",
          "Finger dots",
          "Open and muted strings",
        ],

        unlocks: [
          "Independent chord learning",
        ],
      },

      {
        id: "chord-switching",
        name: "Chord Switching",
        description:
          "Move between chord shapes smoothly while maintaining clear sound.",
        icon: "🔄",

        lessonNumber: 6,
        lesson: "Chord Switching",
        lessonHref: "/lesson/6",

        learn: [
          "Slow chord changes",
          "Finger preparation",
          "Accurate placement",
          "Consistent rhythm",
        ],

        unlocks: [
          "Faster chord changes",
          "First Song Challenge",
        ],
      },
    ],
  },

  {
    id: "songs",
    name: "Song Skills",
    icon: "🎵",
    description:
      "Combine everything you have learned into real music.",

    skills: [
      {
        id: "first-song",
        name: "First Song Challenge",
        description:
          "Combine notes, rhythm, picking, and your first chord in one final challenge.",
        icon: "🏆",

        lessonNumber: 7,
        lesson: "First Song Challenge",
        lessonHref: "/lesson/7",

        learn: [
          "Start-to-finish performance",
          "Recover from mistakes",
          "Keep steady timing",
          "Complete a full song section",
        ],

        unlocks: [
          "World 2",
          "Campfire Explorer Badge",
        ],
      },
    ],
  },
];