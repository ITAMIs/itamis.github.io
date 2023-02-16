"use client";

import { motion, Variants } from "framer-motion";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import styles from "../styles";

const HomeImg = () => (
  <motion.div
    className={`home-img  justify-center bg-center bg-cover bg-no-repeat rounded-lg shadow-inset-0 `}
    style={{
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
  />
);

const Hero = () => (
  <section className={`${styles.innerWidth} ${styles.paddings} mx-auto `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      transition={{ delay: 0.01 }}
      viewport={{ once: false, amount: 0.50 }}
      className={` flex md:flex-row sm:flex-col-reverse justify-center items-center`}
    >
      <motion.h1
        variants={textVariant(1.1)}
        className={`${styles.heroHeading} sm:pr-0 md:pr-20 `}
      >
        <div className="md:text-4xl sm:text-2xl left-10 custom-font">
          Hi, I'M
        </div>
        Sukhpal
        <div className="sm:text-2xl text-5xl">
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
      <div><HomeImg /></div>
    </motion.div>
  </section>
);

export default Hero;
