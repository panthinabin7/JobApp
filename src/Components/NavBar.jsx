import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <div className={classes["nav-container"]}>
        <ul className={classes.nav}>
          <li className={classes.navName}></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
