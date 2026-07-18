import { worldOne } from "../../data/worlds/WorldOne";
import WorldNode from "./WorldNode";
import styles from "./WorldMap.module.css";

export default function WorldMap() {
  const totalLessons = worldOne.lessons.length;

  const completionPercentage = Math.round(
    (worldOne.completedLessons / totalLessons) * 100
  );

  return (
    <main className={styles.worldMap}>
      <div className={styles.backgroundGlow} />

      <section className={styles.worldIntroduction}>
        <span className={styles.worldLabel}>{worldOne.label}</span>

        <h1 className={styles.worldTitle}>{worldOne.title}</h1>

        <div className={styles.divider}>
          <span />
          <i />
          <span />
        </div>

        <p className={styles.worldDescription}>
          {worldOne.description}
        </p>

        <div className={styles.progressCard}>
          <div className={styles.progressHeading}>
            <span className={styles.fireIcon}>🔥</span>

            <div>
              <strong>
                {worldOne.completedLessons} / {totalLessons}
              </strong>

              <span>Lessons Completed</span>
            </div>
          </div>

          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{
                width: `${completionPercentage}%`,
              }}
            />
          </div>
        </div>
      </section>

      <section className={styles.pathArea}>
        <div className={styles.moon} />

        <div className={styles.campfire}>
          <span className={styles.flame}>🔥</span>
        </div>

        <svg
          className={styles.pathLine}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="
              M68 10
              C77 15 82 20 78 25
              C74 31 78 36 73 42
              C69 49 64 53 58 57
              C52 63 48 70 43 74
              C37 69 34 63 29 58
              C30 50 35 43 38 36
            "
          />
        </svg>

        {worldOne.lessons.map((lesson) => (
          <WorldNode
            key={lesson.id}
            lesson={lesson}
          />
        ))}
      </section>
    </main>
  );
}