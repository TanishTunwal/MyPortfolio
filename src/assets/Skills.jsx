import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  "JavaScript", "React", "Node.js", "Express.js", 
  "MongoDB", "HTML", "CSS", "Tailwind CSS", 
  "Java", "Data Structures", "Algorithms"
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section 
      ref={ref} 
      id="skills" 
      className="text-white min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text mb-12"
      >
        Skills
      </motion.h1>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative bg-white bg-opacity-10 backdrop-blur-md p-5 rounded-xl shadow-lg text-center text-lg font-semibold cursor-pointer transition-all hover:scale-110 hover:shadow-xl"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)",
            }}
          >
            <div className="absolute inset-0 border-2 border-transparent rounded-xl bg-gradient-to-r from-teal-400 to-blue-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            <span className="relative z-10">{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
