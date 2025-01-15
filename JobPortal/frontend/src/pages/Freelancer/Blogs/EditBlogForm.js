import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "../Profile/Modal";
import { useLocation } from "react-router-dom";
import { updateBlog } from "../../../redux/actions/FreelancerActions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../DashBoard/PagesComponent/Helpers/Spinner";
const AddBlogForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state?.freelancerData);
  const blogDetail = useLocation()?.state.blog;

  const { title, story, photo, Category } = blogDetail;

  const [modal, setModal] = useState(false);
  const [preview, setPreview] = useState(photo);

  const handleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const photoUrl = fetch(photo)
    .then((response) => response.blob())
    .then((blob) => {
      // Create a file object from the blob
      const file = new File([blob], "photo.jpg", { type: "image/jpeg" });

      formData.photo = file;
    });

  const formData = {
    title: title,
    story: story,
    photo: photoUrl,
    Category: Category,
  };

  const onSubmit = (formValues) => {
    dispatch(updateBlog(blogDetail._id, formValues, navigate, toast));
  };

  const validate = Yup.object({
    photo: Yup.mixed().required("Photo is Required"),
    title: Yup.string().required("Title is Required"),
    story: Yup.string()
      .min(3500, "Content must have at least 500 words")
      .required("Story is Required"),
    Category: Yup.string().required("Category is Required"),
  });

  return (
    <>
      <section className="px-4 mx-auto max-w-7xl bg-gray-100">
        {loading ? (
          <Spinner />
        ) : (
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
                              <h3>Edit Blog</h3>
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
                                placeholder="How to install Node Js"
                                className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage component="p" name="title" />
                              </div>
                            </div>

                            <div className="col-span-6 sm:col-span-6 ">
                              <label
                                htmlFor="story"
                                className="block text-sm font-medium text-gray-700 my-2"
                              >
                                Your Story
                              </label>
                              <div className="mt-1">
                                <Field
                                  component="textarea"
                                  rows="20"
                                  name="story"
                                  className="shadow-sm focus:ring-teal-500 focus:border-teal-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                  placeholder="Node is a Js Framework for Backend"
                                />
                              </div>
                              <p className="mt-2 text-sm text-gray-500">
                                Min. 500 characters
                              </p>
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage component="p" name="story" />
                              </div>
                            </div>

                            <div className="col-span-6 sm:col-span-4">
                              <label
                                htmlFor="photo"
                                className="block text-sm font-medium text-gray-700 my-2"
                              >
                                Cover photo
                              </label>
                              <div className="mt-1 flex justify-center rounded-md border-3 border border-gray-300 px-6 pt-5 pb-6">
                                <div className="space-y-1 text-center">
                                  <img
                                    className="mx-auto text-gray-400"
                                    src={preview}
                                    alt="blog-cover"
                                  />

                                  <div className="flex text-sm text-gray-600 text-left">
                                    <label
                                      htmlFor="photo"
                                      className="relative cursor-pointer my-1 rounded-md bg-white font-medium text-teal-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2 hover:text-teal-500"
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
                                  <p className="text-xs text-gray-500 text-left ">
                                    PNG, JPG, GIF up to 10MB
                                  </p>
                                </div>
                              </div>
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage component="p" name="photo" />
                              </div>
                            </div>

                            <div className="col-span-6 sm:col-span-6">
                              <label
                                htmlFor="Category"
                                className="block text-sm font-medium text-gray-700 "
                              >
                                Category
                              </label>
                              <Field
                                component="select"
                                name="Category"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                              >
                                <option>Please Select</option>
                                <option value="Development and Programming">
                                  Programming
                                </option>
                                <option value="Graphic and Design">
                                  Design
                                </option>
                                <option value="Marketing">Marketing</option>
                                <option value="Data Science">Data </option>
                                <option value="Customer Support">
                                  Customer Support
                                </option>
                                <option value="Writing and Translation">
                                  Writing and Translation
                                </option>
                              </Field>
                              <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <ErrorMessage component="p" name="Category" />
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
                              WarningTitle="Cancel Updating Blog"
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
        )}
      </section>
    </>
  );
};

export default AddBlogForm;
