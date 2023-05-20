import "./App.css";
import Nav from "./components/nav/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Work from "./components/work/work";
import AsideLeft from "./components/asideLeft";
import AsideRight from "./components/asideRight";
import Contact from "./components/contact";
import { useState, useEffect } from "react";
function App() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [y, setY] = useState(0);

  const handleScroll = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      setScrollDirection("up");
    } else if (y < window.scrollY) {
      setScrollDirection("down");
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", (e) => handleScroll(e));
    return () => {
      window.removeEventListener("scroll", (e) => handleScroll(e));
    };
  }, [y]);

  window.addEventListener("scroll", handleScroll);
  return (
    <div className="App">
      <Nav scroll={scrollDirection} />
      <div className="flex flex-col items-center sm:px-28 px-8">
        <AsideLeft />
        <AsideRight />
        <Home />
        <About />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
