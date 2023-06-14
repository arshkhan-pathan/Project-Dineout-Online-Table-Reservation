import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import {
  Container,
  Box,
  Typography,
  TextField,
  Grid,
  Button,
} from "@mui/material";

const validationSchema = Yup.object({
  firstname: Yup.string().min(2).max(25).required("Enter your First Name"),
  lastname: Yup.string().min(2).max(25).required("Enter your Last Name"),
});

function EditProfile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (values) => {
    try {
      let imageurl = "";

      if (selectedFile) {
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("upload_preset", "resImages");
        formData.append("api_key", "257987867351426");
        formData.append("timestamp", Math.floor(Date.now() / 1000));

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dhe9hmzbn/image/upload",
          formData,
          { headers: { "X-Requested-With": "XMLHttpRequest" } }
        );

        imageurl = response.data.secure_url;
      }

      const submitData = {
        image: imageurl,
        first_name: values.firstname,
        last_name: values.lastname,
      };

      console.log(submitData);
    } catch (error) {
      console.log("Error uploading image:", error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleUpload}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Grid container rowSpacing={3} columnSpacing={3}>
              <Grid item>
                <Field
                  name="firstname"
                  label="First Name"
                  size="small"
                  as={TextField}
                  helperText={<ErrorMessage name="firstname" />}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Field
                  name="lastname"
                  label="Last Name"
                  size="small"
                  as={TextField}
                  helperText={<ErrorMessage name="lastname" />}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Update
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default EditProfile;
