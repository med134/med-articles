"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  return (
    <div className="w-full dark:text-light">
      {text.split(" ").map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
