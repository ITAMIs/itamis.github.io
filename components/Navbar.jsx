"use client";

import { useRef, useState, useEffect } from "react";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linksVariants = {
    open: {
      x: 0,
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    },
    closed: {
      x: "-130%",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative flex items-center justify-between`}
    >
      <div className={`${styles.innerWidth} mx-auto flex items-center gap-8`}>
        {isMobile ? (
          <img
            src="/menu.svg"
            alt="menu"
            className={`w-24px h-24px object-contain rotate-0 cursor-pointer sm:text-center sm:w-48 sm:h-48 sm:absolute sm:top-0 sm:left-0 sm:right-0 ${
              menuOpen ? "hidden" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        ) : (
          <div className=" top-0 left-0 w-full px-8 flex justify-end items-center">
            <ul className="flex justify-center items-center">
              <li className="ml-6">
                <a
                  href="/email_page"
                  className="px-4 py-2 text-white rounded-md hover:bg-white hover:text-black active:bg-white active:text-black transition duration-200 ease-in-out"
                >
                  Home
                </a>
              </li>
              <li className="ml-6">
                <a
                  href="#"
                  className="px-4 py-2 text-white rounded-md hover:bg-white hover:text-black transition duration-200 ease-in-out"
                >
                  About
                </a>
              </li>
              <li className="ml-6">
                <a
                  href="#"
                  className="px-4 py-2 text-white rounded-md hover:bg-white hover:text-black transition duration-200 ease-in-out"
                >
                  Work
                </a>
              </li>
              <li className="ml-6">
                <a
                  href="#"
                  className="px-4 py-2 text-white rounded-md hover:bg-white hover:text-black transition duration-200 ease-in-out"
                >
                  Contact
                </a>
              </li>
              <li className="ml-6">
                <Link href="/email_page" className="px-4 py-2 text-white rounded-md hover:bg-white hover:text-black active:bg-white active:text-black transition duration-200 ease-in-out">
                  Email_page
                </Link>
              </li>
            </ul>
          </div>
        )}

        <AnimatePresence>
          {menuOpen && isMobile && (
            <motion.nav
              className={` z-50 bg-white rounded-md py-2 px-3 fixed top-8 left-0  flex items-center justify-center`}
              initial="closed"
              animate="open"
              exit="closed"
              variants={linksVariants}
            >
              <div className="relative">
                <img
                  src="/icons8-close.svg"
                  alt="close"
                  className="absolute top-0 right-0  w-[20px] h-[20px] cursor-pointer sm:w-8 sm:h-8"
                  onClick={() => setMenuOpen(false)}
                />
                <ul className="flex flex-col text-center">
                  <li className="my-4">
                    <a href="#" className="text-black">
                      Home
                    </a>
                  </li>
                  <li className="my-4">
                    <a href="#" className="text-black">
                      About
                    </a>
                  </li>
                  <li className="my-4">
                    <a href="#" className="text-black">
                      Work
                    </a>
                  </li>
                  <li className="my-4">
                    <a href="#" className="text-black">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
