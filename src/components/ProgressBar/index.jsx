import React from "react";
import { Box } from "@mui/material";
import "./progress.css";
import { connect } from "react-redux";

const CustomizedProgressBar = ({ genres_state }) => {

  return genres_state.pages === 1 || genres_state.pages === 2 ? (
    <Box className="progress-bar-wrapper">
        <Box className="progress-circle" sx={{background: genres_state.pages === 1 ? "rgb(54,69,79)"   : "rgb(242,243,244)",  color:genres_state.pages === 1 ? "#ffffff" : "rgb(59,68,75)"}}>
            1
        </Box>

        <Box className="progress-bar"></Box>
        <Box className="progress-circle" sx={{background: genres_state.pages === 2 ? "rgb(54,69,79)"   : "rgb(242,243,244)",  color:genres_state.pages === 2 ? "#ffffff" : "rgb(59,68,75)"}}>
            2
        </Box>

        <Box className="progress-bar"></Box>
        <Box className="progress-circle" sx={{background: genres_state.pages === 3 ? "rgb(54,69,79)"   : "rgb(242,243,244)",  color:genres_state.pages === 3 ? "#ffffff" : "rgb(59,68,75)"}}>
            ...
        </Box>

        {/* <Box className="progress-bar"></Box> */}
        </Box>
  ) : 
   ( genres_state.pages === 3  &&  genres_state?.selected_subgenre.length < 1) || ( genres_state.pages === 4  &&  genres_state?.selected_subgenre.length < 1) ?
    <Box className="progress-bar-wrapper">
        <Box className="progress-circle" sx={{background: genres_state.pages === 1 ? "rgb(54,69,79)"   : "rgb(242,243,244)",  color:genres_state.pages === 1 ? "#ffffff" : "rgb(59,68,75)"}}>
            1
        </Box>

        <Box className="progress-bar"></Box>
        <Box className="progress-circle" sx={{background: genres_state.pages === 2 ? "rgb(54,69,79)"   : "rgb(242,243,244)",  color:genres_state.pages === 2 ? "#ffffff" : "rgb(59,68,75)"}}>
            2
        </Box>

        <Box className="progress-bar"></Box>
        <Box className="progress-circle" sx={{background: genres_state.pages === 3 ? "rgb(54,69,79)"   : "rgb(242,243,244)",  color:genres_state.pages === 3 ? "#ffffff" : "rgb(59,68,75)"}}>
            3
        </Box>
        <Box className="progress-bar"></Box>
        <Box className="progress-circle" sx={{background: genres_state.pages === 4 ? "rgb(54,69,79)"   : "rgb(242,243,244)",  color:genres_state.pages === 4 ? "#ffffff" : "rgb(59,68,75)"}}>
            4
        </Box>
        
        </Box>
        :
        <Box className="progress-bar-wrapper">
        <Box className="progress-circle" sx={{background: genres_state.pages === 1 ? "rgb(54,69,79)"   : "rgb(242,243,244)",  color:genres_state.pages === 1 ? "#ffffff" : "rgb(59,68,75)"}}>
            1
        </Box>

        <Box className="progress-bar"></Box>
        <Box className="progress-circle" sx={{background: genres_state.pages === 2 ? "rgb(54,69,79)"   : "rgb(242,243,244)",  color:genres_state.pages === 2 ? "#ffffff" : "rgb(59,68,75)"}}>
            2
        </Box>

        <Box className="progress-bar"></Box>
        <Box className="progress-circle" sx={{background: genres_state.pages === 4 ? "rgb(54,69,79)"   : "rgb(242,243,244)",  color:genres_state.pages === 4 ? "#ffffff" : "rgb(59,68,75)"}}>
            3
        </Box>
        
        </Box>
  
};

export default connect((state) => ({
    genres_state: state.wizard_reducer,
  }))(CustomizedProgressBar);
