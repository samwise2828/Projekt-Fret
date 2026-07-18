"use client";

import Link from "next/link";
import { useState } from "react";

type LessonScene = {
  eyebrow: string;
  title: string;
  body: string;
  button: string;
};

const lessonScenes: LessonScene[] = [
  {
    eyebrow: "CAMPFIRE VALLEY · LESSON 1",
    title: "Your First Notes",
    body: "Welcome to Project Fret. Today you will learn how to hold the guitar, hold a pick, meet the six strings, and play your first note.",
    button: "Begin Lesson",
  },
  {
    eyebrow: "TODAY'S QUEST",
    title: "What You Will Learn",
    body: "Hold the guitar comfortably. Hold a pick correctly. Learn the names of the six strings. Play the low E string.",
    button: "Start Quest",
  },
  {
    eyebrow: "STEP 1 OF 4",
    title: "Hold the Guitar",
    body: "Sit comfortably and rest the guitar against your body. Keep your shoulders relaxed. Let your fretting hand guide the neck without squeezing it.",
    button: "Next Step",
  },
  {
    eyebrow: "STEP 2 OF 4",
    title: "Hold the Pick",
    body: "Place the pick between your thumb and index finger. Leave only a small part of the tip showing. Keep your grip firm, but relaxed.",
    button: "Next Step",
  },
  {
    eyebrow: "STEP 3 OF 4",
    title: "Meet the Strings",
    body: "From the thickest string to the thinnest string, the notes are E, A, D, G, B, E. The thickest string is called the low E string.",
    button: "Next Step",
  },
  {
    eyebrow: "STEP 4 OF 4",
    title: "Play Your First Note",
    body: "Use your pick to gently play the thickest string once. Let the note ring out clearly.",
    button: "I Played It",
  },
  {
    eyebrow: "QUEST COMPLETE",
    title: "Lesson Complete",
    body: "You completed Lesson 1. You now know how to hold the guitar, hold a pick, identify the strings, and play the low E string.",
    button: "Return to Dashboard",
  },
];

export default function LessonOnePage() {
  const [sceneIndex, setSceneIndex] = useState(0);

  const scene = lessonScenes[sceneIndex];
  const isLastScene = sceneIndex === lessonScenes.length - 1;
  const progress = ((sceneIndex + 1) / lessonScenes.length) * 100;

  function handleContinue() {
    if (!isLastScene) {
      setSceneIndex((currentIndex) => currentIndex + 1);
    }
  }

  function handleBack() {
    if (sceneIndex > 0) {
      setSceneIndex((currentIndex) => currentIndex - 1);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "32px",
        color: "#fff8e9",
        backgroundImage:
          "linear-gradient(90deg, rgba(3, 9, 9, 0.92) 0%, rgba(3, 9, 9, 0.72) 45%, rgba(3, 9, 9, 0.38) 100%), url('/images/campfire-valley.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header
        style={{
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <Link
          href="/dashboard"
          style={{
            color: "#f6bd60",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          ← Back to Dashboard
        </Link>

        <div
          style={{
            height: "8px",
            marginTop: "28px",
            overflow: "hidden",
            borderRadius: "999px",
            background: "rgba(255, 255, 255, 0.14)",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              borderRadius: "999px",
              background: "#f59e0b",
              transition: "width 250ms ease",
            }}
          />
        </div>

        <p
          style={{
            marginTop: "10px",
            textAlign: "right",
            fontSize: "14px",
            opacity: 0.7,
          }}
        >
          Scene {sceneIndex + 1} of {lessonScenes.length}
        </p>
      </header>

      <section
        style={{
          width: "100%",
          maxWidth: "1000px",
          flex: 1,
          display: "flex",
          alignItems: "center",
          margin: "0 auto",
          padding: "48px 0",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "680px",
            padding: "48px",
            border: "1px solid rgba(245, 158, 11, 0.25)",
            borderRadius: "24px",
            background: "rgba(5, 14, 14, 0.88)",
            boxShadow: "0 24px 70px rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(8px)",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#f59e0b",
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "0.14em",
            }}
          >
            {scene.eyebrow}
          </p>

          <h1
            style={{
              margin: "16px 0 20px",
              fontSize: "clamp(42px, 7vw, 72px)",
              lineHeight: 1,
            }}
          >
            {scene.title}
          </h1>

          <p
            style={{
              maxWidth: "590px",
              margin: 0,
              fontSize: "20px",
              lineHeight: 1.7,
              opacity: 0.88,
            }}
          >
            {scene.body}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              marginTop: "36px",
            }}
          >
            {sceneIndex > 0 && !isLastScene && (
              <button
                type="button"
                onClick={handleBack}
                style={{
                  padding: "15px 26px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#fff8e9",
                  fontSize: "16px",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Back
              </button>
            )}

            {isLastScene ? (
              <Link
                href="/dashboard"
                style={{
                  display: "inline-block",
                  padding: "15px 28px",
                  borderRadius: "12px",
                  background: "#f59e0b",
                  color: "#071011",
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                {scene.button}
              </Link>
            ) : (
              <button
                type="button"
                onClick={handleContinue}
                style={{
                  padding: "15px 28px",
                  border: "none",
                  borderRadius: "12px",
                  background: "#f59e0b",
                  color: "#071011",
                  fontSize: "16px",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                {scene.button}
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}