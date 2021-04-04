import React from "react";
import Navbar from "./Navbar";
import SpotPic from "./Spotpic";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Featuredpic from "./Featuredpic";
import ScrollToTop from "react-scroll-to-top";

const useStyles = makeStyles((theme) => ({
  home: {
    backgroundColor: "black",
  },
  button: {
    color: theme.palette.common.white,
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,.6)",
    width: "10em",
    padding: "2px 10px",
    fontSize: "14px",
    marginTop: "13em",
    position: "absolute",
    zIndex: 1,
  },
  homebg: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Sceincspot() {
  const classes = useStyles();

  return (
    <div>
      <Grid>
        <Grid id="content">
          <Navbar num={1} />
        </Grid>
        <Grid container className={classes.home}>
          <Featuredpic />
        </Grid>
        <ScrollToTop
          smooth
          color="white"
          style={{ backgroundColor: "black" }}
        />
      </Grid>
    </div>
  );
}
