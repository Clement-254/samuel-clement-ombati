
import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, Code, Brain } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Medical",
      items: ["Clinical Medicine", "Surgery", "Patient Care", "Medical Research"],
      icon: Stethoscope
    },
    {
      category: "Technical",
      items: ["React", "Node.js", "Python", "AI/ML", "Data Analysis"],
      icon: Code
    },
    {
      category: "AI & Innovation",
      items: ["Machine Learning", "Natural Language Processing", "Healthcare AI", "Medical Imaging AI"],
      icon: Brain
    },
    {
      category: "Education",
      items: ["Medical Doctor", "AI/ML Certifications", "Full-Stack Development", "Research Publications"],
      icon: GraduationCap
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="page-transition"
    >
      <h1 className="text-4xl font-bold mb-6 text-ocean-800 dark:text-ocean-100">About Me</h1>
      
      <div className="prose dark:prose-invert max-w-none mb-10">
        <p className="text-lg text-ocean-600 dark:text-ocean-300">
          A medical doctor passionate about bridging the gap between healthcare and technology. 
          With expertise in both clinical medicine and artificial intelligence, I'm dedicated to 
          developing innovative solutions that enhance patient care and medical education.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-ocean-700 dark:text-ocean-200">Professional Journey</h2>
        <div className="bg-white dark:bg-ocean-800 rounded-lg p-6 shadow-sm">
          <p className="text-ocean-600 dark:text-ocean-300 mb-4">
            My journey began in medicine, where I developed a deep understanding of healthcare needs and challenges. 
            This experience, combined with my passion for technology, led me to explore the intersection of medicine and AI.
          </p>
          <p className="text-ocean-600 dark:text-ocean-300">
            Currently, I'm focused on developing AI-powered solutions for healthcare, while maintaining my clinical practice 
            to stay connected with patient care and medical advances.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-ocean-700 dark:text-ocean-200">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.category} className="bg-white dark:bg-ocean-800 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <skill.icon className="w-6 h-6 text-ocean-600 dark:text-ocean-300 mr-2" />
                <h3 className="text-xl font-semibold text-ocean-700 dark:text-ocean-200">{skill.category}</h3>
              </div>
              <ul className="list-disc list-inside text-ocean-600 dark:text-ocean-300">
                {skill.items.map((item) => (
                  <li key={item} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <a 
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-ocean-600 hover:bg-ocean-700 text-white rounded-lg transition-colors duration-200"
        >
          Let's Connect
        </a>
      </section>
    </motion.div>
  );
};

export default About;
