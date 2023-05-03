import "./App.css";
import Nav from "./components/nav/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Work from "./components/work/work";
import AsideLeft from "./components/asideLeft";
import AsideRight from "./components/asideRight";
import Contact from "./components/contact";
function App() {
  return (
    <div className="App">
      <Nav />
      <AsideLeft />
      <AsideRight />
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
