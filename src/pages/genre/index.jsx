import React, { useState } from "react";
import { Box, Button, ThemeProvider, Typography, Grid } from "@mui/material";
import Layout from "../../components/PageLayout";
import genres from "../../data";
import { theme } from "../../components/Buttons";
import { styled } from "@mui/material/styles";

const Genre = () => {
  const [clickedButton, setClickedButton] = useState({
      id: '',
      isClicked: false
  });
  const Item = styled(Button)(({ theme }) => ({
    
    // backgroundColor:  '#1A2027' ,
    ...theme.typography.body2,
    // padding: theme.spacing(2),
    textAlign: "center",
    border: `1px solid rgb(54,69,79)`,
    color: theme.palette.text.secondary,
  }));

  const handleClick = (id) => {

    console.log(id)
    setClickedButton({
        id: id,
        isClicked: true
    });
  };
  return (
    <Layout>
      <Box sx={{ padding: "5rem 0", flexGrow: 1 }}>
        <Grid container spacing={2}>
          {genres.map((genre) => (
            <Grid item xs={4} md={2} key={genre.id} onClick={()=>handleClick(genre.id)} >
                {
                   genre.id === clickedButton?.id ?  <Item sx={{backgroundColor: clickedButton.isClicked ? "rgb(54,69,79)" : "#fff" , textTransform: "capitalize", color: clickedButton.isClicked && "#fff" , textTransform: "capitalize", padding: "0.5rem 1.5rem"}}>{genre.name}</Item>
                   :
                   <Item sx={{backgroundColor:  "#fff",  textTransform: "capitalize", padding: "0.5rem 1.5rem"  }} >{genre.name}</Item> 
                }
              
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Genre;
