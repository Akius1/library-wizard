import React, {useEffect} from "react";
import {
  Box,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Layout from "../../components/PageLayout";

const AddSubgenre = () => {
  const initial = {
    isDescriptionRequired: false,
    name: "",
  };
  const [form, setForm] = React.useState(initial);
  const [error, setError] = React.useState(true);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setForm({ ...form, [name]: name === "isDescriptionRequired" ? checked : value });
  };


  const submitForm = () => {
    if (form.name) {
      return setError(false);
    }else{
      setError(true);
    }
  };
  useEffect(()=>{
    submitForm()
   //eslint-disable-next-line react-hooks/exhaustive-deps
  },[form.name])
  return (
    <Layout error={error} initial={initial} form={form} setError={setError} setForm={setForm}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { mt: 1, mb: 3, width: "100%" },
          "& .MuiFormControlLabel-root": { mt: 1, mb: 5 },
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
                name="isDescriptionRequired"
                color="default"
                checked={form.isDescriptionRequired}
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
