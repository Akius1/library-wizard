import React from "react";
import { connect } from "react-redux";
import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Layout from "../../components/PageLayout";
import { addSelectedSubGenre, setPage } from "../../store/actions";

const SubGenre = ({ genres_state, dispatch }) => {
  const Item = styled(Button)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    border: `1px solid rgb(54,69,79)`,
    color: theme.palette.text.secondary,
  }));

  const handleClick = (id) => {
    dispatch(addSelectedSubGenre(id));
  };

  const goToAddSubgenre = () => {
    dispatch(setPage("next", 1));
  };
  return (
    <Layout>
      <Box sx={{ padding: "5rem 0", flexGrow: 1 }}>
        <Grid container spacing={2}>
          {genres_state?.selected_genre[0]?.subgenres.map((genre) => (
            <Grid
              item
              xs={4}
              md={2}
              key={genre.id}
              onClick={() => handleClick(genre.id)}
            >
              {genre.id === genres_state?.selected_subgenre[0]?.id ? (
                <Item
                  sx={{
                    backgroundColor: "rgb(54,69,79)",
                    color: "#fff",
                    textTransform: "capitalize",
                    padding: "0.5rem 1rem",
                  }}
                >
                  {genre.name}
                </Item>
              ) : (
                <Item
                  sx={{
                    backgroundColor: "#fff",
                    textTransform: "capitalize",
                    padding: "0.5rem 1rem",
                  }}
                >
                  {genre.name}
                </Item>
              )}
            </Grid>
          ))}
          <Grid item xs={4} md={2} onClick={goToAddSubgenre}>
            <Item
              sx={{
                backgroundColor: "#fff",
                textTransform: "capitalize",
                padding: "0.5rem 1.5rem",
              }}
            >
              Add new
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default connect((state) => ({
  genres_state: state.wizard_reducer,
}))(SubGenre);
