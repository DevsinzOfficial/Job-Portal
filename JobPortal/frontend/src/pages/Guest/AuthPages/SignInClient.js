import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { LoginClient } from "../../../redux/actions/ClientActions";
import Spinner from "./Spinner";

const SignInClient = () => {
  const { loading } = useSelector((state) => state?.clientData);
  const formData = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    const { email, password } = formData;

    const userData = {
      email,
      password,
    };
    dispatch(LoginClient(userData, navigate, toast));
  };

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div>
      <section className="px-4 pb-24 mx-auto max-w-7xl mt-32 -mb-50">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="w-full px-4 lg:px-0 py-8 lg:py-0 mx-auto md:w-3/5 lg:w-2/5 ">
              <h1 className=" text-3xl font-medium text-center text-gray-800 md:text-3xl mb-6">
                Log in to TitforTat as Client
              </h1>

              <Formik
                initialValues={formData}
                validationSchema={validate}
                onSubmit={onSubmit}
              >
                <Form className="mt-8 space-y-3">
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
                  <input
                    type="submit"
                    className="w-full btn btn-primary btn-lg bg-teal-600 hover:bg-teal-500"
                    value="Sign In"
                  />
                </Form>
              </Formik>

              <p className=" space-y-2 text-sm text-left text-gray-600 sm:text-center sm:space-y-0 mt-4">
                <Link
                  to="/forgot-password-client"
                  className="w-full btn btn-sm  text-teal-700 hover:text-teal-600  sm:w-auto"
                >
                  Forgot password
                </Link>
                <Link
                  to="/register-type"
                  className="w-full btn  text-teal-700 hover:text-teal-600 btn-sm  sm:w-auto"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </>
        )}
      </section>
    </div>
  );
};
export default SignInClient;
