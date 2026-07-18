"use client";

import { useEffect, useState } from "react";
import type { LessonTab } from "./LessonPlayer";
import styles from "./LessonTabs.module.css";

type LessonTabsProps = {
  tabs: LessonTab[];
};

export default function LessonTabs({ tabs }: LessonTabsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    setActiveTabIndex(0);
  }, [tabs]);

  if (!tabs.length) {
    return null;
  }

  const activeTab = tabs[activeTabIndex] ?? tabs[0];

  return (
    <section className={styles.tabs}>
      <div
        className={styles.tabList}
        role="tablist"
        aria-label="Step learning sections"
      >
        {tabs.map((tab, index) => {
          const isActive = index === activeTabIndex;
          const tabId = `lesson-tab-${index}`;
          const panelId = `lesson-tab-panel-${index}`;

          return (
            <button
              key={`${tab.title}-${index}`}
              id={tabId}
              type="button"
              role="tab"
              className={`${styles.tabButton} ${
                isActive ? styles.active : ""
              }`}
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab.title}
            </button>
          );
        })}
      </div>

      <div
        id={`lesson-tab-panel-${activeTabIndex}`}
        className={styles.panel}
        role="tabpanel"
        aria-labelledby={`lesson-tab-${activeTabIndex}`}
      >
        <p className={styles.panelTitle}>
          {activeTab.title}
        </p>

        {Array.isArray(activeTab.content) ? (
          <ul className={styles.contentList}>
            {activeTab.content.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className={styles.contentItem}
              >
                <span
                  className={styles.contentMarker}
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.contentText}>
            {activeTab.content}
          </p>
        )}
      </div>
    </section>
  );
}