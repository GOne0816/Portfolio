import React from "react";
import { motion } from "framer-motion";

const animaChild = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const Card = (props) => {
  return (
    <motion.div
      className="bg-gray-100 dark:bg-zinc-900 rounded-xl flex flex-col justify-center items-center text-center p-4 w-96 max-sm:w-80  max-lg:w-72 "
      variants={animaChild}
    >
      <h1 className="font-bold text-lg max-sm:text-sm">{props.Heading}</h1>
      <p className="text-gray-500 max-sm:text-xs">{props.Para}</p>
    </motion.div>
  );
};

export default Card;
