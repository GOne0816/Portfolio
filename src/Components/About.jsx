import React from "react";

const About = () => {
  return (
    <div>
      <div className="py-12 flex flex-col justify-center items-center max-sm:mx-4 max-sm:py-4 max-lg:mx-16">
        <h1 className="text-center font-bold text-6xl tracking-tighter max-sm:text-3xl max-sm:font-extrabold">About Me</h1>
        <p className="max-w-[900px] text-gray-500 mt-4 text-lg text-center max-sm:text-sm">
          I am a passionate frontend developer with a strong focus on building
          beautiful and performant web applications. I have extensive experience
          working with React, TypeScript, and various UI libraries. I am always
          eager to learn new technologies and techniques to improve my skills
          and deliver the best possible solutions for my clients.
        </p>
      </div>
    </div>
  );
};

export default About;
