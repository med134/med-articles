import FirstView from "./components/FirstView";
import HomePage from "./components/HomePage";
import TemplateSection from "./components/TemplateSection";

export default async function Home() {
  return (
    <div>
      <FirstView />
      <HomePage />
      <TemplateSection />
    </div>
  );
}
