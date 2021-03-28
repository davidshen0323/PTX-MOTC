import React, { useEffect } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Featuredpic from "./Featuredpic";

export default function Scenicspot() {
  const [spot, setSpot] = React.useState([]);
  const spotList = ["Name", "Description"];

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios.get(
  //       `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot`
  //     );
  //     setSpot(result.data);
  //     // console.log(result);
  //   }

  //   fetchData();
  // }, []);

  // console.log(spot);
  return (
    <div>
      {/* <Navbar num={1}/> */}
      <Featuredpic />
    </div>
  );
}
