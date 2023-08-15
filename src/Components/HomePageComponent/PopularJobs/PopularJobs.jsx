import classes from "./PopularJobs.module.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { popularJobs } from "../../../Constant/const";

const PopularJobs = () => {
  return (
    <div className={classes.main}>
      <div className={classes["title-container"]}>
        <h1>Popular Jobs Categories</h1>
        <p>2023 jobs lives-293 added today</p>
      </div>
      <div className={classes["jobs-container"]}>
        {popularJobs.map((job) => (
          <div key={job.id} className={classes.jobs}>
            <div className={classes.icon}>
              <AccountBalanceWalletIcon />
            </div>

            <div className={classes["job-detail"]}>
              <h4>{job.title}</h4>
              <p>({job.number} open position)</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularJobs;
