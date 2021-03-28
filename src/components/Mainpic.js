import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import taiwan from "../images/taiwan.jpg";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(0),
    backgroundImage: `url(${taiwan})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // backgroundPosition: 'center',
    // marginTop: "10px",
    height: "60em",
    // width: "100%",

  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(10),
    //   paddingRight: 0,
    },
    // width: "100%",
    textAlign: "center",
    marginTop: "10em",
    marginLeft: "auto",
    marginRight: "auto",
  },
  // button: {
  //   color: theme.palette.common.white,
  //   fontWeight: "bold",
  //   backgroundColor: "rgba(0,0,0,.6)",
  //   width: "20em",
  //   padding: "8px 40px",
  //   fontSize: "16px",
  //   marginTop: "15em",
  // },

    title: {
      fontSize: "4em",
    },
}));

export default function Mainpic(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost}>
      {/* Increase the priority of the hero background image */}
      {/* {<img src={post.image} alt={post.imageText} />} */}
      <div className={classes.overlay} />
      <Grid container>
        <div className={classes.mainFeaturedPostContent}>
          <Grid item>
            <Typography
              // component="h1"
              // variant="h3"
              className={classes.title}
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
          </Grid>
          {/* <Grid item> */}
            {/* <Typography variant="h5" color="inherit" paragraph> */}
              {/* {post.description} */}
            {/* </Typography> */}
          {/* </Grid> */}
          <Grid item>
            {/* <Link variant="subtitle1" href="#"> */}
              {/* {post.linkText} */}
            {/* </Link> */}
            {/* <Button variant="outlined" className={classes.button}>
              了解更多
            </Button> */}
          </Grid>
        </div>
      </Grid>
    </Paper>
  );
}

Mainpic.propTypes = {
  post: PropTypes.object,
};
