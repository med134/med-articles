"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-lexend text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-lexend w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-28">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="DGPC(tech Departmen))"
            companyLink="https://www.9rayti.com/ecole/ecole-nationale-protection-civile-casablanca"
            time="2020-Present"
            address="RABAT View, MAR"
            work="Worked on a team responsible for developing new features for systems fire safety and more features help  the team in productivity"
          />

          <Details
            position="FreeLance"
            company="UpWork"
            companyLink="https://www.upwork.com/o/companies/~011fb74adca86d37a4/"
            time="all time"
            work="Worked for a modern store ecommerce and blogging website and more Digital Products, I have dealt with many foreign clients from all over the world and they were satisfied with the service provided and I am still dealing with them until now. "
          />

          <Details
            position="Intern"
            company="DGPC(tech department)"
            companyLink=""
            time="2019-2020"
            address="Rabat,MAR"
            work="Worked on a team responsible for developing user interface for a system of emergency "
          />

          <Details
            position="Fire Man"
            company="DGPC(Fire Departmen)"
            companyLink=""
            time="2017-2019"
            address="Benguerir,morooco"
            work="Worked with teamwork and collaboration skills, working closely with fellow firefighters and emergency response personnel to execute coordinated rescue and firefighting operations."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;