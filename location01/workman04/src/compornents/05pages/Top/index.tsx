import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import TopLayout from "../../04templates/TopLayout";

const Top: FC = () => {
  const [locationData, setLocationData] = useState([]);

  const getData = () => {
    const url = "http://localhost:3000/LocationData";
    axios
      .get(url)
      .then((res) => {
        setLocationData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TopLayout locationData={locationData} />
    </>
  );
};

export default Top;
