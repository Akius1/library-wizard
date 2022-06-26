
import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import CustomizedProgressBar from "../ProgressBar";
import "./layout.css";
import IconLabelButtons from "../Buttons";

const Layout = ({ children }) => {
    const [isClicked, setIsClicked] = useState(false);
  return (
    <Box className="container-wrap">
      <Typography variant="h6">Add Book - New Book</Typography>

        <CustomizedProgressBar isClicked={isClicked}/>
      {children}    
          <IconLabelButtons />
    </Box>
  );
};

export default Layout;
