import React from "react";
import Navbar from "./Navbar";
import MainPic from "./Mainpic";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ScrollToTop from "react-scroll-to-top";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
// import taiwan from '../images/taiwan-cover.jpg';

const useStyles = makeStyles((theme) => ({
  home: {
    backgroundColor: "black",
  },
  button: {
    color: theme.palette.common.white,
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,.6)",
    width: "14em",
    padding: "8px 40px",
    fontSize: "16px",
    marginTop: "32em",
    position: "absolute",
    zIndex: 1,
  },
  homebg: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    marginTop: "2.5em",
    marginBottom: "2em",
    marginRight: "2em",
    marginLeft: "2em",
    backgroundColor: "#626262",
    color: "white",
    borderRadius: "10px",
    width: "20em",
    textAlign: "center",
  },
  photo: {
    height: 0,
    paddingTop: "56.25%",
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

export default function Homepage() {
  const classes = useStyles();

  return (
    <div>
      <Grid>
        <Grid>
          <AnchorLink href="#content" className={classes.homebg}>
            <Button variant="outlined" className={classes.button}>
              了解更多
            </Button>
          </AnchorLink>
        </Grid>
        <Grid>
          <MainPic post={mainPic} />
        </Grid>
        <Grid>
          <Navbar num={0} />
        </Grid>
        <Grid id="content" container className={classes.home}>
          <Grid item xs={12} md={6} className={classes.homebg}>
            <Card className={classes.card}>
              <CardActionArea href="/scenicSpot">
                <CardContent>
                  <Typography>全部景點列表</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} className={classes.homebg}>
            <Card className={classes.card}>
              <CardActionArea href="/scenicSpot/Taipei">
                <CardContent>
                  <Typography>縣市景點列表</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
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
