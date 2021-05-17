import React from "react";
import { Box, Button, IconButton, Typography } from "@material-ui/core";
import { GitHub, Person, PersonRounded } from "@material-ui/icons";

const Footer = () => {
  return (
    <Box display="flex" flexDirection="row" mt={6} justifyContent="center">
      <Typography paragraph style={{ color: "grey", marginRight: 10 }}>
        &copy; Copyright {new Date().getFullYear()} By{" "}
        <a href="https://harshverma.netlify.app/" className="footer-dev-link">
          Harsh Verma
        </a>
      </Typography>
      {/* <Box display="flex" flexDirection="row" ml={6}> */}
      {/* <Typography paragraph style={{ color: "grey", marginRight: 5 }}>
          {"Source Code: "}
        </Typography> */}
      {/* <GitHub className="footer-gh-btn" /> */}
      {/* </Box> */}
    </Box>
  );
};

export default Footer;
