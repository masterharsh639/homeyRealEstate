import Grid from "@mui/material/Grid";
import logo from "../../assest/Homeey-logo.png";
import './headersection.css';

const HeaderSection = () => {
  return (
    <Grid container xs={12} md={10} sm={10} xl={10}>
      <Grid item xs={12} sm={3} md={3} xl={3}>
        <img src={logo} alt="logo" />
      </Grid>
      <Grid item xs={12} sm={3} md={3} xl={3} className="navbar">
        <p>Home</p>
        <p>Property</p>
        <p>About</p>
        <p>Review</p>
        <p>Blog</p>
        <p>Contact</p>
      </Grid>
      <Grid item xs={12} sm={3} md={3} xl={3} className="">
        <p>Sign In</p>
        <button>Sign Up</button>
      </Grid>
    </Grid>
  );
};

export default HeaderSection;
