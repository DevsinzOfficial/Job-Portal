import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { ForgetClientPassword } from "../../../redux/actions/ClientActions";
import Spinner from "./Spinner";

const ForgotPasswordClient = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state?.clientData);
  const onSubmit = async (email) => {
    dispatch(ForgetClientPassword(email, navigate, toast));
  };
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
  });

  return (
    <div>
      <section className="px-4 pb-24 mx-auto max-w-7xl">
        {loading ? (
          <Spinner />
        ) : (
          <div className="  w-full py-6 mx-auto md:w-3/5 lg:w-2/5 mt-36 lg:mt-24 -mb-10 flex justify-center min-h-screen  antialiased ">
            <div className="container sm:mt-6 mt-6 border-2 border-gray-200 p-3 bg-white  ">
              <div className="text-center m-6">
                <h1 className="mb-1 text-3xl font-medium text-center text-gray-800 md:text-3xl mb-6">
                  Forgot your password?
                </h1>
                <p className="text-gray-700">
                  Just enter your email address below and we'll send you a link
                  to reset your password!
                </p>
              </div>

              <div className="m-6">
                <Formik
                  initialValues={{ email: "" }}
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
                    <input
                      type="submit"
                      className="w-full btn btn-primary btn-lg bg-teal-600 hover:bg-teal-500"
                      value="Send Reset Link"
                    />
                  </Form>
                </Formik>
                <p className=" mt-6 text-sm text-center font-medium text-gray-700 space-x-1">
                  Don&#x27;t have an account yet?
                  <span></span>
                  <Link
                    to="/register-type"
                    className="text-teal-700 hover:text-teal-900"
                  >
                    Sign Up
                  </Link>
                  .
                </p>

                <div className="flex flex-row justify-center mb-8">
                  <span className=" text-sm absolute bg-white font-medium px-4 text-gray-700">
                    or log in with email
                  </span>
                  <div className="w-full bg-gray-200 mt-3 h-px"></div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <Link
                    to="/login-type"
                    className="btn text-sm btn-primary btn-lg bg-teal-600 hover:bg-teal-500"
                  >
                    Log In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
export default ForgotPasswordClient;
