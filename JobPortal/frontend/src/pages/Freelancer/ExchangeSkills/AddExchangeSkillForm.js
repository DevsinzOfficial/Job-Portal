import  { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import Modal from "../Profile/Modal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AdExchangeSkills } from "../../../redux/actions/FreelancerActions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../DashBoard/PagesComponent/Helpers/Spinner";
import gig from "../../../img/blog.png";

const AddExchangeSkillForm = () => {
  const { loading } = useSelector((state) => state?.freelancerData);
  const [modal, setModal] = useState(false);
  const [preview, setPreview] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const formData = {
    title: "",
    discription: "",
    duration: "",
    attachments: "",
    requiredSkills: "",
    offeredSkills: "",
    price: {
      beginnerLevel: "",
      intermediate: "",
      expert: "",
    },

    tags: [""],
  };

  const onSubmit = (formValues) => {
    dispatch(AdExchangeSkills(formValues, navigate, toast));
  };

  const validate = Yup.object({
    title: Yup.string().required("Title is Required"),
    discription: Yup.string()
      .min(600, "Description must have at least 200 words")
      .required("Description is Required"),
    duration: Yup.number().required("Duration is Required").positive().min(1),
    attachments: Yup.mixed().required("Gig Photo is Required"),
    requiredSkills: Yup.string().required("RequiredSkill is Required"),
    offeredSkills: Yup.string().required("OfferedSkill is Required"),
    price: Yup.object({
      beginnerLevel: Yup.number()
        .required("Beginner Price is Required")
        .positive()
        .min(1),
      intermediate: Yup.number()
        .required("Intermediate Price is Required")
        .positive()
        .min(1),
      expert: Yup.number()
        .required("Expert Price is Required")
        .positive()
        .min(1),
    }),
    tags: Yup.array(Yup.string().required("Tags are Required")),
  });

  return (
    <>
      <section className="px-4 mx-auto max-w-7xl bg-gray-100">
        {/* {loading ? (
          <Spinner />
        ) : ( */}
          <div className="-mt-6 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="mt-6 md:mt-0 md:col-span-3">
                <Formik
                  initialValues={formData}
                  onSubmit={onSubmit}
                  validationSchema={validate}
                >
                  {({ values, setFieldValue }) => (
                    <Form>
                      <div className=" mx-auto lg:mx-60 shadow-md overflow-hidden rounded-lg my-auto lg:my-8  ">
                        <div className=" mt-4 sm:mt-0 px-4 py-5 bg-white sm:p-6">
                          <div className="flex flex-col flex-wrap items-center font-bold text-lg text-gray-700 mb-2">
                            <div className="item ">
                              <h3>Post Exchange Skill</h3>
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
                                placeholder="Exchange Graphic Design with Web Development"
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
                                  placeholder="Freelancers want to know about your require skills so they can access if it can be done by them."
                                />
                              </div>

                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage
                                  component="p"
                                  name="discription"
                                />
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-2">
                              <div className="col-span-6 sm:col-span-2">
                                <label
                                  htmlFor="duration"
                                  className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                  Exchange Duration
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <Field
                                    type="number"
                                    name="duration"
                                    className="block w-full flex-1 rounded-none rounded-l-md border-gray-300 focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                                    placeholder="2"
                                  />
                                  <span className="inline-flex items-center rounded-r-md border border-r-1 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
                                    days
                                  </span>
                                </div>
                                <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                  <ErrorMessage component="p" name="duration" />
                                </div>
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-6">
                              <label
                                htmlFor="offeredSkills"
                                className="block text-sm font-medium text-gray-700 "
                              >
                                What is the main skill you offer?
                              </label>
                              <Field
                                component="select"
                                name="offeredSkills"
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
                                <option value="Data Science">
                                  Data Science
                                </option>
                                <option value="Customer Support">
                                  Customer Support
                                </option>
                                <option value="Writing and Translation">
                                  Writing and Translation
                                </option>
                              </Field>
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage
                                  component="p"
                                  name="offeredSkills"
                                />
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-6">
                              <label
                                htmlFor="requiredSkills"
                                className="block text-sm font-medium text-gray-700 "
                              >
                                What is the main skill you require?
                              </label>
                              <Field
                                component="select"
                                name="requiredSkills"
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
                                <option value="Data Science">
                                  Data Science
                                </option>
                                <option value="Customer Support">
                                  Customer Support
                                </option>
                                <option value="Writing and Translation">
                                  Writing and Translation
                                </option>
                              </Field>
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage
                                  component="p"
                                  name="requiredSkills"
                                />
                              </div>
                            </div>
                            <div className=" col-span-6 sm:col-span-6  font-semibold text-gray-700 ">
                              <h3>Fixed Price for Your Skills</h3>
                            </div>
                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                              <label
                                htmlFor="price.beginnerLevel"
                                className="block text-sm font-medium text-gray-700 my-2"
                              >
                                Beginner Level
                              </label>
                              <div className="relative mt-1 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                  <span className="text-gray-500 sm:text-sm">
                                    $
                                  </span>
                                </div>
                                <Field
                                  type="number"
                                  name="price.beginnerLevel"
                                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                                  placeholder="0.00"
                                />
                              </div>
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage
                                  component="p"
                                  name="price.beginnerLevel"
                                />
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                              <label
                                htmlFor="price.intermediate"
                                className="block text-sm font-medium text-gray-700 my-2"
                              >
                                Intermediate
                              </label>
                              <div className="relative mt-1 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                  <span className="text-gray-500 sm:text-sm">
                                    $
                                  </span>
                                </div>
                                <Field
                                  type="number"
                                  name="price.intermediate"
                                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                                  placeholder="0.00"
                                />
                              </div>
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage
                                  component="p"
                                  name="price.intermediate"
                                />
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                              <label
                                htmlFor="price.expert"
                                className="block text-sm font-medium text-gray-700 my-2"
                              >
                                Expert
                              </label>
                              <div className="relative mt-1 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                  <span className="text-gray-500 sm:text-sm">
                                    $
                                  </span>
                                </div>
                                <Field
                                  type="number"
                                  name="price.expert"
                                  className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                                  placeholder="0.00"
                                />
                              </div>
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage
                                  component="p"
                                  name="price.expert"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-span-6 sm:col-span-4">
                              <label className="block text-sm font-medium text-gray-700 my-2">
                                Gig Image
                              </label>
                              <div className="mt-1 flex justify-center rounded-md border-3 border border-gray-300 px-6 pt-5 pb-6">
                                <div className="space-y-1 text-center">
                                  <img
                                    className="mx-auto text-gray-400"
                                    src={!preview ? gig : preview}
                                    alt="gigImage"
                                  />
                                  <div className="flex text-sm text-gray-600 text-left">
                                    <label
                                      htmlFor="attachments"
                                      className="relative cursor-pointer my-1 rounded-md bg-white font-medium text-teal-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2 hover:text-teal-500"
                                    >
                                      <span>Upload a file</span>
                                      <input
                                        id="attachments"
                                        name="attachments"
                                        type="file"
                                        className="sr-only"
                                        onChange={(event) => {
                                          setFieldValue(
                                            "attachments",
                                            event.target.files[0]
                                          );
                                          setPreview(
                                            URL.createObjectURL(
                                              event.target.files[0]
                                            )
                                          );
                                        }}
                                      />
                                    </label>
                                  </div>
                                  <p className="text-xs text-gray-500 text-left ">
                                    PNG, JPG, GIF up to 10MB
                                  </p>
                                </div>
                              </div>
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage
                                  component="p"
                                  name="attachments"
                                />
                              </div>
                            </div>
                          <FieldArray name="tags">
                            {({ length, remove, push }) => (
                              <div>
                                {values.tags.map((tag, index) => (
                                  <div
                                    key={index}
                                    className=" col-span-6 sm:col-span-6"
                                  >
                                    <div className="flex  flex-row space-x-4 ">
                                      <div className="item  basis-1/2">
                                        <label
                                          htmlFor={`tags.${index}`}
                                          className=" block text-sm font-medium text-gray-700 my-2"
                                        >
                                          Add Tags
                                        </label>
                                        <Field
                                          name={`tags.${index}`}
                                          placeholder="Html"
                                          type="text"
                                          className="mt-1 w-full focus:ring-teal-500 focus:border-teal-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />

                                        <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                          <ErrorMessage
                                            component="p"
                                            name={`tags.${index}`}
                                          />
                                        </div>
                                      </div>
                                      {values.tags.length > 1 ? (
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
                                          {values?.tags?.length < 3 && (
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
                            Post
                          </button>
                          <div
                            onClick={handleModal}
                            className="w-36 inline-flex cursor-pointer justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          >
                            Cancel
                          </div>
                          {modal && (
                            <Modal
                              WarningTitle="Cancel Form Submission"
                              Description=" Are you sure you want to cancel? All of
                  your filled data will be lost. This action
                  cannot be undone."
                              SuccessText="I am Sure!"
                              FailureText="Cancel"
                              Link="/freelancer/freelancer-dashboard"
                              closeModal={closeModal}
                            />
                          )}
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        {/* // )} */}
      </section>
    </>
  );
};

export default AddExchangeSkillForm;
