import type { LessonData } from "@/app/Components/lesson/LessonPlayer";

export const lessonOne: LessonData = {
  id: "lesson-1",

  lessonNumber: 1,

  title: "Your First Notes",

  description:
    "Learn how to hold the guitar, identify the strings, press the frets correctly, and play your first clean notes.",

  estimatedMinutes: 15,

  xpReward: 100,

  difficulty: "Beginner",

  steps: [
    {
      id: "get-comfortable",

      title: "Get Comfortable",

      subtitle:
        "Start with a relaxed position that gives both hands room to move.",

      instruction:
        "Sit toward the front of your chair, rest the guitar against your body, and keep the neck angled slightly upward.",

      tabs: [
        {
          title: "Learn",

          content:
            "A comfortable playing position makes every future skill easier. Keep your back upright, your shoulders relaxed, and the guitar close enough that you do not have to reach for it.",
        },

        {
          title: "Practice",

          content: [
            "Sit toward the front half of your chair.",
            "Rest the guitar securely against your body.",
            "Angle the guitar neck slightly upward.",
            "Relax both shoulders.",
            "Hold this position for 30 seconds.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Use a chair without armrests when possible.",
            "Keep both feet planted firmly on the floor.",
            "Bring the guitar toward your body instead of leaning toward it.",
            "Let your picking arm rest naturally over the guitar.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do sit upright while remaining relaxed.",
            "Do keep the guitar close to your body.",
            "Do keep the neck slightly raised.",
            "Don’t hunch your back to see the strings.",
            "Don’t raise or tense your shoulders.",
            "Don’t squeeze the guitar against your body.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "The guitar slides away because it is resting too far forward.",
            "The neck points toward the floor instead of slightly upward.",
            "The shoulders become tense while holding the guitar.",
            "The player leans over the guitar to watch both hands.",
          ],
        },
      ],
    },

    {
      id: "learn-the-strings",

      title: "Meet the Six Strings",

      subtitle:
        "Learn how the guitar strings are numbered before playing your first note.",

      instruction:
        "Look at the guitar strings from the thinnest string to the thickest string and identify strings one through six.",

      tabs: [
        {
          title: "Learn",

          content:
            "Guitar strings are numbered from the thinnest string to the thickest string. The thin string closest to the floor is string 1. The thick string closest to you is string 6.",
        },

        {
          title: "Practice",

          content: [
            "Point to the thinnest string and say, “String 1.”",
            "Move upward and identify strings 2, 3, 4, 5, and 6.",
            "Point to string 6, then return to string 1.",
            "Repeat until you can identify every string without counting slowly.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Remember that string numbers begin with the thinnest string.",
            "Say each number aloud while pointing to the string.",
            "Practice moving both upward and downward through the strings.",
            "Do not worry about memorizing the string names yet.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do begin counting from the thinnest string.",
            "Do touch each string gently while naming it.",
            "Do practice identifying strings in a random order.",
            "Don’t count from the thickest string.",
            "Don’t pull or bend the strings while pointing.",
            "Don’t rush before the numbering feels natural.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Starting with the thickest string as string 1.",
            "Confusing string numbers with fret numbers.",
            "Only memorizing the order in one direction.",
            "Pressing the strings down while trying to identify them.",
          ],
        },
      ],
    },

    {
      id: "understand-the-frets",

      title: "Understand the Frets",

      subtitle:
        "Learn where your fingers should go when a lesson gives you a fret number.",

      instruction:
        "Find the first three metal fret wires and practice placing your finger in the spaces directly behind them.",

      tabs: [
        {
          title: "Learn",

          content:
            "The metal lines across the neck are called fret wires. When you are told to play a fret, place your finger in the space just behind the matching fret wire—not directly on top of the metal.",
        },

        {
          title: "Practice",

          content: [
            "Find the first fret wire near the headstock.",
            "Place your first finger in the space just behind it.",
            "Move your finger to the second fret.",
            "Move your finger to the third fret.",
            "Repeat the movement slowly without pressing hard.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Place your finger close to the fret wire on the side toward the guitar body.",
            "Use the fingertip rather than the flat part of your finger.",
            "Keep your finger curved.",
            "Use light pressure while practicing the locations.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do place your finger just behind the fret wire.",
            "Do use the tip of your finger.",
            "Do keep the finger curved.",
            "Don’t place your finger directly on the metal fret.",
            "Don’t place your finger in the middle of the fret space when avoidable.",
            "Don’t flatten your finger across nearby strings.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Pressing directly on top of the fret wire.",
            "Placing the finger too far away from the fret.",
            "Using the soft, flat part of the finger.",
            "Letting the finger touch neighboring strings.",
          ],
        },
      ],
    },

    {
      id: "fret-your-first-note",

      title: "Fret Your First Note",

      subtitle:
        "Use your first finger to prepare a note on the thinnest string.",

      instruction:
        "Place your first finger on string 1 at the first fret, just behind the fret wire, and press with your fingertip.",

      tabs: [
        {
          title: "Learn",

          content:
            "A fretted note is created when your finger shortens the vibrating part of the string. Clean finger placement helps the note ring without buzzing or sounding muted.",
        },

        {
          title: "Practice",

          content: [
            "Find string 1, the thinnest string.",
            "Place your first finger just behind the first fret.",
            "Curve your finger so it does not touch string 2.",
            "Press the string toward the fretboard.",
            "Hold the position while keeping your wrist relaxed.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Keep your thumb relaxed behind the guitar neck.",
            "Press only as hard as necessary.",
            "Keep the first knuckle curved.",
            "Move closer to the fret wire if the note later buzzes.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do use the tip of your first finger.",
            "Do keep your wrist and thumb relaxed.",
            "Do press close to the fret wire.",
            "Don’t squeeze the neck with your whole hand.",
            "Don’t allow your finger to touch string 2.",
            "Don’t lock or sharply bend your wrist.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Pressing much harder than necessary.",
            "Allowing the fingertip to collapse and touch another string.",
            "Holding the neck tightly with the thumb.",
            "Placing the finger too far behind the fret wire.",
          ],
        },
      ],
    },

    {
      id: "pick-the-note",

      title: "Play the Note",

      subtitle:
        "Combine your fretting hand and picking hand for the first time.",

      instruction:
        "Keep your first finger on string 1 at the first fret, then gently pick string 1 once and listen carefully to the sound.",

      tabs: [
        {
          title: "Learn",

          content:
            "Your fretting hand prepares the note while your picking hand makes the string vibrate. A clean note should ring clearly without buzzing, clicking, or immediately stopping.",
        },

        {
          title: "Practice",

          content: [
            "Place your first finger on string 1 at the first fret.",
            "Hold the pick between your thumb and index finger.",
            "Pick only string 1 with a small downward motion.",
            "Let the note ring before playing it again.",
            "Repeat until you hear three clear notes.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Use a small picking motion.",
            "Keep only a small amount of the pick exposed.",
            "Let the pick pass through the string instead of stopping against it.",
            "Listen to each note before repeating.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do pick the string gently.",
            "Do allow the note to ring.",
            "Do check your finger position after a buzzing note.",
            "Don’t strike several strings at once.",
            "Don’t use your entire arm to move the pick.",
            "Don’t immediately repeat the note without listening.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Picking string 2 instead of string 1.",
            "Holding too much of the pick outside the fingers.",
            "Using a large arm movement to pick.",
            "Releasing the fretting finger immediately after picking.",
          ],
        },
      ],
    },

    {
      id: "play-three-notes",

      title: "Play Three Different Notes",

      subtitle:
        "Move between the first three frets while keeping every note clear.",

      instruction:
        "Play string 1 at the first, second, and third frets using fingers one, two, and three.",

      tabs: [
        {
          title: "Learn",

          content:
            "Your first finger normally handles the first fret, your second finger handles the second fret, and your third finger handles the third fret. This one-finger-per-fret approach prepares your hand for melodies and riffs.",
        },

        {
          title: "Practice",

          content: [
            "Play string 1 at the first fret with finger 1.",
            "Play string 1 at the second fret with finger 2.",
            "Play string 1 at the third fret with finger 3.",
            "Return to the second fret, then the first fret.",
            "Repeat the pattern slowly three times.",
          ],
        },

        {
          title: "Tips",

          content: [
            "Keep unused fingers close to the strings.",
            "Move only the finger needed for the next note.",
            "Prioritize clear notes instead of speed.",
            "Pause and reset your hand whenever tension builds.",
          ],
        },

        {
          title: "Do & Don’t",

          content: [
            "Do match each finger to its fret.",
            "Do keep your fingers curved.",
            "Do play slowly and evenly.",
            "Don’t use only one finger for every note.",
            "Don’t let your fingers fly far away from the fretboard.",
            "Don’t speed up until every note sounds clear.",
          ],
        },

        {
          title: "Mistakes",

          content: [
            "Using the first finger for all three frets.",
            "Lifting every finger far away after each note.",
            "Rushing through the pattern.",
            "Ignoring buzzing or muted notes.",
          ],
        },
      ],
    },
  ],
};