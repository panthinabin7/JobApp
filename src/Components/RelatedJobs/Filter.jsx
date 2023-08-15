import classes from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={classes["filter-container"]}>
      <div className={classes["form-container"]}>
        <form className={classes["form-container"]}>
          <div className={classes.form}>
            <label className={classes.label} htmlFor="job-title">
              Search by Keywords
            </label>
            <input
              className={classes["input-filter"]}
              type="text"
              id="job-title"
              placeholder="Eg. React"
            />
            <label className={classes.label} htmlFor="location">
              Location
            </label>
            <input
              className={classes["input-filter"]}
              type="text"
              id="location"
              placeholder="Delhi"
            />
          </div>
          <div className="check-container">
            <label className={classes.label} htmlFor="">
              Job Types
            </label>
            <div className={classes["individual-checkbox"]}>
              <input type="checkbox" id="freelancer" />
              <label className={classes["label-checkbox"]} htmlFor="freelancer">
                Freelancer
              </label>
            </div>
            <div className={classes["individual-checkbox"]}>
              <input type="checkbox" id="full-Time" />
              <label className={classes["label-checkbox"]} htmlFor="full-Time">
                Full Time
              </label>
            </div>
            <div className={classes["individual-checkbox"]}>
              <input type="checkbox" id="part-time" />
              <label className={classes["label-checkbox"]} htmlFor="part-time">
                Part Time
              </label>
            </div>
            <div className={classes["individual-checkbox"]}>
              <input type="checkbox" id="temporary" />
              <label className={classes["label-checkbox"]} htmlFor="temporary">
                Temporary
              </label>
            </div>
          </div>
          <div className={classes["select-container"]}>
            <h3>Experience</h3>
            <select name="exp" id="exp" className={classes.experience}>
              <option value="fresher">Fresher</option>
              <option value="1years">1 yrs</option>
              <option value="2years">2 yrs</option>
              <option value="3years">3 yrs</option>
              <option value="4years">4 yrs</option>
              <option value="5years">5 yrs</option>
              <option value="6years">6 yrs</option>
              <option value="6+years">6+ yrs</option>
            </select>
          </div>
        </form>
      </div>
      <h3>Tags</h3>
      <div className={classes["tag-container"]}>
        <div>
          <p>App</p>
        </div>
        <div>
          <p>Administrative</p>
        </div>
        <div>
          <p>Android</p>
        </div>
        <div>
          <p>Wordpress</p>
        </div>
        <div>
          <p>Design</p>
        </div>
        <div>
          <p>React</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
