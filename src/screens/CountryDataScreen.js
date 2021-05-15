import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Typography } from "@material-ui/core";
import Select from "react-select";
import Loader from "../components/Loader";
import CountryData from "../components/CountryData";

const CountryDataScreen = () => {
  const [countryList, setCountryList] = useState([]);
  const [countriesData, setCountriesData] = useState({});
  const [filteredData, setFilteredData] = useState(undefined);

  const options = countryList.map((country) => {
    return { label: country.Country, value: country.Slug };
  });

  const showData = (data) => {
    return <CountryData data={data} />;
  };

  useEffect(() => {
    const getData = async () => {
      const fetchedCountry = await fetchCountry();
      if (fetchedCountry) {
        setCountryList(fetchedCountry);
      }
    };

    const getCountryData = async () => {
      const fetchedData = await fetchData();
      if (fetchedData) {
        setCountriesData(fetchedData);
        // console.log(fetchedData);
      }
    };

    getCountryData();
    getData();
  }, []);

  const fetchCountry = async () => {
    const { data } = await axios.get("https://api.covid19api.com/countries");
    return data;
  };

  const fetchData = async () => {
    const { data } = await axios.get("https://api.covid19api.com/summary");
    return data;
  };

  const changeCountryHandler = async (e) => {
    // console.log(e.value);
    const countryData = countriesData.Countries;
    if (countryData.length > 0) {
      if (e.value !== null) {
        const country = countryData.find((c) => c.Slug === e.value);
        setFilteredData(country);
        // console.log(filteredData);
      }
    }
  };

  return (
    <>
      <Container maxWidth="lg" style={{ marginTop: 100 }}>
        <Grid container justify="center">
          <Grid item xs={12} md={5} lg={4}>
            <Select
              className="basic-single"
              classNamePrefix="select"
              isDisabled={false}
              isLoading={countryList.length === 0}
              isRtl={false}
              isSearchable={true}
              name="Country"
              onChange={(e) => changeCountryHandler(e)}
              options={options}
            />
          </Grid>
        </Grid>

        {/* DISPLAY DATA */}
        <Grid justify="center" container style={{ marginTop: 12 }} spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              color="primary"
              style={{ textAlign: "center", fontWeight: "bold" }}
            >
              {filteredData !== undefined ? filteredData.Country : null}
            </Typography>
          </Grid>
          {/* <Grid item xs={12} md={4} lg={3}> */}
          {!countriesData.Countries ? (
            <Loader />
          ) : (
            <>{showData(filteredData)}</>
          )}
          {/* </Grid> */}
        </Grid>
      </Container>
    </>
  );
};

export default CountryDataScreen;
