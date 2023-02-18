'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const blogs = () => (
  <section className={`${styles.paddings} bg-primary-black overflow-hidden`}>
    <div className="flex items-center justify-center">
      <div className="flex flex-row px-4 mr-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          BLOGS
        </motion.h1>
      </div>
    </div>
    <motion.div
      variants={staggerContainer}
      initial="show"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto my-40 w-full justify-center gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="lg:max-w-full mt-5 mb-5 gradient-05 sm:p-4 text-center p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient pointer-events-none" />
        <div>
          <div className="text-white font-bold p-4 border rounded-md border-gray-400 w-full">Product Comparison</div>
          <img src="/blog1.jpg" alt="blog1" className="bg-white border rounded-md border-gray-400 p-2 w-full" />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="lg:max-w-full mt-5 mb-5 gradient-05 sm:p-4 text-center p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient pointer-events-none" />
        <div>
          <div className="text-white font-bold p-4 border rounded-md border-gray-400 w-full">Product launch</div>
          <img src="/blog3.jpg" alt="blog3" className="bg-white border rounded-md border-gray-400 p-2 w-full" />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="lg:max-w-full mt-5 mb-5 gradient-05 sm:p-4 text-center p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient pointer-events-none" />
        <div>
          <div className="text-white p-4 font-bold border rounded-md border-gray-400 w-full">Product Manual</div>
          <img src="/blog2.jpg" alt="blog2" className="bg-white border rounded-md border-gray-400 p-2 w-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default blogs;
