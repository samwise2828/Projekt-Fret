import type { LessonData } from "@/app/Components/lesson/LessonPlayer";

export const lessonOne: LessonData = {
  id: "lesson-1",

  lessonNumber: 1,

  title: "Welcome to the Guitar",

description:
  "Welcome to Campfire Valley! In this lesson you'll learn how to hold your guitar, hold a pick, identify the strings, and begin your journey toward playing real songs.",

estimatedMinutes: 12,

xpReward: 100,

difficulty: "Beginner",

  steps: [
    {
  id: "welcome-to-the-guitar",

  title: "Welcome to the Guitar",

  subtitle:
    "Every great guitarist starts with a single lesson.",

  instruction:
    "Grab your guitar, find a comfortable place to sit, and get ready to begin your journey through Campfire Valley.",

  tabs: [
    {
      title: "Learn",

      content:
        "Welcome to Projekt Fret! Whether your goal is to play your favorite songs, perform on stage, write your own music, or simply have fun, every guitarist begins exactly where you are today. You don't need experience or natural talent—just a willingness to practice and enjoy the journey. Throughout Campfire Valley you'll unlock new skills, earn XP, defeat boss battles, and most importantly, learn to play real music.",
    },

    {
      title: "Practice",

      content: [
        "Grab your guitar.",
        "Find a comfortable place to sit.",
        "Put away distractions for the next few minutes.",
        "Take a deep breath and relax your shoulders.",
        "Think about one reason you want to learn guitar.",
      ],
    },

    {
      title: "Tips",

      content: [
        "Practice a little every day instead of a lot once a week.",
        "Mistakes are part of learning.",
        "Go at your own pace.",
        "Enjoy the process instead of rushing to the finish.",
      ],
    },

    {
      title: "Do & Don't",

      content: [
        "Do stay relaxed.",
        "Do take your time.",
        "Do repeat lessons whenever you need to.",
        "Don't compare yourself to other players.",
        "Don't expect perfection on day one.",
        "Don't give up if something feels difficult.",
      ],
    },

    {
      title: "Mistakes",

      content: [
        "Trying to rush through the lesson.",
        "Feeling discouraged after making mistakes.",
        "Skipping practice sections.",
        "Thinking you need natural talent to become a guitarist.",
      ],
    },
  ],
},

    {
      id: "hold-your-guitar",

      title: "Hold Your Guitar",

      subtitle:
        "Find a comfortable position that keeps your body relaxed.",

      instruction:
        "Sit toward the front of a chair, rest the guitar against your body, and angle the neck slightly upward.",

      tabs: [
        {
          title: "Learn",

          content:
            "A comfortable playing position gives both hands room to move. Sit upright, keep your shoulders relaxed, and bring the guitar toward your body instead of leaning your body toward the guitar.",
        },

        {
          title: "Practice",

          content: [
            "Use a chair without armrests when possible.",
            "Sit toward the front half of the chair.",
            "Keep both feet supported.",
            "Rest the guitar securely against your body.",
            "Angle the guitar neck slightly upward.",
            "Let your picking arm rest naturally over the body.",
            "Hold the position for 30 seconds.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Keep the guitar close enough that you do not have to reach.",
            "Let your shoulders hang naturally.",
            "Keep your back upright without becoming stiff.",
            "Adjust the guitar until both hands can move comfortably.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do keep the neck slightly raised.",
            "Do sit upright while remaining relaxed.",
            "Do keep the guitar stable against your body.",
            "Don’t hunch over to see the strings.",
            "Don’t raise your shoulders.",
            "Don’t squeeze the guitar tightly.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Letting the guitar slide away from the body.",
            "Pointing the neck toward the floor.",
            "Leaning far forward over the instrument.",
            "Holding tension in the shoulders, wrist, or back.",
          ],
        },
      ],
    },

    {
      id: "protect-your-guitar",

      title: "Care for Your Guitar",

      subtitle:
        "Build good habits that protect your instrument.",

      instruction:
        "Review each care rule and check where your guitar will be stored after practice.",

      tabs: [
        {
          title: "Learn",

          content:
            "A guitar can last for many years when it is stored safely and kept clean. Heat, moisture, falls, and dirt can damage the instrument or make it harder to play.",
        },

        {
          title: "Practice",

          content: [
            "Choose a safe place to store your guitar.",
            "Make sure it cannot easily fall over.",
            "Check that it is away from direct heat.",
            "Wipe the strings gently after playing.",
            "Return the guitar to its stand or case after practice.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Use a guitar stand or case.",
            "Keep a soft cloth near your practice space.",
            "Wash and dry your hands before playing.",
            "Tune the guitar before each practice session once you learn how.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do store the guitar safely.",
            "Do wipe the strings after playing.",
            "Do keep food and drinks away from the instrument.",
            "Don’t leave the guitar in a hot car.",
            "Don’t lean it loosely against a wall.",
            "Don’t expose it to rain or extreme moisture.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Leaving the guitar where it can fall.",
            "Storing it near a heater or sunny window.",
            "Allowing sweat and dirt to remain on the strings.",
            "Leaving the instrument inside a hot vehicle.",
          ],
        },
      ],
    },

    {
      id: "how-lessons-work",

      title: "How Lessons Work",

      subtitle:
        "Learn the path you will follow through Projekt Fret.",

      instruction:
        "Review the four parts of each lesson and how they help you improve.",

      tabs: [
        {
          title: "Learn",

          content: [
            "Learn: Read or watch the explanation for a new skill.",
            "Practice: Repeat the skill slowly until it feels comfortable.",
            "Boss Battle: Complete a challenge that tests what you learned.",
            "Reward: Earn XP, unlock lessons, and continue through the world.",
          ],
        },

        {
          title: "Practice",

          content: [
            "Open each tab in this step.",
            "Review the Learn section.",
            "Complete the Practice checklist.",
            "Read the Tips section.",
            "Review the Do & Don’t section.",
            "Check the Mistakes section before continuing.",
          ],
        },

        {
          title: "Tips",

          content: [
            "You can return to earlier tabs whenever necessary.",
            "Boss battles are meant to test progress, not punish mistakes.",
            "Repeating a lesson is part of learning.",
            "Your skills will build across multiple worlds.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do complete the practice before the boss battle.",
            "Do repeat lessons when you need more time.",
            "Do focus on accuracy before speed.",
            "Don’t skip directly to the challenge.",
            "Don’t treat mistakes as failure.",
            "Don’t rush only to earn XP.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Skipping the Learn section.",
            "Attempting challenges without practicing.",
            "Moving too quickly through difficult skills.",
            "Believing a lesson must be perfect on the first try.",
          ],
        },
      ],
    },

    {
      id: "practice-checkpoint",

      title: "Practice Checkpoint",

      subtitle:
        "Review everything you learned before facing the Guitar Guardian.",

      instruction:
        "Complete each challenge before continuing to the boss battle.",

      tabs: [
        {
          title: "Learn",

          content:
            "This checkpoint helps you confirm that you are ready for the final challenge. Take your time and repeat any earlier step if something is unclear.",
        },

        {
          title: "Practice",

          content: [
            "Point to the headstock.",
            "Point to the bridge.",
            "Find the neck and fretboard.",
            "Find the sound hole or pickups.",
            "Sit with the guitar in a comfortable position.",
            "Keep your shoulders relaxed for 30 seconds.",
            "Name one way to protect your guitar.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Say each answer aloud.",
            "Complete the challenges without looking at earlier instructions.",
            "Return to a previous step when you forget something.",
            "Do not continue until the guitar feels stable and comfortable.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do check every challenge carefully.",
            "Do repeat any challenge you miss.",
            "Do stay relaxed while holding the guitar.",
            "Don’t guess without checking.",
            "Don’t rush into the boss battle.",
            "Don’t ignore discomfort or tension.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Confusing the bridge with the nut.",
            "Holding the guitar with the neck pointing downward.",
            "Forgetting to relax the shoulders.",
            "Continuing without understanding the guitar parts.",
          ],
        },
      ],
    },

    {
      id: "guitar-guardian",

      title: "Boss Battle: Guitar Guardian",

      subtitle:
        "Prove that you are ready to continue your journey.",

      instruction:
        "Complete all four challenges to defeat the Guitar Guardian and finish Lesson 1.",

      tabs: [
        {
          title: "Boss",

          content: [
            "Challenge 1: Point to the headstock.",
            "Challenge 2: Point to the bridge.",
            "Challenge 3: Identify the neck, fretboard, and body.",
            "Challenge 4: Hold the guitar correctly for 30 seconds with relaxed shoulders.",
          ],
        },

        {
          title: "Rules",

          content: [
            "Complete every challenge without rushing.",
            "Repeat a challenge when you are unsure.",
            "Return to an earlier lesson step whenever needed.",
            "The goal is confidence, not perfection.",
          ],
        },

        {
          title: "Reward",

          content: [
            "Earn 100 XP.",
            "Defeat the Guitar Guardian.",
            "Complete Meet Your Guitar.",
            "Unlock Lesson 2: Holding the Pick.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do complete all four challenges.",
            "Do keep the guitar stable and comfortable.",
            "Do celebrate finishing your first lesson.",
            "Don’t skip a challenge.",
            "Don’t tense your shoulders.",
            "Don’t worry if you need another attempt.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Rushing through the guitar parts.",
            "Holding the guitar in an unstable position.",
            "Leaning over the guitar.",
            "Finishing without reviewing a missed challenge.",
          ],
        },
      ],
    },
  ],
};