import React from "react";
import { Grid } from "@material-ui/core";
import DataCard from "../components/DataCards";

const GlobalDataScreen = () => {
  return (
    <Grid container justify="center" spacing={3}>
      <Grid item lg={3} md={4} xs={12}>
        <DataCard color="#cc00ff" heading="Total Cases" />
      </Grid>
      <Grid item lg={3} md={4} xs={12}>
        <DataCard color="#33cc33" heading="Total Recovered" />
      </Grid>
      <Grid item lg={3} md={4} xs={12}>
        <DataCard color="#ff0000" heading="Total Deaths" />
      </Grid>
    </Grid>
  );
};

export default GlobalDataScreen;
