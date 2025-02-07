
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center"
    >
      <div className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-2"
        >
          <span className="px-4 py-1 rounded-full bg-wolf-200 dark:bg-wolf-800 text-wolf-600 dark:text-wolf-300 text-sm">
            Bridging Medicine & AI
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-wolf-800 dark:text-wolf-100"
        >
          Innovating for a
          <span className="block text-wolf-600 dark:text-wolf-400">Smarter Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-wolf-600 dark:text-wolf-300 max-w-2xl mx-auto text-lg"
        >
          Combining medical expertise with artificial intelligence to create innovative solutions
          for healthcare and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 justify-center mt-8"
        >
          <a
            href="/projects"
            className="px-6 py-3 rounded-lg bg-wolf-800 dark:bg-wolf-100 text-wolf-100 dark:text-wolf-800 hover:bg-wolf-700 dark:hover:bg-wolf-200 transition-colors"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-lg border border-wolf-300 dark:border-wolf-700 text-wolf-800 dark:text-wolf-100 hover:bg-wolf-200 dark:hover:bg-wolf-800 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
