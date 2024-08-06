import React from "react";
import ProjectCard from "./ProjectCard";

import Ima0 from "../Assets/Imgs.jpeg";
import Ima1 from "../Assets/avatar.jpeg";
import Ima2 from "../Assets/Image 1.jpeg";
import Ima3 from "../Assets/Imafe.jpeg";

const Projects = () => {
  return (
    <div className="mx-80 pb-48 flex flex-col justify-center items-center max-sm:mx-0  max-lg:mx-16">
      <h1 className="text-center font-bold text-6xl tracking-tighter max-sm:text-3xl max-sm:font-extrabold">
        My Projects
      </h1>
      <p className="max-w-[900px] text-gray-500 mt-4 text-lg text-center max-sm:text-sm">
        Here are some of the projects I've worked on.
      </p>
      <div className="flex justify-center items-center text-center my-12 gap-12 flex-wrap">
        <ProjectCard
          
          Image={Ima1}
          link="https://todolistjagjeevan.netlify.app"
          Heading="To-Do Lists"
          Para="A web application to add tasks for your day to day life."
        />
        <ProjectCard
          Image={Ima2}
          link="https://expjagjeevan.netlify.app"
          Heading="Expense Tracker"
          Para="A web application to calculate your expenses."
        />
        <ProjectCard
          Image={Ima3}
          link="https://portfolio2jagjeevan.netlify.app"
          Heading="Portfolio"
          Para="A UI design for my Portfolio page to showcase my design skills."
        />
      </div>
    </div>
  );
};

export default Projects;
