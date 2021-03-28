import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
// import Basic from "./Basic";
import "./Basic.css";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    marginTop: "2em",
    marginBottom: "2em",
    marginRight: "2em",
    marginLeft: "2em",
    backgroundColor: "#626262",
    color: "white",
    borderRadius: "10px",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  content: {
    backgroundColor: "black",
  },
  gridbox: {
    margin: theme.spacing(0),
  },
  photo: {
    height: 0,
    paddingTop: "56.25%",
  }
}));

export default function Featuredpic(props) {
  const classes = useStyles();
  const { post } = props;
  const [spot, setSpot] = React.useState([]);
  // const spotList = ["Picture", "Name", "Description"];
  const [count, setCount] = useState(30);
  console.log(count);
  console.log(spot);


  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30`
      );
      setSpot(result.data);
      // console.log(spot);
    }

    fetchData();
  }, []);

  
  
  const handleChangeCount = () => {
    setCount(count + 30);
  }
  
  const useElementOnScreen = (options) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    
    const callbackFunction = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
      // console.log(isVisible);
    };
    
    // const options = {
      //   root: null,
      //   rootMargin: "0px",
      //   threshold: 1.0,
      // };
      async function fetchData() {
        const results = await axios.get(
          `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$skip=${count}&$top=30`
        );

        // console.log(results.data);
        if(spot.length===count){

          setSpot(spot.concat(results.data));
          handleChangeCount();

        }
        // console.log(count);
        // console.log(results);
        // console.log(spot);
      }
      useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        // console.log(isVisible);
        if (containerRef.current) {
          observer.observe(containerRef.current);
          // setCount(count + 30);
        }
        if (isVisible === true) {
          fetchData(); 
          setIsVisible(false);
        }

      return () => {
        if (containerRef.current) observer.unobserve(containerRef.current);
      };
    }, [containerRef, options, isVisible]);
    
    return [containerRef, isVisible];
  };


  function Basic() {
    const [containerRef, isVisible] = useElementOnScreen({
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    // console.log(isVisible);

    return (
      <div className="app">
        {/* <div className="isVisible">{isVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}</div> */}
        {/* <div className="section">{count}</div> */}
        <div className="box" ref={containerRef}></div>
      </div>
    );
  }

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.gridbox}
      >
        {spot.map((spots, index) => (
          <Grid item xs={12} md={6}>
            <div className={classes.content}>
              <Card className={classes.card}>
                <CardActionArea component="a" href="#">
                  <div className={classes.cardDetails}>
                    <CardContent>
                      {/* <Typography component="h2" variant="h5"> */}
                      {/* {post.title} */}
                      <CardMedia
                      image={spots['Picture'].PictureUrl1}
                      className={classes.photo}
                    />
                      {/* </Typography> */}
                      <Typography variant="subtitle1" color="inherit">
                        {spots["Name"]}
                        {/* {post.date} */}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {spots["Description"]}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="primary"
                      >
                        {/* {spots["Picture"].PictureUrl1} */}
                      </Typography>
                    </CardContent>
                  </div>
                  {/* <Hidden xsDown>
                  <CardMedia
                  className={classes.cardMedia}
                  image={post.image}
                  title={post.imageTitle}
                  />
                </Hidden> */}
                </CardActionArea>
              </Card>
            </div>
          </Grid>
        ))}
        {Basic()}
      </Grid>
    </div>
  );
}

Featuredpic.propTypes = {
  post: PropTypes.object,
};
