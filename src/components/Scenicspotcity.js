import React from "react";
import Navbar from "./Navbar";
import MainPic from "./Mainpic";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import City from "./City";
import ScrollToTop from "react-scroll-to-top";

const useStyles = makeStyles((theme) => ({
  home: {
    backgroundColor: "black",
  },
  button: {
    color: theme.palette.common.white,
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,.6)",
    width: "18em",
    padding: "8px 40px",
    fontSize: "16px",
    marginTop: "34em",
    position: "absolute",
    zIndex: 1,
  },
  homebg: {
    display: "flex",
    justifyContent: "center",
  },
}));

const mainPic = {
  title: "MOTC 台灣景點趣",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "../images/taiwan.jpg",
  imgText: "main image description",
  linkText: "Continue reading…",
};

export default function Scenicspotcity() {
  const classes = useStyles();

  return (
    <div>
      <Grid>
        <Grid>
          <Navbar num={2} />
        </Grid>
        <Grid id="content" container className={classes.home}>
          <City />
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
