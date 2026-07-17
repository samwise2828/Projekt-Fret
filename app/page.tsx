import Navbar from "./Components/layout/Navbar";
import CampfireScene from "./Components/landing/CampfireScene";

export default function Home() {
  return (
    <main className="campfire-page">
      <Navbar />
      <CampfireScene />
    </main>
  );
}