import React from "react";
import { motion } from "framer-motion";

const skills = [
  "JavaScript", "React", "Node.js", "Express.js", 
  "MongoDB", "HTML", "CSS", "Tailwind CSS", 
  "Java", "Data Structures", "Algorithms"
];

const Skills = () => {
  return (
    <section id="skills" className="text-white min-h-screen flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-8"
      >
        Skills
      </motion.h1>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-10 backdrop-blur-lg p-4 rounded-xl shadow-md text-center text-lg font-semibold cursor-pointer transition-all hover:scale-110 hover:shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.15 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
