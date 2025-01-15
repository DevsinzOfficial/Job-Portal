import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./Helpers/Pagination";
import Title from "./Helpers/Title";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
  GetAllJobsProposalsForClient,
  AcceptProposal,
  RejectProposal,
} from "../../../../redux/actions/ClientActions";
import EmptyState from "./Helpers/EmptyState";
import Spinner from "../PagesComponent/Helpers/Spinner";

const ProjectProposals = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const jobProposals = useSelector(
    (state) => state?.clientData?.proposals?.response
  );
  const { loading } = useSelector((state) => state.clientData);

 

  useEffect(() => {
    dispatch(GetAllJobsProposalsForClient(toast));
  }, [dispatch]);

  const acceptProposal = (proposalId) => {
    dispatch(AcceptProposal(proposalId, navigate, toast));
  };

  const rejectProposal = (proposalId) => {
    dispatch(RejectProposal(proposalId, navigate, toast));
  };

  const acceptedProposals =
    (jobProposals?.filter &&
      jobProposals?.filter((jobProposal) => jobProposal?.status === 1)) ||
    [];

  const rejectedProposals =
    (jobProposals?.filter &&
      jobProposals?.filter((jobProposal) => jobProposal?.status === -1)) ||
    [];

  const pendingProposals =
    (jobProposals?.filter &&
      jobProposals?.filter((jobProposal) => jobProposal?.status === 0)) ||
    [];

  const [currentPage, setCurrentPage] = useState(1);
  const [pendingsPerPage] = useState(5);

  // Get pending freelancers
  const indexOfLastPending = currentPage * pendingsPerPage;
  const indexOfFirstPending = indexOfLastPending - pendingsPerPage;

  function hasPendingProposals(
    pendingProposals,
    indexOfFirstPending,
    indexOfLastPending
  ) {
    const currentPendingProposals = pendingProposals?.slice(
      indexOfFirstPending,
      indexOfLastPending
    );
    if (currentPendingProposals.length > 0) {
      return currentPendingProposals;
    } else {
      return [];
    }
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  /* accpted pagination */

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

  const limitText = (text) => {
    return text && text.split(" ").slice(0, 5).join(" ");
  };

  return (
    <div className="h-full pb-16 overflow-y-auto">
      {loading ? (
        <Spinner />
      ) : (
        <div className="container  mx-auto grid">
          <div className="flex flex-row flex-wrap  items-center justify-between mb-4">
            <Title title="Pending Proposals" />
          </div>
          {pendingProposals && pendingProposals.length > 0 ? (
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border boder-gray-500   bg-gray-100">
                      <th className="px-4 py-3">Job Title</th>
                      <th className="px-4 py-3">Freelancer Name</th>
                      <th className="px-4 py-3">Job Duration</th>
                      <th className="px-4 py-3">Job Category</th>
                      <th className="px-4 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y ">
                    {hasPendingProposals(
                      pendingProposals,
                      indexOfFirstPending,
                      indexOfLastPending
                    )?.map &&
                      hasPendingProposals(
                        pendingProposals,
                        indexOfFirstPending,
                        indexOfLastPending
                      )?.map((jobProposal, index) => (
                        <tr key={index} className="text-gray-700 ">
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                              <Link
                                to="/client/proposal-details"
                                className="hover:underline hover:text-teal-600 "
                                state={{ jobProposal }}
                              >
                                <div>
                                  <p className="font-semibold">
                                    {limitText(jobProposal?.job?.title)}..
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <Link
                              to="/client/freelancers/freelancer-details"
                              className="hover:underline hover:text-teal-600 "
                              state={{
                                singleFreelancer: jobProposal.submittedBy,
                              }}
                            >
                              <div>
                                <p>
                                  {jobProposal?.submittedBy?.firstName}{" "}
                                  {jobProposal?.submittedBy?.lastName}
                                </p>
                              </div>
                            </Link>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <span className="px-2 py-1  leading-tight rounded-full ">
                              {jobProposal?.job?.duration} days
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {jobProposal?.job?.category}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center space-x-4 text-sm">
                              <button
                                className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-teal-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                                aria-label="Edit"
                                onClick={() => acceptProposal(jobProposal._id)}
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

                              <button
                                className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                                aria-label="Delete"
                                onClick={() => rejectProposal(jobProposal._id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
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
                freelancersPerPage={pendingsPerPage}
                totalFreelancers={pendingProposals?.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <EmptyState message="You don't have any Pending Proposals" />
            </div>
          )}

          <div className="flex flex-row flex-wrap  items-center justify-between mb-4">
            <Title title="Accepted Proposals" />
          </div>
          {acceptedProposals && acceptedProposals.length > 0 ? (
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border boder-gray-500   bg-gray-100">
                      <th className="px-4 py-3">Job Title</th>
                      <th className="px-4 py-3">Freelancer Name</th>
                      <th className="px-4 py-3">Job Duration</th>
                      <th className="px-4 py-3">Job Category</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y ">
                    {hasAcceptedProposals(
                      acceptedProposals,
                      indexOfFirstAccepted,
                      indexOfLastAccepted
                    )?.map &&
                      hasAcceptedProposals(
                        acceptedProposals,
                        indexOfFirstAccepted,
                        indexOfLastAccepted
                      )?.map((jobProposal, index) => (
                        <tr key={index} className="text-gray-700 ">
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                              <Link
                                to="/client/proposal-details"
                                className="hover:underline hover:text-teal-600 "
                                state={{ jobProposal }}
                              >
                                <div>
                                  <p className="font-semibold">
                                    {limitText(jobProposal?.job?.title)}..
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <Link
                              to="/client/freelancers/freelancer-details"
                              className="hover:underline hover:text-teal-600 "
                              state={{
                                singleFreelancer: jobProposal.submittedBy,
                              }}
                            >
                              <div>
                                <p>
                                  {jobProposal?.submittedBy?.firstName}{" "}
                                  {jobProposal?.submittedBy?.lastName}
                                </p>
                              </div>
                            </Link>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <span className="px-2 py-1 leading-tight rounded-full ">
                              {jobProposal?.job?.duration} days
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {jobProposal?.job?.category}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <Pagination
                freelancersPerPage={acceptedPerPage}
                totalFreelancers={acceptedProposals?.length}
                paginate={paginateAccepted}
                currentPage={currentAcceptedPage}
              />
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <EmptyState message="You don't have any Accepted Proposals" />
            </div>
          )}

          <div className="flex flex-row flex-wrap  items-center justify-between mb-4">
            <Title title="Rejected Proposals" />
          </div>
          {rejectedProposals && rejectedProposals.length > 0 ? (
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border boder-gray-500   bg-gray-100">
                      <th className="px-4 py-3">Job Title</th>
                      <th className="px-4 py-3">Freelancer Name</th>
                      <th className="px-4 py-3">Job Duration</th>
                      <th className="px-4 py-3">Job Category</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y ">
                    {hasRejectedProposals(
                      rejectedProposals,
                      indexOfFirstRejected,
                      indexOfLastRejected
                    )?.map &&
                      hasRejectedProposals(
                        rejectedProposals,
                        indexOfFirstRejected,
                        indexOfLastRejected
                      )?.map((jobProposal, index) => (
                        <tr key={index} className="text-gray-700 ">
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                              <Link
                                to="/client/proposal-details"
                                className="hover:underline hover:text-teal-600 "
                                state={{ jobProposal }}
                              >
                                <div>
                                  <p className="font-semibold">
                                    {limitText(jobProposal?.job?.title)}..
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <Link
                              to="/client/freelancers/freelancer-details"
                              className="hover:underline hover:text-teal-600 "
                              state={{
                                singleFreelancer: jobProposal.submittedBy,
                              }}
                            >
                              <div>
                                <p>
                                  {jobProposal?.submittedBy?.firstName}{" "}
                                  {jobProposal?.submittedBy?.lastName}
                                </p>
                              </div>
                            </Link>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            <span className="px-2 py-1 leading-tight rounded-full ">
                              {jobProposal?.job?.duration} days
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {jobProposal?.job?.category}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <Pagination
                freelancersPerPage={RejectedPerPage}
                totalFreelancers={rejectedProposals?.length}
                paginate={paginateRejected}
                currentPage={currentRejectedPage}
              />
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <EmptyState message="You don't have any Rejected Proposals" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectProposals;
