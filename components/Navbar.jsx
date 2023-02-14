"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import styles from "../styles";
import { navVariants } from "../utils/motion";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 680);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 680);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickOutside = useCallback(
    (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    },
    [setMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

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
      ref={wrapperRef}
      whileInView="show"
      className={`${styles.xPaddings} py-8  relative flex items-center justify-between`}
    >
      <div className={`${styles.innerWidth} mx-auto flex items-center gap-8`}>
        {isMobile ? (
          <img
            src="/menu.svg"
            alt="menu"
            className={`w-24px h-24px object-contain top-10 left-10 rotate-0 cursor-pointer sm:text-center sm:w-5 sm:h-5 sm:absolute  ${
              menuOpen ? "hidden" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        ) : (
          <div className=" top-0 left-0 w-full px-8 flex justify-end items-center">
            <ul className="flex justify-center items-center">
              <li className="ml-6">
                <Link
                  href="/"
                  className="px-4 py-2 text-white rounded-md hover:bg-white hover:text-black active:bg-white active:text-black transition duration-200 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li className="ml-6">
                <Link
                  href="#about"
                  className="px-4 py-2 text-white rounded-md hover:bg-white hover:text-black  transition duration-200 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li className="ml-6">
                <Link
                  href="#explore"
                  className="px-4 py-2 text-white rounded-md hover:bg-white hover:text-black transition duration-200 ease-in-out"
                >
                  Work
                </Link>
              </li>
              <li className="ml-6">
                <Link
                  href="#contact"
                  className="px-4 py-2 text-white rounded-md hover:bg-white hover:text-black transition duration-200 ease-in-out"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}

        <AnimatePresence>
          {menuOpen && isMobile && (
            <motion.nav
              className={` z-50 bg-white  rounded-md py-2 px-3 fixed top-8 left-0  flex items-center justify-center`}
              initial="closed"
              animate="open"
              exit={{
                x: "-130%",
                transition: {
                  delay: 0.1,
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                },
              }}
              variants={linksVariants}
            >
              <div className="relative w-36">
                <img
                  src="/icons8-close.svg"
                  alt="close"
                  className="absolute top-0 right-0  w-[20px] h-[20px]  ml-3 mb-2 cursor-pointer sm:w-8 sm:h-8"
                  onClick={() => setMenuOpen(false)}
                />
                <ul className="flex flex-col text-center">
                  <li className="my-4">
                    <Link href="/" className="text-black" onClick={() => setMenuOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link href="#about" className="text-black" onClick={() => setMenuOpen(false)}>
                      About
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link href="#explore" className="text-black" onClick={() => setMenuOpen(false)}>
                      Work
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link href="#contact" className="text-black" onClick={() => setMenuOpen(false)}>
                      Contact
                    </Link>
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
