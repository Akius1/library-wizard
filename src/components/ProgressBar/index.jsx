import React from "react";
import { Box, Typography } from "@mui/material";
import "./progress.css";

const CustomizedProgressBar = ({ current, isClicked }) => {

  return !isClicked ? (
    <Box className="progress-bar-wrapper">
        <Box className="progress-circle" sx={{background: current?.count === 1 ? "rgb(54,69,79)"   : "rgb(242,243,244)",  color:current?.count === 1 ? "#ffffff" : "rgb(59,68,75)"}}>
            1
        </Box>

        <Box className="progress-bar"></Box>
        <Box className="progress-circle" sx={{background: current?.count === 2 ? "rgb(54,69,79)"   : "rgb(242,243,244)",  color:current?.count === 2 ? "#ffffff" : "rgb(59,68,75)"}}>
            2
        </Box>

        <Box className="progress-bar"></Box>
        <Box className="progress-circle" sx={{background: current?.count === 3 ? "rgb(54,69,79)"   : "rgb(242,243,244)",  color:current?.count === 3 ? "#ffffff" : "rgb(59,68,75)"}}>
            ...
        </Box>

        {/* <Box className="progress-bar"></Box> */}
        </Box>
  ) : (
    <Box className="progress-bar">4</Box>
  );
};

export default CustomizedProgressBar;
