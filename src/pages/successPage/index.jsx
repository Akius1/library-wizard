
import React from "react";
import { connect } from "react-redux";
import "./success.css";
import { Box, Typography, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../components/Buttons";
import CheckIcon from "@mui/icons-material/Check";
import { resetAll } from "../../store/actions";

const SuccessPage = ({dispatch}) => {
  const BackToFirstPage = () => {
    dispatch(resetAll())
  };
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

export default connect((state) => ({
  genres_state: state.wizard_reducer,
}))(SuccessPage);