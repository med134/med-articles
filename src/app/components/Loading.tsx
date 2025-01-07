export default function Loading() {
  return (
    <div
      className={`flex items-center justify-center z-50 w-full h-full dark:bg-dark`}
    >
      <div className="rounded-md ml-10 h-12 w-12 border-4 border-t-4 dark:border-light border-blue-900 animate-spin absolute"></div>
    </div>
  );
}
