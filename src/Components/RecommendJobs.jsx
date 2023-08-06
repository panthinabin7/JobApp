import Card from "../UI/Card";
import classes from "./RecommendedJobs.module.css";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const job = [
  {
    id: "1",
    date: "jul 21, 2023",
    title: "Front-end Developer",
    companyName: "Google",
    experience: "0-5 yrs",
    city: "Dehradun",
  },
  {
    id: "2",
    date: "jul 21, 2023",
    title: "Front-end Developer",
    companyName: "Google",
    experience: "0-5 yrs",
    city: "Dehradun",
  },
  {
    id: "3",
    date: "jul 21, 2023",
    title: "Front-end Developer",
    companyName: "Google",
    experience: "0-5 yrs",
    city: "Dehradun",
  },
  {
    id: "4",
    date: "jul 21, 2023",
    title: "Front-end Developer",
    companyName: "Google",
    experience: "0-5 yrs",
    city: "Dehradun",
  },
  {
    id: "5",
    date: "jul 21, 2023",
    title: "Front-end Developer",
    companyName: "Google",
    experience: "0-5 yrs",
    city: "Dehradun",
  },
  {
    id: "6",
    date: "jul 21, 2023",
    title: "Front-end Developer",
    companyName: "Google",
    experience: "0-5 yrs",
    city: "Dehradun",
  },
  {
    id: "7",
    date: "jul 21, 2023",
    title: "Front-end Developer",
    companyName: "Google",
    experience: "0-5 yrs",
    city: "Dehradun",
  },
];

const RecommendJobs = () => {
  return (
    <div className={classes["job-container"]}>
      <div className={classes.upper}>
        <h3>Recommended Jobs</h3>
        <p>
          view all <KeyboardArrowLeftIcon />
          <KeyboardArrowRightIcon />
        </p>
      </div>
      <div className={classes["card-container"]}>
        {job.map((job) => (
          <Card key={job.id}>
            <p className={classes.date}>{job.date}</p>
            <ul className={classes.job}>
              <li>
                <span className={classes.title}>{job.title}</span>
              </li>
              <li>{job.companyName}</li>
            </ul>
            <div className={classes.experience}>
              <ul>
                <li>
                  <CircleIcon />
                  {job.experience}
                </li>
                <li>
                  <CircleIcon />
                  {job.city}
                </li>
              </ul>
            </div>
            <div className={classes["button-container"]}>
              <button>Interest</button>
              <button>Apply</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecommendJobs;
