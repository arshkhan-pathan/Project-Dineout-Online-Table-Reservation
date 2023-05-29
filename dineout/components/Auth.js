// packages
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";

// styled
const StyledPaper = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

const StyledForm = styled(Form)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3),
  "& .css-1wc848c-MuiFormHelperText-root": {
    marginLeft: 0,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const StyledErrorMessage = styled(ErrorMessage)(() => ({
  color: "red",
}));

const Auth = ({
  initialValues,
  validationSchema,
  onSubmit,
  authType = "Sign In",
}) => {
  return (
    <Container component="main" maxWidth="xs">
      <StyledPaper>
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          {authType}
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <StyledForm>
            <Grid container spacing={2}>
              {authType === "Sign Up" && (
                <>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="name"
                      variant="outlined"
                      fullWidth
                      id="name"
                      label="Name"
                      autoFocus
                      as={TextField}
                      helperText={
                        <StyledErrorMessage name="name" component="div" />
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      variant="outlined"
                      fullWidth
                      id="city"
                      label="City"
                      name="city"
                      as={TextField}
                      helperText={
                        <StyledErrorMessage name="city" component="div" />
                      }
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={12}>
                <Field
                  variant="outlined"
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  as={TextField}
                  helperText={
                    <StyledErrorMessage name="email" component="div" />
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  variant="outlined"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  as={TextField}
                  helperText={
                    <StyledErrorMessage name="password" component="div" />
                  }
                />
              </Grid>
              {authType === "Sign Up" && (
                <Grid item xs={12}>
                  <Field
                    variant="outlined"
                    fullWidth
                    name="confirmPassword"
                    label="confirmPassword"
                    type="confirmPassword"
                    id="confirmPassword"
                    as={TextField}
                    helperText={
                      <StyledErrorMessage
                        name="confirmPassword"
                        component="div"
                      />
                    }
                  />
                </Grid>
              )}
            </Grid>
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              {authType}
            </StyledButton>
            <Grid container justify="flex-end">
              <Grid item>
                {authType === "Sign Up" && (
                  <MuiLink
                    href="/restaurant/login"
                    component={Link}
                    variant="body2"
                  >
                    Already have an account? Sign in
                  </MuiLink>
                )}

                {authType === "Sign In" && (
                  <MuiLink
                    href="/restaurant/register"
                    component={Link}
                    variant="body2"
                  >
                    Don't have an account? Sign up
                  </MuiLink>
                )}
              </Grid>
            </Grid>
          </StyledForm>
        </Formik>
      </StyledPaper>
    </Container>
  );
};

export default Auth;
