import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

const emailsxmp = () => (
  <section className={`${styles.paddings} bg-primary-black overflow-hidden`}>
    <div className="flex items-center justify-center mb-20">
      <div className="flex flex-col px-4 mr-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Emails
        </motion.h1>
      </div>
    </div>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto my-40 w-full justify-center flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="lg:max-w-full flex flex-col gradient-05 sm:p-4 text-center p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient pointer-events-none" />
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="text-white p-4 border font-bold rounded-md border-gray-400 w-full">Product Launch</div>
            <img
              src="/product_launch.png"
              alt="product_launch"
              className="bg-white border rounded-md border-gray-400 p-2 w-full"
            />
          </div>
          <div className="col-span-1">
            <div className="text-white p-4 font-bold border rounded-md border-gray-400 w-full">Newsletter</div>
            <img
              src="/newsletter.png"
              alt="newsletter"
              className="bg-white border rounded-md border-gray-400 p-2 w-full"
            />
          </div>
          <div className="col-span-1">
            <div className="text-white p-4 font-bold border rounded-md border-gray-400 w-full">Opt-in</div>
            <img
              src="/opt-in_email.png"
              alt="opt-in"
              className="bg-white border rounded-md border-gray-400 p-2 w-full"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default emailsxmp;
