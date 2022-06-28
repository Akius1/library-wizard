import React from "react";
import { Box, Button, Grid } from "@mui/material";
import Layout from "../../components/PageLayout";
import { connect } from "react-redux";
import { styled } from "@mui/material/styles";
import { addSelectedGenre } from "../../store/actions";

const Genre = ({genres_state, dispatch}) => {
  const Item = styled(Button)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    border: `1px solid rgb(54,69,79)`,
    color: theme.palette.text.secondary,
  }));

  const handleClick = (id) => {
    dispatch(addSelectedGenre(id))
  };
  return (
    <Layout>
      <Box sx={{ padding: "5rem 0", flexGrow: 1 }}>
        <Grid container spacing={2}>
          {genres_state?.genres_collection.map((genre) => (
            <Grid
              item
              xs={4}
              md={2}
              key={genre.id}
              onClick={() => handleClick(genre.id)}
            >
              {genre.id === genres_state?.selected_genre[0]?.id ? (
                <Item
                  sx={{
                    backgroundColor:  "rgb(54,69,79)",
                    textTransform: "capitalize",
                    color: "#fff",
                    padding: "0.5rem 1.5rem",
                  }}
                >
                  {genre.name}
                </Item>
              ) : (
                <Item
                  sx={{
                    backgroundColor: "#fff",
                    textTransform: "capitalize",
                    padding: "0.5rem 1.5rem",
                  }}
                >
                  {genre.name}
                </Item>
              )}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default connect((state) => ({
  genres_state: state.wizard_reducer,
}))(Genre);
