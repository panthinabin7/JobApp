import classes from "./RecommendedJobs.module.css";
import CircleIcon from "@mui/icons-material/Circle";
const RecommendJobs = () => {
  return (
    <div className={classes["job-container"]}>
      <div className={classes.upper}>
        <h3>Recommended Jobs</h3>
        <p>view all</p>
      </div>
      <div className={classes["card-container"]}>
        <div className={classes.details}>
          <p className={classes.date}>jul 21, 2023</p>
          <ul className={classes.job}>
            <li>
              <span className={classes.title}>Front-End Developer</span>
            </li>
            <li>companyName</li>
          </ul>
          <div className={classes.experience}>
            <ul>
              <li>
                <CircleIcon />
                2-4years
              </li>
              <li>
                <CircleIcon />
                city
              </li>
            </ul>
          </div>
          <div className={classes["button-container"]}>
            <button>Interest</button>
            <button>Apply</button>
          </div>
        </div>
        <div className={classes.details}>
          <p className={classes.date}>jul 21, 2023</p>
          <ul className={classes.job}>
            <li>
              <span className={classes.title}>Front-End Developer</span>
            </li>
            <li>companyName</li>
          </ul>
          <div className={classes.experience}>
            <ul>
              <li>
                <CircleIcon />
                2-4years
              </li>
              <li>
                <CircleIcon />
                city
              </li>
            </ul>
          </div>
          <div className={classes["button-container"]}>
            <button>Interest</button>
            <button>Apply</button>
          </div>
        </div>
        <div className={classes.details}>
          <p className={classes.date}>jul 21, 2023</p>
          <ul className={classes.job}>
            <li>
              <span className={classes.title}>Front-End Developer</span>
            </li>
            <li>companyName</li>
          </ul>
          <div className={classes.experience}>
            <ul>
              <li>
                <CircleIcon />
                2-4years
              </li>
              <li>
                <CircleIcon />
                city
              </li>
            </ul>
          </div>
          <div className={classes["button-container"]}>
            <button>Interest</button>
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendJobs;
