import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projectList = [
    {
      title: "Online Shopping Platform",
      description: "A dynamic e-commerce website with cart and billing features.",
      link: "https://inspiring-twilight-d75f33.netlify.app/",
      github: "https://github.com/TanishTunwal/Mini-projcect/tree/main/Ecommerce",
    },
    {
      title: "Gallery Website",
      description: "An image storage platform with dynamic features and backend integration.",
      link: "https://myfirstbackendproject-zowd.onrender.com/",
      github: "https://github.com/TanishTunwal/MyFirstBackendProject",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing projects and skills.",
      link: "/#home",
      github: "https://github.com/TanishTunwal/MyPortfolio",
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="w-screen min-h-screen text-white py-16 px-4 sm:px-6 flex flex-col items-center overflow-y-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text mb-8 md:mb-12"
      >
        My Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4"
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
        {projectList.map(({ title, description, link, github }, index) => (
          <motion.div
            key={index}
            className="relative bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition transform hover:scale-105 border-2 border-transparent hover:border-opacity-100 hover:border-teal-400"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-2 text-gray-300">{description}</p>
            <div className="mt-4 flex justify-center gap-4">
              {link && link !== "/" && (
                <a
                  href={link}
                  className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-blue-600 hover:to-teal-600 transition duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
              <a
                href={github}
                className="flex items-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;