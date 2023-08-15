import classes from "./Segment.module.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Segment = () => {
  return (
    <div className={classes["overview-container"]}>
      <div className={classes.role}>
        <img
          src="https://img.freepik.com/free-psd/logo-mockup-panel-wall_511564-1493.jpg?w=1060&t=st=1691468116~exp=1691468716~hmac=df889df7f2b7785fd300a7a1d03edabc2ed8de202c34074770d65c6aad1426ae"
          alt=""
          height={50}
          width={50}
        />
        <div>
          <h3>IBM</h3>
          <p>View company profile</p>
        </div>
      </div>
      <div className={classes.info}>
        <h3>Primary industry</h3>
        <p>Software</p>
      </div>
      <div className={classes.info}>
        <h3>Company Size:</h3>
        <p>501-1000</p>
      </div>
      <div className={classes.info}>
        <h3>Found in:</h3>
        <p>2011</p>
      </div>
      <div className={classes.info}>
        <h3>Phone:</h3>
        <p>123 456 7890</p>
      </div>
      <div className={classes.info}>
        <h3>Email: </h3>
        <p>info@joio.com</p>
      </div>
      <div className={classes.info}>
        <h3>Location</h3>
        <p>London, Uk</p>
      </div>
      <div className={classes.info}>
        <h3>Social Media:</h3>
        <p>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </p>
      </div>
    </div>
  );
};

export default Segment;
