import { useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Projects from "./components/projects/Projects";
import Services from "./components/services/Services";
import Skils from "./components/skils/Skils";
// import MdDarkMode from "./components/darkMode/DarMode";
function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  function changeMode() {
    if (mode == "dark") {
      setMode("light");
      localStorage.setItem("mode", "light");
    } else {
      setMode("dark");
      localStorage.setItem("mode", "dark");
    }
  }

  return (
    <>
      <div
        className={` ${mode == "dark" ? "light" : "dark"} dark:bg-gray-950 `}
      >
        <Home />
        <Nav mode={mode} changeMode={changeMode} />
        <About />
        <Skils />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
