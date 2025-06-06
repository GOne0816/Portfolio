import React from "react";
import ProjectCard from "./ProjectCard";

import SS1 from "../0_Assets/SS1.png";
import SS2 from "../0_Assets/SS2.png";
import SS3 from "../0_Assets/SS3.png";
import SS4 from "../0_Assets/SS4.png";

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
          
          Image={SS1}
          Alt="ToDo_Lists"
          link="https://g-1-todo-list.vercel.app/"
          Heading="To-Do Lists"
          Para="A web application to add tasks for your day to day life."
        />
        <ProjectCard
          Image={SS2}
          Alt="Expense_Tracker"
          link="https://g-1-exp-tracker.vercel.app/" 
          Heading="Expense Tracker"
          Para="A web application to calculate your expenses."
        />
        <ProjectCard
          Image={SS3}
          Alt="Portfolio"
          link="https://g-2portfolio.vercel.app/"
          Heading="Portfolio"
          Para="A UI design for my Portfolio page to showcase my design skills."
        />
        <ProjectCard
          Image={SS4}
          Alt="Weather_App"
          link="https://g-1weatherapp.vercel.app/"
          Heading="Weather App"
          Para="A UI design for my Portfolio page to showcase my design skills."
        />
      </div>
    </div>
  );
};

export default Projects;
