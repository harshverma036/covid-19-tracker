import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Hidden,
  MenuItem,
  Divider,
  IconButton,
  Menu,
} from "@material-ui/core";
import {} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

const Appbar = () => {
  const [profileMenuAnchorEl, setProfileMenuAnchorEl] = useState(null);
  const isProfileMenuOpen = Boolean(profileMenuAnchorEl);

  const openProfileMenu = (e) => setProfileMenuAnchorEl(e.currentTarget);
  const closeProfileMenu = () => setProfileMenuAnchorEl(null);

  const profileMenu = (
    <Menu
      anchorEl={profileMenuAnchorEl}
      id="profile-menu"
      keepMounted
      open={isProfileMenuOpen}
      onClose={closeProfileMenu}
    >
      <MenuItem component={Link} onClick={closeProfileMenu} to="/">
        Global
      </MenuItem>
      <MenuItem component={Link} onClick={closeProfileMenu} to="/country/all">
        ALL Countries
      </MenuItem>
      <MenuItem component={Link} onClick={closeProfileMenu} to="/country">
        Country
      </MenuItem>
    </Menu>
  );

  return (
    <>
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
          <Hidden mdUp>
            <IconButton
              color="inherit"
              onClick={openProfileMenu}
              style={{ marginLeft: "auto" }}
            >
              <MoreVert />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      {profileMenu}
    </>
  );
};

export default Appbar;
