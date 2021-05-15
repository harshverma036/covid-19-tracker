import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Paper,
  TableContainer,
  Container,
} from "@material-ui/core";
import CountUp from "react-countup";
import Loader from "../components/Loader";

const CountryWiseDataScreen = () => {
  const [countriesData, setCountriesData] = useState({});

  useEffect(() => {
    const getCountryData = async () => {
      const fetchedData = await fetchData();
      if (fetchedData) {
        setCountriesData(fetchedData);
        console.log(fetchedData);
      }
    };

    getCountryData();
  }, []);

  const fetchData = async () => {
    const { data } = await axios.get("https://api.covid19api.com/summary");
    return data;
  };

  return (
    <>
      {/* DISPLAY DATA */}
      <Container maxWidth="lg" style={{ marginTop: 71, padding: 0 }}>
        <Grid justify="center" container>
          <Grid item xs={12} style={{ paddingLeft: 1 }}>
            {!countriesData.Countries ? (
              <Loader />
            ) : (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ fontSize: 20 }}>
                        {"Country"}
                      </TableCell>
                      <TableCell style={{ fontSize: 20 }}>
                        {"Confirmed"}
                      </TableCell>
                      <TableCell style={{ fontSize: 20 }}>
                        {"Recovered"}
                      </TableCell>
                      <TableCell style={{ fontSize: 20 }}>{"Deaths"}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {countriesData.Countries.map((data) => (
                      <TableRow key={data.ID}>
                        <TableCell style={{ fontSize: 16 }}>
                          {data.Country}
                        </TableCell>
                        <TableCell style={{ fontSize: 16 }}>
                          <CountUp
                            start={0}
                            end={data.TotalConfirmed}
                            duration={1}
                            separator=","
                          />
                          <span style={{ fontSize: 13, color: "#cc00ff" }}>
                            &nbsp; (+
                            <CountUp
                              start={0}
                              end={data.NewConfirmed}
                              duration={1}
                              separator=","
                            />
                            )
                          </span>
                        </TableCell>
                        <TableCell style={{ fontSize: 16 }}>
                          <CountUp
                            start={0}
                            end={data.TotalRecovered}
                            duration={1}
                            separator=","
                          />
                          <span style={{ fontSize: 13, color: "#33cc33" }}>
                            &nbsp; (+
                            <CountUp
                              start={0}
                              end={data.NewRecovered}
                              duration={1}
                              separator=","
                            />
                            )
                          </span>
                        </TableCell>
                        <TableCell style={{ fontSize: 16 }}>
                          <CountUp
                            start={0}
                            end={data.TotalDeaths}
                            duration={1}
                            separator=","
                          />
                          <span style={{ fontSize: 13, color: "#ff0000" }}>
                            &nbsp; (+
                            <CountUp
                              start={0}
                              end={data.NewDeaths}
                              duration={1}
                              separator=","
                            />
                            )
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CountryWiseDataScreen;
