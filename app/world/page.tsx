import AppBottomNav from "../Components/navigation/AppBottomNav";
import AppTopNav from "../Components/navigation/AppTopNav";
import WorldMap from "../Components/world/WorldMap";
import styles from "./page.module.css";

export default function WorldPage() {
  return (
    <div className={styles.page}>
      <AppTopNav />

      <div className={styles.content}>
        <WorldMap />
      </div>

      <AppBottomNav />
    </div>
  );
}