import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../index.css";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Triggers when the section is visible
  //make sure you use this in every while using framer-motion

  return (
    <motion.section
      ref={ref}
      className="flex flex-col items-center justify-center min-h-screen text-white px-6 py-10 mt-20 w-full overflow-hidden relative"
    >
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        Hi, I'm{" "}
        <motion.span
          className="text-blue-400 font-semibold cursor-pointer"
          whileHover={{ scale: 1.1, color: "#3b82f6" }}
        >
          Tanish Tunwal
        </motion.span>
        , a passionate{" "}
        <motion.span
          className="text-teal-400 font-semibold cursor-pointer"
          whileHover={{ scale: 1.1, color: "#14b8a6" }}
        >
          Full Stack Developer
        </motion.span>{" "}
        specializing in{" "}
        <motion.span
          className="text-purple-400 font-semibold cursor-pointer"
          whileHover={{ scale: 1.1, color: "#a855f7" }}
        >
          MERN Stack, Java, and Data Structures & Algorithms
        </motion.span>
        . I love building scalable web applications, solving complex problems, and exploring new technologies.
      </motion.p>

      <motion.p
        className="mt-4 text-base md:text-lg text-gray-300 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Currently, I'm pursuing{" "}
        <motion.span
          className="text-indigo-400 font-semibold cursor-pointer"
          whileHover={{ scale: 1.1, color: "#6366f1" }}
        >
          B.Tech in Computer Science
        </motion.span>{" "}
        at{" "}
        <motion.span
          className="text-pink-400 font-semibold cursor-pointer"
          whileHover={{ scale: 1.1, color: "#ec4899" }}
        >
          Graphic Era University
        </motion.span>
        . My skills include{" "}
        <motion.span
          className="text-yellow-400 font-semibold cursor-pointer"
          whileHover={{ scale: 1.1, color: "#facc15" }}
        >
          React, Node.js, Express, and MongoDB
        </motion.span>
        , and I am always excited to take on new challenges!
      </motion.p>
    </motion.section>
  );
};

export default About;
