import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const lsoPages = () => (
  <section className={`${styles.paddings} bg-primary-black overflow-hidden`}>
    <div className="flex items-center justify-center mb-20">
      <div className="flex flex-col px-4 mr-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Pages
        </motion.h1>
      </div>
    </div>
    <motion.div
      variants={staggerContainer}
      initial="show"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto my-40 w-full justify-center flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="lg:max-w-full flex flex-col mt-5 mb-5 gradient-05 sm:p-4 text-center p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient pointer-events-none" />
        <div>
          <div className="text-white p-4 border rounded-md border-gray-400 w-full font-bold">
            Landing Page
          </div>
          <img
            src="/landingpage.jpg"
            alt="landing_example"
            className="bg-white border rounded-md border-gray-400 p-2 w-full"
          />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="lg:max-w-full flex flex-col mt-5 mb-5 gradient-05 sm:p-4 text-center p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient pointer-events-none" />
        <div>
          <div className="text-white p-4 border rounded-md border-gray-400 w-full font-bold">
            Sales Page
          </div>
          <img
            src="/salespage.jpg"
            alt="sales_example"
            className="bg-white border rounded-md border-gray-400 p-2 w-full"
          />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="lg:max-w-full flex flex-col mt-5 mb-5 gradient-05 sm:p-4 text-center p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient pointer-events-none" />
        <div>
          <div className="text-white p-4 border rounded-md border-gray-400 w-full font-bold">
            Opt-in Page
          </div>
          <img
            src="/opt-inpage.jpg"
            alt="opt-in_example"
            className="bg-white border rounded-md border-gray-400 p-2 w-full"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default lsoPages;
