import classes from "./PopularJobs.module.css";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
const PopularJobs = () => {
  return (
    <div className={classes.main}>
      <div className={classes["title-container"]}>
        <h1>Popular Jobs Categories</h1>
        <h7>2023 jobs lives-293 added today</h7>
      </div>
      <div className={classes["jobs-container"]}>
        <div className={classes.jobs}>
          <div className={classes.icon}>
            <AccountBalanceWalletIcon />
          </div>

          <div className={classes["job-detail"]}>
            <h4>Accounting</h4>
            <p>(2 open position)</p>
          </div>
        </div>

        <div className={classes.jobs}>
          <div className={classes.icon}>
            <AccountBalanceWalletIcon />
          </div>
          <div className={classes["job-detail"]}>
            <h4>Accounting</h4>
            <p>(2 open position)</p>
          </div>
        </div>

        <div className={classes.jobs}>
          <div className={classes.icon}>
            <AccountBalanceWalletIcon />
          </div>
          <div className={classes["job-detail"]}>
            <h4>Accounting</h4>
            <p>(2 open position)</p>
          </div>
        </div>

        <div className={classes.jobs}>
          <div className={classes.icon}>
            <AccountBalanceWalletIcon />
          </div>
          <div className={classes["job-detail"]}>
            <h4>Accounting</h4>
            <p>(2 open position)</p>
          </div>
        </div>

        <div className={classes.jobs}>
          <div className={classes.icon}>
            <AccountBalanceWalletIcon />
          </div>
          <div className={classes["job-detail"]}>
            <h4>Accounting</h4>
            <p>(2 open position)</p>
          </div>
        </div>

        <div className={classes.jobs}>
          <div className={classes.icon}>
            <AccountBalanceWalletIcon />
          </div>
          <div className={classes["job-detail"]}>
            <h4>Accounting</h4>
            <p>(2 open position)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularJobs;
