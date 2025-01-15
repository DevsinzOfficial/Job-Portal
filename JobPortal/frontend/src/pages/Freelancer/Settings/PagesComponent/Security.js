import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { UpdateFreelancerAccount } from "../../../../redux/actions/FreelancerActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../DashBoard/PagesComponent/Helpers/Spinner";

const Security = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const userId = useSelector((state) => state.freelancerData.userInfo._id);
  const { loading } = useSelector((state) => state?.freelancerData);

  const handleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const formData = {
    password: "",
    confirmPassword: "",
  };

  const onSubmitFreelancer = async (formData) => {
    dispatch(UpdateFreelancerAccount(userId, formData, navigate, toast));
    setModal(false);
  };

  const validate = Yup.object({
    password: Yup.string()
      .min(8, "Password must be at least 8 charaters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password do not match")
      .required("Confirm Password is required"),
  });
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-col flex-wrap items-left font-bold text-lg text-gray-700 ">
            <div className="item ml-4 mb-2 ">
              <h3>Security Settings</h3>
            </div>
          </div>
          <div className=" col-span-6 sm:col-span-6 border-b mb-4 "></div>
          <Formik
            initialValues={formData}
            onSubmit={onSubmitFreelancer}
            validationSchema={validate}
          >
            <Form>
              <div className="flex flex-col flex-nowrap text-sm  font-medium text-gray-700 space-y-4 mx-4  ">
                <div className="item ">CHANGE PASSWORD</div>
                <div className="item">
                  <div className="flex flex-nowrap justify-between items-center">
                    <div className="item">New Password</div>
                    <div className="item w-1/2">
                      <Field
                        type="password"
                        className=" bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-teal-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="••••••••"
                        label="password"
                        name="password"
                      />
                      <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <ErrorMessage component="p" name="password" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="flex flex-nowrap justify-between items-center ">
                    <div className="item">Confirm Password</div>
                    <div className="item w-1/2">
                      <Field
                        type="password"
                        className=" bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-teal-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="••••••••"
                        label="confirmPassword"
                        name="confirmPassword"
                      />
                      <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <ErrorMessage component="p" name="confirmPassword" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="flex flex-nowrap justify-between items-center">
                    <div className="item"></div>
                    <div className="item ">
                      <button
                        className="btn btn-primary btn-regular bg-teal-600 hover:bg-teal-700  "
                        onClick={handleModal}
                        type="button"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>{" "}
                {modal && (
                  <div
                    className="relative z-10"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                  >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg
                                  className="h-6 w-6 text-red-600"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z"
                                  />
                                </svg>
                              </div>
                              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3
                                  className="text-lg font-medium leading-6 text-gray-900"
                                  id="modal-title"
                                >
                                  Update Password
                                </h3>
                                <div className="mt-2">
                                  <p className="text-sm text-gray-500">
                                    Are you sure you want to change your
                                    password?
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="submit"
                              className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              I am Sure!
                            </button>

                            <button
                              type="button"
                              onClick={closeModal}
                              className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Form>
          </Formik>
        </>
      )}
    </div>
  );
};

export default Security;
