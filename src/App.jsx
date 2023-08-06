import NavBar from "./Components/NavBar";
import RecommendJobs from "./Components/RecommendJobs";
import SearchJobs from "./Components/SearchJobs";

function App() {
  return (
    <div className="app">
      <NavBar />
      <SearchJobs />
      <RecommendJobs />
    </div>
  );
}

export default App;
