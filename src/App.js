import "./App.css";
import Nav from "./components/nav/nav";
import Home from "./components/home/home";
import About from "./components/about/about";
import Work from "./components/work/work";
import Button from "./components/common/button";
import AsideLeft from "./components/asideLeft";
import AsideRight from "./components/asideRight";
function App() {
  return (
    <div className="App">
      <Nav />
      <AsideLeft />
      <AsideRight />
      <Home />
      <About />
      <Work />
      <div className="max-w-[400px] mx-auto flex justify-center items-center flex-col my-8">
        <h2 className="code text-neonPink text-xs">03. Contact</h2>
        <h3 className="text-textNormal text-4xl">Let's get in touch!</h3>
        <p className="text-textNormal text-xs my-6">
          I thought I had it all together, but I was led astray the day you
          walked away. You were the clock that was tickin' in my home. Changed
          my state of mind. Love's so hard to find I thought I had it all
          together, but I was led astray the day you walked away. You were the
          clock that was tickin' in my home. Changed my state of mind. Love's so
          hard to find
        </p>
        <Button label={"Say Hello"} />
      </div>
    </div>
  );
}

export default App;
