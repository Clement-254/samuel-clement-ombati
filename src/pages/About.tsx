
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="page-transition"
    >
      <h1 className="text-4xl font-bold mb-6 text-wolf-800 dark:text-wolf-100">About Me</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-wolf-600 dark:text-wolf-300">
          A doctor bridging the gap between medicine and technology, with a passion for AI and innovation.
        </p>
        {/* Add more content later */}
      </div>
    </motion.div>
  );
};

export default About;
