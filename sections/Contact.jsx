"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import emailjs from "emailjs-com";
import React, { useState } from "react";

function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleClick = () => {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 3000);
    const name = document.querySelector("input[placeholder='Name']").value;
    const email = document.querySelector("input[placeholder='Email']").value;
    const project = document.querySelector(
      "textarea[placeholder='Tell us about your project']"
    ).value;

    if (!name || !email || !project) {
      alert("All fields are required");
      return;
    }
    emailjs
      .send(
        "service_5rcfggd",
        "template_t3cb5co",
        {
          to_name: "Recipient",
          from_name: "Sender",
          name: name,
          email: email,
          project: project,
        },
        "0zh5xEKNIDLyYU6Vs"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          document.querySelector("input[placeholder='Name']").value = "";
          document.querySelector("input[placeholder='Email']").value = "";
          document.querySelector(
            "textarea[placeholder='Tell us about your project']"
          ).value = "";
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto  my-40 w-1/3 justify-center flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className=" lg:max-w-full flex  flex-col gradient-05 sm:p-8 text-center p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient pointer-events-none" />
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
              Let's Collaborate!
            </h4>
            <p className="mt-5 font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white"></p>
          </div>

          <div className="grid grid-cols-2 gap-4 ">
            <div className="col-span-1">
              <label className="text-white block text-sm mt-5 font-medium mb-2"></label>
              <input
                type="text"
                className="bg-white border rounded-md border-gray-400 p-2 w-full"
                placeholder="Name"
              />
            </div>
            <div className="col-span-1">
              <label className="text-white mt-5 block text-sm font-medium mb-2"></label>
              <input
                type="email"
                className="bg-white border rounded-md border-gray-400 p-2 w-full"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-">
            <div className="col-span-2">
              <label className="text-white block text-sm font-medium mb-2 mt-6"></label>
              <textarea
                className="bg-white border rounded-md border-gray-400 p-2 w-full"
                placeholder="Tell us about your project"
                rows="4"
              ></textarea>
            </div>
          </div>
          <button
            className="border-[1px] mt-5 flex flex-row border-[#6A6A6A] justify-center text-white p-2 rounded-lg hover:bg-[#4C326C]"
            onClick={handleClick}
          >
            Send Email
            {isSent ? (
              <img
                src="sent_white.gif"
                alt="sentGIF"
                className="ml-3"
                style={{ width: "25px", height: "25px" }}
              />
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 2 20 20"
                  fill="currentColor"
                  className="-rotate-45 w-5 h-5 inline-block ml-3"
                >
                  <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                </svg>
              </>
            )}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Contact;
