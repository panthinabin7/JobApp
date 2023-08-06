import classes from "./NavBar.module.css";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className={classes["nav-container"]}>
      <div className={classes.logo}>
        <img src={logo} alt="" height={50} width={50} />
        <h3>Nabin</h3>
      </div>
      <div className={classes["nav-bar"]}>
        <ul className={classes.nav}>
          <li>Name</li>
          <li>Home</li>
          <li>FindJobs</li>
          <li>Jobs for you</li>
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
