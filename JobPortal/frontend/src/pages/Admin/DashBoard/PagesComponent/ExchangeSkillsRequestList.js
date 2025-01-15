import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllExchangeSkillsRequests,
  DeleteExchangeSkillsRequest,
  getAllFreelancersReviews,
} from "../../../../redux/actions/AdminActions";
import Pagination from "./Helpers/Pagination";
import Title from "./Helpers/Title";
import EmptyState from "../PagesComponent/Helpers/EmptyState";
import Modal from "./Helpers/Modal";
import Spinner from "./Helpers/Spinner";

const ExchangeSkillsRequestList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { exchangeSkillsRequests, getExchangeSkillsRequestsLoading } =
    useSelector((state) => state?.adminData);
  const reviews = useSelector((state) => state?.adminData?.freelancerReviews);

  useEffect(() => {
    dispatch(getAllExchangeSkillsRequests(toast));
    dispatch(getAllFreelancersReviews(toast));
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

  const delExchangeSkillRequest = (exchangeSkillRequestId) => {
    dispatch(
      DeleteExchangeSkillsRequest(exchangeSkillRequestId, navigate, toast)
    );
    setDeleteModal(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [freelancersPerPage] = useState(5);

  // Get current freelancers
  const indexOfLastFreelancer = currentPage * freelancersPerPage;
  const indexOfFirstFreelancer = indexOfLastFreelancer - freelancersPerPage;

  function hasExchangeSkillsRequestList(
    exchangeSkillsRequests,
    indexOfFirstFreelancer,
    indexOfLastFreelancer
  ) {
    const currentExchangeSkillsRequests = exchangeSkillsRequests?.slice(
      indexOfFirstFreelancer,
      indexOfLastFreelancer
    );
    if (currentExchangeSkillsRequests.length > 0) {
      return currentExchangeSkillsRequests;
    } else {
      return [];
    }
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const limitText = (text) => {
    return text && text.split(" ").slice(0, 3).join(" ");
  };

  return (
    <div className="h-full pb-16 overflow-y-auto">
      {getExchangeSkillsRequestsLoading ? (
        <Spinner />
      ) : (
        <div className="container  mx-auto grid">
          <div className="flex flex-row flex-wrap  items-center justify-between mb-4">
            <Title title="All Exchange Skills Requests" />
          </div>
          {exchangeSkillsRequests && exchangeSkillsRequests.length > 0 ? (
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border boder-gray-500   bg-gray-100">
                      <th className="px-4 py-3">Exchange Skills Title</th>
                      <th className="px-4 py-3">Freelancer Name</th>
                      <th className="px-4 py-3">Submitted Freelancer Name</th>
                      <th className="px-4 py-3">Offered Skills</th>
                      <th className="px-4 py-3">Required Skills</th>
                      <th className="px-4 py-3">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y ">
                    {hasExchangeSkillsRequestList(
                      exchangeSkillsRequests,
                      indexOfFirstFreelancer,
                      indexOfLastFreelancer
                    )?.map &&
                      hasExchangeSkillsRequestList(
                        exchangeSkillsRequests,
                        indexOfFirstFreelancer,
                        indexOfLastFreelancer
                      )?.map((exchangeSkillsRequest, index) => (
                        <tr key={index} className="text-gray-700 ">
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                              <Link
                                to="/admin/request-details"
                                className="hover:underline hover:text-teal-600 "
                                state={{ exchangeSkillsRequest }}
                              >
                                <div>
                                  <p className="font-semibold">
                                    {limitText(
                                      exchangeSkillsRequest?.exchangeSkillsId
                                        ?.title
                                    )}
                                    ..
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <Link
                              to="/admin/freelancer-details"
                              className="hover:underline hover:text-teal-600 "
                              state={{
                                freelancer: exchangeSkillsRequest?.freelancer,
                                reviews,
                              }}
                            >
                              <div>
                                <p className="font-semibold">
                                  {exchangeSkillsRequest?.freelancer?.firstName}{" "}
                                  {exchangeSkillsRequest?.freelancer?.lastName}
                                </p>
                              </div>
                            </Link>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <span className="px-2 py-1  leading-tight  rounded-full ">
                              {exchangeSkillsRequest?.submittedBy?.firstName}{" "}
                              {exchangeSkillsRequest?.submittedBy?.lastName}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {
                              exchangeSkillsRequest?.exchangeSkillsId
                                ?.offeredSkills
                            }
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {
                              exchangeSkillsRequest?.exchangeSkillsId
                                ?.requiredSkills
                            }
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center space-x-4 text-sm">
                              <button
                                className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                                aria-label="Delete"
                                onClick={() =>
                                  handleDeleteModal(exchangeSkillsRequest?._id)
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
                                  del={() => delExchangeSkillRequest(id)}
                                  comment={"Exchange Skill Request"}
                                  message={"Exchange Skill Request"}
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
                totalFreelancers={exchangeSkillsRequests?.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <EmptyState message="No Exchange Skills RequestsTo Show" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExchangeSkillsRequestList;
