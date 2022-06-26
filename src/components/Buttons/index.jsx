import * as React from "react";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Stack from "@mui/material/Stack";
import "./buttons.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { setPage } from "../../store/actions";
export const theme = createTheme({
  palette: {
    neutral: {
      main: "rgb(54,69,79)",
      contrastText: "#fff",
    },
  },
});

function IconLabelButtons({genres_state, dispatch}) {
  const nextPage = () => {
    dispatch(setPage('next'))
  };

  const prevPage = () =>{
    dispatch(setPage('prev'))
  }

  return (
    <Stack
      direction="row"
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent="flex-end"
      alignItems="flex-end"
    >
      <ThemeProvider theme={theme}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
          color="neutral"
          sx={{ paddingLeft: "1rem", paddingRight: "1.8rem" }}
          disabled={genres_state.pages === 1}
          onClick={prevPage}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="neutral"
          sx={{ paddingLeft: "2rem", paddingRight: "2rem" }}
          disabled={genres_state.pages === 5 || genres_state.selected_genre.length < 1 }
          onClick={nextPage}
        >
          Next
        </Button>
      </ThemeProvider>
    </Stack>
  );
}

export default connect((state) => ({
  genres_state: state.wizard_reducer,
}))(IconLabelButtons);
