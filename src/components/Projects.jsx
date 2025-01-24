import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio showcasing my skills and projects.',
      sourceCode: '#', // Replace with the source code link
      demo: '#', // Replace with the demo link
    },
    {
      name: 'E-commerce Platform',
      description: 'A full-stack e-commerce web app built with React and Spring Boot.',
      sourceCode: '#',
      demo: '#',
    },
    {
      name: 'Research Papers Repository',
      description: 'A website to upload and view research papers and project reports.',
      sourceCode: '#',
      demo: '#',
    },
    {
      name: 'Weather App',
      description: 'A weather forecasting app using React and OpenWeather API.',
      sourceCode: '#',
      demo: '#',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen text-white flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b from-gray-900 to-black"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-gray-800 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700 flex flex-col items-center"
          >
            <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 text-center">{project.name}</h3>
            <p className="text-gray-300 mb-4 text-center">{project.description}</p>

            <div className="flex gap-4 justify-center w-full">
              <a
                href={project.sourceCode}
                className="px-4 py-1 bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors duration-300 hover:bg-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
              <a
                href={project.demo}
                className="px-4 py-1 bg-green-600 text-white rounded-lg text-sm font-medium transition-colors duration-300 hover:bg-green-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
