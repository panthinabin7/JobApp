import classes from "./JobsDescription.module.scss";
import NavBar from "../Components/HomePageComponent/NavBar/NavBar";
import JobDescMain from "../Components/JobDescription/JobDescMain";
const JobsDescription = () => {
  return (
    <div className={classes["job-description"]}>
      <NavBar />
      <div className={classes[".description-container"]}>
        <JobDescMain />
      </div>
    </div>
  );
};

export default JobsDescription;
