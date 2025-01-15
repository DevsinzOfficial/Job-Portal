import { useState } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { DeleteBlog } from "../../../redux/actions/AdminActions";
import { useDispatch } from "react-redux";
import Modal from "../DashBoard/PagesComponent/Helpers/Modal";
import profile from "../../../img/profile.jpg";

const ViewBlogDetails = () => {
  const blogDetails = useLocation()?.state?.blog;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [deleteModal, setDeleteModal] = useState(false);
  const [id, setId] = useState(0);
  const handleDeleteModal = (id) => {
    setDeleteModal(true);
    setId(id);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const delBlog = (blogId) => {
    dispatch(DeleteBlog(blogId, navigate, toast));
    setDeleteModal(false);
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

  return (
    <div>
      <main className="relative container mx-auto bg-white px-4 mt-2  ">
        <div className="relative -mx-4 top-0 pt-[17%] overflow-hidden">
          <img
            className="absolute inset-0 object-cover object-top w-full h-full filter blur"
            src={blogDetails?.photo}
            alt="article"
          />
        </div>

        <div className="mt-[-10%] w-1/2 mx-auto">
          <div className="relative pt-[56.25%] overflow-hidden rounded-2xl">
            <img
              className="w-full h-full absolute inset-0 object-cover"
              src={blogDetails?.photo}
              alt=""
            />
          </div>
        </div>

        <article className="max-w-prose mx-auto py-8">
          <h1 className="text-2xl font-bold">{blogDetails?.title}</h1>
          <h2 className="tracking-widest text-md title-font font-medium text-gray-400 my-4">
            {blogDetails?.Category}
          </h2>
          <div className="flex items-center my-3">
            <div className="block relative">
              <img
                alt="profile"
                src={
                  blogDetails?.freelancer[0].photo
                    ? blogDetails?.freelancer[0].photo
                    : profile
                }
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </div>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800 dark:text-white">
                {" "}
                {blogDetails?.freelancer[0]?.firstName
                  ? blogDetails?.freelancer[0]?.firstName
                  : blogDetails?.freelancer[0]?.Blog_id[0]?.freelancer[0]
                      ?.firstName}{" "}
                {blogDetails?.freelancer[0]?.lastName
                  ? blogDetails?.freelancer[0]?.lastName
                  : blogDetails?.freelancer[0]?.Blog_id[0]?.freelancer[0]
                      ?.lastName}
              </p>
              <p className="text-gray-400 dark:text-gray-300">
                {" "}
                {dateConverter(blogDetails?.createdAt)}
              </p>
            </div>
            <div className="  text-xl font-medium text-gray-900 -mb-2 mt-2">
              <button
                className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                aria-label="Delete"
                onClick={() => handleDeleteModal(blogDetails?._id)}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {deleteModal && (
                <Modal
                  closeDeleteModal={closeDeleteModal}
                  del={() => delBlog(id)}
                  comment={"Blog"}
                  message={"Blog"}
                />
              )}
            </div>
          </div>

          <p className="mt-6">{blogDetails?.story}</p>
        </article>
      </main>
    </div>
  );
};

export default ViewBlogDetails;
