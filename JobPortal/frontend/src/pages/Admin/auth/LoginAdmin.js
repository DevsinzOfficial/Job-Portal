import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import { LoginAdmin } from "../../../redux/actions/AdminActions";
import Spinner from "../DashBoard/PagesComponent/Helpers/Spinner";

const SignInAdmin = () => {
  const { loginLoading } = useSelector((state) => state?.adminData);
  const formData = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (formData) => {
    dispatch(LoginAdmin(formData, navigate, toast));
  };

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div>
      <section className="px-4 pb-24 mx-auto max-w-7xl mt-32 -mb-50">
        {loginLoading ? (
          <Spinner />
        ) : (
          <div className="w-full py-6 mx-auto md:w-3/5 lg:w-2/5 ">
            <h1 className=" text-3xl font-medium text-center text-gray-800 md:text-3xl mb-6">
              Log in to TitforTat as Admin
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
          </div>
        )}
      </section>
    </div>
  );
};
export default SignInAdmin;
