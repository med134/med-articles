import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import UserComments from "../UserComments";
import { createComment, getComments } from "@/src/utils/action";
import { PostButton } from "../SearchButton";
interface Props {
  postId: string;
  user: {
    name: string;
    email: string;
    image: string;
  };
}
const Comments = async ({ postId, user }: Props) => {
  const comments = await getComments(postId);
  return (
    <div
      className={`w-full py-2 bg-white  p-2 dark:bg-dark ${
        user ? "border rounded-lg " : "border-none"
      }`}
    >
      <span className="font-bold text-xl py-6 mb-6 dark:text-light">
        Comments
      </span>
      <div>
        {user ? (
          <>
            <div className="flex items-center px-4">
              <Image
                width={40}
                height={40}
                loading="lazy"
                quality={40}
                src={user.image}
                alt="photo_profile"
                className="w-10 h-10 rounded-[50%] cursor-pointer"
              />
              <span className="text-sm font-semibold text-gray-600 ml-2 dark:text-light">
                {user.name}
              </span>
            </div>
            <form
              className={`${styles.write} dark:bg-dark dark:text-light p-2`}
              action={createComment}
            >
              <input
                name="username"
                hidden
                id="username"
                type="text"
                value={user.name}
                readOnly
              />
              <input name="blogId" hidden id="blogId" value={postId} readOnly />
              <input
                name="imageUser"
                hidden
                id="imageUser"
                type="url"
                value={user.image}
                readOnly
              />
              <textarea
                placeholder="write a comment..."
                required
                cols={6}
                className="w-full rounded-lg p-4 dark:bg-dark dark:border dark:border-light bg-gray-100 border-2 border-solid border-black/10 font-mono font-medium text-sm outline-mainColor"
                name="comment"
                id="comment"
              />
              <PostButton />
            </form>
          </>
        ) : (
          <Link
            href="/login"
            className="w-full flex justify-center py-2 text-center pt-1 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-mainColor hover:bg-cyan-700"
          >
            Login to write a comment
          </Link>
        )}
      </div>
      <UserComments data={comments} />
    </div>
  );
};
export default Comments;
