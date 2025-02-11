import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Online Shopping Platform",
      description: "A dynamic e-commerce website with cart and billing features.",
      link: "#",
    },
    {
      title: "React To-Do App",
      description: "A sleek and interactive task management app built with React.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing projects and skills.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {projectList.map(({ title, description, link }, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 text-gray-300">{description}</p>
            <a
              href={link}
              className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:from-blue-600 hover:to-teal-600 transition duration-300 ease-in-out"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
