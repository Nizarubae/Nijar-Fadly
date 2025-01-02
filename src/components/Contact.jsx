import React from "react";

const Contact = () => (
  <section id="contact" className="py-16 bg-blue-900">
    <div className="container mx-auto text-center text-white">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <div className="flex justify-center space-x-8">
        {/* WhatsApp */}
        <a
          href="https://wa.me/6281365811338" // Replace with your WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl hover:opacity-80 transition duration-300 transform hover:scale-110"
        >
          <img
            src="/img/wa_logo.png" // WhatsApp logo path
            alt="WhatsApp"
            className="w-16 h-16 object-contain"
          />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/xjay.jar" // Replace with your Instagram link
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl hover:opacity-80 transition duration-300 transform hover:scale-110"
        >
          <img
            src="/img/ig_logo.png" // Instagram logo path
            alt="Instagram"
            className="w-16 h-16 object-contain"
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/m-nijar-fadly-37453a329/" // Replace with your LinkedIn link
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl hover:opacity-80 transition duration-300 transform hover:scale-110"
        >
          <img
            src="/img/linkin_logo.png" // LinkedIn logo path
            alt="LinkedIn"
            className="w-16 h-16 object-contain"
          />
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
