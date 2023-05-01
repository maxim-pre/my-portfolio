import "./App.css";
import Nav from "./components/nav/nav";
import Home from "./components/home/home";
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <div className="my-20">
        <h1>01. about</h1>
      </div>
    </div>
  );
}

export default App;
