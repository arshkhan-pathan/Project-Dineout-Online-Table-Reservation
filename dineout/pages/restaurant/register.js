import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRegisterMutation } from "@/features/auth/authApiSlice";


const initialValues = {
    name: '',
    city: '',
    email: '',
    password: '',
    password2: '',
};

const validationSchema = Yup.object({
    name: Yup.string(),
    city: Yup.string(),
    email: Yup.string().email('Please enter an valid email address').required('Email address is required'),
    password: Yup.string().min(8, 'Password should be atleaset 6 characters').required('Please enter your new password'),
    password2: Yup.string().min(8, 'Password should be atleaset 6 characters').required('Please enter your confirm password').oneOf([Yup.ref('password'), null], 'Passwords does not match'),
});


function MadeWithLove() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Built with love by the "}
            <Link color="inherit" href="https://material-ui.com/">
                Material-UI
            </Link>
            {" team."}
        </Typography>
    );
}

const StyledPaper = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
}));


const StyledForm = styled(Form)(({ theme }) => ({
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    '& .css-1wc848c-MuiFormHelperText-root': {
        marginLeft: 0,
    }
}));

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(3, 0, 2)
}));

const StyledErrorMessage = styled(ErrorMessage)(({ theme }) => ({
    color: 'red',
}));

const Register = () => {
    const [register, { isLoading }] = useRegisterMutation();
    const onSubmit = (values) => {
        register(values);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <StyledPaper>
                <StyledAvatar>
                    <LockOutlinedIcon />
                </StyledAvatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                <StyledForm>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Field
                                name="name"
                                variant="outlined"
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                                as={TextField}
                                helperText={<StyledErrorMessage name="name" component="div" />}
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
                                helperText={<StyledErrorMessage name="city" component="div" />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                variant="outlined"
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                as={TextField}
                                helperText={<StyledErrorMessage name="email" component="div" />}
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
                                helperText={<StyledErrorMessage name="password" component="div" />}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Field
                                variant="outlined"
                                fullWidth
                                name="password2"
                                label="Password2"
                                type="password2"
                                id="password2"
                                as={TextField}
                                helperText={<StyledErrorMessage name="password2" component="div" />}
                            />
                        </Grid>
                    </Grid>
                    <StyledButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign Up
                    </StyledButton>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </StyledForm>
                </Formik>
            </StyledPaper>
        </Container>
    );
};

export default Register;
