'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({
  id,
  imgUrl,
  title,
  text,
  index,
  img,
  site,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.4, 1)}
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
      <div className="flex-col absolute h-full w-full">
        <motion.div whileHover={{ scale: 1.1 }} className="sm:h-2/3 sb:h-2/3 md:h-full inset-0 flex items-center justify-center">
          <Link href={site}>
            <div className="flexy">
              <div
                className={`${styles.flexCenter} md:w-[160px] md:h-[160px] sm:w-[100px] sm:h-[100px] p-1 md:rounded-[48px] sm:rounded-[24px] glassmorphism`}
              >
                <img
                  src={img}
                  alt="images"
                  className="md:h-[96px] md:w-[96px] sm:h-[64px] sm:w-[64px]"
                />
              </div>
              <h2 className="pl-2 text-center md:flex-row sm:flex-col font-semibold sm:text-[32px] text-[24px] text-white">
                {title}
              </h2>
            </div>
          </Link>
        </motion.div>

        <div className="absolute bottom-0 justify-end md:p-8 sm:p-2 left-0 w-full bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <p className="font-normal relative m-1 tracking-wide md:text-[16px] sm:text-[9.5px] sb:text-[12px] leading-[20.16px] text-white">
            {text}
          </p>
        </div>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
