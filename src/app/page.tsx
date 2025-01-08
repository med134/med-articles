import { getPosts } from "../utils/actions";
import FirstView from "./components/FirstView";
import HomePage from "./components/HomePage";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <FirstView posts={posts} />
      <HomePage posts={posts} />
    </div>
  );
}
