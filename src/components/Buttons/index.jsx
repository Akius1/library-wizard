import * as React from "react";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Stack from "@mui/material/Stack";
import "./buttons.css";

import { createTheme, ThemeProvider } from '@mui/material/styles';
export const theme = createTheme({
    palette: {
        neutral: {
            main: 'rgb(54,69,79)',
            contrastText: '#fff',
          },
    },
  });

export default function IconLabelButtons({}) {
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
          sx={{paddingLeft:"1rem", paddingRight:"1.8rem"}}
        >
          Back
        </Button>
        <Button variant="contained" color="neutral"  sx={{paddingLeft:"2rem", paddingRight:"2rem"}}>Next</Button>
      </ThemeProvider>
     
    </Stack>
  );
}



