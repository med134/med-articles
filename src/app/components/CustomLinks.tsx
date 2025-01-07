import Link from "next/link";
export const CustomMobileLink = ({
  href,
  title,
  className = "",
}: {
  href: string;
  title: string;
  className: string;
}) => {
  return (
    <Link
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}
      <span
        className={`
                h-[1px] inline-block  bg-light
                absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300  
                dark:bg-dark`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

export const CustomLink = ({
  href,
  title,
  className = "",
}: {
  href: string;
  title: string;
  className: string;
}) => {
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
        h-[1px] inline-block
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 bg-dark
        dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
