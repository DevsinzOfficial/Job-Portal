import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllBlogsReplyComments,
  DeleteBlogReplyComment,
} from "../../../../redux/actions/AdminActions";
import Pagination from "./Helpers/Pagination";
import Title from "./Helpers/Title";
import EmptyState from "../PagesComponent/Helpers/EmptyState";
import Modal from "./Helpers/Modal";
import Spinner from "./Helpers/Spinner";

const GigsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blogsReplyComments = useSelector(
    (state) => state?.adminData?.blogReplyComments
  );

  const { blogReplyCommentsLoading } = useSelector((state) => state?.adminData);

  useEffect(() => {
    dispatch(getAllBlogsReplyComments(toast));
  }, [dispatch]);

  const [deleteModal, setDeleteModal] = useState(false);
  const [id, setId] = useState(0);
  const handleDeleteModal = (id) => {
    setDeleteModal(true);
    setId(id);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const delReplyComment = (replyCommentId) => {
    dispatch(DeleteBlogReplyComment(replyCommentId, navigate, toast));
    setDeleteModal(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [freelancersPerPage] = useState(5);

  // Get current freelancers
  const indexOfLastFreelancer = currentPage * freelancersPerPage;
  const indexOfFirstFreelancer = indexOfLastFreelancer - freelancersPerPage;

  function hasBlogsReplyComments(
    blogsReplyComments,
    indexOfFirstFreelancer,
    indexOfLastFreelancer
  ) {
    const currentBlogsReplyComments = blogsReplyComments?.slice(
      indexOfFirstFreelancer,
      indexOfLastFreelancer
    );
    if (currentBlogsReplyComments.length > 0) {
      return currentBlogsReplyComments;
    } else {
      return [];
    }
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const limitText = (text, number) => {
    return text && text.split(" ").slice(0, number).join(" ");
  };

  return (
    <div>
      {blogReplyCommentsLoading ? (
        <Spinner />
      ) : (
        <div className="h-full pb-16 overflow-y-auto">
          <div className="container  mx-auto grid">
            <div className="flex flex-row flex-wrap  items-center justify-between mb-4">
              <Title title=" Blogs Comments Replies List" />
            </div>
            {blogsReplyComments && blogsReplyComments.length > 0 ? (
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full whitespace-no-wrap">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border boder-gray-500   bg-gray-100">
                        <th className="px-4 py-3">Blog Title</th>
                        <th className="px-4 py-3">User Name</th>
                        <th className="px-4 py-3">Comment</th>
                        <th className="px-4 py-3">Reply Comment</th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y ">
                      {hasBlogsReplyComments(
                        blogsReplyComments,
                        indexOfFirstFreelancer,
                        indexOfLastFreelancer
                      )?.map &&
                        hasBlogsReplyComments(
                          blogsReplyComments,
                          indexOfFirstFreelancer,
                          indexOfLastFreelancer
                        )?.map((blogsReplyComment, index) => (
                          <tr key={index} className="text-gray-700 ">
                            <td className="px-4 py-3">
                              <div className="flex items-center text-sm">
                                <Link
                                  to="/admin/blog-details"
                                  className="hover:underline hover:text-teal-600 "
                                  state={{ blog: blogsReplyComment.Blog_id[0] }}
                                >
                                  <div>
                                    <p className="font-semibold">
                                      {" "}
                                      {limitText(
                                        blogsReplyComment?.Blog_id[0]?.title,
                                        3
                                      )}
                                      ..
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            </td>
                            {/*  freelancer_id */}

                            <td className="px-4 py-3 text-sm">
                              {blogsReplyComment?.client_id[0]?.firstName
                                ? blogsReplyComment?.client_id[0]?.firstName
                                : blogsReplyComment?.freelancer_id[0]
                                    ?.firstName}{" "}
                              {blogsReplyComment?.client_id[0]?.lastName
                                ? blogsReplyComment?.client_id[0]?.lastName
                                : blogsReplyComment?.freelancer_id[0]?.lastName}
                            </td>
                            <td className="px-4 py-3 text-xs">
                              <p className="text-sm">
                                {limitText(
                                  blogsReplyComment?.Comment_id[0]?.comment,
                                  4
                                )}
                                ..
                              </p>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {limitText(blogsReplyComment?.Rcomment, 4)}..
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center space-x-4 text-sm">
                                <button
                                  className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                                  aria-label="Delete"
                                  onClick={() =>
                                    handleDeleteModal(blogsReplyComment._id)
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
                                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                      clipRule="evenodd"
                                    ></path>
                                  </svg>
                                </button>
                                {deleteModal && (
                                  <Modal
                                    closeDeleteModal={closeDeleteModal}
                                    del={() => delReplyComment(id)}
                                    comment={"Blog Comment Reply"}
                                    message={"Blog Comment Reply"}
                                  />
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <Pagination
                  freelancersPerPage={freelancersPerPage}
                  totalFreelancers={blogsReplyComments?.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </div>
            ) : (
              <div className="flex justify-center w-full">
                <EmptyState message="No Blogs Reply Comments To Show" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GigsList;
