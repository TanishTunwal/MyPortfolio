import React, { useRef, useState, useEffect, memo } from "react";
import { motion, useInView } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { VscSymbolStructure } from "react-icons/vsc";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={32} className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt size={32} className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={32} className="text-teal-500" /> },
  { name: "JavaScript", icon: <FaJs size={32} className="text-yellow-500" /> },
  { name: "React", icon: <FaReact size={32} className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs size={32} className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress size={32} className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb size={32} className="text-green-600" /> },
  { name: "Java", icon: <FaJava size={32} className="text-red-600" /> },
  { name: "Data Structures", icon: <VscSymbolStructure size={32} className="text-purple-500" /> },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    if (isInView && !viewed) setViewed(true);
  }, [isInView, viewed]);

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="text-white h-screen flex flex-col justify-center items-center px-4 py-16 sm:py-40 my-40 pb-32 sm:pb-40"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={viewed ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text mb-12 pb-16"
      >
        Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate={viewed ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="group relative bg-white bg-opacity-10 p-5 rounded-xl shadow-lg text-center text-lg font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            tabIndex={0}
          >
            <span className="relative z-10 flex flex-col items-center">
              {skill.icon}
              <span className="mt-2">{skill.name}</span>
              <span className="sr-only">{skill.name} icon</span>
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default memo(Skills);