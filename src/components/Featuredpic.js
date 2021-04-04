import React, { useRef, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
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

export default function Featuredpic() {
  const classes = useStyles();
  const [spot, setSpot] = React.useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // console.log(count);
  // console.log(spot);

  const fetchSpot = async (count) => {
    const res = await fetch(
      `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$skip=${count}`
    );
    const data = await res.json();
    // console.log(data);
    setSpot((spot) => [...spot, ...data]);
    setLoading(true);
  };

  useEffect(() => {
    fetchSpot(count);
  }, [count]);

  const loadMore = () => {
    setCount((prevCount) => prevCount + 30);
  };

  const spotEnd = useRef();

  const spotlength = useRef();

  let num = 0;
  spotlength.current = spot.length;
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            num += 30;
            // console.log(num);
            loadMore();
            // console.log(spotlength.current);
            if (num > spotlength.current) {
              observer.unobserve(spotEnd.current);
            }
          }
          // console.log(entries);
        },
        { root: null, rootMargin: "0px", threshold: 0.9 }
      );
      observer.observe(spotEnd.current);
    }
  }, [loading, num]);

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
                      <CardMedia
                        image={spots["Picture"].PictureUrl1}
                        className={classes.photo}
                      />
                      <Typography variant="subtitle1" color="inherit">
                        {spots["Name"]}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {spots["Description"]}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="primary"
                      ></Typography>
                    </CardContent>
                  </div>
                </CardActionArea>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
      <div className={classes.loading}>
        <div className={classes.loadinggifdiv}>
          <img src={loadinggif} alt="" />
        </div>
        <div className={classes.loadinggifdiv}>
          <Button className={classes.load} onClick={loadMore} ref={spotEnd}>
            L
          </Button>
        </div>
      </div>
    </div>
  );
}
