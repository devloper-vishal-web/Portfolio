import React from "react";
import AboutImg from "../../assets/myImg.jpeg";
const About = () => {
  return (
    <div
      id="About"
      className="text-white flex overflow-hidden items-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-4 md:p-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={AboutImg}
            alt="Profile"
            className="w-64 md:w-80 lg:w-96 rounded-2xl shadow-lg -scale-x-100"
          />
        </div>

        {/* Text Section */}
        <div className="text-left space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p>
            A passionate and self-motivated web developer with a growing skill set in building responsive,
            accessible, and modern web applications. I enjoy turning ideas into real, interactive websites
            and continuously improving my craft through hands-on projects.
          </p>
          <p>
            I have a strong foundation in <span className="font-semibold">HTML, CSS, JavaScript</span>,
            and programming languages like <span className="font-semibold">C, C++, and Python</span>.
            I’ve also explored CSS frameworks like <span className="font-semibold">Tailwind CSS</span> to
            speed up development and ensure clean design.
          </p>
          <p>
            Currently, I’m actively working on learning <span className="font-semibold">React.js</span> and
            <span className="font-semibold"> Next.js</span>, building dynamic single-page applications and
            experimenting with server-side rendering to enhance performance and SEO.
          </p>
          <p>
            I'm excited to continue learning and to grow as a full-stack developer in a team-driven and
            fast-paced environment.
          </p>
        </div>
      </div>
      </div>
  );
};

export default About;