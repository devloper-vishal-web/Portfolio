import React from "react";

const Skills = () => {
  return (
    <div id="#skills" className="bg-gradient-to-b text-white py-12 px-6 md:px-16 mx-5">
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>
      <div className="space-y-8">

        <div>
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <span className="text-blue-400">▶️</span> Frontend Developer
          </h3>
          <p className="text-gray-300 mt-2 ml-6">
            Proficient in building interactive user interfaces using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React.js</strong>, and <strong>Tailwind CSS</strong>. Focused on responsive design, performance, and accessibility.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <span className="text-purple-400">▶️</span> Backend Developer
          </h3>
          <p className="text-gray-300 mt-2 ml-6">
            Skilled in building robust backend systems with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>RESTful APIs</strong>. Familiar with authentication, authorization, and server-side logic.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            <span className="text-green-400">▶️</span> Programming Languages
          </h3>
          <p className="text-gray-300 mt-2 ml-6">
            Comfortable coding in <strong>C</strong>, <strong>C++</strong>, and <strong>Python</strong>. Strong understanding of programming fundamentals, problem-solving, and algorithmic thinking. Frequently apply these languages in logic building, automation, and backend scripting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;