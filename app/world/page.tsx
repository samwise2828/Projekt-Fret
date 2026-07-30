import AppBottomNav from "../Components/navigation/AppBottomNav";
import AppTopNav from "../Components/navigation/AppTopNav";
import WM from "../Components/world/WM";
import styles from "./page.module.css";

export default function WorldPage() {
  return (
    <div className={styles.page}>
      <AppTopNav />

      <div className={styles.content}>
        <WM />
      </div>

      <AppBottomNav />
    </div>
  );
}