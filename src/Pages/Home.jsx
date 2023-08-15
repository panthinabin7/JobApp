import FeatureJobs from "../Components/HomePageComponent/FeatureJobs/FeatureJobs";
import NavBar from "../Components/HomePageComponent/NavBar/NavBar";
import PopularJobs from "../Components/HomePageComponent/PopularJobs/PopularJobs";
import RecommendJobs from "../Components/HomePageComponent/RecommendedJobs/RecommendJobs";
import SearchJobs from "../Components/HomePageComponent/Search/SearchJobs";
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
