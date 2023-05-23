import "./App.css";
import Nav from "./components/nav/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Work from "./components/work/work";
import AsideLeft from "./components/asideLeft";
import AsideRight from "./components/asideRight";
import Contact from "./components/contact";
import { useState, useEffect } from "react";
import { TfiClose } from "react-icons/tfi";
import Button from "./components/common/button";

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
    <div className="App relative">
      <Nav scroll={scrollDirection} />
      <div className="flex flex-col items-center sm:px-28 px-8">
        <AsideLeft />
        <AsideRight />
        <Home />
        <About />
        <Work />
        <Contact />
      </div>
      <div className="sm:hidden fixed w-full h-full backdrop-blur-sm bg-backgound/30 top-0"></div>
      <div className="sm:hidden fixed w-[70%] h-screen bg-[#001d3d] top-0 right-0 z-30 p-8 flex flex-col">
        <div className="flex justify-end">
          <TfiClose className="text-neonPink text-2xl font-bold" />
        </div>
        <ul className=" text-textLight flex justify-center flex-col">
          <div className="my-5">
            <p className="code text-neonPink pb-1">01.</p>
            <p>About</p>
          </div>
          <div className="my-5">
            <p className="code text-neonPink pb-1">02.</p>
            <p>Work</p>
          </div>
          <div className="my-5">
            <p className="code text-neonPink pb-1">03.</p>
            <p>Contact</p>
          </div>
        </ul>
        <button className="border rounded py-4 px-10 text-neonPink mx-auto my-6">
          Resume
        </button>
      </div>
    </div>
  );
}

export default App;
