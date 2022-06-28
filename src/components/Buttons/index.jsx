import * as React from "react";
import { connect } from "react-redux";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Stack from "@mui/material/Stack";
import "./buttons.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { addSubgenre, setPage } from "../../store/actions";
export const theme = createTheme({
  palette: {
    neutral: {
      main: "rgb(54,69,79)",
      contrastText: "#fff",
    },
  },
});

function IconLabelButtons({ genres_state, dispatch, ...props }) {
  const nextPage = () => {
    if (genres_state.pages === 3) {
      dispatch(addSubgenre(genres_state?.selected_genre[0]?.id, props.form));

      props.setForm(props.initial);
    } else if (genres_state.pages === 4) {
      console.log({ BookDetails: props.form });
      dispatch(setPage("next", 1));
    } else {
      let pageCount = genres_state.pages === 2 ? 2 : 1;
      dispatch(setPage("next", pageCount));
    }
  };

  const prevPage = () => {
    let pageCount = genres_state.pages === 4 ? 2 : 1;
    dispatch(setPage("prev", pageCount));
  };

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
          disabled={
            genres_state.pages === 5 ||
            (genres_state.pages === 1 &&
              genres_state.selected_genre.length < 1) ||
            (genres_state.pages === 2 &&
              genres_state.selected_subgenre.length < 1) ||
            (genres_state.pages === 3 && props.error) ||
            (genres_state.pages === 4 && props.isRequired)
          }
          onClick={nextPage}
        >
          {genres_state.pages === 4 ? "Add" : "Next"}
        </Button>
      </ThemeProvider>
    </Stack>
  );
}

export default connect((state) => ({
  genres_state: state.wizard_reducer,
}))(IconLabelButtons);
