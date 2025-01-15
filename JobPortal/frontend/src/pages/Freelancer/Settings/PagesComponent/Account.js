import  { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  UpdateFreelancerAccount,
  DeleteFreelancerAccount,
} from "../../../../redux/actions/FreelancerActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Spinner from "../../DashBoard/PagesComponent/Helpers/Spinner";
const Account = () => {
  const userId = useSelector((state) => state?.freelancerData?.userInfo?._id);
  const userInfo = useSelector((state) => state?.freelancerData?.userInfo);
  const { loading } = useSelector((state) => state?.freelancerData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const { firstName, lastName, email } = userInfo;

  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };

  const onSubmitFreelancer = async (formData) => {
    setModal(false);
    dispatch(UpdateFreelancerAccount(userId, formData, navigate, toast));
  };

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
  });

  const options = [
    { value: "", text: "Choose a Reason" },
    { value: "Not getting enough orders", text: "Not getting enough orders" },
    {
      value: "Can not win a bid on a project",
      text: "Can not win a bid on a project",
    },
    {
      value: "Unhappy with TitforTat policies",
      text: "Unhappy with TitforTat policies",
    },
    {
      value: "I can not find what i need on TitforTat",
      text: "I can not find what i need on TitforTat",
    },
    { value: "others", text: "others" },
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const onClickFreelancerDelete = (userId) => {
    dispatch(DeleteFreelancerAccount(userId, navigate, toast));
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="grid ">
            <div className="w-full px-4 mx-auto ">
              <div className="flex flex-col flex-wrap items-left font-bold text-lg text-gray-700 ">
                <div className="item mb-2">
                  <h3>Account Settings</h3>
                </div>
              </div>
              <div className=" col-span-6 sm:col-span-6 border-b mb-4"></div>
              <Formik
                initialValues={formData}
                onSubmit={onSubmitFreelancer}
                validationSchema={validate}
              >
                <Form className=" space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <label htmlFor="firstName" className="block">
                      <span className="block mb-1 text-sm font-medium text-gray-700">
                        First Name
                      </span>
                      <Field
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-teal-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="Ex.Zair"
                      />
                      <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <ErrorMessage component="p" name="firstName" />
                      </div>
                    </label>
                    <label htmlFor="lastName" className="block">
                      <span className="block mb-1 text-sm  font-medium text-gray-700">
                        Last Name
                      </span>
                      <Field
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-teal-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        name="lastName"
                        type="text"
                        placeholder="Ex.Anjum"
                      />
                      <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <ErrorMessage component="p" name="lastName" />
                      </div>
                    </label>
                  </div>
                  <label htmlFor="email" className="block">
                    <span className="block mb-1 text-sm  font-medium text-gray-700">
                      Email
                    </span>
                    <Field
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-teal-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      name="email"
                      type="email"
                      placeholder="Ex.ZairAnjum66@gmail.com"
                    />
                    <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                      <ErrorMessage component="p" name="email" />
                    </div>
                  </label>

                  <button
                    className="btn w-80 btn-primary btn-regular bg-teal-600 hover:bg-teal-700"
                    onClick={handleModal}
                    type="button"
                  >
                    Save Changes
                  </button>
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
                                    Update Account Settings
                                  </h3>
                                  <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                      Are you sure you want to change your
                                      account settings?
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
                </Form>
              </Formik>
            </div>
          </section>
          <div className="border-b border-gray-300 mt-6"></div>
          <section className="flex flex-nowrap justify-between px-4 mx-auto mt-6  text-sm  font-medium text-gray-700 space-x-6">
            <div className="item">
              <h3>ACCOUNT DELETION</h3>
            </div>
            <div className="item">
              <div className="flex flex-col flex-nowrap text-sm font-medium text-gray-700 space-y-2">
                <h4 className="item">
                  What happens when you delete your account?
                </h4>

                <li className="item text-xs font-medium text-gray-500">
                  Your profile and Gigs won't be shown on TitforTat anymore.
                </li>
                <li className="item text-xs font-medium text-gray-500">
                  Active Projects will be cancelled.
                </li>
              </div>
            </div>
          </section>
          <form className="flex flex-nowrap justify-between px-4 mx-auto mt-10 text-sm font-medium text-gray-700 sm:space-x-6">
            <div className="item ">
              <h3>I'm deleting because...</h3>
            </div>
            <div className="item">
              <div className="flex flex-col text-sm font-medium text-gray-700 space-y-16">
                <select
                  value={selected}
                  onChange={handleChange}
                  className="w-full lg:w-80 text-sm font-medium text-gray-700 block border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 "
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  disabled={selected ? false : true}
                  onClick={handleDeleteModal}
                  className="btn btn-primary btn-regular bg-teal-600 hover:bg-teal-700"
                >
                  Delete Account
                </button>
                {deleteModal && (
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
                                  Delete Account
                                </h3>
                                <div className="mt-2">
                                  <p className="text-sm text-gray-500">
                                    Are you sure you want to delete your account
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              onClick={() => onClickFreelancerDelete(userId)}
                              className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                            >
                              I am Sure!
                            </button>

                            <button
                              type="button"
                              onClick={closeDeleteModal}
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
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default Account;
