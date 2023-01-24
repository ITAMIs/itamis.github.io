import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import '../styles/globals.css';
function email_page() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="email_page min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-500 to-teal-800">
      <motion.div
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="card p-5 rounded-lg shadow-lg"
      >
        <motion.h2 layout="position" className="text-xl font-medium">Framer Motion 🚀</motion.h2>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="expand p-5"
            >
              <p className="text-base leading-normal">
                Proident do culpa velit Lorem commodo est dolore minim nulla.
                Eiusmod dolor ullamco sunt est. Quis eu amet qui proident ex
                aliquip officia officia consectetur commodo. Lorem aliqua veniam
                sit anim elit fugiat.
              </p>
              <p className="text-base leading-normal">Voluptate reprehenderit aliquip velit eiusmod.</p>
              <button className="bg-teal-500 text-white p-2 rounded-lg hover:bg-teal-600">Read More.</button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default email_page;