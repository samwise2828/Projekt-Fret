import type { LessonData } from "@/app/Components/lesson/LessonPlayer";

export const lessonTwo: LessonData = {
  id: "lesson-2",

  lessonNumber: 2,

  title: "Holding the Pick",

  description:
    "Learn how to choose a pick, hold it correctly, keep your hand relaxed, and play your first downstrokes, upstrokes, and alternate-picking motions.",

  estimatedMinutes: 20,

  xpReward: 100,

  difficulty: "Beginner",

  steps: [
    {
      id: "welcome-back",

      title: "Welcome Back",

      subtitle:
        "Your first playing technique begins here.",

      instruction:
        "Grab your guitar and a pick, sit in a comfortable position, and relax both shoulders before beginning.",

      tabs: [
        {
          title: "Learn",

          content:
            "In this lesson, you will learn how to hold a guitar pick and move it across the strings. A comfortable pick grip will make future skills such as chords, riffs, scales, and songs much easier.",
        },

        {
          title: "Practice",

          content: [
            "Sit with the guitar in the position from Lesson 1.",
            "Keep the neck angled slightly upward.",
            "Relax your shoulders.",
            "Let your picking arm rest naturally over the guitar body.",
            "Place one guitar pick nearby.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Start slowly.",
            "Keep your hand and wrist relaxed.",
            "Use small movements.",
            "Stop and reset whenever your hand becomes tense.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do sit comfortably.",
            "Do keep your shoulders relaxed.",
            "Do repeat each motion slowly.",
            "Don’t rush toward speed.",
            "Don’t squeeze the guitar.",
            "Don’t continue through pain or discomfort.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Starting with tense shoulders.",
            "Holding the guitar too far away.",
            "Trying to play fast immediately.",
            "Ignoring discomfort in the wrist or hand.",
          ],
        },
      ],
    },

    {
      id: "meet-your-pick",

      title: "Meet Your Pick",

      subtitle:
        "Learn what the pick does and which side touches the strings.",

      instruction:
        "Hold the pick in front of you and find its pointed playing tip.",

      tabs: [
        {
          title: "Learn",

          content: [
            "A guitar pick is also called a plectrum.",
            "The pointed end is normally used to strike the strings.",
            "The wider section gives your fingers space to hold the pick.",
            "Picks are available in different shapes, sizes, and thicknesses.",
            "A medium pick is a comfortable starting choice for many beginners.",
          ],
        },

        {
          title: "Practice",

          content: [
            "Hold the pick in front of you.",
            "Find the pointed end.",
            "Rotate the pick between your fingers.",
            "Identify the wider gripping area.",
            "Point the playing tip toward the guitar strings.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Try a medium pick if you are unsure which thickness to use.",
            "Use a pick that feels secure without requiring a tight grip.",
            "Keep extra picks near your practice area.",
            "Experiment with other pick types later.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do use the pointed end against the strings.",
            "Do choose a pick that feels comfortable.",
            "Do hold the wider area.",
            "Don’t hold the very tip.",
            "Don’t worry about finding the perfect pick today.",
            "Don’t use excessive force.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Pointing the wide end toward the strings.",
            "Holding the pick too close to its tip.",
            "Choosing an extremely thick pick that feels difficult to control.",
            "Squeezing the pick before playing.",
          ],
        },
      ],

      quickCheck: {
        question:
          "Which part of the pick normally strikes the strings?",

        options: [
          "The pointed tip",
          "The widest edge",
          "The center only",
          "Either finger",
        ],

        correctAnswer: "The pointed tip",

        explanation:
          "Correct. The pointed tip is the part normally used to strike the strings.",

        xpReward: 5,
      },
    },

    {
      id: "pick-exposure",

      title: "How Much Pick Should Stick Out?",

      subtitle:
        "Use only enough of the tip to strike the strings cleanly.",

      instruction:
        "Position the pick so that only a small amount of the pointed tip extends beyond your fingers.",

      tabs: [
        {
          title: "Learn",

          content:
            "Only a small amount of the pick should extend beyond your fingers. Too much exposed pick can catch deeply on the strings, while too little can cause your fingers to touch the strings.",
        },

        {
          title: "Practice",

          content: [
            "Place the pick between your thumb and index finger.",
            "Leave approximately 3 to 6 millimeters of the tip exposed.",
            "Look at the pick from the side.",
            "Check that your fingers are not covering the tip.",
            "Gently touch the exposed tip to one string.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Start with a small amount of exposed pick.",
            "Adjust slightly if the pick catches on the strings.",
            "Keep enough exposed so your fingers do not scrape the strings.",
            "The exact amount may change as your technique develops.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do expose only a small section of the tip.",
            "Do make small adjustments.",
            "Do check your grip from multiple angles.",
            "Don’t expose most of the pick.",
            "Don’t hide the entire tip.",
            "Don’t press the pick deeply between the strings.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Leaving too much pick exposed.",
            "Covering the entire playing tip.",
            "Allowing the pick to rotate sideways.",
            "Using a different grip after every stroke.",
          ],
        },
      ],

      quickCheck: {
        question:
          "How much of the pick should extend beyond your fingers?",

        options: [
          "Only a small amount",
          "Almost the entire pick",
          "None of the pick",
          "Exactly half of the pick",
        ],

        correctAnswer: "Only a small amount",

        explanation:
          "Correct. A small exposed tip provides control and helps prevent the pick from catching deeply on the strings.",

        xpReward: 5,
      },
    },

    {
      id: "thumb-position",

      title: "Thumb Position",

      subtitle:
        "Place the thumb naturally across the pick.",

      instruction:
        "Lay your thumb across the wider section of the pick while keeping the thumb relaxed.",

      tabs: [
        {
          title: "Learn",

          content:
            "Your thumb rests across one side of the pick. It should hold the pick securely without pressing so hard that the thumb or wrist becomes tense.",
        },

        {
          title: "Practice",

          content: [
            "Place the pick on the side of your index finger.",
            "Lay your thumb across the pick.",
            "Keep the thumb mostly straight and relaxed.",
            "Check that the pointed tip remains exposed.",
            "Shake your hand gently and rebuild the grip.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Let the thumb rest naturally.",
            "Keep the thumb joint relaxed.",
            "Use enough pressure to stop the pick from falling.",
            "Reset the grip whenever the thumb becomes stiff.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do rest the thumb across the pick.",
            "Do keep the thumb relaxed.",
            "Do use light pressure.",
            "Don’t bend the thumb into a tight hook.",
            "Don’t squeeze with maximum force.",
            "Don’t allow the thumb to cover the playing tip.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Pressing too hard with the thumb.",
            "Allowing the thumb to slide toward the tip.",
            "Locking the thumb joint.",
            "Holding the pick with the thumb tip only.",
          ],
        },
      ],

      quickCheck: {
        question:
          "How should your thumb feel while holding the pick?",

        options: [
          "Relaxed and secure",
          "Locked and stiff",
          "Completely removed",
          "Pressed as hard as possible",
        ],

        correctAnswer: "Relaxed and secure",

        explanation:
          "Correct. The thumb should keep the pick secure without creating unnecessary tension.",

        xpReward: 5,
      },
    },

    {
      id: "index-finger-position",

      title: "Index Finger Position",

      subtitle:
        "Support the pick from underneath.",

      instruction:
        "Curl your index finger gently and place the pick against the side of the finger near the first joint.",

      tabs: [
        {
          title: "Learn",

          content:
            "The pick is held between the thumb and the side of the index finger. The index finger should support the pick without becoming tightly curled or rigid.",
        },

        {
          title: "Practice",

          content: [
            "Curl your index finger gently.",
            "Rest the pick against the side of the finger.",
            "Place your thumb across the top.",
            "Check that the pick points toward the strings.",
            "Open your hand and rebuild the grip five times.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Use the side of the index finger rather than the fingertip.",
            "Keep the remaining fingers comfortable.",
            "Allow the hand to form a natural shape.",
            "Rebuild the grip until it feels repeatable.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do support the pick with the index finger.",
            "Do keep the finger gently curled.",
            "Do repeat the grip several times.",
            "Don’t pinch the pick with two fingertips.",
            "Don’t clench the remaining fingers.",
            "Don’t force the index finger into an uncomfortable angle.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Using the middle finger instead of the index finger.",
            "Pinching only with the fingertips.",
            "Curling the index finger too tightly.",
            "Allowing the pick to point away from the strings.",
          ],
        },
      ],

      quickCheck: {
        question:
          "Which two fingers normally hold the guitar pick?",

        options: [
          "Thumb and index finger",
          "Thumb and middle finger",
          "Index and ring finger",
          "Middle and little finger",
        ],

        correctAnswer: "Thumb and index finger",

        explanation:
          "Correct. The pick is normally held between the thumb and the side of the index finger.",

        xpReward: 5,
      },
    },

    {
      id: "relaxed-grip",

      title: "Relax Your Grip",

      subtitle:
        "Hold the pick securely without squeezing it.",

      instruction:
        "Hold the pick lightly, release unnecessary tension, and keep your wrist and forearm comfortable.",

      tabs: [
        {
          title: "Learn",

          content:
            "The pick should be secure enough that it does not fall, but loose enough that the hand can move freely. Excess tension can make playing slower, less accurate, and uncomfortable.",
        },

        {
          title: "Practice",

          content: [
            "Hold the pick normally.",
            "Notice how much pressure you are using.",
            "Squeeze tightly for one second.",
            "Release most of that pressure.",
            "Keep only enough pressure to hold the pick.",
            "Maintain the relaxed grip for 30 seconds.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Check your grip between exercises.",
            "Relax your jaw and shoulders as well.",
            "Let the wrist remain flexible.",
            "A small amount of pick movement is normal.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do hold the pick securely.",
            "Do keep the wrist flexible.",
            "Do pause when tension appears.",
            "Don’t squeeze until your fingers become white.",
            "Don’t lock the wrist.",
            "Don’t continue if your hand starts hurting.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Gripping the pick too tightly.",
            "Allowing the entire hand to become rigid.",
            "Locking the wrist in one position.",
            "Ignoring tension in the forearm.",
          ],
        },
      ],

      quickCheck: {
        question:
          "How tightly should you hold the pick?",

        options: [
          "Securely but lightly",
          "As tightly as possible",
          "So loosely that it falls",
          "With a locked wrist",
        ],

        correctAnswer: "Securely but lightly",

        explanation:
          "Correct. Use only enough pressure to keep the pick secure while allowing your hand to move freely.",

        xpReward: 5,
      },

      optionalChallenge: {
        id: "relaxed-hands",

        title: "Thirty-Second Relaxed Grip",

        description:
          "Hold the pick correctly for 30 seconds while keeping your thumb, wrist, forearm, and shoulders relaxed.",

        achievement: "Relaxed Hands",

        xpReward: 5,
      },
    },

    {
      id: "first-downstrokes",

      title: "Your First Downstrokes",

      subtitle:
        "Move the pick from the thicker strings toward the thinner strings.",

      instruction:
        "Place the pick above the thickest string and make a small downward motion across one string at a time.",

      tabs: [
        {
          title: "Learn",

          content:
            "A downstroke moves the pick downward toward the floor. The pick should pass through the string rather than stopping against it.",
        },

        {
          title: "Practice",

          content: [
            "Rest your picking arm naturally on the guitar.",
            "Place the pick just above the thickest string.",
            "Move the pick downward through the string.",
            "Allow the pick to continue past the string.",
            "Repeat slowly ten times.",
            "Try the motion on each of the six strings.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Use a small motion.",
            "Let the pick brush through the string.",
            "Keep the wrist relaxed.",
            "Listen for one clear sound.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do move downward through the string.",
            "Do use a controlled motion.",
            "Do practice each string separately.",
            "Don’t dig deeply into the string.",
            "Don’t swing the entire arm.",
            "Don’t stop the pick against the string.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Using a large arm movement.",
            "Catching the pick beneath the string.",
            "Holding the pick too tightly.",
            "Striking multiple strings accidentally.",
          ],
        },
      ],

      quickCheck: {
        question:
          "Which direction does a downstroke move?",

        options: [
          "Toward the floor",
          "Toward the ceiling",
          "Toward the headstock",
          "Away from the guitar",
        ],

        correctAnswer: "Toward the floor",

        explanation:
          "Correct. A downstroke moves downward from the thicker-string side toward the thinner-string side.",

        xpReward: 5,
      },

      optionalChallenge: {
        id: "downstroke-apprentice",

        title: "Twenty Clean Downstrokes",

        description:
          "Play 20 slow downstrokes on one open string. Reset your grip whenever the pick begins to rotate or your hand becomes tense.",

        achievement: "Downstroke Apprentice",

        xpReward: 10,
      },
    },

    {
      id: "first-upstrokes",

      title: "Your First Upstrokes",

      subtitle:
        "Return the pick upward through the string.",

      instruction:
        "Place the pick beneath a string and make a small upward motion toward the ceiling.",

      tabs: [
        {
          title: "Learn",

          content:
            "An upstroke moves the pick upward toward the ceiling. It is the opposite direction of a downstroke and should use the same relaxed, controlled motion.",
        },

        {
          title: "Practice",

          content: [
            "Place the pick just beneath the thinnest string.",
            "Move the pick upward through the string.",
            "Allow the pick to continue past the string.",
            "Repeat slowly ten times.",
            "Practice the motion on each string.",
            "Check your grip after every few strokes.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Keep the upward motion small.",
            "Use the tip of the pick.",
            "Relax immediately after each stroke.",
            "Listen for the same clear sound each time.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do move upward through the string.",
            "Do keep the motion controlled.",
            "Do practice slowly.",
            "Don’t hook the pick beneath the string.",
            "Don’t lift the entire forearm.",
            "Don’t tense the thumb.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Pulling the string upward.",
            "Using too much exposed pick.",
            "Making a large arm movement.",
            "Allowing the wrist to become stiff.",
          ],
        },
      ],

      quickCheck: {
        question:
          "Which direction does an upstroke move?",

        options: [
          "Toward the ceiling",
          "Toward the floor",
          "Toward the bridge",
          "Toward your fretting hand",
        ],

        correctAnswer: "Toward the ceiling",

        explanation:
          "Correct. An upstroke moves upward through the string toward the ceiling.",

        xpReward: 5,
      },

      optionalChallenge: {
        id: "upstroke-apprentice",

        title: "Twenty Clean Upstrokes",

        description:
          "Play 20 slow upstrokes on one open string while keeping the pick grip and wrist relaxed.",

        achievement: "Upstroke Apprentice",

        xpReward: 10,
      },
    },

    {
      id: "alternate-picking",

      title: "Alternate Picking",

      subtitle:
        "Combine downstrokes and upstrokes into one repeating motion.",

      instruction:
        "Play one downstroke followed by one upstroke on the same open string.",

      tabs: [
        {
          title: "Learn",

          content:
            "Alternate picking means switching between downstrokes and upstrokes. The repeating pattern is down, up, down, up. This motion will eventually help you play notes smoothly and efficiently.",
        },

        {
          title: "Practice",

          content: [
            "Choose one open string.",
            "Play one slow downstroke.",
            "Play one slow upstroke.",
            "Pause and check your grip.",
            "Repeat down and up five times.",
            "Continue until you complete 20 total strokes.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Say down and up aloud.",
            "Keep both directions the same size.",
            "Focus on control instead of speed.",
            "Use the wrist and a small amount of forearm motion naturally.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do alternate directions every stroke.",
            "Do keep the rhythm steady.",
            "Do stop when the hand becomes tense.",
            "Don’t play two downstrokes in a row.",
            "Don’t rush the upstroke.",
            "Don’t make one direction much larger than the other.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Forgetting to alternate directions.",
            "Making the upstroke weaker than the downstroke.",
            "Using large movements.",
            "Increasing speed before the motion feels controlled.",
          ],
        },
      ],

      quickCheck: {
        question:
          "What is the correct alternate-picking pattern?",

        options: [
          "Down, up, down, up",
          "Down, down, up, up",
          "Up, up, up, down",
          "Down only",
        ],

        correctAnswer: "Down, up, down, up",

        explanation:
          "Correct. Alternate picking switches direction after every stroke.",

        xpReward: 5,
      },

      optionalChallenge: {
        id: "alternate-picking-apprentice",

        title: "Forty Alternating Strokes",

        description:
          "Play 40 slow strokes on one open string using the repeating pattern down, up, down, up.",

        achievement: "Alternate Picking Apprentice",

        xpReward: 10,
      },
    },

    {
      id: "picking-checkpoint",

      title: "Practice Checkpoint",

      subtitle:
        "Review your pick grip and picking motions before the boss battle.",

      instruction:
        "Complete each challenge slowly and return to an earlier step if your grip becomes uncomfortable.",

      tabs: [
        {
          title: "Learn",

          content:
            "This checkpoint combines every skill from the lesson. Focus on maintaining the same relaxed grip while changing between downstrokes, upstrokes, and alternate picking.",
        },

        {
          title: "Practice",

          content: [
            "Identify the pointed end of the pick.",
            "Hold the pick between your thumb and index finger.",
            "Leave only a small amount of the tip exposed.",
            "Maintain a relaxed grip for 30 seconds.",
            "Play ten downstrokes.",
            "Play ten upstrokes.",
            "Play twenty alternating strokes.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Check your shoulders before each exercise.",
            "Reset your pick grip whenever necessary.",
            "Use one open string during the checkpoint.",
            "Count each stroke aloud.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do complete each challenge slowly.",
            "Do check your pick grip between challenges.",
            "Do repeat anything that feels uncertain.",
            "Don’t rush into the boss battle.",
            "Don’t ignore tension.",
            "Don’t worry about playing fast.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Allowing too much pick to stick out.",
            "Squeezing harder as the exercise continues.",
            "Using the entire arm for each stroke.",
            "Losing the down-up pattern.",
          ],
        },
      ],

      quickCheck: {
        question:
          "What is the most important goal during this lesson?",

        options: [
          "Relaxed and controlled movement",
          "Maximum speed",
          "Striking every string at once",
          "Holding the pick as tightly as possible",
        ],

        correctAnswer: "Relaxed and controlled movement",

        explanation:
          "Correct. A relaxed and controlled technique gives you the strongest foundation for future playing.",

        xpReward: 5,
      },
    },

    {
      id: "pick-master",

      title: "Boss Battle: Pick Master",

      subtitle:
        "Prove that you can control the pick with a relaxed grip.",

      instruction:
        "Complete all five challenges to defeat the Pick Master and finish Lesson 2.",

      tabs: [
        {
          title: "Boss",

          content: [
            "Challenge 1: Hold the pick correctly between your thumb and index finger.",
            "Challenge 2: Show that only a small amount of the tip is exposed.",
            "Challenge 3: Play ten clean downstrokes.",
            "Challenge 4: Play ten clean upstrokes.",
            "Challenge 5: Play twenty alternate-picked strokes using down, up, down, up.",
          ],
        },

        {
          title: "Rules",

          content: [
            "Use one open string.",
            "Keep your picking hand relaxed.",
            "Reset your grip whenever the pick rotates.",
            "Repeat any challenge that does not feel controlled.",
            "Accuracy and comfort matter more than speed.",
          ],
        },

        {
          title: "Reward",

          content: [
            "Earn 100 XP.",
            "Defeat the Pick Master.",
            "Complete Holding the Pick.",
            "Unlock Pick Grip.",
            "Unlock Downstrokes.",
            "Unlock Upstrokes.",
            "Unlock Alternate Picking.",
            "Unlock Lesson 3.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do complete all five challenges.",
            "Do keep the motion small.",
            "Do maintain a relaxed grip.",
            "Don’t rush the alternate-picking challenge.",
            "Don’t dig deeply into the string.",
            "Don’t continue through pain.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Allowing the pick to rotate.",
            "Using too much exposed pick.",
            "Playing two strokes in the same direction.",
            "Tensing the thumb, wrist, or shoulder.",
          ],
        },
      ],

      optionalChallenge: {
        id: "pick-master-perfect-run",

        title: "Perfect Boss Run",

        description:
          "Complete every boss challenge without dropping the pick, losing the alternate-picking pattern, or stopping to reset your grip.",

        achievement: "Pick Master",

        xpReward: 15,
      },
    },
  ],
};