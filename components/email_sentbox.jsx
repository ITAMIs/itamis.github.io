import { motion } from "framer-motion";

const email_sentbox = ({ show, onClose }) => {
  return (
    <motion.div
      className="email-sent-box"
      initial={{ y: "100%" }}
      animate={show ? { y: 0 } : { y: "100%" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div id="sentbox_email">
        <p>Your email has been sent!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </motion.div>
  );
};

export default email_sentbox;