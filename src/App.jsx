import React, { useEffect, useState } from "react";
import Home from "./Components/1_Home/Home";
import About from "./Components/2_About/About";
import Skill from "./Components/3_Skills/Skill";
import Projects from "./Components/4_Projects/Projects";
import Contact from "./Components/5_Contacts/Contact";
import Footer from "./Components/6_Footer/Footer";
import "./App.css";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";

function App() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark") 
    
  }
  //  sadasdasdasdasdsad 
  // sadasdsadsa >=== <= <==< <=== {} [] <!-- 
  return (
    <>
      <div className="dark:bg-black dark:text-white"> 
        <nav className=" flex justify-end items-center p-12 pb-0 max-sm:p-8 max-sm:pb-0">
          <button onClick={handleThemeSwitch}>
            {!theme ? <FaSun className="size-8"/> : <FaMoon className="size-8"/>}
            {/* <FaSun className="size-8"/> */}
          </button>
        </nav>
        <Home />
        <About />
        <Skill />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
