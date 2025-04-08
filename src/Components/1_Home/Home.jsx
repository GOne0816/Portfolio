import React, { useEffect, useState } from "react";
import Im from "../0_Assets/Imgs.jpeg";
import { BiSolidDownload } from "react-icons/bi";
import resume from "../0_Assets/Jag Jeevan Ricky Resume.pdf";


const Home = () => {
  return (
    <div>
      <section className="my-32 mx-80 flex items-center max-sm:mx-4 max-sm:my-16 max-sm:flex-col-reverse max-lg:mx-16">
        <div className="max-sm:my-8">
          <h1 className="text-6xl font-bold tracking-tighter max-sm:text-3xl max-sm:font-extrabold max-sm:text-center">
            Jag Jeevan Ricky
          </h1>
          <h2 className="text-3xl font-extrabold text-gray-500 tracking-tighter max-sm:text-xl max-sm:font-extrabold max-sm:text-center">
            Full Stack Developer
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-sm:text-sm max-sm:text-center">
            I'm a passionate Full-Stack developer with a focus on building
            beautiful and performant web applications. I have experience working
            with React, Nodejs, TypeScript, and various UI libraries.
          </p>
          <div className="max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center">
            <a href={resume} download="Resume">
              <button className="btn-AltDark flex gap-2 items-center justify-center rounded-full mt-8">
                Resume
                <span>
                  <BiSolidDownload className="size-4" />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <img
            className="rounded-full max-sm:size-60"
            src={Im}
            alt="Jag Jeevan Ricky"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
