import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  addFreelancerPayment,
  getFreelancerPayment,
  deleteFreelancerPayment,
} from "./../../../../redux/actions/FreelancerActions";
import Spinner from "../../DashBoard/PagesComponent/Helpers/Spinner";

const PaymentMethods = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, payments } = useSelector((state) => state?.freelancerData);
  const userId = useSelector((state) => state?.freelancerData?.userInfo?._id);

  useEffect(() => {
    dispatch(getFreelancerPayment(userId, toast));
  }, [dispatch, userId]);

  const formData = {
    name: "",
    email: "",
    card_Name: "",
    card_ExpYear: "",
    card_ExpMonth: "",
    card_Number: "",
    card_CVC: "",
  };

  const onSubmit = async (formValues) => {
    dispatch(addFreelancerPayment(formValues, navigate, toast));
  };

  const [deleteModal, setDeleteModal] = useState(false);
  const handleDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const delPayment = (paymentId) => {
    dispatch(deleteFreelancerPayment(paymentId, toast));
    setDeleteModal(false);
  };

  const validate = Yup.object({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    card_Name: Yup.string().required("Card Name is Required"),
    card_Number: Yup.string()
      .matches(/^\d{16}$/, "Card number must be 16 digits")
      .matches(/^4/, "Card must be a Visa card")
      .required("Card number is required"),
    card_ExpYear: Yup.string()
      .matches(/^\d{4}$/, "Expiry year must be 4 digits")
      .test(
        "year-range",
        "Expiry year must be in the future",
        (value) => value >= new Date().getFullYear()
      )
      .required("Expiry year is required"),
    card_ExpMonth: Yup.string()
      .matches(/^\d{2}$/, "Expiry month must be 2 digits")
      .test(
        "month-range",
        "Expiry month must be between 01 and 12",
        (value) => value >= "01" && value <= "12"
      )
      .required("Expiry month is required"),
    card_CVC: Yup.string()
      .matches(/^\d{3}$/, "CVV must be 3 digits")
      .required("CVV is required"),
  });

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="mx-auto max-w-7xl ">
            <div className="-mt-6 ">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="mt-6 md:mt-0 md:col-span-3">
                  {payments && payments?.length < 1 ? (
                    <>
                      <Formik
                        initialValues={formData}
                        onSubmit={onSubmit}
                        validationSchema={validate}
                      >
                        {({ values }) => (
                          <Form>
                            <div className=" mx-auto overflow-hidden rounded-lg">
                              <div className=" sm:mt-0 px-4 py-5 sm:p-6">
                                <div className="flex flex-col flex-wrap items-left font-bold text-lg text-gray-700 ">
                                  <div className="item mb-8">
                                    <h3>Add Payment Method</h3>
                                  </div>
                                </div>
                                <div className=" col-span-6 sm:col-span-6 border-b mb-4 "></div>
                                <div className="grid grid-cols-6 gap-6  ">
                                  <div className="col-span-3 ">
                                    <div className="flex items-center">
                                      <div className=" text-sm font-medium text-gray-700 ">
                                        <img
                                          src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                                          className="h-8 "
                                          alt="debit-card"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className=" col-span-6 sm:col-span-6 border-b"></div>

                                  <>
                                    <div className="col-span-6 ">
                                      <label
                                        htmlFor="card_Number"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                      >
                                        Card Number
                                      </label>
                                      <Field
                                        type="text"
                                        name="card_Number"
                                        placeholder="0000 0000 0000 00000"
                                        className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                      <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        <ErrorMessage
                                          component="p"
                                          name="card_Number"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-span-3">
                                      <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                      >
                                        Name
                                      </label>
                                      <Field
                                        type="text"
                                        name="name"
                                        placeholder="Zair"
                                        className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                      <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        <ErrorMessage
                                          component="p"
                                          name="name"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-span-3  ">
                                      <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                      >
                                        Email
                                      </label>
                                      <Field
                                        type="email"
                                        name="email"
                                        placeholder="Zairanjum66@gmail.com"
                                        className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                      <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        <ErrorMessage
                                          component="p"
                                          name="email"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-span-3">
                                      <label
                                        htmlFor="card_ExpYear"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                      >
                                        Card Expiry Year
                                      </label>
                                      <Field
                                        type="text"
                                        name="card_ExpYear"
                                        placeholder="2025"
                                        className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                      <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        <ErrorMessage
                                          component="p"
                                          name="card_ExpYear"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-span-3">
                                      <label
                                        htmlFor="card_ExpMonth"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                      >
                                        Card Expiry Month
                                      </label>
                                      <Field
                                        type="text"
                                        name="card_ExpMonth"
                                        maxLength={2}
                                        placeholder="12"
                                        className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                      <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        <ErrorMessage
                                          component="p"
                                          name="card_ExpMonth"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-span-3">
                                      <label
                                        htmlFor="card_CVC"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                      >
                                        CVV
                                      </label>
                                      <Field
                                        type="text"
                                        name="card_CVC"
                                        maxLength={3}
                                        placeholder="123"
                                        className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />
                                      <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        <ErrorMessage
                                          component="p"
                                          name="card_CVC"
                                        />
                                      </div>
                                    </div>

                                    <div className="col-span-3">
                                      <label
                                        htmlFor="card_Name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                      >
                                        Card Name
                                      </label>
                                      <Field
                                        component="select"
                                        name="card_Name"
                                        maxLength={3}
                                        placeholder="123"
                                        className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      >
                                        <option>Please Select</option>
                                        <option value="visa">Visa</option>
                                      </Field>
                                      <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        <ErrorMessage
                                          component="p"
                                          name="card_Name"
                                        />
                                      </div>
                                    </div>
                                  </>
                                </div>
                              </div>
                              <div className="px-4 py-3 text-right sm:px-6 ">
                                <button
                                  type="submit"
                                  className="w-56 inline-flex justify-center py-2 px-4  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                >
                                  Add Payment Method
                                </button>
                              </div>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </>
                  ) : (
                    <div className=" mx-auto overflow-hidden rounded-lg   ">
                      <div className=" sm:mt-0 px-4 py-5 sm:p-6">
                        <div className="flex flex-col flex-wrap items-left font-bold text-lg text-gray-700 ">
                          <div className="item mb-2">
                            <h3>Your Payment Method</h3>
                          </div>
                        </div>
                        <div className=" col-span-6 sm:col-span-6 border-b mb-4 "></div>
                        <div className=" bg-white text-gray-700 py-3 rounded">
                          <div className="flex flex-col space-y-2 justify-center">
                            <p className="font-semibold text-lg ">
                              Card Id:{" "}
                              <span className="text-sm font-regualr">
                                {payments && payments[0]?.CardDetails?.cardId}
                              </span>
                            </p>
                            <p className="font-semibold text-lg ">
                              Customer Id:{" "}
                              <span className="text-sm font-regualr">
                                {payments &&
                                  payments[0]?.CardDetails?.customerId}
                              </span>
                            </p>
                            <p className="font-semibold text-lg ">
                              Email:{" "}
                              <span className="text-sm font-regualr">
                                {payments && payments[0]?.CardDetails?.email}
                              </span>
                            </p>
                            <p className="font-semibold text-lg">
                              Name on Card:{" "}
                              <span className="text-sm font-regualr">
                                {payments && payments[0]?.CardDetails?.name}
                              </span>
                            </p>
                          </div>
                          <p className=" text-sm mt-4">
                            One Payment Method a Time {""}
                            <button
                              onClick={handleDeleteModal}
                              className="hover:underline hover:text-teal-600 cursor-pointer font-bold "
                            >
                              Click Here To Delete!! {""}
                            </button>
                            {""} and Change it.
                          </p>
                          {deleteModal && (
                            <div>
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
                                              Delete Payment
                                            </h3>
                                            <div className="mt-2">
                                              <p className="text-sm text-gray-500">
                                                Are you sure you want to delete
                                                Payment Method
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                          onClick={() =>
                                            delPayment(payments[0]?._id)
                                          }
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
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default PaymentMethods;
