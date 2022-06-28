import React,  {useEffect} from "react";
import { connect } from "react-redux";
import {
  Box,
  TextField,
  FormGroup,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
import Layout from "../../components/PageLayout";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";


const Information = ({genres_state}) => {
  const [value, setValue] = React.useState(new Date());
  const [isRequired, setIsRequired] = React.useState(true);
  const [form, setForm] = React.useState({
    bookTitle: "",
    author: "",
    isbn: "",
    publisher: "",
    date: value,
    pages: "",
    format: "",
    edition: "",
    language: "",
    description: "",
  });

  const handleDate = (newValue) => {
    setValue(newValue);
  };
  
  let status = genres_state?.temp_subgenre?.length > 1 ? genres_state?.temp_subgenre[0]?.isDescriptionRequired :genres_state?.selected_subgenre[0]?.isDescriptionRequired;
  const submitForm = () => {
    if(status){
      if (form.bookTitle && form.description) {
        return setIsRequired(false);
      }
    }else{
      if (form.bookTitle) {
        return setIsRequired(false);
      }else{
        setIsRequired(true);
      }
    }
   
  };

  useEffect(()=>{
    submitForm()
   //eslint-disable-next-line react-hooks/exhaustive-deps
  },[form.bookTitle, form.description])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };


  return (
    <Layout isRequired={isRequired} form={form}>
      <Box
        component="form"
        sx={{
          "& .MuiFormControl-root": {
            mt: 1,
            mb: 1,
          },
        }}
        noValidate
        autoComplete="off"
      >
        <FormGroup sx={{pt:2, pb: 4}}>
          <FormControl fullWidth>
            <FormLabel component="legend">Book title</FormLabel>
            <TextField
              name="bookTitle"
              value={form.bookTitle}
              id="bookTitle"
              size="small"
              placeholder="Book title"
              onChange={handleChange}
              required
              label="Required"
            />
          </FormControl>

          <FormControl fullWidth>
            <FormLabel component="legend">Author</FormLabel>
            <Select
              id="author"
              // value={form.author}
              name="author"
              onChange={handleChange}
              size="small"
              placeholder="Author"
              
            >
              <MenuItem value={"Paul Eneche"}>Paul Eneche</MenuItem>
              <MenuItem value={"Larry King"}>Larry King</MenuItem>
              <MenuItem value={"Jack Canfield"}>Jack Canfield</MenuItem>
              <MenuItem value={"Rob Moore"}>Rob Moore</MenuItem>
              <MenuItem value={"William Shakespeare"}>William Shakespeare</MenuItem>
              <MenuItem value={"Charles Dickens"}>Charles Dickens</MenuItem>
              <MenuItem value={"Leo Tolstoy"}>Leo Tolstoy</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <FormLabel component="legend">ISBN</FormLabel>
            <TextField
              name="isbn"
              value={form.isbn}
              id="isbn"
              size="small"
              placeholder="ISBN"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl fullWidth>
            <FormLabel component="legend">Publisher</FormLabel>
            <Select
              id="publisher"
              // value={form.publisher}
              name="publisher"
              onChange={handleChange}
              size="small"
              placeholder="Publisher"
            >
              <MenuItem value={"Akashic Books"}>Akashic Books</MenuItem>
              <MenuItem value={"Dzanc Books"}>Dzanc Books</MenuItem>
              <MenuItem value={"Graywolf Press"}>Graywolf Press</MenuItem>
              <MenuItem value={"Hanging Loose Press"}>Hanging Loose Press</MenuItem>
              <MenuItem value={"Penguin Books"}>Penguin Books</MenuItem>
              <MenuItem value={" Phaidon"}> Phaidon</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "25ch" }}>
            <FormLabel component="legend">Date published</FormLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                inputFormat="MM/dd/yyyy"
                value={value}
                onChange={handleDate}
                placeholder="MM/dd/yyyy"
                renderInput={(params) => <TextField {...params} size="small" />}
              />
            </LocalizationProvider>
          </FormControl>

          <FormControl sx={{ width: "20ch" }}>
            <FormLabel component="legend">Number of pages</FormLabel>
            <TextField
              name="pages"
              value={form.pages}
              id="pages"
              size="small"
              placeholder="Number of Pages"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl sx={{ width: "25ch" }}>
            <FormLabel component="legend">Format</FormLabel>
            <Select
              id="format"
              // value={form.format}
              name="format"
              onChange={handleChange}
              size="small"
              placeholder="format"
            >
              <MenuItem value={"PDF"}>PDF</MenuItem>
              <MenuItem value={"TXT"}>TXT</MenuItem>
              <MenuItem value={"IBA"}>iBOOKS</MenuItem>
            </Select>
          </FormControl>
          <Stack
            direction={{ xs: "column", sm: "row", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            justifyContent="flex-start"
            alignItems={{ xs: "flex-start", sm: "center", md: "center" }}
          >
            <FormControl sx={{ width: "25ch" }}>
              <FormLabel component="legend">Edition</FormLabel>
              <TextField
                name="edition"
                value={form.edition}
                id="edition"
                size="small"
                placeholder="Edition"
                onChange={handleChange}
            
              />
            </FormControl>
            <FormControl sx={{ width: "25ch" }}>
              <FormLabel component="legend">Edition language</FormLabel>
              <Select
                id="language"
                name="language"
                // value={form.language}
                onChange={handleChange}
                size="small"
                placeholder="language"
              >
                <MenuItem value={"english"}>ENGLISH</MenuItem>
                <MenuItem value={"french"}>FRENCH</MenuItem>
                <MenuItem value={"german"}>GERMAN</MenuItem>
                <MenuItem value={"spanish"}>SPANISH</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <FormControl fullWidth>
            <FormLabel component="legend">Description</FormLabel>
            <TextField
              name="description"
              value={form.description}
              id="descriptions"
              size="small"
              placeholder="Type the description"
              onChange={handleChange}
              multiline
              rows={4} 
              required={status}
              label= {status ? "Required": ''}
            />
          </FormControl>
        </FormGroup>
      </Box>
    </Layout>
  );
};

export default connect((state) => ({
  genres_state: state.wizard_reducer,
}))(Information);
