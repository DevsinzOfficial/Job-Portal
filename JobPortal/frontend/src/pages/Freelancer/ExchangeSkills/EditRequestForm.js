import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import Modal from "../Profile/Modal";
import { UpdateRequest } from "../../../redux/actions/FreelancerActions";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../DashBoard/PagesComponent/Helpers/Spinner";

const EditRequestForm = () => {
  const { proposal } = useLocation()?.state;

  const { exchangeSkillsId } = proposal;
  const { loading } = useSelector((state) => state?.freelancerData);

  const dateConverter = (createdAt) => {
    const userCreatedDate = new Date(createdAt);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var month = months[userCreatedDate.getMonth()];
    var year = userCreatedDate.getFullYear();
    var date = userCreatedDate.getDate();

    return `${month} ${date} ${year} `;
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const { recentExperience, duration, coverLetter, bid, socialMediaLinks } =
    proposal;

  const formData = {
    _id: proposal._id,
    recentExperience: recentExperience,
    duration: duration,
    coverLetter: coverLetter,
    bid: bid,
    socialMediaLinks: socialMediaLinks,
  };

  const onSubmit = (formValues) => {
    dispatch(UpdateRequest(formValues, navigate, toast));
  };

  const validate = Yup.object({
    recentExperience: Yup.string()
      .min(600, "Recent Experience must have at least 200 words")
      .required("Recent Experience is Required"),
    coverLetter: Yup.string()
      .min(600, "Cover Letter must have at least 200 words")
      .required("Cover Letter is Required"),
    duration: Yup.number().required("Duration is Required").positive().min(1),
    bid: Yup.number().required("Price is Required").positive().min(1),
    socialMediaLinks: Yup.array(
      Yup.string().url().required("Socail Media Links are Required")
    ),
  });

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-8">
            <div className="item w-full h-auto flex-grow px-6 ">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Edit a Request
              </h1>
            </div>

            <div className="item w-full lg:w-1/2  h-auto flex-grow border border-3 lg:rounded-l-md border-r-1  border-gray-300 py-2">
              <div className="item w-full h-auto flex-grow px-6 space-y-2 ">
                <div className="item w-full h-auto flex-grow ">
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
                    Exchange Skills Details
                  </h2>
                </div>
                <div className="item w-full h-auto flex-grow ">
                  <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4">
                    {exchangeSkillsId?.title}
                  </h2>
                </div>

                <div className="item w-full h-auto flex-grow text-sm text-gray-500 ">
                  <p>Posted On {dateConverter(exchangeSkillsId?.createdAt)}</p>
                </div>
                <div className="item w-full h-auto flex-grow">
                  <div className="flex items-center text-sm font-semibold text-sky-500 space-x-1">
                    <svg
                      className="w-5 h-5 -ml-1"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className=" text-sm text-gray-500">
                      {exchangeSkillsId?.freelancer?.address?.country}
                    </span>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 mt-4"></div>

              <div className="item w-full h-auto flex-grow px-6 ">
                <p className="font-medium text-gray-700 my-2">
                  {exchangeSkillsId?.discription}
                </p>
              </div>
              <div className="border-b border-gray-200 mt-3"></div>

              <div className="item w-full h-auto flex-grow px-6 mt-2 mb-3 space-y-2">
                <div className="item w-full h-auto flex-grow font-semibold mb-3">
                  <h3>Skills and Expertise</h3>
                </div>
                <div className="item w-full h-auto flex-grow  ">
                  <div className="flex flex-row flex-wrap space-x-2 w-full ">
                    {exchangeSkillsId?.tags?.map((tag, index) => (
                      <div
                        key={index}
                        className=" px-3 py-1 text-sm font-thin text-white bg-teal-600  rounded-md "
                      >
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 "></div>

              <div className="item w-full h-auto flex-grow px-6 mt-2 mb-3 space-y-2">
                <div className="item w-full h-auto flex-grow font-semibold mb-3">
                  <h3>Offered and Required Skill</h3>
                </div>
                <div className="item w-full h-auto flex-grow  ">
                  <div className="flex flex-row flex-wrap space-x-2 w-full ">
                    <div className=" px-3 py-1 text-sm font-thin text-white bg-cyan-600  rounded-md ">
                      <span>
                        Required Skill: {exchangeSkillsId?.requiredSkills}
                      </span>
                    </div>
                    <div className="px-3 py-1 text-sm font-thin text-white bg-cyan-600  rounded-md">
                      <span>
                        Offered Skill: {exchangeSkillsId?.offeredSkills}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" hidden lg:block item w-full lg:w-1/4 h-auto border-3 border lg:rounded-r-md border-l-0 border-gray-300">
              <div className="flex flex-col flex-wrap w-auto flex-grow px-4 my-4 space-y-3">
                <div className="item">
                  <div className="flex px-2 py-2 text-sm font-thin text-gray-700 bg-gray-300 rounded-md ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 -ml-1 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="-mt-1">
                      Duration: {exchangeSkillsId?.duration} days
                    </span>
                  </div>
                </div>

                <div className="item">
                  <div className="flex px-2 py-2  text-sm font-thin text-gray-600 bg-gray-300  rounded-md ">
                    <svg
                      className="w-4 h-4 mr-2 -ml-1"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="-mt-1">
                      {" "}
                      Beginner Price: ${exchangeSkillsId?.price?.beginnerLevel}
                    </span>
                  </div>
                </div>
                <div className="item">
                  <div className="flex px-2 py-2  text-sm font-thin text-gray-600 bg-gray-300  rounded-md ">
                    <svg
                      className="w-4 h-4 mr-2 -ml-1"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="-mt-1">
                      Intermediate Price: $
                      {exchangeSkillsId?.price?.intermediate}
                    </span>
                  </div>
                </div>

                <div className="item">
                  <div className="flex px-2 py-2  text-sm font-thin text-gray-600 bg-gray-300  rounded-md ">
                    <svg
                      className="w-4 h-4 mr-2 -ml-1"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="-mt-1">
                      Expert Price: ${exchangeSkillsId?.price.expert}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Formik
            initialValues={formData}
            onSubmit={onSubmit}
            validationSchema={validate}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-8">
                  <div className="item w-full lg:w-1/2  h-auto flex-grow border border-3 lg:rounded-md border-gray-300 py-2">
                    <div className="item w-full h-auto flex-grow px-6 ">
                      <div className="flex flex-wrap justify-between w-auto">
                        <div className="item">
                          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4 ">
                            Terms
                          </h2>
                        </div>
                        <div className="item">
                          <h2 className="text-xl font-medium tracking-tight text-gray-700 mb-4 ">
                            Exchange Skills Price: $0
                          </h2>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 mt-4"></div>

                    <div className="item w-full h-auto flex-grow px-6 my-4 ">
                      <div className="flex flex-wrap w-auto">
                        <div className="item">
                          <div className="flex flex-col flex-wrap w-auto space-y-4">
                            <div className="item font-medium tracking-tight text-gray-700 ">
                              <p>What is your proposed Fixed Price?</p>
                            </div>
                            <div className="item">
                              <div className="flex flex-wrap items-center justify-between w-auto">
                                <div className="item w-60 font-medium tracking-tight text-gray-700 mb-2 ">
                                  <label
                                    htmlFor="bid"
                                    className="block text-sm font-medium text-gray-700 sm:w-full "
                                  >
                                    Fixed Price
                                  </label>
                                </div>
                                <div className="item">
                                  <div className="relative mt-1 rounded-md shadow-sm">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                      <span className="text-gray-500 sm:text-sm">
                                        $
                                      </span>
                                    </div>
                                    <Field
                                      type="number"
                                      name="bid"
                                      className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                                      placeholder="0.00"
                                    />
                                  </div>
                                  <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                    <ErrorMessage component="p" name="bid" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-8">
                  <div className="item w-full lg:w-1/2  h-auto flex-grow border border-3 lg:rounded-md border-gray-300 py-2">
                    <div className="item w-full h-auto flex-grow px-6 ">
                      <div className="item">
                        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4 ">
                          Duration
                        </h2>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 mt-4"></div>

                    <div className="item w-full h-auto flex-grow px-6 my-4 ">
                      <div className="col-span-6 sm:col-span-3 mb-6">
                        <label
                          htmlFor="duration"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          How Long will this Exchange Skill Take?
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
                  </div>
                </div>

                <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-8">
                  <div className="item w-full lg:w-1/2  h-auto flex-grow border border-3 lg:rounded-md border-gray-300 py-2">
                    <div className="item w-full h-auto flex-grow px-6 ">
                      <div className="item">
                        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4 ">
                          More Information
                        </h2>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 mt-4"></div>

                    <div className="col-span-6 sm:col-span-6 px-6">
                      <label
                        htmlFor="coverLetter"
                        className="block font-medium tracking-tight text-gray-700 my-2"
                      >
                        Cover Letter
                      </label>
                      <div className="mt-1">
                        <Field
                          name="coverLetter"
                          component="textarea"
                          rows="5"
                          className="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Clients want to know who they are hiring so write in short description of yourself"
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Min. 200 characters
                      </p>
                      <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <ErrorMessage component="p" name="coverLetter" />
                      </div>
                    </div>

                    <div className="border-b border-gray-200 mt-4"></div>

                    <div className="col-span-6 sm:col-span-6 px-6">
                      <label
                        htmlFor="recentExperience"
                        className="block font-medium tracking-tight text-gray-700 my-2"
                      >
                        Describe your recent experience with similar projects
                      </label>
                      <div className="mt-1">
                        <Field
                          component="textarea"
                          rows="5"
                          name="recentExperience"
                          className="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Clients want to know about your recent experiences"
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Min. 200 characters
                      </p>
                      <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                        <ErrorMessage component="p" name="recentExperience" />
                      </div>
                    </div>

                    <div className="border-b border-gray-200 mt-4"></div>

                    <div className="col-span-6 sm:col-span-6 mx-6">
                      <FieldArray name="socialMediaLinks">
                        {({ length, remove, push }) => (
                          <div>
                            {values.socialMediaLinks.map(
                              (socialMediaLink, index) => (
                                <div
                                  key={index}
                                  className=" col-span-6 sm:col-span-6"
                                >
                                  <div className="flex flex-row space-x-4 ">
                                    <div className="item  basis-full">
                                      <label
                                        htmlFor={`socialMediaLinks.${index}`}
                                        className=" block text-sm font-medium text-gray-700 my-2"
                                      >
                                        Include a link to your GitHub profile
                                        and/or website
                                      </label>
                                      <Field
                                        name={`socialMediaLinks.${index}`}
                                        placeholder="Html"
                                        type="text"
                                        className="mt-1 w-full focus:ring-teal-500 focus:border-teal-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                                      />

                                      <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                        <ErrorMessage
                                          component="p"
                                          name={`socialMediaLinks.${index}`}
                                        />
                                      </div>
                                    </div>
                                    {values.socialMediaLinks.length > 1 ? (
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
                                        {values.socialMediaLinks.length < 2 && (
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
                              )
                            )}
                          </div>
                        )}
                      </FieldArray>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-6 ">
                  <div className="item w-full lg:w-1/2 h-auto flex-grow py-2">
                    <div className="item w-full h-auto flex-grow px-6 ">
                      <div className="flex flex-wrap items-center w-auto space-x-8">
                        <div className="item">
                          <button
                            type="submit"
                            className="w-48 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                          >
                            Edit Request
                          </button>
                        </div>
                        <div
                          className="item text-gray-700 hover:text-gray-900 hover:underline hover:font-medium cursor-pointer"
                          onClick={handleModal}
                        >
                          Cancel
                        </div>
                        {modal && (
                          <Modal
                            WarningTitle="Cancel Posting Blog"
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
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </>
      )}
    </div>
  );
};

export default EditRequestForm;
