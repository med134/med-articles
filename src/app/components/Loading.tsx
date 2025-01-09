export default function Loading() {
  return (
    <div
      className={`flex items-center relative bg-slate-400 justify-center z-99 opacity-85 w-full h-full dark:bg-dark`}
    >
      <div className="rounded-md ml-10 h-12 w-12 border-4 border-t-4 dark:border-light border-blue-900 animate-spin absolute"></div>
    </div>
  );
}

export const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <svg
      className="animate-spin h-5 w-5 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      ></path>
    </svg>
  </div>
);

