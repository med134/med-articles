"use client";
import { motion, Variants } from "framer-motion";
import React, { ReactNode } from "react";

interface Props {
  delay: number;
  children: ReactNode;
}
export default function AnimatedCard({ children, delay }: Props) {
  const cardVariants: Variants = {
    offscreen: {
      y: 600,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.6,
        delay: delay,
      },
    },
  };
  return (
    <motion.div
      className=""
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1 }}
    >
      <motion.div className="card" variants={cardVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
}
