import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";

const Loader = () => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} md={6} lg={4} style={{ textAlign: "center" }}>
        <CircularProgress size={200} thickness={1} color="primary" />
      </Grid>
    </Grid>
  );
};

export default Loader;
