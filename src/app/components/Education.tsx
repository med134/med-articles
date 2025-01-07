"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

interface DetailsProps {
  type: string;
  place: string;
  info: string;
  link: string;
  verify?: string;
  time: string;
}
const Details = ({ type, time, place, info, link, verify }: DetailsProps) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 50 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-lexend text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-lexend w-full md:text-sm">{info}</p>

        <a
          href={link}
          target="_blank"
          className="underline text-xs text-blue-700"
        >
          {verify}
        </a>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef<HTMLDivElement | null>(null); // Corrected type here
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ["end end", "start start"],
  });
  return (
    <div className="my-28">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
          md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl"
        />
        <ul className="w-full flex flex-col items-start justify-between xs:ml-2">
          <Details
            type="Bachelor of Science"
            time="2015/2014"
            place="Rhamna technical high school (RH)"
            info="Relevant courses included Mathematics, Physics and Technology..."
            link=""
          />

          <Details
            type="diploma in software developments"
            time="2019-2022"
            place="The Office of Vocational Training and Labor Promotion (OFPPT)"
            link=""
            info="Relevant courses included Data structure, Algorithms,web development, mobile developments,End of study project with the participation of teachers..."
          />

          <Details
            type="Online Coursework"
            time="2021-2022"
            place="Coursera,Google"
            info="Course Certificate for Foundations of User Experience (UX) Design"
            verify="Click to verify:"
            link="https://www.coursera.org/account/accomplishments/verify/5P4Q9B4WFV46"
          />

          <Details
            type="Online Coursework"
            time="2022-2023"
            place="Coursera,Meta"
            info="Course Certificate for Front-end Developer by Meta"
            verify="Click to verify:"
            link="https://www.coursera.org/account/accomplishments/professional-cert/BX8U2GXRYJUM"
          />
        </ul>
        <motion.div style={{ scaleY: scrollYProgress }} />
      </div>
    </div>
  );
};

export default Education;
