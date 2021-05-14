import React from "react";
import { Paper, Box, Typography } from "@material-ui/core";

const CountryDataCards = ({ data, color, heading }) => {
  return (
    <Paper
      component={Box}
      display="flex"
      flexDirection="column"
      p={3}
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <Typography variant="h6" style={{ color }}>
        {heading}
      </Typography>
      <Typography variant="h5" style={{ color: "#fff" }}>
        {"1231242134"}
      </Typography>
      <Typography variant="subtitle2" style={{ color: "#eee" }}>
        DATE
      </Typography>
    </Paper>
  );
};

export default CountryDataCards;
