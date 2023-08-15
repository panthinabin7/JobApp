import classes from "./NavBar.module.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={classes["nav-container"]}>
      <div className={classes.logo}>
        <img src={logo} alt="" height={50} width={50} />
        <h3>Nabin</h3>
      </div>
      <div className={classes["nav-bar"]}>
        <ul className={classes.nav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">FindJobs</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs for you</Link>
          </li>
        </ul>
      </div>
      <div className={classes.info}>
        <ul className={classes.infoUl}>
          <li>upload cv</li>
          <li>LogIn/Register</li>
          <li>Job Post</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
