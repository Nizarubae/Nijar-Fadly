import React from "react";

const About = () => (
  <section id="about" className="py-16 bg-blue-900">
    <div className="container mx-auto text-center text-white">
      <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-400">
        About Me
      </h2>
      <p className="text-xl font-medium leading-relaxed mb-6">
        Hello! I'm Nijar, a passionate Front-End Developer and Coding Instructor at CodingBee Academy.
      </p>
      <p className="text-lg mb-6">
        I teach programming tools like Scratch 3.0, Roblox Studio, Python 3, Web Development, and MIT App Inventor. I enjoy making learning fun and engaging for students of all ages.
      </p>
      <p className="text-lg mb-6">
        In my free time, I love working on personal projects, exploring new technologies, and constantly learning to improve my skills.
      </p>
      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://www.linkedin.com/in/nijar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl bg-white text-blue-900 py-2 px-6 rounded-full shadow-lg hover:bg-blue-900 hover:text-white transition duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/nijar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl bg-white text-blue-900 py-2 px-6 rounded-full shadow-lg hover:bg-blue-900 hover:text-white transition duration-300"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
);

export default About;
