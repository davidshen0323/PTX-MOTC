// import React, { useEffect } from "react";
// import Navbar from "./Navbar";
// import axios from "axios";
// import Featuredpic from "./Featuredpic";

// export default function Scenicspot() {
//   const [spot, setSpot] = React.useState([]);
//   const spotList = ["Name", "Description"];

//   // useEffect(() => {
//   //   async function fetchData() {
//   //     const result = await axios.get(
//   //       `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot`
//   //     );
//   //     setSpot(result.data);
//   //     // console.log(result);
//   //   }

//   //   fetchData();
//   // }, []);

//   // console.log(spot);
//   return (
//     <div>
//       {/* <Navbar num={1}/> */}
//       <Featuredpic />
//     </div>
//   );
// }


import React from "react";
import Navbar from "./Navbar";
import MainPic from "./Mainpic";
import FeaturedPic from "./Featuredpic";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Scenicspot from "./Scenicspot";
// import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Featuredpic from "./Featuredpic";
import ScrollToTop from "react-scroll-to-top";


const useStyles = makeStyles((theme) => ({
  //   img: {
  //     : "rgba(0,0,0,.3)",
  //   }
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
    // marginBottom: "30em",
    marginTop: "34em",
    position: 'absolute',
    zIndex: 1,
  },
  homebg: {
    // zIndex: 1,
    // marginLeft: 'auto',
    // marginRight: 'auto',
    display: 'flex',
    // textAlign: 'center',
    // justifyItems: 'center',
    // justifySelf: 'center',
    justifyContent: 'center',
    // alignContent: 'center',
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

// const featuredPic = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
// ];

export default function Sceincspot() {
  const classes = useStyles();
 
  return (
    <div>
   
      <Grid
      // container
      // direction="row"
      // justify="center"
      // alignItems="center"

      //   spacing={2}
      >
        <Grid>
          <AnchorLink href="#content" className={classes.homebg}>
          <Button variant="outlined" className={classes.button}>
            了解更多
          </Button>
          </AnchorLink>
        </Grid>
        <Grid>
          <MainPic post={mainPic}/>
          {/* <img
              className={classes.img}
              src={require("../images/taiwan.jpg").default}
              alt=""
            /> */}
        </Grid>
        <Grid id="content">
          {/* <Button>了解更多</Button> */}
          <Navbar num={1} />
        </Grid>
        <Grid container className={classes.home}>
          <Featuredpic />
          {/* {featuredPic.map((post) => (
              <FeaturedPic key={post.title} post={post} />
            ))} */}
        </Grid>
        <ScrollToTop smooth color="white" style={{backgroundColor: "black"}} />
      </Grid>
      </div>
    
  );
}
