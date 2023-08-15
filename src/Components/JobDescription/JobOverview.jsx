import classes from "./JobOverview.module.scss";

const JobOverview = () => {
  return (
    <div className={classes["overview-container"]}>
      <div>
        <h3>Date Posted:</h3>
        <p>posted 1 hours ago</p>
      </div>
      <div>
        <h3>Expiration date:</h3>
        <p></p>
      </div>
      <div>
        <h3>Location</h3>
        <p>London, Uk</p>
      </div>
      <div>
        <h3>Date Posted</h3>
        <p>Designer</p>
      </div>
      <div>
        <h3>Job Title: </h3>
        <p>Designer</p>
      </div>
      <div>
        <h3>Hours</h3>
        <p>50h / week</p>
      </div>
      <div>
        <h3>Rate:</h3>
        <p>$15-$25 / hour</p>
      </div>
      <div>
        <h3>Salary:</h3>
        <p>$35k-$45k</p>
      </div>
    </div>
  );
};

export default JobOverview;
