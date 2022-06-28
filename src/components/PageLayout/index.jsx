
import React from "react";
import { Box, Typography } from "@mui/material";
import CustomizedProgressBar from "../ProgressBar";
import "./layout.css";
import IconLabelButtons from "../Buttons";

const Layout = ({ children, ...props }) => {
  return (
    <Box className="container-wrap">
      <Typography variant="h6">Add Book - New Book</Typography>

        <CustomizedProgressBar/>
      {children}    
          <IconLabelButtons {...props} />
    </Box>
  );
};

export default Layout;
