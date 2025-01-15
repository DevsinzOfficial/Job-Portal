import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import Modal from "./Modal";
import { useLocation } from "react-router-dom";
import { UpdateJob } from "../../../redux/actions/ClientActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Spinner from "../DashBoard/PagesComponent/Helpers/Spinner";

const EditProject = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const jobDetail = useLocation().state.job;
  const { loading } = useSelector((state) => state?.clientData);

  

  const handleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const {
    title,
    discription,
    category,
    experienceLevel,
    skills,
    country,
    duration,
    budget,
  } = jobDetail;

  const formData = {
    title: title,
    discription: discription,
    category: category,
    experienceLevel: experienceLevel,
    skills: skills,
    country: country,
    duration: duration,
    budget: budget,
  };

  const onSubmit = async (formValues) => {
    dispatch(UpdateJob(jobDetail._id, formValues, navigate, toast));
  };

  const validate = Yup.object({
    title: Yup.string().required("Title is Required"),
    discription: Yup.string()
      .min(600, "Description must have at least 200 words")
      .required("Story is Required"),
    category: Yup.string().required("Category is Required"),
    country: Yup.string().required("Country is Required"),
    duration: Yup.number()
      .required("Duration is Required")
      .positive()
      .integer()
      .min(1),
    budget: Yup.number()
      .required("Budget is Required")
      .positive()
      .integer()
      .min(1),
    experienceLevel: Yup.string().required("Experience Level is Required"),
    skills: Yup.array(Yup.string().required("Skills are Required")),
  });

  return (
    <section className="px-4 mx-auto max-w-7xl bg-gray-100 ">
      {loading ? (
        <Spinner />
      ) : (
        <div className="-mt-6 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-6 md:mt-0 md:col-span-3">
              <div className=" mx-auto lg:mx-60 shadow-md overflow-hidden rounded-lg my-auto lg:my-8 ">
                <Formik
                  initialValues={formData}
                  onSubmit={onSubmit}
                  validationSchema={validate}
                >
                  {({ values, setFieldValue }) => (
                    <Form className="mb-12">
                      <div className=" mt-4 sm:mt-0 px-4 py-5 bg-white sm:p-6 ">
                        <div className="flex flex-col border-0  border-b flex-wrap items-center font-bold text-xl text-gray-700 mb-2">
                          <div className="item my-2 ">
                            <h3>Edit Project</h3>
                          </div>
                        </div>

                        <div className="grid grid-cols-6 gap-4  ">
                          <div className="col-span-6 sm:col-span-4 ">
                            <label
                              htmlFor="title"
                              className="block text-sm font-medium text-gray-700 mb-2"
                            >
                              Title
                            </label>
                            <Field
                              type="text"
                              name="title"
                              placeholder="Build Website "
                              className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                            <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                              <ErrorMessage component="p" name="title" />
                            </div>
                          </div>
                          <div className="col-span-6 sm:col-span-6 ">
                            <label
                              htmlFor="discription"
                              className="block text-sm font-medium text-gray-700 my-2"
                            >
                              Description
                            </label>
                            <div className="mt-1">
                              <Field
                                component="textarea"
                                rows="5"
                                name="discription"
                                className="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                placeholder="Freelancers want to know about your Posted Job."
                              />
                            </div>

                            <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                              <ErrorMessage component="p" name="discription" />
                            </div>
                          </div>
                          <div className="col-span-6 sm:col-span-6">
                            <label
                              htmlFor="category"
                              className="block text-sm font-medium text-gray-700 "
                            >
                              Category
                            </label>
                            <Field
                              component="select"
                              name="category"
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                            >
                              <option>Please Select</option>
                              <option value="Development and Programming">
                                Development and Programming
                              </option>
                              <option value="Graphic and Design">
                                Graphic and Design
                              </option>
                              <option value="Marketing">Marketing</option>
                              <option value="Data Science">Data Science</option>
                              <option value="Customer Support">
                                Customer Support
                              </option>
                              <option value="Writing and Translation">
                                Writing and Translation
                              </option>
                            </Field>
                            <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                              <ErrorMessage component="p" name="category" />
                            </div>
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <div className="col-span-6 sm:col-span-2">
                              <label
                                htmlFor="duration"
                                className="block text-sm font-medium text-gray-700 mb-2"
                              >
                                Duration
                              </label>
                              <div className="mt-1 flex rounded-md shadow-sm">
                                <Field
                                  type="number"
                                  name="duration"
                                  className="block w-full flex-1 rounded-none rounded-l-md border-gray-300 focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                                />
                                <span className="inline-flex items-center rounded-r-md border border-r-1 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                  days
                                </span>
                              </div>
                            </div>
                            <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                              <ErrorMessage component="p" name="duration" />
                            </div>
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="budget"
                              className="block text-sm font-medium text-gray-700 my-1"
                            >
                              Budget
                            </label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <span className="text-gray-500 sm:text-sm">
                                  $
                                </span>
                              </div>
                              <Field
                                type="number"
                                name="budget"
                                className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                                placeholder="0.00"
                              />
                            </div>
                            <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                              <ErrorMessage component="p" name="budget" />
                            </div>
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700 "
                            >
                              Country
                            </label>
                            <Field
                              component="select"
                              name="country"
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                            >
                              <option>Please Select</option>
                              <option value="Pakistan">Pakistan</option>
                              <option value="India">India</option>
                              <option value="Bangladesh">Bangladesh</option>
                            </Field>
                            <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                              <ErrorMessage component="p" name="country" />
                            </div>
                          </div>
                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="experienceLevel"
                              className="block text-sm font-medium text-gray-700 "
                            >
                              Experience Level
                            </label>
                            <Field
                              component="select"
                              name="experienceLevel"
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                            >
                              <option>Please Select</option>
                              <option value="Beginner">Beginner</option>
                              <option value="Intermediate">Intermediate</option>
                              <option value="Expert">Expert</option>
                            </Field>
                            <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                              <ErrorMessage
                                component="p"
                                name="experienceLevel"
                              />
                            </div>
                          </div>
                        </div>
                        <FieldArray name="skills">
                          {({ length, remove, push }) => (
                            <div>
                              {values.skills.map((skill, index) => (
                                <div
                                  key={index}
                                  className=" col-span-6 sm:col-span-6"
                                >
                                  <div className="flex  flex-row space-x-4 ">
                                    <div className="item  basis-1/2">
                                      <label
                                        htmlFor={`skills.${index}`}
                                        className=" block text-sm font-medium text-gray-700 my-2"
                                      >
                                        Add Skills ( Please do not add more than
                                        3 skills )
                                      </label>
                                      <Field
                                        name={`skills.${index}`}
                                        placeholder="Html"
                                        type="text"
                                        className="mt-1 w-full focus:ring-teal-500 focus:border-teal-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />

                                      <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        <ErrorMessage
                                          component="p"
                                          name={`skills.${index}`}
                                        />
                                      </div>
                                    </div>
                                    {values?.skills?.length > 1 ? (
                                      <div className="flex  space-x-2 mt-6 text-sm grow">
                                        <button
                                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                                          type="button"
                                          onClick={() => remove(index)}
                                        >
                                          <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
                                              clipRule="evenodd"
                                            />
                                          </svg>
                                        </button>
                                        {values?.skills?.length < 3 && (
                                          <button
                                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-teal-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                                            type="button"
                                            onClick={() => push("")}
                                          >
                                            <svg
                                              className="w-5 h-5"
                                              aria-hidden="true"
                                              fill="currentColor"
                                              viewBox="0 0 20 20"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                                clipRule="evenodd"
                                              />
                                            </svg>
                                          </button>
                                        )}
                                      </div>
                                    ) : (
                                      <div className="flex  space-x-2 mt-6 text-sm grow">
                                        <button
                                          className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-teal-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                                          type="button"
                                          onClick={() => push("")}
                                        >
                                          <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                              clipRule="evenodd"
                                            />
                                          </svg>
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </FieldArray>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 ">
                        <button
                          type="submit"
                          className="w-36 inline-flex justify-center py-2 px-4 mr-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                          Update
                        </button>
                        <div
                          onClick={handleModal}
                          className="w-36 inline-flex cursor-pointer justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          Cancel
                        </div>
                        {modal && (
                          <Modal
                            WarningTitle="Cancel Updating Job"
                            Description=" Are you sure you want to cancel? All of
                  your filled data will be lost. This action
                  cannot be undone."
                            SuccessText="I am Sure!"
                            FailureText="Cancel"
                            Link="/client/client-dashboard"
                            closeModal={closeModal}
                          />
                        )}
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EditProject;
