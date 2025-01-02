import React from "react";

const Header = () => (
  <header className="bg-blue-900 text-white py-6">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-400">
        My Portfolio
      </h1>
      <nav>
        <a href="#about" className="mx-4 text-lg font-medium hover:text-teal-400 transition duration-300">About</a>
        <a href="#projects" className="mx-4 text-lg font-medium hover:text-teal-400 transition duration-300">Projects</a>
        <a href="#contact" className="mx-4 text-lg font-medium hover:text-teal-400 transition duration-300">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
