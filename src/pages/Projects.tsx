
import { motion } from "framer-motion";
import { Code, Brain, BookOpen, Activity } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Medical Assistant",
      description: "An AI-powered chatbot that helps medical students study and prepare for exams. Built with OpenAI's GPT API.",
      icon: Brain,
      tags: ["AI/ML", "Healthcare", "Education"],
      link: "#"
    },
    {
      title: "HealthSync",
      description: "A full-stack application for tracking patient health metrics and providing personalized care recommendations.",
      icon: Activity,
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "MedStudy Pro",
      description: "An intelligent study platform that generates flashcards and summaries from medical textbooks using AI.",
      icon: BookOpen,
      tags: ["Python", "Machine Learning", "Education"],
      link: "#"
    },
    {
      title: "Clinical Decision Support",
      description: "AI-powered system that assists doctors in diagnosis and treatment planning using patient data analysis.",
      icon: Code,
      tags: ["AI/ML", "Healthcare", "Python"],
      link: "#"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="page-transition"
    >
      <h1 className="text-4xl font-bold mb-6 text-ocean-800 dark:text-ocean-100">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-ocean-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              <project.icon className="w-6 h-6 text-ocean-600 dark:text-ocean-300 mr-3" />
              <h3 className="text-xl font-semibold text-ocean-700 dark:text-ocean-200">{project.title}</h3>
            </div>
            <p className="text-ocean-600 dark:text-ocean-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-ocean-100 dark:bg-ocean-700 text-ocean-600 dark:text-ocean-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="inline-flex items-center text-ocean-600 dark:text-ocean-300 hover:text-ocean-800 dark:hover:text-ocean-100 transition-colors"
            >
              Learn More →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
