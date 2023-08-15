import Card from "../../../UI/Card";
import classes from "./RecommendedJobs.module.css";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { RecJob } from "../../../Constant/const";

const RecommendJobs = () => {
  return (
    <div className={classes["job-container"]}>
      <div className={classes.upper}>
        <h1>Recommended Jobs</h1>
        <p>
          view all <KeyboardArrowLeftIcon />
          <KeyboardArrowRightIcon />
        </p>
      </div>
      <div className={classes["card-container"]}>
        {RecJob.map((job) => (
          <Card key={job.id}>
            <p className={classes.date}>{job.date}</p>
            <ul className={classes.job}>
              <li>
                <span className={classes.title}>{job.title}</span>
              </li>
              <li>{job.companyName}</li>
            </ul>
            <div className={classes.experience}>
              <ul>
                <li>
                  <CircleIcon />
                  {job.experience}
                </li>
                <li>
                  <CircleIcon />
                  {job.city}
                </li>
              </ul>
            </div>
            <div className={classes["button-container"]}>
              <button>Interest</button>
              <button>Apply</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecommendJobs;
