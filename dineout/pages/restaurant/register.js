// packages
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
// store
import { useRestaurantRegisterMutation } from '@/store/api/auth';
import { setCredentials } from '@/store/slices/auth';
// components
import Auth from '@/components/Auth';


const initialValues = {
    name: '',
    city: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const validationSchema = Yup.object({
    name: Yup.string(),
    city: Yup.string(),
    email: Yup.string().email('Please enter an valid email address').required('Email address is required'),
    password: Yup.string().min(8, 'Password should be atleaset 6 characters').required('Please enter your new password'),
    confirmPassword: Yup.string().min(8, 'Password should be atleaset 6 characters').required('Please enter your confirm password').oneOf([Yup.ref('password'), null], 'Passwords does not match'),
});

const Register = () => {
    const [register] = useRestaurantRegisterMutation();
    const router = useRouter();
    const dispatch = useDispatch();

    const onSubmit = (values) => {
        const response = register({ ...values, password2: values.confirmPassword });

        if(response){
            const { user, ...rest} = response;
            dispatch(setCredentials({user: user, token: rest}));
            router.push('/restaurant');
        }
    }

    return (
        <Auth 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            authType='Sign Up'
        />
    );
};

export default Register;
