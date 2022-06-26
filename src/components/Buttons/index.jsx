import * as React from "react";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import "./buttons.css";

import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        neutral: {
            main: '#dcdcdc',
            contrastText: '#dbd7d2',
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
        >
          Back
        </Button>
        <Button variant="contained" color="neutral" >Next</Button>
      </ThemeProvider>
     
    </Stack>
  );
}



