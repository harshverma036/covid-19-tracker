import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import DataCard from "../components/DataCards";

const GlobalDataScreen = () => {
  const [covidData, setCovidData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      setCovidData(fetchedData);
    };
    getData();
  }, []);

  const fetchData = async () => {
    const data = await axios.get("https://api.covid19api.com/summary");
    const finalData = await data.data;
    return finalData;
  };

  return !covidData.Global ? (
    "Loading..."
  ) : (
    <Grid container justify="center" spacing={3}>
      <DataCard data={covidData} />
    </Grid>
  );
};

export default GlobalDataScreen;
