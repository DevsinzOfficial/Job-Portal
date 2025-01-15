import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import Modal from "./Modal";
import { UpdateClientProfile } from "../../../redux/actions/ClientActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import profile from "../../../img/profile.jpg";
import Spinner from "../DashBoard/PagesComponent/Helpers/Spinner";

const EditClientProfile = () => {
  const userId = useSelector((state) => state?.clientData?.userInfo._id);
  const userInfo = useSelector((state) => state?.clientData?.userInfo);
  const { loading } = useSelector((state) => state?.clientData);

  const { photo, gender, languages, phoneNumber, address } = userInfo;
  const display = photo ? photo : profile;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [preview, setPreview] = useState(display);
  const handleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const photoUrl = fetch(display)
    .then((response) => response.blob())
    .then((blob) => {
      // Create a file object from the blob
      const file = new File([blob], "photo.jpg", { type: "image/jpeg" });

      formData.photo = file;
    });

  const formData = {
    photo: photoUrl,
    gender: gender,
    languages: languages,
    phoneNumber: phoneNumber,
    address: address,
  };

  const onSubmit = async (formValues) => {
    dispatch(UpdateClientProfile(userId, formValues, navigate, toast));
  };

  const validate = Yup.object({
    photo: Yup.mixed().required("Photo is Required"),
    gender: Yup.string().required("Gender is Required"),
    address: Yup.object({
      country: Yup.string().required("Country is Required"),
      zipCode: Yup.string()
        .matches(/^[0-9]{5}$/, "Zip code must be 5 digits")
        .required("Zip code is required"),
      city: Yup.string().required("City is Required"),
      streetAddress: Yup.string().required("Street Address is Required"),
      province: Yup.string().required("Province is Required"),
    }),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{11}$/, "Phone number must be 11 digits")
      .required("Phone number is required"),

    languages: Yup.array(
      Yup.object({
        language: Yup.string().required("Language is Required"),
        proficiency: Yup.string().required("Proficiency level is Required"),
      })
    ),
  });

  return (
    <section className="px-4 mx-auto  max-w-7xl ">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="-mt-6 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="mt-6 md:mt-0 md:col-span-3">
                <div className=" mx-auto overflow-hidden -mt-4">
                  <Formik
                    initialValues={formData}
                    onSubmit={onSubmit}
                    validationSchema={validate}
                  >
                    {({ values, setFieldValue }) => (
                      <Form className="mb-12">
                        <div className="mt-4 sm:mt-0 px-4 py-5 bg-white sm:p-6">
                          <div className="flex flex-col border-0  border-b flex-wrap items-center font-bold text-xl text-gray-700 mb-4 ">
                            <div className="item mb-4 ">
                              <h3>Edit Profile</h3>
                            </div>
                          </div>
                          <div className="flex flex-col flex-wrap items-center font-bold text-lg text-gray-700 mb-2">
                            <div className="item ">
                              <h3>Personal Information</h3>
                            </div>
                          </div>
                          <div className="grid grid-cols-6 gap-4 ">
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="photo"
                                className="block text-sm font-medium text-gray-700 my-2"
                              >
                                Profile Photo
                              </label>
                              <div className="mt-1 flex items-center">
                                <span className="inline-block h-24 w-24 rounded-full overflow-hidden bg-gray-100">
                                  <img
                                    className="w-24 h-24 rounded-full"
                                    src={preview}
                                    alt="profile-avatar"
                                  />
                                </span>

                                <label
                                  htmlFor="photo"
                                  className="ml-5 cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                                >
                                  <span>Upload a file</span>
                                  <input
                                    id="photo"
                                    name="photo"
                                    type="file"
                                    className="sr-only"
                                    onChange={(event) => {
                                      setFieldValue(
                                        "photo",
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
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage component="p" name="photo" />
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-6 ">
                              <label className="block text-sm font-medium text-gray-700 my-2">
                                Gender
                              </label>
                              <div className="flex flex-wrap">
                                <div className="flex items-center mr-4">
                                  <Field
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                                  />
                                  <label
                                    htmlFor="male"
                                    className="ml-2 text-sm font-medium text-gray-700 "
                                  >
                                    Male
                                  </label>
                                </div>
                                <div className="flex items-center mr-4">
                                  <Field
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 focus:ring-pink-500"
                                  />
                                  <label
                                    htmlFor="female"
                                    className="ml-2 text-sm font-medium text-gray-700 "
                                  >
                                    Female
                                  </label>
                                </div>
                              </div>
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage component="p" name="gender" />
                              </div>
                            </div>
                          </div>
                          <div className=" col-span-6 sm:col-span-6  font-semibold text-gray-700 my-4 ">
                            <h3>Languages</h3>
                          </div>

                          <FieldArray name="languages">
                            {({ length, remove, push }) => (
                              <div>
                                {values.languages.map((language, index) => (
                                  <div
                                    key={index}
                                    className=" col-span-6 sm:col-span-6"
                                  >
                                    <div className="flex  flex-row space-x-4 ">
                                      <div className="item  basis-1/2">
                                        <label
                                          htmlFor={`languages.${index}.language`}
                                          className=" block text-sm font-medium text-gray-700 my-2"
                                        >
                                          Language
                                        </label>
                                        <Field
                                          component="select"
                                          name={`languages.${index}.language`}
                                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                                        >
                                          <option>Please Select</option>
                                          <option value="English">
                                            English
                                          </option>
                                          <option value="Urdu">Urdu</option>
                                        </Field>
                                        <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                          <ErrorMessage
                                            component="p"
                                            name={`languages.${index}.language`}
                                          />
                                        </div>
                                      </div>
                                      <div className="item basis-1/2">
                                        <label
                                          htmlFor={`languages.${index}.proficiency`}
                                          className=" block text-sm font-medium text-gray-700 my-2"
                                        >
                                          Proficiency
                                        </label>
                                        <Field
                                          component="select"
                                          name={`languages.${index}.proficiency`}
                                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                                        >
                                          <option>Please Select</option>
                                          <option value="Beginner">
                                            Beginner
                                          </option>
                                          <option value="Intermediate">
                                            Intermediate
                                          </option>
                                          <option value="Fluent">Fluent</option>
                                        </Field>
                                        <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                          <ErrorMessage
                                            component="p"
                                            name={`languages.${index}.proficiency`}
                                          />
                                        </div>
                                      </div>
                                      {values?.languages?.length > 1 ? (
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
                                          {values?.languages?.length < 2 && (
                                            <button
                                              className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-teal-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                                              type="button"
                                              onClick={() =>
                                                push({
                                                  language: "",
                                                  proficiency: "",
                                                })
                                              }
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
                                            onClick={() =>
                                              push({
                                                language: "",
                                                proficiency: "",
                                              })
                                            }
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

                          <div className=" col-span-6 sm:col-span-6 border-b my-4"></div>
                          <div className="grid grid-cols-6 gap-4 ">
                            <div className=" col-span-6 sm:col-span-6 justify-self-center font-bold text-gray-700 text-lg ">
                              <h3>Address</h3>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="address.country"
                                className="block text-sm font-medium text-gray-700 "
                              >
                                Country
                              </label>
                              <Field
                                component="select"
                                name="address.country"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                              >
                                <option>Please Select</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="India">India</option>
                                <option value="Bangladesh">Bangladesh</option>
                              </Field>
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage
                                  component="p"
                                  name="address.country"
                                />
                              </div>
                            </div>

                            <div className="col-span-6">
                              <label
                                htmlFor="address.streetAddress"
                                className="block text-sm font-medium text-gray-700 my-2"
                              >
                                Street address
                              </label>
                              <Field
                                type="text"
                                name="address.streetAddress"
                                placeholder="Ex.Rizwan Block"
                                className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage
                                  component="p"
                                  name="address.streetAddress"
                                />
                              </div>
                            </div>

                            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                              <label
                                htmlFor="address.city"
                                className="block text-sm font-medium text-gray-700 my-2"
                              >
                                City
                              </label>
                              <Field
                                type="text"
                                name="address.city"
                                placeholder="Ex.Faisalabad"
                                className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage
                                  component="p"
                                  name="address.city"
                                />
                              </div>
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label
                                htmlFor="address.province"
                                className="block text-sm font-medium text-gray-700 my-2"
                              >
                                State / Province
                              </label>
                              <Field
                                type="text"
                                name="address.province"
                                placeholder="Ex.Province"
                                className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage
                                  component="p"
                                  name="address.province"
                                />
                              </div>
                            </div>

                            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                              <label
                                htmlFor="address.zipCode"
                                className="block text-sm font-medium text-gray-700 my-2"
                              >
                                ZIP / Postal code
                              </label>
                              <Field
                                type="text"
                                name="address.zipCode"
                                placeholder="Ex.54000"
                                className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage
                                  component="p"
                                  name="address.zipCode"
                                />
                              </div>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                              <label
                                htmlFor="phoneNumber"
                                className="block text-sm font-medium text-gray-700 my-2"
                              >
                                Phone Number
                              </label>
                              <Field
                                type="text"
                                name="phoneNumber"
                                placeholder="Ex.0333-8487677"
                                className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage
                                  component="p"
                                  name="phoneNumber"
                                />
                              </div>
                            </div>
                          </div>
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
                              WarningTitle="Cancel Form Submission"
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
        </>
      )}
    </section>
  );
};

export default EditClientProfile;
