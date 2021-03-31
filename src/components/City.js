import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import "./Basic.css";
import { useParams } from "react-router-dom";
import loadinggif from "../images/loading.gif";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    marginTop: "3.5em",
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
  },
  load: {
    // display: "none",
    backgroundColor: "black",
    color: "black",
    width: "0.1px",
  },
  loading: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  loadinggifdiv: {
    textAlign: "center",
  },
}));

export default function City() {
  const classes = useStyles();
  const params = useParams();
  const city = params.city;
  const [cityspot, setCityspot] = React.useState([]);
  // const spotList = ["Picture", "Name", "Description"];
  const [citycount, setCitycount] = useState(0);
  const [loading, setLoading] = useState(false);

  console.log(citycount);
  console.log(cityspot);

  const fetchCityspot = async (count) => {
    const res = await fetch(
      `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=30&$skip=${citycount}`
    );
    const data = await res.json();
    console.log(data);
    setCityspot((cityspot) => [...cityspot, ...data]);
    setLoading(true);
  };

  useEffect(() => {
    fetchCityspot(citycount);
  }, [citycount]);

  const loadMore = () => {
    setCitycount((prevcitycount) => prevcitycount + 30);
  };

  const cityspotEnd = useRef();

  let num = 0;
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            num += 30;
            console.log(num);
            loadMore();
            loadmorespot();
            console.log(cityspot.length);
            if (num > cityspot.length) {
              observer.unobserve(cityspotEnd.current);
            }
          }
          console.log(entries);
        },
        { root: null, rootMargin: "0px", threshold: 0.9 }
      );
      observer.observe(cityspotEnd.current);
    }
  }, [loading, num]);

  function loadmorespot() {
    return (
      <div className={classes.loading}>
        <div className={classes.loadinggifdiv}>
          <img src={loadinggif} alt="" />
        </div>
      </div>
    );
  }
  // console.log(cityspot);

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios.get(
  //       `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=30`
  //       );
  //       setCityspot(result.data);
  //       // console.log(spot);
  //       console.log("fetch");
  //     }

  //     fetchData();
  //   }, []);

  //   const handleChangeCount = () => {
  //     setCitycount(citycount + 30);
  // }

  // const useElementOnScreen = (options) => {
  //   const containerRef = useRef(null);
  //   const [isVisible, setIsVisible] = useState(false);

  //   const callbackFunction = (entries) => {
  //     const [entry] = entries;
  //     setIsVisible(entry.isIntersecting);
  //     // console.log(isVisible);
  //   };

  //   // const options = {
  //     //   root: null,
  //     //   rootMargin: "0px",
  //     //   threshold: 1.0,
  //     // };
  //     async function fetchMoredata() {

  //       const results = await axios.get(
  //         `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=30&$skip=${citycount}`
  //         //   https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/LienchiangCounty?$top=30&$skip=30
  //         );

  //         // console.log(results.data);
  //       if(cityspot.length===citycount){

  //         setCityspot(cityspot.concat(results.data));
  //         handleChangeCount();
  //         console.log("cityspot added");
  //       }
  //       // console.log(count);
  //       // console.log(results);
  //       // console.log(spot);
  //       console.log(city);
  //       console.log(citycount);
  //       console.log("fetchmore");
  //     }
  //     useEffect(() => {
  //       const observer = new IntersectionObserver(callbackFunction, options);
  //       // console.log(isVisible);
  //       if (containerRef.current) {
  //         observer.observe(containerRef.current);
  //         // setCount(count + 30);
  //       }

  //       if (isVisible === true && citycount <= cityspot.length) {
  //         fetchMoredata();
  //         console.log("setvisible");

  //         setIsVisible(false);
  //       }

  //       return () => {
  //         if (containerRef.current) observer.unobserve(containerRef.current);
  //       };
  //     }, [containerRef, options, isVisible]);

  //   return [containerRef, isVisible];
  // };

  // function Basic() {
  //   const [containerRef, isVisible] = useElementOnScreen({
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 1.0,
  //   });

  //   // console.log(isVisible);

  //   return (
  //     <div className="app">
  //       {/* <div className="isVisible">{isVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}</div> */}
  //       {/* <div className="section">{count}</div> */}
  //       <div className="box" ref={containerRef}></div>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.gridbox}
      >
        {cityspot.map((cityspots, index) => (
          <Grid item xs={12} md={6}>
            <div className={classes.content}>
              <Card className={classes.card}>
                <CardActionArea component="a" href="#">
                  <div className={classes.cardDetails}>
                    <CardContent>
                      {/* <Typography component="h2" variant="h5"> */}
                      {/* {post.title} */}
                      <CardMedia
                        image={cityspots["Picture"].PictureUrl1}
                        className={classes.photo}
                      />
                      {/* </Typography> */}
                      <Typography variant="subtitle1" color="inherit">
                        {cityspots["Name"]}
                        {/* {post.date} */}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {cityspots["Description"]}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
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
        {/* {Basic()} */}

        <div className={classes.loading}>
          <div className={classes.loadinggifdiv}>
            <Button
              className={classes.load}
              onClick={loadMore}
              ref={cityspotEnd}
            >
              L
            </Button>
          </div>
        </div>
      </Grid>
    </div>
  );
}

// Featuredpic.propTypes = {
//   post: PropTypes.object,
// };
