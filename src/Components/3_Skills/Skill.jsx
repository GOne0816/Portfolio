import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const anima = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5, delayChildren: 0.2 } },
};

const Skill = () => {
  return (
    <div className="mx-80 py-48 flex flex-col justify-center items-center max-sm:mx-4 max-sm:py-16 max-lg:mx-16  max-lg:py-32">
      <h1 className="text-center font-bold text-6xl tracking-tighter max-sm:text-3xl max-sm:font-extrabold">
        My Skills
      </h1>
      <p className="max-w-[900px] text-gray-500 mt-4 text-lg text-center max-sm:text-sm">
        I have a diverse set of skills that allow me to tackle a wide range of
        web development projects. My expertise includes proficiency in React,
        TypeScript, CSS frameworks like Tailwind, and various UI libraries and
        tools.
      </p>
      <motion.div
        className="flex gap-12 flex-wrap justify-center items-center my-12 max-sm:gap-4"
        variants={anima}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Card
          Heading="React.js"
          Para="Experienced in building complex web applications using React."
        />
        <Card
          Heading="Tailwind CSS"
          Para="Experienced in using Tailwind CSS for rapid UI development."
        />
        <Card
          Heading="TypeScript"
          Para="Proficient in using TypeScript to write type-safe JavaScript."
        />
        <Card
          Heading="MongoDB"
          Para="Experienced in using MongoDB for database management."
        />
        <Card
          Heading="Node.js"
          Para="Experienced in using Node.js for server-side programming."
        />
        <Card
          Heading="Blender"
          Para="Experienced in using Blender for 3D modeling and animation."
        />
      </motion.div>
    </div>
  );
};

export default Skill;
