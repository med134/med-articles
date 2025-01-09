"use client";
import React from "react";
import { motion } from "framer-motion";

export const TitleAnimated = ({ title }: { title: string }) => {
  return (
    <>
      {title.split(" ").map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="dark:text-light"
          transition={{
            duration: 1,
            delay: i / 8,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </>
  );
};
