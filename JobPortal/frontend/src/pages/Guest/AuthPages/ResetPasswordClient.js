import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import {
  ResetClientPassword,
  verifyResetPasswordToken,
} from "../../../redux/actions/ClientActions";
import queryString from "query-string";
import Spinner from "./Spinner";

const ResetPasswordClient = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { loading } = useSelector((state) => state?.freelancerData);
  const { token, id } = queryString.parse(location.search);

  useEffect(() => {
    dispatch(verifyResetPasswordToken(token, id, toast));
  }, [dispatch, token, id]);

  const formData = {
    password: "",
    confirmPassword: "",
  };

  const onSubmit = (formData) => {
    const { password } = formData;

    const userData = {
      password,
    };

    dispatch(ResetClientPassword(token, id, userData, navigate, toast));
  };

  const validate = Yup.object({
    password: Yup.string()
      .min(8, "Password must be at least 8 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password do not match")
      .required("Confirm password is required"),
  });

  return (
    <div>
      <section className="px-4 pb-24 mx-auto max-w-7xl mt-32 -mb-50">
        {loading ? (
          <Spinner />
        ) : (
          <div className="w-full py-6 mx-auto md:w-3/5 lg:w-2/5 ">
            <h1 className=" text-3xl font-medium text-center text-gray-800 md:text-3xl mb-6">
              Reset Your Account Password
            </h1>
            <div className="grid grid-cols-1 gap-4"></div>

            <Formik
              initialValues={formData}
              validationSchema={validate}
              onSubmit={onSubmit}
            >
              <Form className="mt-8 space-y-3 ">
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

                <input
                  type="submit"
                  className="w-full btn btn-primary btn-lg bg-teal-600 hover:bg-teal-500"
                  value="Reset"
                />
              </Form>
            </Formik>
          </div>
        )}
      </section>
    </div>
  );
};

export default ResetPasswordClient;
