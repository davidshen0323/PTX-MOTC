import React, { useRef, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";

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
}));

export default function City() {
  const classes = useStyles();
  const params = useParams();
  const city = params.city;
  const [cityspot, setCityspot] = React.useState([]);
  const [citycount, setCitycount] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchCityspot = async (citycount) => {
    const res = await fetch(
      `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$top=30&$skip=${citycount}`
    );
    const data = await res.json();
    // console.log(data);
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
  const citylength = useRef();

  citylength.current = cityspot.length;
  let num = 0;
  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            num += 30;
            // console.log(num);
            loadMore();
            // console.log(citylength.current);
            if (num > citylength.current) {
              observer.unobserve(cityspotEnd.current);
            }
          }
          // console.log(entries);
        },
        { root: null, rootMargin: "0px", threshold: 0.9 }
      );
      observer.observe(cityspotEnd.current);
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
        {cityspot.map((cityspots, index) => (
          <Grid item xs={12} md={6}>
            <div className={classes.content}>
              <Card className={classes.card}>
                <CardActionArea component="a" href="#">
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <CardMedia
                        image={cityspots["Picture"].PictureUrl1}
                        className={classes.photo}
                      />
                      <Typography variant="subtitle1" color="inherit">
                        {cityspots["Name"]}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {cityspots["Description"]}
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
          <Button
            className={classes.load}
            onClick={loadMore}
            ref={cityspotEnd}
            disabled
          >
            L
          </Button>
        </div>
      </div>
    </div>
  );
}
