import SearchIcon from "@mui/icons-material/Search";
import classes from "./SearchJobs.module.css";
const SearchJobs = () => {
  return (
    <div className={classes["job-search-container"]}>
      <h3>
        Explore <span className={classes.span}>500,000+ jobs</span>
      </h3>
      <form>
        <input type="text" id="search" />
        <div className={classes.icon}>
          <SearchIcon />
        </div>
      </form>
    </div>
  );
};

export default SearchJobs;
