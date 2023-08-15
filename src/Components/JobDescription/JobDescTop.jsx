import classes from "./JobDescTop.module.scss";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import { featuredJobs } from "../../Constant/const";

const JobDescTop = () => {
  return (
    <div className={classes.top}>
      <div className={classes.detail}>
        <div key={featuredJobs[0].id} className={classes.jobs}>
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
            <h3>{featuredJobs[0].title}</h3>
            <div className={classes.details}>
              <div>
                <BusinessCenterOutlinedIcon />
                <p>{featuredJobs[0].cat}</p>
              </div>
              <div>
                <LocationOnOutlinedIcon />
                <p>{featuredJobs[0].location}</p>
              </div>
              <div>
                <AccessTimeOutlinedIcon />
                <p>{featuredJobs[0].time}</p>
              </div>
              <div>
                <LocalAtmOutlinedIcon />
                <p>{featuredJobs[0].salary}</p>
              </div>
            </div>
            <div className={classes["type-container"]}>
              <p className={classes.blue}># Part-Time</p>
              <p className={classes.green}># Private</p>
              <p className={classes.orange}># Urgent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescTop;
