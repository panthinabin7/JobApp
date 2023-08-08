import FeatureJobs from "../Components/FeatureJobs";
import NavBar from "../Components/NavBar";
import PopularJobs from "../Components/PopularJobs";
import RecommendJobs from "../Components/RecommendJobs";
import SearchJobs from "../Components/SearchJobs";
const Home = () => {
  return (
    <div>
      <NavBar />
      <SearchJobs />
      <RecommendJobs />
      <PopularJobs />
      <FeatureJobs />
    </div>
  );
};

export default Home;
