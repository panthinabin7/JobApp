import classes from "./ShowJobs.module.scss";

import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";

import { featuredJobs } from "../../Constant/const";
const ShowJobs = () => {
  return (
    <div className={classes.main}>
      <div className={classes.top}>
        <div>
          <p>Show 10 jobs</p>
        </div>
        <div className={classes["form-container"]}>
          <form>
            <select name="" id="">
              <option value="">short by (default)</option>
              <option value="">Newest</option>
              <option value="">Oldest</option>
            </select>
            <select name="sort" id="sort">
              <option value="">All</option>
              <option value="">10 per page</option>
              <option value="">20 per page</option>
              <option value="">30 per page</option>
            </select>
          </form>
        </div>
      </div>
      <div className={classes["jobs-container"]}>
        {featuredJobs.map((job) => (
          <div key={job.id} className={classes.jobs}>
            <div className={classes.icon}>
              <img
                src="https://img.freepik.com/free-psd/logo-mockup-panel-wall_511564-1493.jpg?w=1060&t=st=1691468116~exp=1691468716~hmac=df889df7f2b7785fd300a7a1d03edabc2ed8de202c34074770d65c6aad1426ae"
                alt=""
                height={50}
                width={50}
                className={classes.img}
              />
            </div>
            <div className={classes["job-detail"]}>
              <h3>{job.title}</h3>
              <div className={classes.details}>
                <div>
                  <BusinessCenterOutlinedIcon />
                  <p>{job.cat}</p>
                </div>
                <div>
                  <LocationOnOutlinedIcon />
                  <p>{job.location}</p>
                </div>
                <div>
                  <AccessTimeOutlinedIcon />
                  <p>{job.time}</p>
                </div>
                <div>
                  <LocalAtmOutlinedIcon />
                  <p>{job.salary}</p>
                </div>
              </div>
              <div className={classes["type-container"]}>
                <p className={classes.blue}># Part-Time</p>
                <p className={classes.green}># Private</p>
                <p className={classes.orange}># Urgent</p>
              </div>
            </div>
          </div>
        ))}

        <button>Load More</button>
      </div>
    </div>
  );
};

export default ShowJobs;
