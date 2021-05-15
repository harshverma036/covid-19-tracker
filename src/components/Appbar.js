import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Hidden,
} from "@material-ui/core";

const Appbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h4"
          component={Link}
          to="/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {"Covid 19 Tracker"}
        </Typography>
        <Hidden smDown>
          <Box display="flex" flexDirection="row" ml="auto">
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/"
              style={{ marginRight: 8, fontSize: 16 }}
            >
              {"Global"}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ marginRight: 8, fontSize: 16 }}
              component={Link}
              to="/country/all"
            >
              {"All Countires"}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ fontSize: 16 }}
              component={Link}
              to="/country"
            >
              {"Country"}
            </Button>
          </Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
