import Home from "./Components/1_Home/Home";
import About from "./Components/2_About/About";
import Skill from "./Components/3_Skills/Skill";
import Projects from "./Components/4_Projects/Projects";
import Contact from "./Components/5_Contacts/Contact";
import Footer from "./Components/6_Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="">
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
