
import { motion } from "framer-motion";
import { ArrowRight, Brain, Code, Flask, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)]">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-wolf-200 to-wolf-100 dark:from-wolf-800 dark:to-wolf-900 -z-10" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
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
              className="text-5xl md:text-7xl font-bold text-wolf-800 dark:text-wolf-100"
            >
              Innovating for a
              <span className="block bg-gradient-to-r from-wolf-600 to-wolf-400 dark:from-wolf-400 dark:to-wolf-200 bg-clip-text text-transparent">
                Smarter Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-wolf-600 dark:text-wolf-300 text-xl max-w-2xl mx-auto"
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
                className="group px-6 py-3 rounded-lg bg-wolf-800 dark:bg-wolf-100 text-wolf-100 dark:text-wolf-800 hover:bg-wolf-700 dark:hover:bg-wolf-200 transition-colors flex items-center gap-2"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-lg border border-wolf-300 dark:border-wolf-700 text-wolf-800 dark:text-wolf-100 hover:bg-wolf-200 dark:hover:bg-wolf-800 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Brain, title: "AI Integration", description: "Leveraging artificial intelligence for medical advancement" },
              { icon: Code, title: "Tech Innovation", description: "Building cutting-edge healthcare solutions" },
              { icon: Flask, title: "Research Focus", description: "Evidence-based approach to development" },
              { icon: Sparkles, title: "Future Ready", description: "Preparing for tomorrow's healthcare challenges" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass-morphism p-6 rounded-xl hover-scale"
              >
                <feature.icon className="w-10 h-10 text-wolf-600 dark:text-wolf-300 mb-4" />
                <h3 className="text-xl font-semibold text-wolf-800 dark:text-wolf-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-wolf-600 dark:text-wolf-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
