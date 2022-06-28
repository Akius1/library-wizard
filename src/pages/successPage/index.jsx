import { Box, Typography, Button } from "@mui/material";
import React from "react";
import "./success.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../components/Buttons";
import CheckIcon from "@mui/icons-material/Check";

const SuccessPage = () => {
  const BackToFirstPage = () => {};
  return (
    <Box className="container-success-wrap" >
      <Box className="checked-circle">
        <CheckIcon color="action" fontSize="large" />
      </Box>
      <Typography variant="" marginBottom={5}>Book added successfully</Typography>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="neutral"
          sx={{ paddingLeft: "2rem", paddingRight: "2rem", mb:5 }}
          onClick={BackToFirstPage}
        >
          Add another book
        </Button>
      </ThemeProvider>
    </Box>
  );
};

export default SuccessPage;
