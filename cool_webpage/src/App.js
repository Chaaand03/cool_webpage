import "./App.css";
import Navbar from "./components/navbar";
import About from "./components/about";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <SearchBar />
    </div>
  );
}

export default App;
