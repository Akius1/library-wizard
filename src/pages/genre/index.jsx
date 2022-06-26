import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import Layout from "../../components/PageLayout";
import { connect } from "react-redux";
import { styled } from "@mui/material/styles";
import { addSelectedGenre } from "../../store/actions";

const Genre = ({genres_state, dispatch}) => {
  const [clickedButton, setClickedButton] = useState({
    id: "",
    isClicked: false,
  });
  const Item = styled(Button)(({ theme }) => ({
    // backgroundColor:  '#1A2027' ,
    ...theme.typography.body2,
    // padding: theme.spacing(2),
    textAlign: "center",
    border: `1px solid rgb(54,69,79)`,
    color: theme.palette.text.secondary,
  }));

  console.log(genres_state)

  const handleClick = (id) => {
    setClickedButton({
      id: id,
      isClicked: true,
    });
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
              {genre.id === clickedButton?.id ? (
                <Item
                  sx={{
                    backgroundColor: clickedButton.isClicked
                      ? "rgb(54,69,79)"
                      : "#fff",
                    textTransform: "capitalize",
                    color: clickedButton.isClicked && "#fff",
                    textTransform: "capitalize",
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
