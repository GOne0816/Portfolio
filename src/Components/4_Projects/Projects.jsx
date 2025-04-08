import React from "react";
import ProjectCard from "./ProjectCard";

import Ima1 from "../0_Assets/avatar.jpeg";
import Ima2 from "../0_Assets/Image 1.jpeg";
import Ima3 from "../0_Assets/Imafe.jpeg";

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
          Alt="ToDo_Lists"
          link="https://g-1-todo-list.vercel.app/"
          Heading="To-Do Lists"
          Para="A web application to add tasks for your day to day life."
        />
        <ProjectCard
          Image={Ima2}
          Alt="Expense_Tracker"
          link="https://g-1-exp-tracker.vercel.app/" 
          Heading="Expense Tracker"
          Para="A web application to calculate your expenses."
        />
        <ProjectCard
          Image={Ima3}
          Alt="Portfolio"
          link="https://portfolio2jagjeevan.netlify.app"
          Heading="Portfolio"
          Para="A UI design for my Portfolio page to showcase my design skills."
        />
      </div>
    </div>
  );
};

export default Projects;
