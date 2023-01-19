import { motion } from "framer-motion";

const HamburgerButton = ({ onClick }) => (
  <button onClick={onClick} className="w-[24px] h-[24px] object-contain rotate-0 cursor-pointer">
    <motion.div
      className="w-[8px] h-[2px] rounded-full bg-white mb-2"
      animate={{ rotate: menuOpen ? 45 : 0 }}
    />
    <motion.div
      className="w-[8px] h-[2px] rounded-full bg-white mb-2"
      animate={{ opacity: menuOpen ? 0 : 1 }}
    />
    <motion.div
      className="w-[8px] h-[2px] rounded-full bg-white"
      animate={{ rotate: menuOpen ? -45 : 0 }}
    />
  </button>
);