import { getPosts } from "../utils/actions";
import FirstView from "./components/FirstView";
import HomePage from "./components/HomePage";
import { Suspense } from "react";
import Loading from "./components/Loading";
import TemplateSection from "./components/TemplateSection";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <FirstView posts={posts} />
      <Suspense fallback={<Loading />}>
        <HomePage posts={posts} />
      </Suspense>
      <TemplateSection />
    </div>
  );
}
