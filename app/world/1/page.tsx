import AppBottomNav from "../../Components/navigation/AppBottomNav";
import WorldMap from "../../Components/world/WorldMap";
import styles from "./page.module.css";

export default function WorldOnePage() {
  return (
    <main className={styles.worldOnePage}>
      <WorldMap />
      <AppBottomNav />
    </main>
  );
}