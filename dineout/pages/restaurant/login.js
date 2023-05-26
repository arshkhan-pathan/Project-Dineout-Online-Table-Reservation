// packages
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MuiLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
// store
import { useRestaurantLoginMutation } from '@/store/api/auth';
import { setCredentials } from '@/store/slices/auth';


const initialValues = {
    email: '',
    password: '',
};

const validationSchema = Yup.object({
    email: Yup.string().email('Please enter an valid email address').required('Email address is required'),
    password: Yup.string().min(8, 'Password should be atleaset 6 characters').required('Please enter your new password'),
});

const StyledPaper = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
}));


const StyledForm = styled(Form)(({ theme }) => ({
    width: '100%', // Fix IE 11 issue.
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

const Login = () => {
    const [login] = useRestaurantLoginMutation();
    const router = useRouter();
    const dispatch = useDispatch();

    const onSubmit = async (values) => {
        const response = login(values).unwrap();

        if(response) {
            const { user, ...rest} = response;
            dispatch(setCredentials({user: user, token: rest}));
            router.push('/restaurant');
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <StyledPaper>
                <StyledAvatar>
                    <LockOutlinedIcon />
                </StyledAvatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <StyledForm>
                        <Grid container spacing={2}>
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
                        </Grid>
                        <StyledButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Sign In
                        </StyledButton>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <MuiLink href="/restaurant/register" component={Link} variant="body2">
                                    Don't have an account? Sign up
                                </MuiLink>
                            </Grid>
                        </Grid>
                    </StyledForm>
                </Formik>
            </StyledPaper>
        </Container>
    );
};

export default Login;
