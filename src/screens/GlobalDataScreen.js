import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container, Grid } from "@material-ui/core";
import Loader from "../components/Loader";
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
    <Box mt={10}>
      <Loader />
    </Box>
  ) : (
    <Container maxWidth="lg" style={{ marginTop: 100 }}>
      <Grid container justify="center" spacing={3}>
        <DataCard data={covidData} />
      </Grid>
    </Container>
  );
};

export default GlobalDataScreen;
