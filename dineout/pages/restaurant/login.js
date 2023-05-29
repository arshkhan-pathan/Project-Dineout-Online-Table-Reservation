// packages
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
// store
import { useRestaurantLoginMutation } from "@/store/api/auth";
import { setCredentials } from "@/store/slices/auth";
// components
import Auth from "@/components/Auth";
import RestaurantLayout from "@/layouts/restaurant";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter an valid email address")
    .required("Email address is required"),
  password: Yup.string()
    .min(8, "Password should be atleaset 8 characters")
    .required("Please enter your new password"),
});

const Login = () => {
  const [login] = useRestaurantLoginMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (values) => {
    try {
      const response = await login(values);
      console.log("login response: ", response);

      if (response && response.data.statusCode == 200) {
        const { user, ...rest } = response;
        dispatch(setCredentials({ user: user, token: rest }));
        router.push("/restaurant");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <RestaurantLayout>
        <Auth
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        />
      </RestaurantLayout>
    </>
  );
};

export default Login;
