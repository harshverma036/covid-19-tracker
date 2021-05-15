import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Container, Grid } from "@material-ui/core";
import Select from "react-select";
import Loader from "../components/Loader";

const CountryDataScreen = () => {
  const [countryList, setCountryList] = useState([]);
  const [countriesData, setCountriesData] = useState({});

  const options = countryList.map((country) => {
    return { label: country.Country, value: country.Slug };
  });

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
        console.log(fetchedData);
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
        console.log(country);
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
        <Grid justify="center" container style={{ marginTop: 12 }}>
          <Grid item xs={12} md={4} lg={3}>
            {!countriesData.Countries ? <Loader /> : "DATA"}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CountryDataScreen;
