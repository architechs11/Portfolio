import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: 'Research Papers Repository',
      description: 'A website to upload and view research papers and project reports.',
      sourceCode: 'https://github.com/alpha-Gautam/rec_papers',
      demo: 'https://rec-papers.vercel.app/',
    },
    {
      name: 'Personal Portfolio Website',
      description: 'A personal portfolio showcasing my skills and projects.',
      sourceCode: 'https://github.com/architechs11/Portfolio', // Replace with the source code link
      demo: 'https://architechs11.netlify.app/', // Replace with the demo link
    },
    {
      name: 'Enhanced Notepad Application',
      description: 'A core Java using functionalities Swing & AWT application.',
      sourceCode: 'https://github.com/architechs11/Notepad',
      // demo: '#',
    },
    {
      name: 'Java based Encryption App',
      description: 'Core Java code in which Encryption Algorithms are employed into use.',
      sourceCode: 'https://github.com/architechs11/EncryptionApp',
      // demo: '#',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen text-white flex flex-col items-center justify-center px-4 sm:px-6 py-12 bg-gradient-to-b from-gray-900 to-black"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center">
        Projects
      </h2>
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-700 flex flex-col items-center text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-yellow-400">
              {project.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <a
                href={project.sourceCode}
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors duration-300 hover:bg-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
              <a
                href={project.demo}
                className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium transition-colors duration-300 hover:bg-green-500"
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
