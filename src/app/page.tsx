import FirstView from "./components/FirstView";
import HomePage from "./components/HomePage";
import Loading from "./components/Loading";
import TemplateSection from "./components/TemplateSection";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <FirstView />
      <HomePage />
      <Suspense fallback={<Loading />}>
        <TemplateSection />
      </Suspense>
    </div>
  );
}
