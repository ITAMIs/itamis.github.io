"use client";

import { motion } from "framer-motion";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const HomeImg = () => {
  return (
    <motion.div
  className="home-img xl:ml-36 sm:my-5 sm:mx-auto xl:my-0 xl:mx-0 bg-center bg-cover bg-no-repeat rounded-lg shadow-inset-0 shadow-md"
  initial={{
    borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
  }}
  animate={{
    borderRadius: [
      "60% 40% 30% 70%/60% 30% 70% 40%",
      "30% 60% 70% 40%/50% 60% 30% 60%",
      "60% 40% 30% 70%/60% 30% 70% 40%",
    ],
    transition: { duration: 7, repeat: Infinity, delay: 0.5 },
  }}
>
</motion.div>
  );
};

const Hero = () => (
  <section className={`${styles.yPaddings} sm:p-8 xl:flex  sm:items-center sm:justify-center xl:mx-2 sm:my-16 md:p-16 sm:mt-0 sm:mb-0 xl:mt-40 xl:mb-48 `}>
    <motion.div><HomeImg /></motion.div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      transition={{ delay: 0.5 }}
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto `}
    >

      <div class=" xl:flex items-center justify-center mb-20">
        <div class="px-4 md:flex md
        :flex-col-reverse sm:mr-0 mr-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          <div className="xl-:text-5xl sm:text-5xl left-10 custom-font">Hi, I'M</div>Name<div className="sm:text-2xl text-5xl justify-center">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 150,
                  pauseFor: 10000,
                  strings: ["A Copywriter."],
                }}
              />
            </div>
          </motion.h1>
        </div>
        
        
      </div>
    </motion.div>
  </section>
);

export default Hero;
