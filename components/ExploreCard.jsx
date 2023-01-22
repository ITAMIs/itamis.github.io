'use client';

import { motion } from 'framer-motion';
import { CursorArrowRaysIcon } from '@heroicons/react/24/solid'
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, text, index, img, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.2, 0.4)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[60px] text-[50px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
           <img src={img} alt="images" className='h-8 w-8 text-white'/>
        </div>
        <h2 className=" font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        <p className="font-normal tracking-wide mt-[24px] text-[16px] leading-[20.16px] text-white ">
          {text}
        </p>
        
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
