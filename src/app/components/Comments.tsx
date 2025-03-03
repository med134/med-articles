import Image from "next/image";
import { handelLoginGithub, handelLoginGoogle } from "@/src/utils/actions";
import { PostButton } from "./SearchButton";
import { auth } from "@/auth";
import { FcGoogle } from "react-icons/fc";
import { createComment } from "@/src/utils/strapiSever";

const Comments = async ({ postId }: { postId: number }) => {
  const session = await auth();
  return (
    <div
      className={`w-full py-2 bg-white  p-2 dark:bg-dark ${
        session ? "border rounded-lg " : "border-none"
      }`}
    >
      <span className="font-bold text-xl py-6 mb-6 dark:text-light">
        Comments
      </span>
      {session ? (
        <div>
          <div className="flex items-center px-4">
            <Image
              width={200}
              height={200}
              loading="lazy"
              quality={60}
              src={session?.user?.image ?? "/default-profile.png"}
              alt="photo_profile"
              className="w-10 h-10 rounded-[50%] cursor-pointer"
            />
            <span className="text-sm font-semibold text-gray-600 ml-2 dark:text-light">
              {session?.user?.name ?? "Guest"}
            </span>
          </div>
          <form
            className={`dark:bg-dark dark:text-light p-2`}
            action={createComment}
          >
            <input
              name="articleId"
              hidden
              id="articleId"
              type="text"
              value={postId}
              readOnly
            />
            <input
              name="username"
              hidden
              id="username"
              type="text"
              value={session?.user?.name ?? ""}
              readOnly
            />
            <input name="blogId" hidden id="blogId" value={postId} readOnly />
            <input
              name="imageUser"
              hidden
              id="imageUser"
              type="url"
              value={session?.user?.image ?? ""}
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
        </div>
      ) : (
        <div className="flex justify-center items center">
          <form action={handelLoginGoogle} className="">
            <button className="w-full mt-4 text-center px-6 py-2 border flex justify-center items-center gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <FcGoogle className="h-6 w-6 " />
              <span className="dark:text-light">Login with Google</span>
            </button>
          </form>
          <form action={handelLoginGithub} className="ml-2">
            <button className="text-white w-full mt-4  bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
              Sign in with Github
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default Comments;
