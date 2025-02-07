
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="page-transition"
    >
      <h1 className="text-4xl font-bold mb-6 text-wolf-800 dark:text-wolf-100">Contact</h1>
      <div className="max-w-2xl">
        {/* Contact form will be added here */}
      </div>
    </motion.div>
  );
};

export default Contact;
