import React from "react";
import { motion } from "framer-motion";

const ProjectCard = (props) => {
  return (
    <motion.a href={props.link} target="_blank"
      className="size-80 cursor-pointer"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      whileTap={{ scale: 0.98 , opacity: 0.8 }}
    >
      <div className="w-80 h-60 mb-4 bg-gray-100 rounded-xl flex justify-center items-center overflow-hidden shadow-xl">
        <img src={props.Image} className="font-extrabold text-6xl bg-cover" />
      </div>
      <h1 className="font-bold text-lg">{props.Heading}</h1>
      <p className="text-gray-500">{props.Para}</p>
    </motion.a>
  );
};

export default ProjectCard;
