import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Brain, Code, Beaker, Stethoscope, Quote, Download, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const testimonials = [
    {
      text: "Clement's extraordinary blend of medical knowledge and technical expertise makes him an invaluable asset in healthcare innovation.",
      author: "Dr. Sarah Chen",
      role: "Chief of Medicine, Central Hospital"
    },
    {
      text: "His ability to bridge the gap between clinical medicine and software development is remarkable. A true pioneer in healthcare tech.",
      author: "James Wilson",
      role: "Tech Lead, HealthTech Solutions"
    },
    {
      text: "Clement brings a fresh perspective to medical software development, combining clinical insights with technical excellence.",
      author: "Dr. Michael Roberts",
      role: "Medical Research Director"
    }
  ];

  const resumeData = {
    education: [
      {
        period: "2020 - Present",
        title: "Doctor of Medicine",
        institution: "Medical University",
        description: "Specializing in Clinical Medicine with focus on Healthcare Technology"
      },
      {
        period: "2016 - 2020",
        title: "BSc in Computer Science",
        institution: "Tech University",
        description: "Focus on Software Engineering and AI/ML applications in Healthcare"
      }
    ],
    experience: [
      {
        period: "2021 - Present",
        title: "Healthcare Software Developer",
        company: "HealthTech Solutions",
        description: "Developing innovative healthcare applications using modern web technologies"
      },
      {
        period: "2019 - 2021",
        title: "Medical Research Assistant",
        company: "Central Hospital",
        description: "Conducted research on AI applications in medical diagnosis"
      }
    ]
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        className="min-h-[calc(100vh-5rem)]"
      >
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative py-12 md:py-20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-wolf-200 to-wolf-100 dark:from-wolf-800 dark:to-wolf-900 -z-10" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-2"
              >
                <span className="px-4 py-1 rounded-full bg-wolf-200 dark:bg-wolf-800 text-wolf-600 dark:text-wolf-300 text-xs md:text-sm hover:bg-wolf-300 dark:hover:bg-wolf-700 transition-colors">
                  Clinical Medicine Student & Software Developer
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-wolf-800 dark:text-wolf-100"
              >
                Bridging Medicine
                <span className="block text-gradient">
                  & Technology
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-wolf-600 dark:text-wolf-300 max-w-2xl mx-auto px-4"
              >
                As a Clinical Medicine student and Software Developer, I'm passionate about leveraging technology 
                to revolutionize healthcare delivery and improve patient outcomes.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8 px-4"
              >
                <a
                  href="/about"
                  className="group px-6 py-3 rounded-lg bg-wolf-800 dark:bg-wolf-100 text-wolf-100 dark:text-wolf-800 hover:bg-wolf-700 dark:hover:bg-wolf-200 transition-all duration-300 button-pop flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 rounded-lg border border-wolf-300 dark:border-wolf-700 text-wolf-800 dark:text-wolf-100 hover:bg-wolf-200 dark:hover:bg-wolf-800 transition-all duration-300 button-pop"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4"
        >
          {[
            { 
              icon: Stethoscope, 
              title: "Clinical Medicine", 
              description: "Pursuing advanced medical education with focus on patient care and modern healthcare practices" 
            },
            { 
              icon: Code, 
              title: "Software Development", 
              description: "Building healthcare solutions with modern web technologies and best practices" 
            },
            { 
              icon: Brain, 
              title: "AI in Healthcare", 
              description: "Exploring the intersection of artificial intelligence and medical diagnosis" 
            },
            { 
              icon: Beaker, 
              title: "Medical Research", 
              description: "Contributing to evidence-based healthcare through technology-driven research" 
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="glass-morphism p-4 md:p-6 rounded-xl card-hover"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-wolf-600 dark:text-wolf-300 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-wolf-800 dark:text-wolf-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-wolf-600 dark:text-wolf-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="py-16 bg-white dark:bg-wolf-800"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-wolf-800 dark:text-wolf-100 mb-4">
                Professional Journey
              </h2>
              <p className="text-wolf-600 dark:text-wolf-300 max-w-2xl mx-auto mb-8">
                Explore my academic and professional experience in medicine and technology
              </p>
              <motion.a
                href="/Clement_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-wolf-800 dark:bg-wolf-100 text-wolf-100 dark:text-wolf-800 rounded-lg hover:bg-wolf-700 dark:hover:bg-wolf-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="education">
                  <AccordionTrigger className="text-xl font-semibold text-wolf-800 dark:text-wolf-100">
                    Education
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pt-4">
                      {resumeData.education.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="relative pl-8 border-l-2 border-wolf-300 dark:border-wolf-600"
                        >
                          <span className="text-sm text-wolf-500 dark:text-wolf-400">
                            {item.period}
                          </span>
                          <h3 className="text-lg font-semibold text-wolf-800 dark:text-wolf-100 mt-1">
                            {item.title}
                          </h3>
                          <p className="text-wolf-600 dark:text-wolf-300">
                            {item.institution}
                          </p>
                          <p className="text-wolf-500 dark:text-wolf-400 text-sm mt-2">
                            {item.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="experience">
                  <AccordionTrigger className="text-xl font-semibold text-wolf-800 dark:text-wolf-100">
                    Experience
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pt-4">
                      {resumeData.experience.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="relative pl-8 border-l-2 border-wolf-300 dark:border-wolf-600"
                        >
                          <span className="text-sm text-wolf-500 dark:text-wolf-400">
                            {item.period}
                          </span>
                          <h3 className="text-lg font-semibold text-wolf-800 dark:text-wolf-100 mt-1">
                            {item.title}
                          </h3>
                          <p className="text-wolf-600 dark:text-wolf-300">
                            {item.company}
                          </p>
                          <p className="text-wolf-500 dark:text-wolf-400 text-sm mt-2">
                            {item.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="py-20 bg-wolf-100 dark:bg-wolf-900"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-wolf-800 dark:text-wolf-100 mb-4">
                Testimonials
              </h2>
              <p className="text-wolf-600 dark:text-wolf-300 max-w-2xl mx-auto">
                What mentors and colleagues say about my work in medicine and technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="glass-morphism p-6 rounded-xl relative card-hover"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Quote className="w-8 h-8 text-wolf-400 dark:text-wolf-600 absolute -top-4 -left-4" />
                  <div className="space-y-4">
                    <p className="text-wolf-700 dark:text-wolf-200 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold text-wolf-800 dark:text-wolf-100">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-wolf-600 dark:text-wolf-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-12 text-center"
            >
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-wolf-700 dark:text-wolf-300 hover:text-wolf-800 dark:hover:text-wolf-100 transition-colors link-underline"
              >
                View More Recommendations
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
