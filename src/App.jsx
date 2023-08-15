import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Jobs from "./Pages/Jobs";
import JobsDescription from "./Pages/JobsDescription";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job-desc" element={<JobsDescription />} />
      </Routes>
    </div>
  );
}

export default App;
