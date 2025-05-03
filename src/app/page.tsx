"use client";

import { motion , Variants} from "motion/react";
export default function Home() {
  type MotionVariants = {
    hidden: Variants;
    visible: Variants;
  };
  const pVariants:Variants= {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
      transition: {
        staggerChildren: 0.05
     },
  }
}
  const spanVariants:Variants= {
    hidden: { opacity: 0 },
    visible: { opacity: 1,
  }
}
const randomText = "Welcome to my website".split("");
  return (
      <main>
        <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="textStroked text-[100px]"
        >Home</motion.h1>

        <motion.p className="p" variants={pVariants} initial="hidden" animate="visible">
          {
            randomText.map((text, index) => (
              <motion.span key={index} variants={spanVariants}>{text}</motion.span>
            ))
          }
          </motion.p>   
      </main>
  );
}
