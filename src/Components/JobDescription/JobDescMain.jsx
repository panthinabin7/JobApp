import classes from "./JobDescMain.module.scss";
import JobDescTop from "./JobDescTop";
import { jobDesc } from "../../Constant/const";
import JobDescReccommendation from "./JobDescReccommendation";
import JobOverview from "./JobOverview";
import Segment from "./Segment";

const JobDescMain = () => {
  return (
    <div className={classes.main}>
      <JobDescTop />
      <div className={classes["desc-container"]}>
        <div className={classes["content-container"]}>
          <div className={classes.desc}>
            <h3>Job Description</h3>
            <p>{jobDesc.desc}</p>
          </div>

          <div className={classes["responsibility container"]}>
            <h3>Key Responsibility</h3>
            <p>
              {jobDesc.responsibility.split(".").map((point, i) => (
                <ul key={i}>
                  <li>{point}</li>
                </ul>
              ))}
            </p>
          </div>

          <div className={classes["skill-container"]}>
            <h3>Skill & Experience</h3>
            <p>
              {jobDesc.skills.split(".").map((point, i) => (
                <ul key={i}>
                  <li>{point}</li>
                </ul>
              ))}
            </p>
          </div>
          <JobDescReccommendation />
        </div>
        <div className={classes["overview-container"]}>
          <JobOverview />
          <Segment />
        </div>
      </div>
    </div>
  );
};

export default JobDescMain;
