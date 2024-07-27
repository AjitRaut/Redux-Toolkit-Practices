import React from "react";
import axios from "axios";
import { useEffect } from "react";

const Mock_data = () => {
  const data = () => {
    axios
      .get("https://66a3b37244aa63704582330d.mockapi.io/restaurant")
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    data();
  }, []);
  return <></>;
};

export default Mock_data;
