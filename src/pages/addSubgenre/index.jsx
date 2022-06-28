import {
  Box,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React from "react";
import Layout from "../../components/PageLayout";

const AddSubgenre = () => {
  const [form, setForm] = React.useState({
    checked: false,
    name: "",
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setForm({ ...form, [name]: name === "checked" ? checked: value });
  };
  return (
    <Layout>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {mt:1, mb:3, width: "100%" },
          "& .MuiFormControlLabel-root":  {mt:1, mb:5,}
        }}
        noValidate
        autoComplete="off"
      >
        {" "}
        <FormGroup>
          <TextField
            hiddenLabel
            name="name"
            value={form.name}
            id="outlined-default"
            size="small"
            placeholder="subgenre name"
            onChange={handleChange}
          />

          <FormControlLabel
            control={
              <Checkbox
                name="checked"
                color="default"
                checked={form.checked}
                onChange={handleChange}
              />
            }
            label="Description is required for this subgenre"
          />
        </FormGroup>
      </Box>
    </Layout>
  );
};

export default AddSubgenre;
