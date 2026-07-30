import Navbar from "./Components/navigation/AppTopNav";
import CampfireScene from "./Components/landing/CampfireScene";

export default function Home() {
  return (
    <main className="campfire-page">
      <Navbar />
      <CampfireScene />
    </main>
  );
}