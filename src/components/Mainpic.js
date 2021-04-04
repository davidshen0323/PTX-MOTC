import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import taiwan from "../images/taiwan.jpg";

const useStyles = makeStyles((theme) => ({
  mainPic: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(0),
    backgroundImage: `url(${taiwan})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainPicContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(10),
    },
    textAlign: "center",
    marginTop: "10em",
    marginLeft: "auto",
    marginRight: "auto",
  },

  title: {
    fontSize: "3em",
  },
}));

export default function Mainpic(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.mainPic}>
      <div className={classes.overlay} />
      <Grid container>
        <div className={classes.mainPicContent}>
          <Grid item>
            <Typography className={classes.title} color="inherit" gutterBottom>
              {post.title}
            </Typography>
          </Grid>
          <Grid item></Grid>
        </div>
      </Grid>
    </Paper>
  );
}

Mainpic.propTypes = {
  post: PropTypes.object,
};
