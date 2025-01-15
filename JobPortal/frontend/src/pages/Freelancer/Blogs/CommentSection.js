import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { replyBlogComment } from "../../../redux/actions/FreelancerActions";
import RatingStars from "../DashBoard/PagesComponent/Helpers/RatingStars";
import EmptyState from "../DashBoard/PagesComponent/Helpers/EmptyState";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Spinner from "../DashBoard/PagesComponent/Helpers/Spinner";

const CommentSection = ({ blogDetail, reviews }) => {
  const [replyCommentForm, setReplyCommentForm] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { comment, RComments, freelancer } = blogDetail;
  const { loading } = useSelector((state) => state?.freelancerData);

  const replyCommentFormData = {
    Rcomment: "",
  };

  const onSubmitReply = (formValues, commentId) => {
    dispatch(
      replyBlogComment(blogDetail._id, commentId, formValues, navigate, toast)
    );
  };

  const validateReply = Yup.object({
    Rcomment: Yup.string().required("Reply is Required"),
  });

  const toggleForm = (index) => {
    setReplyCommentForm((prevOpenForms) => {
      if (prevOpenForms.includes(index)) {
        return prevOpenForms.filter((formIndex) => formIndex !== index);
      } else {
        return [...prevOpenForms, index];
      }
    });
  };

  const handleCompare = (commentId, ReplyComments) => {
    const foundComment = ReplyComments.filter(
      (comment) => comment?.Comment_id[0] === commentId
    );

    return foundComment;
  };

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

  const filteredReviews = reviews?.filter(
    (review) => review?.freelancer?._id === freelancer[0]?._id
  );

  const calculateAverage = (reviews) => {
    let average = 0;

    if (reviews && reviews?.length > 0) {
      const total = reviews?.reduce((acc, rating) => {
        if (rating && rating.Ratings) {
          return acc + rating.Ratings;
        }
        return acc;
      }, 0);
      average = total / reviews.length;
    }

    return average;
  };

  const average = calculateAverage(filteredReviews);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap w-auto mx-6 lg:mx-22 my-8 mb-12">
          <div className="item w-full lg:w-1/2  h-auto flex-grow  py-2">
            <div className="item w-full h-auto flex-grow px-6 ">
              <div className="item w-full h-auto flex-grow font-semibold text-gray-700 ">
                <h3 className="my-4 text-2xl font-medium ">All Comments</h3>
              </div>
              {comment && comment.length > 0 ? (
                <section className="relative flex items-center justify-center antialiased  min-w-screen">
                  <div className="container px-0 mx-auto sm:px-5 ">
                    <div className="flex-col w-full py-4 mx-0 lg:-mx-5 my-0 sm:px-4 sm:py-4 md:px-4  md:w-2/3">
                      {comment?.map &&
                        comment?.map((comment, index) => (
                          <div key={index} className="flex flex-row">
                            <img
                              className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                              alt="Noob master's avatar"
                              src={comment?.client_id[0]?.photo}
                            />
                            <div className="flex-col mt-1">
                              <div className="flex items-center flex-1 px-4 font-bold leading-tight">
                                {comment?.client_id[0]?.firstName}{" "}
                                {comment?.client_id[0]?.lastName}
                                <span className="ml-2 text-xs font-normal text-gray-500">
                                  {dateConverter(comment?.createdAt)}
                                </span>
                              </div>
                              <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                                {comment?.comment}
                              </div>
                              <button
                                onClick={() => toggleForm(index)}
                                className="inline-flex items-center px-1 pt-2 ml-1 flex-column"
                              >
                                <svg
                                  className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900"
                                  viewBox="0 0 95 78"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z"
                                    fillRule="nonzero"
                                  />
                                </svg>
                              </button>
                              {replyCommentForm.includes(index) && (
                                <div>
                                  {" "}
                                  <Formik
                                    commentId={comment?._id}
                                    initialValues={replyCommentFormData}
                                    onSubmit={(formikProps) =>
                                      onSubmitReply(formikProps, comment?._id)
                                    }
                                    validationSchema={validateReply}
                                  >
                                    {({ values, setFieldValue }) => (
                                      <Form>
                                        <div className="item w-full h-auto flex-grow px-6 space-y-1 ">
                                          <div className="item w-full h-auto flex-grow font-semibold text-gray-700 ">
                                            <h3 className="mb-2 text-sm font-bold ">
                                              Write a Reply
                                            </h3>
                                          </div>
                                          <div className="item w-full h-auto flex-grow font-semibold text-gray-700 ">
                                            <Field
                                              component="textarea"
                                              rows="2"
                                              cols="32"
                                              name="Rcomment"
                                              className="w-full px-4 py-3 mb-4 border border-3 border-teal-400 rounded-lg focus:ring focus:ring-teal-500 focus:outline-none"
                                              placeholder="Write your Reply"
                                            />
                                            <div className=" text-sm text-red-600 mb-4 -mt-4 dark:text-red-500">
                                              <ErrorMessage
                                                component="p"
                                                name="Rcomment"
                                              />
                                            </div>
                                          </div>
                                          <div className="item w-full h-auto  flex-grow font-semibold text-gray-700 ">
                                            <input
                                              type="submit"
                                              value="Submit reply"
                                              name="submit"
                                              className="text-white px-3 py-2 -mt-4 mb-2 bg-teal-600 cursor-pointer hover:bg-teal-700 rounded-md"
                                            />
                                          </div>
                                        </div>
                                      </Form>
                                    )}
                                  </Formik>
                                </div>
                              )}

                              <div>
                                {handleCompare(comment?._id, RComments)?.map &&
                                  handleCompare(comment?._id, RComments)?.map(
                                    (RComment, index) => (
                                      <div
                                        key={index}
                                        className="flex flex-row pt-1  space-y-4 md-10 md:ml-2"
                                      >
                                        <img
                                          className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full"
                                          alt="Noob master's avatar"
                                          src={
                                            RComment?.client_id[0]?.photo
                                              ? RComment?.client_id[0]?.photo
                                              : RComment?.freelancer_id[0]
                                                  ?.photo
                                          }
                                        />
                                        <div className="flex-col mt-1">
                                          <div className="flex items-center flex-1 px-4 font-bold leading-tight">
                                            {RComment?.client_id[0]?.firstName
                                              ? RComment?.client_id[0]
                                                  ?.firstName
                                              : RComment?.freelancer_id[0]
                                                  ?.firstName}{" "}
                                            {RComment?.client_id[0]?.lastName
                                              ? RComment?.client_id[0]?.lastName
                                              : RComment?.freelancer_id[0]
                                                  ?.lastName}
                                            <span className="ml-2 text-xs font-normal text-gray-500">
                                              {dateConverter(
                                                RComment?.createdAt
                                              )}
                                            </span>
                                          </div>
                                          <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">
                                            {RComment?.Rcomment}
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  )}
                              </div>

                              <hr className="my-2 ml-16 border-gray-200" />
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </section>
              ) : (
                <div className="flex justify-center w-full">
                  <EmptyState message="No Comments on this Blog Post" />
                </div>
              )}
            </div>
          </div>
          <div className="item w-full lg:w-1/4 h-auto border-3 border lg:border-r-0 lg:border-b-0 lg:border-t-0 border-gray-300 ">
            <div className="item w-full h-auto flex-grow px-6 my-4 space-y-3 ">
              <div className="item w-full h-auto flex-grow  ">
                <h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-4">
                  About the Freelancer
                </h2>
              </div>
              <div className="item w-full h-auto flex-grow  ">
                <div className="flex items-center  px-2 py-1 text-sm font-semibold text-sky-500 space-x-1">
                  {freelancer[0]?.verified ? (
                    <>
                      <svg
                        className="w-4 h-4 -ml-3 "
                        fill="#0ea5e9"
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">Freelancer Verified</span>
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="black"
                        viewBox="0 0 20 20"
                        strokeWidth="1.5"
                        stroke="white"
                        className="w-4 h-4 -ml-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-700 ml-1">
                        Freelancer Not Verified
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="item w-full h-auto flex-grow  ">
                <RatingStars
                  rating={average ? average : 0}
                  color="text-yellow-500"
                />
              </div>
              <div className="item w-full h-auto flex-grow font-semibold text-gray-700 ">
                <h3>{freelancer[0]?.address?.country}</h3>
              </div>

              <div className="item w-full h-auto flex-grow font-semibold text-gray-700 ">
                <h3>Member since {dateConverter(freelancer[0]?.createdAt)}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentSection;
