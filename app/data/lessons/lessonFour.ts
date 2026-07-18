import type { LessonData } from "@/app/Components/lesson/LessonPlayer";

export const lessonFour: LessonData = {
  id: "lesson-4",
  lessonNumber: 4,
  title: "Your First Fretted Notes",
  description:
    "Learn how frets change a string's pitch and produce your first clear fretted notes.",
  estimatedMinutes: 25,
  xpReward: 100,
  difficulty: "Beginner",
  steps: [
    {
      id: "lesson-4-mission",
      title: "Your Mission",
      subtitle: "Turn open strings into new notes.",
      instruction:
        "You already know the six open strings. Now you will learn how pressing a string onto a fret changes its sound.",
      visual: {
        type: "fretboardDiagram",
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "Frets divide the guitar neck into different notes.",
            "Pressing a string at a fret shortens the vibrating part of the string.",
            "A shorter vibrating string produces a higher note.",
            "Today your goal is clean sound—not speed.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Hold the guitar in your normal playing position.",
            "Keep your fretting hand relaxed near the first three frets.",
            "Look at the spaces between the metal fret wires.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Relax your shoulder and wrist before every exercise.",
            "A clear note should ring without buzzing or stopping immediately.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do use slow, controlled movements.",
            "Don't squeeze the neck as hard as possible.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "Beginners often think more pressure always creates a better note.",
            "Correct placement is just as important as pressure.",
          ],
        },
      ],
      quickCheck: {
        question: "What is today's main goal?",
        options: [
          "Play as fast as possible",
          "Produce clear fretted notes",
          "Memorize every note on the neck",
          "Learn a full chord",
        ],
        correctAnswer: "Produce clear fretted notes",
        explanation:
          "Correct. Clean notes and good technique come before speed.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-4-meet-fretboard",
      title: "Meet the Fretboard",
      subtitle: "The playing surface of the guitar neck.",
      instruction:
        "The fretboard is the long surface beneath the strings. The metal bars across it are called fret wires.",
      visual: {
        type: "fretboardDiagram",
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "The fretboard runs along the front of the guitar neck.",
            "Metal fret wires divide the neck into numbered sections.",
            "The open string is played before Fret 1.",
            "Fret numbers increase as you move toward the guitar body.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Point to the nut at the end of the fretboard.",
            "Point to the first metal fret wire.",
            "Trace the first five fret spaces with your eyes.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Count fret spaces, not only the metal wires.",
            "The nut marks the beginning of the playable fretboard.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do identify each fret visually before placing a finger.",
            "Don't assume the first metal bar itself is the place to press.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "The fret is the playable space before a fret wire.",
            "Pressing directly on top of the wire can mute the note.",
          ],
        },
      ],
      quickCheck: {
        question: "What are the metal bars across the neck called?",
        options: ["Strings", "Fret wires", "Pickups", "Bridges"],
        correctAnswer: "Fret wires",
        explanation:
          "Correct. The metal bars are called fret wires.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-4-fret-numbers",
      title: "Fret Numbers",
      subtitle: "Count away from the headstock.",
      instruction:
        "The first space is Fret 1, the next space is Fret 2, and the next is Fret 3.",
      visual: {
        type: "fretboardDiagram",
        string: 1,
        fret: 2,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "Fret 1 is the first space after the nut.",
            "Fret 2 is the second space.",
            "Fret 3 is the third space.",
            "Fret numbers continue increasing toward the guitar body.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Point to Fret 1.",
            "Point to Fret 3.",
            "Point to Fret 2 without counting aloud.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Use the nut as your starting line.",
            "Count one space at a time until the locations become familiar.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do count from the headstock side.",
            "Don't count backward from the guitar body.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "Do not count the open-string area as Fret 1.",
            "Fret 1 begins after the nut.",
          ],
        },
      ],
      quickCheck: {
        question: "Where is Fret 2?",
        options: [
          "Before the nut",
          "The second space after the nut",
          "Directly on the second metal wire",
          "At the bridge",
        ],
        correctAnswer: "The second space after the nut",
        explanation:
          "Correct. Fret 2 is the second playable space after the nut.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-4-finger-placement",
      title: "Proper Finger Placement",
      subtitle: "Press just behind the fret wire.",
      instruction:
        "Use the tip of your index finger and place it near the fret wire on the side closer to the guitar body.",
      visual: {
        type: "fretboardDiagram",
        string: 1,
        fret: 1,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "Use the fingertip instead of the flat pad of the finger.",
            "Place the finger just behind the fret wire.",
            "Curve the finger so it does not touch nearby strings.",
            "Keep the thumb resting comfortably behind the neck.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Place your index finger on String 1 at Fret 1.",
            "Check that the finger is close to the fret wire.",
            "Lift the finger and repeat the placement five times.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Closer to the fret wire usually requires less pressure.",
            "Keep your fingernail facing roughly toward you.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do keep the fingertip upright and curved.",
            "Don't place the finger directly on top of the metal wire.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "Placing the finger too far back can cause buzzing.",
            "A flat finger may accidentally mute neighboring strings.",
          ],
        },
      ],
      quickCheck: {
        question: "Where should your fingertip press?",
        options: [
          "Directly on top of the fret wire",
          "Just behind the fret wire",
          "On the guitar body",
          "On the tuning peg",
        ],
        correctAnswer: "Just behind the fret wire",
        explanation:
          "Correct. Place the fingertip just behind the fret wire.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-4-pressure",
      title: "Find the Right Pressure",
      subtitle: "Use only enough pressure for a clear note.",
      instruction:
        "Too little pressure creates buzzing. Too much pressure creates tension. Find the smallest amount that produces a clear sound.",
      visual: {
        type: "fretboardDiagram",
        string: 1,
        fret: 1,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "Start with very light pressure and pick the string.",
            "Slowly add pressure until the buzzing disappears.",
            "Stop adding pressure once the note rings clearly.",
            "That is the amount of pressure you need.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Play String 1, Fret 1 with too little pressure.",
            "Add pressure gradually until the note clears.",
            "Release your hand and repeat three times.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Your hand should feel active but not painful.",
            "Good placement reduces the amount of pressure required.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do listen carefully for buzzing.",
            "Don't grip the neck with maximum force.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "Extreme pressure can slow your playing and cause fatigue.",
            "Buzzing is often a placement problem, not only a pressure problem.",
          ],
        },
      ],
      quickCheck: {
        question: "When should you stop adding finger pressure?",
        options: [
          "When your hand hurts",
          "When the note rings clearly",
          "When the string touches the fretboard wood",
          "Never",
        ],
        correctAnswer: "When the note rings clearly",
        explanation:
          "Correct. Use only enough pressure to make the note ring clearly.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-4-first-note",
      title: "Play Your First Fretted Note",
      subtitle: "String 1, Fret 1.",
      instruction:
        "Place your index fingertip just behind Fret 1 on the High E string, then pick the string with a controlled downstroke.",
      visual: {
        type: "fretboardDiagram",
        string: 1,
        fret: 1,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "Find String 1, the High E string.",
            "Place your index finger at Fret 1.",
            "Pick only String 1.",
            "Listen for a clear note that rings.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Play the note four times slowly.",
            "Release pressure between each repetition.",
            "Reset your finger carefully before every note.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Aim your pick carefully at String 1.",
            "Keep the fretting finger close to the fret wire.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do check your placement before picking.",
            "Don't rush repeated notes.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "A muted note may mean another part of your finger is touching the string.",
            "A buzz may mean you need slightly better placement or pressure.",
          ],
        },
      ],
      quickCheck: {
        question: "Which finger should you use for Fret 1?",
        options: ["Index", "Middle", "Ring", "Pinky"],
        correctAnswer: "Index",
        explanation:
          "Correct. Use your index finger for Fret 1 in this exercise.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-4-open-one",
      title: "Open and Fret 1",
      subtitle: "Learn what 0 and 1 mean.",
      instruction:
        "A 0 means play the string open. A 1 means press Fret 1 before playing.",
      visual: {
        type: "fretboardDiagram",
        string: 1,
        fret: 0,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "Exercise: 0 — 1 — 0 — 1.",
            "For 0, lift the fretting finger completely.",
            "For 1, place the index finger behind Fret 1.",
            "Keep every note even and controlled.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Play 0 — 1 — 0 — 1 four times.",
            "Use downstrokes for the first two rounds.",
            "Use alternate picking for the final two rounds.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Keep the index finger close to the string when it lifts.",
            "Small movements make the change easier.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do fully release the string for each 0.",
            "Don't pull the finger far away from the fretboard.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "Leaving the finger touching the string can mute the open note.",
            "Placing the finger late can create a buzz on Fret 1.",
          ],
        },
      ],
      quickCheck: {
        question: "What does 0 mean in this exercise?",
        options: [
          "Do not play",
          "Play the string open",
          "Play Fret 10",
          "Mute the string",
        ],
        correctAnswer: "Play the string open",
        explanation:
          "Correct. A 0 means play the string without pressing a fret.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-4-three-fingers",
      title: "Use the First Three Frets",
      subtitle: "Index, middle, and ring.",
      instruction:
        "Use one finger per fret: index for Fret 1, middle for Fret 2, and ring for Fret 3.",
      visual: {
        type: "fretboardDiagram",
        string: 1,
        fret: 3,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "Fret 1 uses the index finger.",
            "Fret 2 uses the middle finger.",
            "Fret 3 uses the ring finger.",
            "Exercise: 0 — 1 — 2 — 3 — 2 — 1 — 0.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Play the exercise once very slowly.",
            "Repeat it three times without sacrificing clarity.",
            "Keep unused fingers hovering close to their frets.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Prepare the next finger before you need it.",
            "Keep your thumb relaxed behind the neck.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do use the assigned finger for each fret.",
            "Don't slide one finger across all three frets.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "Flying fingers waste motion and make timing harder.",
            "Collapsing finger joints can mute the note.",
          ],
        },
      ],
      quickCheck: {
        question: "Which finger should play Fret 3?",
        options: ["Index", "Middle", "Ring", "Thumb"],
        correctAnswer: "Ring",
        explanation:
          "Correct. Use the ring finger for Fret 3.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-4-change-strings",
      title: "Change Strings",
      subtitle: "Combine fretting with string control.",
      instruction:
        "Play the same simple pattern on Strings 1 and 2 while aiming carefully with your picking hand.",
      visual: {
        type: "fretboardDiagram",
        string: 2,
        fret: 3,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "String 1: 0 — 1 — 3.",
            "String 2: 0 — 1 — 3.",
            "Use index for Fret 1 and ring for Fret 3.",
            "Move your pick only far enough to reach the next string.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Play the String 1 pattern twice.",
            "Play the String 2 pattern twice.",
            "Connect both patterns without stopping.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Look at the next string before moving your pick.",
            "Keep both hands moving slowly together.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do verify the string before every new pattern.",
            "Don't swipe across neighboring strings.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "Correct fretting on the wrong string is still the wrong note.",
            "Slow down if your picking hand loses its target.",
          ],
        },
      ],
      quickCheck: {
        question: "What skills are combined in this exercise?",
        options: [
          "Tuning and chords",
          "Fretting and changing strings",
          "Strumming and singing",
          "Bending and vibrato",
        ],
        correctAnswer: "Fretting and changing strings",
        explanation:
          "Correct. You are coordinating accurate fretting with string changes.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-4-fix-notes",
      title: "Fix a Bad Note",
      subtitle: "Every bad sound has a cause.",
      instruction:
        "When a note buzzes or sounds muted, pause and troubleshoot instead of repeating the same mistake.",
      visual: {
        type: "fretboardDiagram",
        string: 2,
        fret: 1,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "Buzzing: move closer to the fret wire or add a little pressure.",
            "Muted note: curve the finger and avoid touching the string accidentally.",
            "Pain or heavy tension: reduce pressure and relax the hand.",
            "Wrong note: confirm both the string and fret.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Intentionally create a buzzing note with light pressure.",
            "Fix it by adjusting placement and pressure.",
            "Create a clear note three times in a row.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Change one thing at a time while troubleshooting.",
            "Listen first, then look at your hand.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do treat mistakes as useful feedback.",
            "Don't assume you are simply bad at guitar.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "Repeating a bad note without adjusting teaches the wrong movement.",
            "Stopping to correct technique builds better habits.",
          ],
        },
      ],
      quickCheck: {
        question: "What should you try first when a note buzzes?",
        options: [
          "Pick much harder",
          "Move closer to the fret wire",
          "Tune every string",
          "Use a different guitar",
        ],
        correctAnswer: "Move closer to the fret wire",
        explanation:
          "Correct. Better placement near the fret wire often removes buzzing.",
        xpReward: 5,
      },
    },
    {
      id: "lesson-4-checkpoint",
      title: "Practice Checkpoint",
      subtitle: "Eight clean notes.",
      instruction:
        "Play the first four notes on String 1 and String 2 with no buzzing or accidental muting.",
      visual: {
        type: "fretboardDiagram",
        string: 2,
        fret: 3,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "String 1: 0 — 1 — 2 — 3.",
            "String 2: 0 — 1 — 2 — 3.",
            "Use one finger per fret.",
            "Let every note sound clearly before moving on.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Complete the full sequence once slowly.",
            "Rest your hand for ten seconds.",
            "Complete the sequence a second time.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Reset your posture before each attempt.",
            "Clean notes matter more than completing the sequence quickly.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do repeat any unclear note before continuing.",
            "Don't hide buzzing by picking more loudly.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "Rushing the string change may cause a wrong-string hit.",
            "Keep unused fingers close without touching the strings.",
          ],
        },
      ],
      optionalChallenge: {
        id: "clean-note-rookie",
        title: "Clean Note Rookie",
        description:
          "Play 0 — 1 — 2 — 3 on Strings 1 and 2 twice with no buzzing, muted notes, or wrong strings.",
        achievement: "Clean Note Rookie",
        xpReward: 20,
      },
    },
    {
      id: "lesson-4-boss",
      title: "Boss Battle: The Buzz Killer",
      subtitle: "Defeat buzzing with clean technique.",
      instruction:
        "Complete the final sequence using accurate strings, correct frets, relaxed hands, and clear notes.",
      visual: {
        type: "fretboardDiagram",
        string: 3,
        fret: 2,
      },
      tabs: [
        {
          title: "Learn",
          content: [
            "String 1: 0 — 1 — 3 — 1 — 0.",
            "String 2: 0 — 1 — 3 — 1 — 0.",
            "String 3: 0 — 2 — 0.",
            "Finish each note cleanly before moving forward.",
          ],
        },
        {
          title: "Practice",
          content: [
            "Practice each string separately.",
            "Connect Strings 1 and 2.",
            "Add the String 3 ending.",
            "Perform the full sequence without stopping.",
          ],
        },
        {
          title: "Tips",
          content: [
            "Keep your wrist neutral and your thumb relaxed.",
            "Use your ears to confirm every note.",
          ],
        },
        {
          title: "Do & Don't",
          content: [
            "Do correct one unclear note and continue.",
            "Don't squeeze harder when you feel nervous.",
          ],
        },
        {
          title: "Mistakes",
          content: [
            "The goal is control, not speed.",
            "A relaxed accurate attempt is better than a fast tense attempt.",
          ],
        },
      ],
      quickCheck: {
        question:
          "Which combination gives you the best chance of producing a clean fretted note?",
        options: [
          "Maximum pressure directly on the fret wire",
          "Curved fingertip just behind the fret wire with enough pressure",
          "Flat finger far behind the fret wire",
          "Picking as hard as possible",
        ],
        correctAnswer:
          "Curved fingertip just behind the fret wire with enough pressure",
        explanation:
          "Boss defeated. Correct placement, curved fingers, and controlled pressure produce clean notes.",
        xpReward: 15,
      },
      optionalChallenge: {
        id: "buzz-killer-perfect-run",
        title: "Perfect Clean Run",
        description:
          "Perform the complete boss sequence twice without buzzing, muting, pausing, or striking the wrong string.",
        achievement: "Buzz Killer",
        xpReward: 20,
      },
    },
  ],
};

export default lessonFour;