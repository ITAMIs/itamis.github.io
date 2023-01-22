"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold tracking-wide text-white">
          18-year-old
        </span>{" "}
        copywriter with a passion for crafting compelling and persuasive copy
        that helps businesses build better relationships with their customers.
        <br /> <br />
        My portfolio{" "}
        <span className="font-extrabold tracking-wide text-white">
          speaks for itself
        </span>
        , showcasing my{" "}
        <span className="font-extrabold text-white">skills and experience</span>{" "}
        in a variety of copywriting styles and formats.{" "}
        <br /><br />My goal is
        to deliver <span className="font-extrabold tracking-wide text-white">
        high-quality
        </span>, persuasive copy that helps my clients achieve
        their business objectives.<br /><br />I also offer <span className="font-extrabold tracking-wide text-white">
        unlimited revisions
        </span>, but with my
        skills and attention to detail, revisions will be minimal, if not <span className="font-extrabold tracking-wide text-white">
        unnecessary
        </span>. 
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
