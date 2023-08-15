import NavBar from "../Components/HomePageComponent/NavBar/NavBar";
import Filter from "../Components/RelatedJobs/Filter";
import ShowJobs from "../Components/RelatedJobs/ShowJobs";
import classes from "./Jobs.module.scss";

const Jobs = () => {
  return (
    <div className="main-container">
      <NavBar />
      <div className={classes.find}>
        <h1>Find Jobs</h1>
      </div>
      <div className={classes.content}>
        <Filter />
        <ShowJobs />
      </div>
    </div>
  );
};

export default Jobs;
