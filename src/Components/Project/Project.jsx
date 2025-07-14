import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        
        <ProjectCard
          title="Voting App (Backend)"
          main="A basic interactive web app that lets users vote and see live results instantly."
        />
        <ProjectCard
          title="Netflix Clone"
          main="This is a clonning website created to practice layout and responsive design using only HTML and CSS."
        />
        <ProjectCard
          title="To-Do List App"
          main="A simple and interactive task management applications that allows users to add, complete, and delete tasks. Build to practice DOM manipulations and local storage in JavaScript"
        />
      </div>
    </div>
  );
};

export default Projects;