import React , { useState }  from 'react';
import { connect } from "react-redux";
import { Box, Button, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Layout from '../../components/PageLayout';

const SubGenre = ({genres_state, dispatch}) => {
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

  console.log(genres_state.selected_genre[0]?.subgenres)

  const handleClick = (id) => {
    setClickedButton({
      id: id,
      isClicked: true,
    });
    // dispatch(addSelectedGenre(id))
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
              {genre.id === clickedButton?.id ? (
                <Item
                  sx={{
                    backgroundColor: clickedButton.isClicked
                      ? "rgb(54,69,79)"
                      : "#fff",
                    color: clickedButton.isClicked && "#fff",
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
          <Grid
              item
              xs={4}
              md={2}
              onClick={() => handleClick()}
            >
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
  )
}

export default connect((state) => ({
  genres_state: state.wizard_reducer,
}))(SubGenre);