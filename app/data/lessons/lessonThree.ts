import type { LessonData } from "@/app/Components/lesson/LessonPlayer";

export const lessonThree: LessonData = {
  id: "lesson-3",
  lessonNumber: 3,
  title: "The Six Strings",
  description:
    "Learn the number and name of every guitar string, then practice finding each one quickly.",
  estimatedMinutes: 20,
  xpReward: 100,
  difficulty: "Beginner",
  steps: [
    {
      id: "lesson-3-mission",
      title: "Your Mission",
      subtitle: "Every song starts with the same six strings.",
      instruction:
        "By the end of this lesson, you will be able to identify every guitar string by both its number and its name.",
      visual: {
        type: "stringDiagram",
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "The guitar has six strings.",
            "Each string has a number from 1 to 6.",
            "Each string also has a letter name.",
            "Knowing both systems will make chords, tabs, riffs, and future lessons much easier.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Look across all six strings from the thinnest to the thickest.",
            "Say: one, two, three, four, five, six.",
            "Then reverse it: six, five, four, three, two, one.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Do not rush to memorize everything at once.",
            "You will repeat the strings several times during this lesson.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do keep your guitar in normal playing position.",
            "Don't turn the guitar around to read the strings backward.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "Many beginners assume the thickest string is String 1.",
            "String 1 is always the thinnest string.",
          ],
        },
      ],
      quickCheck: {
        question: "How many strings does a standard guitar have?",
        options: ["4", "5", "6", "8"],
        correctAnswer: "6",
        explanation:
          "Correct. A standard guitar has six strings.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-3-string-numbers",
      title: "String Numbers",
      subtitle: "Count from the floor toward the ceiling.",
      instruction:
        "String 1 is the thinnest string, closest to the floor. String 6 is the thickest string, closest to the ceiling.",
      visual: {
        type: "stringDiagram",
        showNames: false,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "String 1 is the thinnest string.",
            "String 2 is directly above String 1.",
            "The numbers continue upward until String 6.",
            "String 6 is the thickest string.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Touch String 1.",
            "Touch String 6.",
            "Move slowly through Strings 1, 2, 3, 4, 5, and 6.",
            "Reverse direction from String 6 back to String 1.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Think: thin equals one.",
            "The strings become thicker as the numbers get larger.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do use your eyes and your picking hand together.",
            "Don't count from the top of the guitar downward.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "The most common mistake is reversing Strings 1 and 6.",
            "Remember: String 1 is the thin, high-sounding string.",
          ],
        },
      ],
      quickCheck: {
        question: "Which numbered string is the thickest?",
        options: ["String 1", "String 2", "String 5", "String 6"],
        correctAnswer: "String 6",
        explanation:
          "Correct. String 6 is the thickest string.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-3-high-e",
      title: "String 1 — High E",
      subtitle: "The thinnest and highest-sounding string.",
      instruction:
        "String 1 is called High E. It is the thinnest string and produces the highest open-string pitch.",
      visual: {
        type: "stringDiagram",
        highlight: 1,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "String 1 is High E.",
            "It is called High E because it sounds higher than the other E string.",
            "It is the thinnest string on the guitar.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Touch String 1.",
            "Play it gently with one downstroke.",
            "Say 'High E' as the string rings.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Use a light touch because the string is thin.",
            "Let the note ring clearly before playing it again.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do aim carefully at only String 1.",
            "Don't strike several strings at once.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "Do not confuse High E with Low E.",
            "High E is String 1; Low E is String 6.",
          ],
        },
      ],
      quickCheck: {
        question: "What is the name of String 1?",
        options: ["Low E", "A", "B", "High E"],
        correctAnswer: "High E",
        explanation:
          "Correct. String 1 is the High E string.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-3-b-string",
      title: "String 2 — B",
      subtitle: "The second-thinnest string.",
      instruction:
        "String 2 is called B. It sits directly above the High E string.",
      visual: {
        type: "stringDiagram",
        highlight: 2,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "String 2 is B.",
            "It is directly above String 1.",
            "You will use it constantly in chords and melodies.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Touch String 2.",
            "Play it once with a downstroke.",
            "Alternate between String 1 and String 2.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Use the High E string as a landmark.",
            "Move one string upward from High E to find B.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do isolate the B string.",
            "Don't let your pick dig too deeply between the strings.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "Beginners sometimes skip from String 1 to String 3.",
            "Move only one string upward to reach B.",
          ],
        },
      ],
      quickCheck: {
        question: "Which numbered string is B?",
        options: ["String 1", "String 2", "String 3", "String 4"],
        correctAnswer: "String 2",
        explanation:
          "Correct. B is String 2.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-3-g-string",
      title: "String 3 — G",
      subtitle: "The middle of the thinner strings.",
      instruction:
        "String 3 is called G. It sits between the B and D strings.",
      visual: {
        type: "stringDiagram",
        highlight: 3,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "String 3 is G.",
            "It is directly above the B string.",
            "The G string appears in many beginner riffs and chord shapes.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Touch String 3.",
            "Play G, then B, then High E.",
            "Repeat: 3, 2, 1.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Think of G as the third string.",
            "Use the first three strings as a small group: E, B, G.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do count from the thin High E string.",
            "Don't guess based only on string thickness.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "String 3 may feel close to Strings 2 and 4.",
            "Count slowly until the location becomes automatic.",
          ],
        },
      ],
      quickCheck: {
        question: "What is the name of String 3?",
        options: ["B", "G", "D", "A"],
        correctAnswer: "G",
        explanation:
          "Correct. String 3 is the G string.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-3-d-string",
      title: "String 4 — D",
      subtitle: "The first of the thicker lower strings.",
      instruction:
        "String 4 is called D. It sits directly above the G string.",
      visual: {
        type: "stringDiagram",
        highlight: 4,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "String 4 is D.",
            "It marks the start of the three thicker bass strings.",
            "D is used in many open chords and riffs.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Touch String 4.",
            "Play String 3, then String 4.",
            "Repeat the pair slowly: G, D.",
          ],
        },
        {
          title: "Tips",
          content: [
            "D is directly above G.",
            "Think of Strings 3 and 4 as the center pair.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do listen for the lower pitch compared with G.",
            "Don't tense your wrist while changing strings.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "String 4 can be confused with String 5.",
            "Count from String 1 until you are certain.",
          ],
        },
      ],
      quickCheck: {
        question: "Which numbered string is D?",
        options: ["String 2", "String 3", "String 4", "String 5"],
        correctAnswer: "String 4",
        explanation:
          "Correct. D is String 4.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-3-a-string",
      title: "String 5 — A",
      subtitle: "The second-thickest string.",
      instruction:
        "String 5 is called A. It sits between D and Low E.",
      visual: {
        type: "stringDiagram",
        highlight: 5,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "String 5 is A.",
            "It is the second-thickest string.",
            "A is an important root note for many chords and scales.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Touch String 5.",
            "Play String 5, then String 4.",
            "Repeat: A, D, A, D.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Use the thickest string as a landmark.",
            "Move one string downward from Low E to find A.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do keep your pick movement small.",
            "Don't hit the Low E string by accident.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "The A and Low E strings can feel similar at first.",
            "Remember A is String 5, not String 6.",
          ],
        },
      ],
      quickCheck: {
        question: "What is the name of String 5?",
        options: ["E", "A", "D", "G"],
        correctAnswer: "A",
        explanation:
          "Correct. String 5 is the A string.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-3-low-e",
      title: "String 6 — Low E",
      subtitle: "The thickest and lowest-sounding string.",
      instruction:
        "String 6 is called Low E. It is the thickest string and produces the lowest open-string pitch.",
      visual: {
        type: "stringDiagram",
        highlight: 6,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "String 6 is Low E.",
            "It shares the letter E with String 1 but sounds much lower.",
            "It is the thickest string on the guitar.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Touch String 6.",
            "Play it with a relaxed downstroke.",
            "Compare Low E with High E.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Low E is nearest the ceiling while you are playing.",
            "Think: thick string, low sound.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do let the string ring fully.",
            "Don't confuse its position with String 1.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "Both outside strings are named E.",
            "Always include 'High' or 'Low' when you need to distinguish them.",
          ],
        },
      ],
      quickCheck: {
        question: "Which string is Low E?",
        options: ["String 1", "String 3", "String 5", "String 6"],
        correctAnswer: "String 6",
        explanation:
          "Correct. Low E is String 6.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-3-memory-trick",
      title: "Remember the Names",
      subtitle: "E A D G B E",
      instruction:
        "From the thickest string to the thinnest string, the names are E, A, D, G, B, E.",
      visual: {
        type: "stringDiagram",
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "From String 6 to String 1: E, A, D, G, B, E.",
            "A common memory phrase is: Eddie Ate Dynamite, Good Bye Eddie.",
            "Another option is: Elephants And Donkeys Grow Big Ears.",
            "Use whichever phrase is easier for you to remember.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Say the names from String 6 to String 1.",
            "Say them again without looking.",
            "Now say them from String 1 back to String 6.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Memorize the order in both directions.",
            "Say the string number and name together: 6-E, 5-A, 4-D, 3-G, 2-B, 1-E.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do repeat the sequence out loud.",
            "Don't depend on the memory phrase forever.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "The memory phrase runs from thickest to thinnest.",
            "That means it starts on String 6, not String 1.",
          ],
        },
      ],
      quickCheck: {
        question:
          "From thickest to thinnest, which sequence is correct?",
        options: [
          "E A D G B E",
          "E B G D A E",
          "A D G B E E",
          "E G A D B E",
        ],
        correctAnswer: "E A D G B E",
        explanation:
          "Correct. From String 6 to String 1, the names are E A D G B E.",
        xpReward: 10,
      },
    },
    {
      id: "lesson-3-open-strings",
      title: "Open Strings",
      subtitle: "Play a string without pressing a fret.",
      instruction:
        "An open string is played without pressing the string against any fret.",
      visual: {
        type: "stringDiagram",
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "Open means your fretting hand is not pressing the string.",
            "Each open string produces its natural string name.",
            "Open String 5 produces an A note.",
            "Open String 3 produces a G note.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Keep your fretting hand relaxed and away from the strings.",
            "Play each open string once from String 6 to String 1.",
            "Say each name as you play: E, A, D, G, B, E.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Listen for a clear ringing sound.",
            "Use one controlled pick stroke per string.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do let each note ring.",
            "Don't accidentally mute the strings with either hand.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "Touching a string lightly can stop it from ringing.",
            "Keep unused fingers clear of the strings.",
          ],
        },
      ],
      quickCheck: {
        question: "What makes a string an open string?",
        options: [
          "It is played loudly",
          "It is played without pressing a fret",
          "It is played with an upstroke",
          "It is the thickest string",
        ],
        correctAnswer: "It is played without pressing a fret",
        explanation:
          "Correct. An open string is played without pressing any fret.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-3-reading-exercises",
      title: "Read a String Exercise",
      subtitle: "Numbers can tell you which string to play.",
      instruction:
        "For now, a number by itself will tell you which open string to play. Play each number slowly from left to right.",
      visual: {
        type: "stringDiagram",
        showNames: false,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "Exercise 1: 6 — 5 — 4 — 3 — 2 — 1",
            "Exercise 2: 1 — 2 — 3 — 4 — 5 — 6",
            "Exercise 3: 6 — 4 — 5 — 3 — 2 — 1",
            "Each number represents an open string.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Play Exercise 1 using downstrokes.",
            "Play Exercise 2 using alternate picking.",
            "Play Exercise 3 slowly without stopping.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Look ahead to the next number before you move.",
            "Accuracy matters more than speed.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do play one string for each number.",
            "Don't treat the numbers as fret numbers yet.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "At this stage, the exercise numbers represent strings.",
            "Later, tablature will show both strings and fret numbers.",
          ],
        },
      ],
      quickCheck: {
        question:
          "In this lesson's exercise, what does the number 4 tell you to play?",
        options: [
          "The fourth fret",
          "String 4",
          "Four strings together",
          "The fourth chord",
        ],
        correctAnswer: "String 4",
        explanation:
          "Correct. Here, the number 4 means play open String 4.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-3-speed-challenge",
      title: "Practice Checkpoint",
      subtitle: "Find each string without hesitation.",
      instruction:
        "Keep your guitar in playing position and locate each requested string as quickly and accurately as you can.",
      visual: {
        type: "stringDiagram",
        showNames: false,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "Round 1: Find Strings 6, 1, 4, 2, 5, 3.",
            "Round 2: Find G, Low E, B, A, High E, D.",
            "Round 3: Play E, A, D, G, B, E from thickest to thinnest.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Complete each round slowly once.",
            "Repeat each round without looking at the diagram.",
            "Try to complete all three rounds without a mistake.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Use the outside E strings as landmarks.",
            "Use the center pair, G and D, as another landmark.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do correct mistakes immediately.",
            "Don't speed up until your answers are accurate.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "Random guessing will slow your progress.",
            "Pause, count, and confirm whenever you are unsure.",
          ],
        },
      ],
      optionalChallenge: {
        id: "string-explorer",
        title: "String Explorer",
        description:
          "Complete all three rounds twice without looking at the diagram and without choosing the wrong string.",
        achievement: "String Explorer",
        xpReward: 15,
      },
    },
    {
      id: "lesson-3-boss",
      title: "Boss Battle: The String Guardian",
      subtitle: "Prove that you know your instrument.",
      instruction:
        "Complete the final challenge by identifying the correct string from both its number and its name.",
      visual: {
        type: "stringDiagram",
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "String 1 is High E.",
            "String 2 is B.",
            "String 3 is G.",
            "String 4 is D.",
            "String 5 is A.",
            "String 6 is Low E.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Play Strings 6, 3, 1, 5, 2, and 4.",
            "Then play Low E, D, High E, A, B, and G.",
            "Finish by playing every open string from thickest to thinnest.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Take one breath before beginning.",
            "Use string landmarks instead of guessing.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do prioritize clean, correct notes.",
            "Don't restart because of one mistake—correct it and continue.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "Remember that both outside strings are E.",
            "High E is String 1 and Low E is String 6.",
          ],
        },
      ],
      quickCheck: {
        question:
          "Which complete string-number pairing is correct?",
        options: [
          "1 Low E, 2 B, 3 G, 4 D, 5 A, 6 High E",
          "1 High E, 2 B, 3 G, 4 D, 5 A, 6 Low E",
          "1 High E, 2 G, 3 B, 4 A, 5 D, 6 Low E",
          "1 B, 2 High E, 3 G, 4 D, 5 Low E, 6 A",
        ],
        correctAnswer:
          "1 High E, 2 B, 3 G, 4 D, 5 A, 6 Low E",
        explanation:
          "Boss defeated. You now know all six strings by number and name.",
        xpReward: 15,
      },
      optionalChallenge: {
        id: "string-guardian-perfect-run",
        title: "Perfect String Run",
        description:
          "Play all six open strings from thickest to thinnest, then reverse direction, without hitting the wrong string.",
        achievement: "String Guardian",
        xpReward: 20,
      },
    },
  ],
};

export default lessonThree;