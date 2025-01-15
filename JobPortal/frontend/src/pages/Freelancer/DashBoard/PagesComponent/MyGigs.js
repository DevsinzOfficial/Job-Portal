import { useEffect, useState } from "react";
import Pagination from "./Helpers/Pagination";
import Title from "./Helpers/Title";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  GetMyGigs,
  DeleteGig,
  ResponseGigOrder,
} from "./../../../../redux/actions/FreelancerActions";
import { GetReviews } from "./../../../../redux/actions/FreelancerActions";
import { GetAllOrders } from "./../../../../redux/actions/FreelancerActions";
import EmptyState from "./Helpers/EmptyState";
import Spinner from "./Helpers/Spinner";
import Modal from "./Helpers/Modal";

const MyGigs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.freelancerData.userInfo._id);
  const reviews = useSelector((state) => state?.freelancerData?.reviews);
  const { loading } = useSelector((state) => state?.freelancerData);

  const gigs = useSelector((state) => state?.freelancerData?.gigs);

  const orders = useSelector((state) => state.freelancerData.orders);

  const pendingGigOrders =
    (orders?.filter &&
      orders?.filter((order) => order?.type === "gig" && order.status === 2)) ||
    [];

  const acceptedGigOrders =
    (orders?.filter &&
      orders?.filter((order) => order?.type === "gig" && order.status === 1)) ||
    [];

  const acceptGigOrder = (orderId) => {
    const payload = {
      status: 1,
    };
    dispatch(ResponseGigOrder(orderId, payload, navigate, toast));
  };

  useEffect(() => {
    dispatch(GetMyGigs(toast));
    dispatch(GetAllOrders(toast));
    dispatch(GetReviews(userId, toast));
  }, [dispatch, userId]);

  const [currentPage, setCurrentPage] = useState(1);
  const [freelancersPerPage] = useState(5);

  // Get current freelancers
  const indexOfLastFreelancer = currentPage * freelancersPerPage;
  const indexOfFirstFreelancer = indexOfLastFreelancer - freelancersPerPage;

  function hasGigs(gigs, indexOfFirstFreelancer, indexOfLastFreelancer) {
    const currentGigs = gigs?.slice(
      indexOfFirstFreelancer,
      indexOfLastFreelancer
    );
    if (currentGigs.length > 0) {
      return currentGigs;
    } else {
      return [];
    }
  }
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [currentAcceptedPage, setCurrentAcceptedPage] = useState(1);
  const [acceptedPerPage] = useState(5);

  // Get current freelancers
  const indexOfLastAccepted = currentAcceptedPage * acceptedPerPage;
  const indexOfFirstAccepted = indexOfLastAccepted - acceptedPerPage;

  function hasAcceptedProposals(
    acceptedProposals,
    indexOfFirstAccepted,
    indexOfLastAccepted
  ) {
    const currentAcceptedProposals = acceptedProposals?.slice(
      indexOfFirstAccepted,
      indexOfLastAccepted
    );
    if (currentAcceptedProposals.length > 0) {
      return currentAcceptedProposals;
    } else {
      return [];
    }
  }

  const paginateAccepted = (pageNumber) => setCurrentAcceptedPage(pageNumber);

  /* rejected pagination */

  const [currentRejectedPage, setCurrentRejectedPage] = useState(1);
  const [RejectedPerPage] = useState(5);

  // Get current freelancers
  const indexOfLastRejected = currentRejectedPage * RejectedPerPage;
  const indexOfFirstRejected = indexOfLastRejected - RejectedPerPage;

  function hasRejectedProposals(
    rejectedProposals,
    indexOfFirstRejected,
    indexOfLastRejected
  ) {
    const currentRejectedProposals = rejectedProposals?.slice(
      indexOfFirstRejected,
      indexOfLastRejected
    );
    if (currentRejectedProposals.length > 0) {
      return currentRejectedProposals;
    } else {
      return [];
    }
  }

  const paginateRejected = (pageNumber) => setCurrentRejectedPage(pageNumber);

  const [deleteModal, setDeleteModal] = useState(false);
  const [id, setId] = useState(0);
  const handleDeleteModal = (id) => {
    setDeleteModal(true);
    setId(id);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const delGig = (gigId) => {
    dispatch(DeleteGig(gigId, navigate, toast));
    setDeleteModal(false);
  };

  const limitText = (text, char) => {
    return text && text.split(" ").slice(0, char).join(" ");
  };

  return (
    <div className="h-full pb-16 overflow-y-auto">
      {loading ? (
        <Spinner />
      ) : (
        <div className="container  mx-auto grid">
          <div className="flex flex-row flex-wrap  items-center justify-between mb-4">
            <Title title=" Your Gigs" />
            <Link to="/freelancer/gigs/add">
              <button className=" h-8 flex mr-2 items-center justify-between px-2 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-teal-600 border border-transparent rounded-md active:bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline-teal">
                <svg
                  className="w-4 h-4 mr-2 -ml-1"
                  fill="currentColor"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Create New Gig</span>
              </button>
            </Link>
          </div>
          {gigs && gigs.length > 0 ? (
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border boder-gray-500   bg-gray-100">
                      <th className="px-4 py-3">Gig Title</th>
                      <th className="px-4 py-3">Starting Price</th>
                      <th className="px-4 py-3">Description</th>
                      <th className="px-4 py-3">Category</th>
                      <th className="px-4 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y ">
                    {hasGigs(
                      gigs,
                      indexOfFirstFreelancer,
                      indexOfLastFreelancer
                    )?.map &&
                      hasGigs(
                        gigs,
                        indexOfFirstFreelancer,
                        indexOfLastFreelancer
                      )?.map((gig, index) => (
                        <tr key={index} className="text-gray-700 ">
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                              <Link
                                to="/freelancer/gigs/gig-details"
                                className="hover:underline hover:text-teal-600 "
                                state={{ gig, reviews }}
                              >
                                <div>
                                  <p className="font-semibold">
                                    {limitText(gig?.title, 5)}..
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            $ {gig?.BASIC?.Price}
                          </td>
                          <td className="px-4 py-3 text-xs">
                            <p className="text-sm ">
                              {limitText(gig?.description, 6)}..
                            </p>
                          </td>
                          <td className="px-4 py-3 text-sm">{gig?.Category}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center space-x-4 text-sm">
                              <Link to="/freelancer/gigs/edit" state={{ gig }}>
                                <button
                                  className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                                  aria-label="Edit"
                                >
                                  <svg
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                  </svg>
                                </button>
                              </Link>
                              <button
                                className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                                aria-label="Delete"
                                onClick={() => handleDeleteModal(gig._id)}
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
                                  del={() => delGig(id)}
                                  comment={"Gig"}
                                  message={"Gig"}
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
                totalFreelancers={gigs?.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <EmptyState message="You don't have any Gigs." />
            </div>
          )}

          <div className="flex flex-row flex-wrap  items-center justify-between mb-4">
            <Title title="Pending Gig Orders" />
          </div>

          {pendingGigOrders && pendingGigOrders.length > 0 ? (
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border boder-gray-500   bg-gray-100">
                      <th className="px-4 py-3">Order Id</th>
                      <th className="px-4 py-3">Client Name</th>
                      <th className="px-4 py-3">Gig Duration</th>
                      <th className="px-4 py-3">Gig Price</th>
                      <th className="px-4 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y ">
                    {hasAcceptedProposals(
                      pendingGigOrders,
                      indexOfFirstAccepted,
                      indexOfLastAccepted
                    )?.map &&
                      hasAcceptedProposals(
                        pendingGigOrders,
                        indexOfFirstAccepted,
                        indexOfLastAccepted
                      )?.map((jobProposal, index) => (
                        <tr key={index} className="text-gray-700 ">
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                              <div>
                                <p>{jobProposal?._id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <div>
                              <p>
                                {jobProposal?.client?.firstName}{" "}
                                {jobProposal?.client?.lastName}
                              </p>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <span className="px-2 py-1 leading-tight rounded-full ">
                              {jobProposal?.duration} days
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            $ {jobProposal?.price}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center space-x-4 text-sm">
                              <button
                                className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-teal-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                                aria-label="Edit"
                                onClick={() => acceptGigOrder(jobProposal._id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <Pagination
                freelancersPerPage={acceptedPerPage}
                totalFreelancers={pendingGigOrders?.length}
                paginate={paginateAccepted}
                currentPage={currentAcceptedPage}
              />
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <EmptyState message="You don't have Any Pending Gig Orders" />
            </div>
          )}

          <div className="flex flex-row flex-wrap  items-center justify-between mb-4">
            <Title title="Accepted Gig Orders" />
          </div>
          {acceptedGigOrders && acceptedGigOrders.length > 0 ? (
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border boder-gray-500   bg-gray-100">
                      <th className="px-4 py-3">Order Id</th>
                      <th className="px-4 py-3">Client Name</th>
                      <th className="px-4 py-3">Gig Duration</th>
                      <th className="px-4 py-3">Gig Price</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y ">
                    {hasRejectedProposals(
                      acceptedGigOrders,
                      indexOfFirstRejected,
                      indexOfLastRejected
                    )?.map &&
                      hasRejectedProposals(
                        acceptedGigOrders,
                        indexOfFirstRejected,
                        indexOfLastRejected
                      )?.map((jobProposal, index) => (
                        <tr key={index} className="text-gray-700 ">
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                              <div>
                                <p>{jobProposal?._id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <div>
                              <p>
                                {jobProposal?.client?.firstName}{" "}
                                {jobProposal?.client?.lastName}
                              </p>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <span className="px-2 py-1  leading-tight rounded-full ">
                              {jobProposal?.duration} days
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            $ {jobProposal?.price}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <Pagination
                freelancersPerPage={RejectedPerPage}
                totalFreelancers={acceptedGigOrders?.length}
                paginate={paginateRejected}
                currentPage={currentRejectedPage}
              />
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <EmptyState message="You don't have Any Accepted Gig Order" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyGigs;
