"use client";
import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <div className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-mainColor">
        <motion.div
          initial={{ x: "100%", width: "100%" }}
          animate={{ x: "0%", width: "0%" }}
          exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
          transition={{ delay: 0.9, duration: 0.9, ease: "easeInOut" }}
        />
      </div>
      <div className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-light">
        <motion.div
          initial={{ x: "100%", width: "100%" }}
          animate={{ x: "0%", width: "0%" }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
        />
      </div>
      <div className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-dark">
        <motion.div
          initial={{ x: "100%", width: "100%" }}
          animate={{ x: "0%", width: "0%" }}
          transition={{ delay: 0.8, duration: 0.7, ease: "easeInOut" }}
        />
      </div>
    </>
  );
};

export default TransitionEffect;
