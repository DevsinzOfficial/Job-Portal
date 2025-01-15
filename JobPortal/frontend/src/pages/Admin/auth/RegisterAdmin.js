import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { RegisterAdmin } from "../../../redux/actions/AdminActions";
import Spinner from "../DashBoard/PagesComponent/Helpers/Spinner";

const SignUpAdmin = () => {
  const { loginLoading } = useSelector((state) => state?.adminData);
  const formData = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    secret: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    const { username, email, password, secret } = formData;

    const userData = {
      username,
      secret,
      email,
      password,
    };

    dispatch(RegisterAdmin(userData, navigate, toast));
  };

  const validate = Yup.object({
    username: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Username is Required"),
    secret: Yup.string()
      .max(7, "Must be 7 characters ")
      .required("Secret Key is Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password do not match")
      .required("Confirm password is required"),
  });
  return (
    <>
      <section className="grid grid-cols-1  mt-20 lg:mt-0">
        {loginLoading ? (
          <Spinner />
        ) : (
          <div className="w-full px-4 py-20 mx-auto bg-white xl:py-32 md:w-3/5 lg:w-4/5 xl:w-3/5">
            <h1 className="mb-4 -mt-3 text-2xl semibold leading-snug tracking-tight text-center text-gray-900 md:text-4xl">
              Sign up to Control Users
            </h1>

            <Formik
              initialValues={formData}
              validationSchema={validate}
              onSubmit={onSubmit}
            >
              <Form className="mt-8 space-y-3">
                <TextField
                  label="User Name"
                  name="username"
                  type="text"
                  placeholder="Ex.Zair"
                />

                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Ex.zairanjum66@gmail.com"
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                />
                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                />
                <TextField
                  label="Secret Key"
                  name="secret"
                  type="text"
                  placeholder="Ex.Anjum"
                />
                <input
                  type="submit"
                  className="w-full btn btn-primary btn-lg bg-teal-600 hover:bg-teal-500"
                  value="Register"
                />
              </Form>
            </Formik>
          </div>
        )}
      </section>
    </>
  );
};
export default SignUpAdmin;
