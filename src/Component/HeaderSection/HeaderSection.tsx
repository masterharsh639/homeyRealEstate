import Grid from "@mui/material/Grid";
import logo from "../../assest/Homeey-logo.png";
import "./headersection.css";

const HeaderSection = () => {
  return (
    <Grid
      container
      xs={12}
      md={12}
      sm={12}
      xl={12}
      className="header-section page-section"
    >
      <Grid item xs={12} sm={1} md={1} xl={1}>
        <img src={logo} alt="logo" />
      </Grid>
      <Grid item xs={12} sm={4} md={4} xl={4} className="navbar">
        <p className="grey-20">Home</p>
        <p className="grey-20">Property</p>
        <p className="grey-20">About</p>
        <p className="grey-20">Review</p>
        <p className="grey-20">Blog</p>
        <p className="grey-20">Contact</p>
      </Grid>
      <Grid item xs={12} sm={2} md={2} xl={2} className="navbar-button">
        <p className="grey-20">Sign In</p>
        <button className="signup-button">Sign Up</button>
      </Grid>
    </Grid>
  );
};

export default HeaderSection;
