import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Grid, Hidden } from "@material-ui/core";
import Select from "react-select";

const CountryWiseDataScreen = () => {
  const [countryList, setCountryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [enableSearch, setEnableSearch] = useState(false);

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
    const fetchedData = await fetchData();
    const countryData = fetchedData.Countries;
    const country = countryData.find((c) => c.Slug === e.value);
    console.log(country);
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12} md={5} lg={4}>
        {enableSearch && (
          <Select
            className="basic-single"
            classNamePrefix="select"
            isDisabled={false}
            isLoading={countryList.length === 0}
            isClearable={true}
            isRtl={false}
            isSearchable={true}
            name="Country"
            onChange={(e) => changeCountryHandler(e)}
            options={options}
          />
        )}
        <Box display="flex" flexDirection="row" mt={2}>
          <Button
            variant="outlined"
            size="medium"
            style={{
              color: "#cc00ff",
              borderColor: "#cc00ff",
              fontWeight: "bold",
            }}
          >
            {"Confirmed"}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            style={{
              marginLeft: 4,
              marginRight: 4,
              color: "#33cc33",
              borderColor: "#33cc33",
              fontWeight: "bold",
            }}
            size="medium"
          >
            {"Recovered"}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            style={{
              color: "#ff0000",
              borderColor: "#ff0000",
              fontWeight: "bold",
            }}
          >
            {"Deaths"}
          </Button>
          <Hidden mdDown>
            <Button
              variant="outlined"
              color="primary"
              style={{
                marginLeft: 4,
                color: "#996600",
                borderColor: "#996600",
                fontWeight: "bold",
              }}
              size="medium"
              onClick={() => setEnableSearch(!enableSearch)}
            >
              {"Search"}
            </Button>
          </Hidden>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CountryWiseDataScreen;
