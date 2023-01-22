"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const HomeImg = () => {
  return (
    <motion.div
      className="bg-center bg-cover bg-no-repeat rounded-lg shadow-inset-0 shadow-md"
      initial={{
        borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
      }}
      animate={{
        borderRadius: [
          "60% 40% 30% 70%/60% 30% 70% 40%",
          "30% 60% 70% 40%/50% 60% 30% 60%",
          "60% 40% 30% 70%/60% 30% 70% 40%",
        ],
        transition: { duration: 8, loop: Infinity, delay: 1 },
      }}
      style={{
        backgroundImage: "url('/pfp4low.png')",
        width: "500px",
        height: "500px",
        order: "1",
        justifySelf: "center",
      }}
    ></motion.div>
  );
};

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <div class="flex items-center justify-center mb-20">
        <div class="flex flex-col px-4 mr-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            NAME
          </motion.h1>
        </div>
        <motion.h1><HomeImg className="relative" /></motion.h1>
        
      </div>
    </motion.div>
  </section>
);

export default Hero;
