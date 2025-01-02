import React from "react";

const Projects = () => (
  <section id="projects" className="py-16 bg-blue-900">
    <div className="container mx-auto text-center text-white">
      <h2 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-400">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[{
          title: "Sprite Snatcher Game or Scratch 3.0",
          link: "https://scratch.mit.edu/projects/986820789/",
          logo: "/img/Scratch-Logo.jpg",
          description: "This is a fun game created with Scratch 3.0 where players can collect sprites in different levels."
        },
        {
          title: "Another Platformer. Roblox Studio",
          link: "https://www.roblox.com/games/986820790",
          logo: "/img/Roblox_Studio.png",
          description: "Explore this exciting platformer game created in Roblox Studio. Jump, run, and solve challenges!"
        },
        {
          title: "Unity 3D Game",
          link: "https://linktoyourunityproject.com",
          logo: "/img/unity_logo.jpg",
          description: "A 3D game developed using Unity. Players explore a dynamic world with interactive environments and challenges."
        },
       
        ].map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            {i === 0 ? ( // Embed Scratch logo and description only for the first grid item
              <div className="embed-container mb-4">
                <img
                  src={project.logo}
                  alt="Scratch 3.0 Logo"
                  className="w-32 h-32 object-contain mb-4 rounded"
                />
                <p className="text-gray-300 text-lg">{project.description}</p>
              </div>
            ) : i === 1 ? ( // Embed Roblox logo and description only for the second grid item
              <div className="embed-container mb-4">
                <img
                  src={project.logo}
                  alt="Roblox Studio Logo"
                  className="w-32 h-32 object-contain mb-4 rounded"
                />
                <p className="text-gray-300 text-lg">{project.description}</p>
              </div>
            ) : i === 2 ? ( // Embed Unity logo and description only for the third grid item
              <div className="embed-container mb-4">
                <img
                  src={project.logo}
                  alt="Unity 3D Logo"
                  className="w-32 h-32 object-contain mb-4 rounded"
                />
                <p className="text-gray-300 text-lg">{project.description}</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300 text-lg">A brief description of the project.</p>
              </>
            )}
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
