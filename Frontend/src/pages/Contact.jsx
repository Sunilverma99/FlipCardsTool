import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaMobileAlt, FaGlobe, FaCode } from 'react-icons/fa';

function Contact() {
  return (
    <div className="p-8 bg-gradient-to-br  to-gray-300 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-10">Contact Information</h1>
      <div className="bg-white shadow-lg rounded-lg p-8  w-full space-y-6">
        <div className="flex items-center text-lg">
          <span className="font-semibold mr-2">Name:</span>
          <span>Sunil Verma</span>
        </div>
        <div className="flex items-center text-lg">
          <FaMobileAlt className="text-gray-500 mr-2" />
          <span className="font-semibold mr-2">Mobile:</span>
          <span>7027299219</span>
        </div>
        <div className="flex items-center text-lg">
          <FaEnvelope className="text-gray-500 mr-2" />
          <span className="font-semibold mr-2">Email:</span>
          <a href="mailto:sunilverma99706@gmail.com" className="text-blue-500 hover:underline">
            sunilverma99706@gmail.com
          </a>
        </div>
        <div className="flex items-center text-lg">
          <FaEnvelope className="text-gray-500 mr-2" />
          <span className="font-semibold mr-2">Email (IIIT Una):</span>
          <a href="mailto:22254@iiitu.ac.in" className="text-blue-500 hover:underline">
            22254@iiitu.ac.in
          </a>
        </div>
        <div className="flex items-center text-lg">
          <FaLinkedin className="text-blue-700 mr-2" />
          <span className="font-semibold mr-2">LinkedIn:</span>
          <a href="https://www.linkedin.com/in/sunil-verma-b7985024a" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            linkedin.com/in/sunil-verma-b7985024a
          </a>
        </div>
        <div className="flex items-center text-lg">
          <FaGlobe className="text-gray-500 mr-2" />
          <span className="font-semibold mr-2">Portfolio:</span>
          <a href="https://sunil-portfolio-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            sunil-portfolio-six.vercel.app
          </a>
        </div>
        <div className="flex items-center text-lg">
          <FaGithub className="text-gray-900 mr-2" />
          <span className="font-semibold mr-2">GitHub:</span>
          <a href="https://github.com/Sunilverma99" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            github.com/Sunilverma99
          </a>
        </div>
        <div className="flex items-center text-lg">
          <FaCode className="text-gray-500 mr-2" />
          <span className="font-semibold mr-2">LeetCode:</span>
          <a href="https://leetcode.com/u/sv784333/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            leetcode.com/u/sv784333/
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
