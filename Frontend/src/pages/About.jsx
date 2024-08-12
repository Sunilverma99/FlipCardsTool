import React from 'react';

function About() {
  return (
    <div className="min-h-screen p-8 flex w-full flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">About Me</h1>
      <div className="bg-white shadow-lg rounded-lg p-6  w-full space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Education</h2>
          <p className="text-lg">
            <span className="font-semibold">B.Tech in Electronics and Communication,</span> 
            <br />Indian Institute of Information Technology (IIIT), Una, Himachal Pradesh
            <br /><span className="text-gray-600">CGPA: 8.2 (July 2022 - June 2026)</span>
          </p>
          <p className="text-lg mt-4">
            <span className="font-semibold">12th Grade,</span> 
            <br />Government Senior Secondary School, Hisar, Haryana
            <br /><span className="text-gray-600">Percentile: 89.6% (May 2020 - March 2022)</span>
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Experience</h2>
          <p className="text-lg">
            <span className="font-semibold">Web Development Intern,</span> 
            <br />Marklytics Limited (Remote)
            <br /><span className="text-gray-600">- Assisted in developing and maintaining web applications.</span>
            <br /><span className="text-gray-600">- Troubleshot and resolved technical issues.</span>
            <br /><span className="text-gray-600">- Stayed updated with emerging web technologies.</span>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Projects</h2>
          <p className="text-lg">
            <span className="font-semibold">DialogFlow:</span> Real-time chat app using MERN stack.
            <br /><span className="text-gray-600">Skills: JavaScript, Node.js, Express.js, React, MongoDB, Socket.io, Tailwind CSS.</span>
            <br /><a href="https://dialogflow-1-5zz1.onrender.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Project
            </a>
          </p>
          <p className="text-lg mt-4">
            <span className="font-semibold">BlogNest:</span> Blog platform for reading and managing content.
            <br /><span className="text-gray-600">Skills: JavaScript, Node.js, Express.js, React, MongoDB, Firebase.</span>
            <br /><a href="https://blog-application-o4u3.onrender.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Project
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Technical Skills</h2>
          <p className="text-lg">
            <span className="font-semibold">Languages:</span> JavaScript, C, Java, Python
          </p>
          <p className="text-lg">
            <span className="font-semibold">Frameworks & Libraries:</span> React, Node.js, Express.js, Tailwind CSS, Framer Motion
          </p>
          <p className="text-lg">
            <span className="font-semibold">Databases:</span> MongoDB Atlas, SQL, MySQL
          </p>
          <p className="text-lg">
            <span className="font-semibold">Tools:</span> Git/Github, Postman, VS Code, Intellij IDEA
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Positions of Responsibility</h2>
          <p className="text-lg">
            <span className="font-semibold">Astral @IIITUNA:</span> Active volunteer in the Astral Club, contributing to events focused on astronomy.
          </p>
          <p className="text-lg mt-4">
            <span className="font-semibold">Meraki @IIITUNA:</span> Active participant in all coding events at IIIT Una.
          </p>
          <p className="text-lg mt-4">
            <span className="font-semibold">ECE Kabaddi Team @IIITUNA:</span> Member of the ECE Kabaddi Team, showcasing teamwork and strategic thinking.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
