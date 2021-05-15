import React from "react";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import { Alert } from "@material-ui/lab";

const CountryData = ({ data }) => {
  //   console.log(data);
  return !data ? (
    <Alert severity="info">{"Please select country!"}</Alert>
  ) : (
    <>
      <Grid item lg={3} md={4} xs={12}>
        <Paper
          component={Box}
          display="flex"
          flexDirection="column"
          p={3}
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <Typography variant="h6" style={{ color: "#cc00ff" }}>
            {"Total Cases"}
          </Typography>
          <Typography variant="h5" style={{ color: "#fff" }}>
            {data ? (
              <>
                <CountUp
                  end={data.TotalConfirmed}
                  start={0}
                  separator=","
                  duration="1.5"
                />
                <span style={{ fontSize: 18, color: "#cc00ff" }}>
                  &nbsp;{"(+"}
                  <CountUp
                    end={data.NewConfirmed}
                    start={0}
                    duration={1.5}
                    separator=","
                  />
                  {")"}
                </span>
              </>
            ) : (
              "Loading..."
            )}
          </Typography>
          <Box display="flex" flexDirection="row" pl={0.5}>
            <Typography variant="subtitle2" style={{ color: "#eee" }}>
              {data ? new Date(data.Date).toDateString() : "Loading..."}
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ color: "#eee", marginLeft: 10 }}
            >
              {data
                ? new Date(data.Date).toTimeString().split(" ")[0]
                : "Loading..."}
              {" IST"}
            </Typography>
          </Box>
        </Paper>
      </Grid>

      {/* TOTAL RECOVERED */}
      <Grid item lg={3} md={4} xs={12}>
        <Paper
          component={Box}
          display="flex"
          flexDirection="column"
          p={3}
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <Typography variant="h6" style={{ color: "#33cc33" }}>
            {"Total Recovered"}
          </Typography>
          <Typography variant="h5" style={{ color: "#fff" }}>
            {data ? (
              <>
                <CountUp
                  end={data.TotalRecovered}
                  start={0}
                  separator=","
                  duration="1.5"
                />
                <span style={{ fontSize: 18, color: "#33cc33" }}>
                  &nbsp;{"(+"}
                  <CountUp
                    end={data.NewRecovered}
                    start={0}
                    duration={1.5}
                    separator=","
                  />
                  {")"}
                </span>
              </>
            ) : (
              "Loading..."
            )}
          </Typography>
          <Box display="flex" flexDirection="row">
            <Typography variant="subtitle2" style={{ color: "#eee" }}>
              {data ? new Date(data.Date).toDateString() : "Loading..."}
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ color: "#eee", marginLeft: 10 }}
            >
              {data
                ? new Date(data.Date).toTimeString().split(" ")[0]
                : "Loading..."}
              {" IST"}
            </Typography>
          </Box>
        </Paper>
      </Grid>

      {/* TOTAL DEATHS */}
      <Grid item lg={3} md={4} xs={12}>
        <Paper
          component={Box}
          display="flex"
          flexDirection="column"
          p={3}
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <Typography variant="h6" style={{ color: "#ff0000" }}>
            {"Total Deaths"}
          </Typography>
          <Typography variant="h5" style={{ color: "#fff" }}>
            {data ? (
              <>
                <CountUp
                  end={data.TotalDeaths}
                  start={0}
                  separator=","
                  duration="1.5"
                />
                <span style={{ fontSize: 18, color: "#ff0000" }}>
                  &nbsp;{"(+"}
                  <CountUp
                    end={data.NewDeaths}
                    start={0}
                    duration={1.5}
                    separator=","
                  />
                  {")"}
                </span>
              </>
            ) : (
              "Loading..."
            )}
          </Typography>
          <Box display="flex" flexDirection="row">
            <Typography variant="subtitle2" style={{ color: "#eee" }}>
              {data ? new Date(data.Date).toDateString() : "Loading..."}
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ color: "#eee", marginLeft: 10 }}
            >
              {data
                ? new Date(data.Date).toTimeString().split(" ")[0]
                : "Loading..."}
              {" IST"}
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default CountryData;
