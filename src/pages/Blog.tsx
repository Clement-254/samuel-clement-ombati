
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="page-transition"
    >
      <h1 className="text-4xl font-bold mb-6 text-ocean-800 dark:text-ocean-100">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Blog posts will be added here */}
      </div>
    </motion.div>
  );
};

export default Blog;
