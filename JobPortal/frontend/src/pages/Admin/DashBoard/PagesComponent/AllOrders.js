import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllOrders,
  DeleteOrder,
} from "../../../../redux/actions/AdminActions";
import Pagination from "./Helpers/Pagination";
import Title from "./Helpers/Title";
import EmptyState from "../PagesComponent/Helpers/EmptyState";
import Modal from "./Helpers/Modal";
import Spinner from "./Helpers/Spinner";

const AllOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { orders, ordersLoading } = useSelector((state) => state?.adminData);

  const [deleteModal, setDeleteModal] = useState(false);
  const [id, setId] = useState(0);
  const handleDeleteModal = (id) => {
    setDeleteModal(true);
    setId(id);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const [deleteJobModal, setDeleteJobModal] = useState(false);

  const handleDeleteJobModal = (id) => {
    setDeleteJobModal(true);
    setId(id);
  };

  const closeDeleteJobModal = () => {
    setDeleteJobModal(false);
  };

  const [deleteExchangeSkillsModal, setDeleteExchangeSkillsModal] =
    useState(false);

  const handleDeleteExchangeSkillsModal = (id) => {
    setDeleteExchangeSkillsModal(true);
    setId(id);
  };

  const closeDeleteExchangeSkillsModal = () => {
    setDeleteExchangeSkillsModal(false);
  };

  const delOrder = (orderId) => {
    dispatch(DeleteOrder(orderId, navigate, toast));
    setDeleteModal(false);
    setDeleteJobModal(false);
    setDeleteExchangeSkillsModal(false);
  };

  useEffect(() => {
    dispatch(getAllOrders(toast));
  }, [dispatch]);

  const gigOrders =
    (orders?.filter && orders?.filter((order) => order?.type === "gig")) || [];
  const jobOrders =
    (orders?.filter && orders?.filter((job) => job?.type === "job")) || [];
  const exchangeSkillsOrders =
    (orders?.filter &&
      orders?.filter(
        (exchangeskill) => exchangeskill?.type === "ExchangeSkills"
      )) ||
    [];

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

  const [currentPage, setCurrentPage] = useState(1);
  const [freelancersPerPage] = useState(5);

  // Get current freelancers
  const indexOfLastFreelancer = currentPage * freelancersPerPage;
  const indexOfFirstFreelancer = indexOfLastFreelancer - freelancersPerPage;

  function hasgigOrders(
    gigOrders,
    indexOfFirstFreelancer,
    indexOfLastFreelancer
  ) {
    const currentgigOrders = gigOrders?.slice(
      indexOfFirstFreelancer,
      indexOfLastFreelancer
    );
    if (currentgigOrders.length > 0) {
      return currentgigOrders;
    } else {
      return [];
    }
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  /* job orders pagination */

  const [currentjobOrderPage, setCurrentJobOrderPage] = useState(1);
  const [jobOrdersPerPage] = useState(5);

  // Get current freelancers
  const indexOfLastJobOrder = currentjobOrderPage * jobOrdersPerPage;
  const indexOfFirstJobOrder = indexOfLastJobOrder - jobOrdersPerPage;

  function hasjobOrders(jobOrders, indexOfFirstJobOrder, indexOfLastJobOrder) {
    const currentjobOrders = jobOrders?.slice(
      indexOfFirstJobOrder,
      indexOfLastJobOrder
    );
    if (currentjobOrders.length > 0) {
      return currentjobOrders;
    } else {
      return [];
    }
  }

  const paginateJobOrder = (pageNumber) => setCurrentJobOrderPage(pageNumber);

  /* exchangeSkills Orders */

  /* job orders pagination */

  const [currentExchangeSkillsOrderPage, setCurrentExchangeSkillsOrder] =
    useState(1);
  const [exchangeSkillsOrderPerPage] = useState(5);

  // Get current freelancers
  const indexOfLastExchangeSkillsOrder =
    currentExchangeSkillsOrderPage * exchangeSkillsOrderPerPage;
  const indexOfFirstExchangeSkillsOrder =
    indexOfLastExchangeSkillsOrder - exchangeSkillsOrderPerPage;

  function hasExchangeSkillsOrders(
    exchangeSkillsOrders,
    indexOfFirstExchangeSkillsOrder,
    indexOfLastExchangeSkillsOrder
  ) {
    const currentExchangeSkillsOrder = exchangeSkillsOrders?.slice(
      indexOfFirstExchangeSkillsOrder,
      indexOfLastExchangeSkillsOrder
    );
    if (currentExchangeSkillsOrder.length > 0) {
      return currentExchangeSkillsOrder;
    } else {
      return [];
    }
  }

  const paginateExchangeSkillsOrder = (pageNumber) =>
    setCurrentExchangeSkillsOrder(pageNumber);

  return (
    <div>
      {ordersLoading ? (
        <Spinner />
      ) : (
        <div className="h-full pb-16 overflow-y-auto">
          <div className="container  mx-auto grid">
            <div className="flex flex-row flex-wrap  items-center justify-between mb-4">
              <Title title="All Gigs Orders" />
            </div>
            {gigOrders && gigOrders.length > 0 ? (
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full whitespace-no-wrap">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border boder-gray-500   bg-gray-100">
                        <th className="px-4 py-3">Order Id</th>
                        <th className="px-4 py-3">Freelancer Name</th>
                        <th className="px-4 py-3">Client Name</th>
                        <th className="px-4 py-3">Order Expiry</th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y ">
                      {hasgigOrders(
                        gigOrders,
                        indexOfFirstFreelancer,
                        indexOfLastFreelancer
                      )?.map &&
                        hasgigOrders(
                          gigOrders,
                          indexOfFirstFreelancer,
                          indexOfLastFreelancer
                        )?.map((gigOrder, index) => (
                          <tr key={index} className="text-gray-700 ">
                            <td className="px-4 py-3">
                              <div className="flex items-center text-sm">
                                <Link
                                  to="/admin/gig-order-details"
                                  className="hover:underline hover:text-teal-600 "
                                  state={{ gigOrder }}
                                >
                                  <div>
                                    <p className="font-semibold">
                                      {gigOrder?._id}
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {gigOrder?.freelancer?.firstName}{" "}
                              {gigOrder?.freelancer?.lastName}
                            </td>
                            <td className="px-4 py-3 text-xs">
                              <p className="text-sm  ">
                                {gigOrder?.client?.firstName}{" "}
                                {gigOrder?.client?.lastName}
                              </p>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {dateConverter(gigOrder.OrderExp)}
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center space-x-4 text-sm">
                                <button
                                  className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                                  aria-label="Delete"
                                  onClick={() =>
                                    handleDeleteModal(gigOrder?._id)
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
                                    del={() => delOrder(id)}
                                    comment={"Gig Order"}
                                    message={"Gig Order"}
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
                  totalFreelancers={gigOrders?.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </div>
            ) : (
              <div className="flex justify-center w-full">
                <EmptyState message="No Gig Orders To Show" />
              </div>
            )}
          </div>

          <div className="container  mx-auto grid">
            <div className="flex flex-row flex-wrap  items-center justify-between mb-4">
              <Title title="All Jobs Orders" />
            </div>
            {jobOrders && jobOrders.length > 0 ? (
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full whitespace-no-wrap">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border boder-gray-500   bg-gray-100">
                        <th className="px-4 py-3">Order Id</th>
                        <th className="px-4 py-3">Client Name</th>
                        <th className="px-4 py-3">Freelancer Name</th>
                        <th className="px-4 py-3">Proposal</th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y ">
                      {hasjobOrders(
                        jobOrders,
                        indexOfFirstJobOrder,
                        indexOfLastJobOrder
                      )?.map &&
                        hasjobOrders(
                          jobOrders,
                          indexOfFirstJobOrder,
                          indexOfLastJobOrder
                        )?.map((jobOrder, index) => (
                          <tr key={index} className="text-gray-700 ">
                            <td className="px-4 py-3">
                              <div className="flex items-center text-sm">
                                <Link
                                  to="/admin/job-order-details"
                                  className="hover:underline hover:text-teal-600 "
                                  state={{ jobOrder }}
                                >
                                  <div>
                                    <p className="font-semibold">
                                      {jobOrder?._id}
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {jobOrder?.client?.firstName}{" "}
                              {jobOrder?.client?.lastName}
                            </td>
                            <td className="px-4 py-3 text-xs">
                              <p className="text-sm  ">
                                {jobOrder?.freelancer?.firstName}{" "}
                                {jobOrder?.freelancer?.lastName}
                              </p>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {jobOrder?.jobOrderType?._id}
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center space-x-4 text-sm">
                                <button
                                  className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                                  aria-label="Delete"
                                  onClick={() =>
                                    handleDeleteJobModal(jobOrder?._id)
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
                                {deleteJobModal && (
                                  <Modal
                                    closeDeleteModal={closeDeleteJobModal}
                                    del={() => delOrder(id)}
                                    comment={"Job Order"}
                                    message={"Job Order"}
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
                  freelancersPerPage={jobOrdersPerPage}
                  totalFreelancers={jobOrders?.length}
                  paginate={paginateJobOrder}
                  currentPage={currentjobOrderPage}
                />
              </div>
            ) : (
              <div className="flex justify-center w-full">
                <EmptyState message="No Job Orders To Show" />
              </div>
            )}
          </div>

          <div className="container  mx-auto grid">
            <div className="flex flex-row flex-wrap  items-center justify-between mb-4">
              <Title title="All Exchange Skills Orders" />
            </div>
            {exchangeSkillsOrders && exchangeSkillsOrders.length > 0 ? (
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full whitespace-no-wrap">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border boder-gray-500   bg-gray-100">
                        <th className="px-4 py-3">Order Id</th>
                        <th className="px-4 py-3">Freelancer 1 Name</th>
                        <th className="px-4 py-3">Freelancer 2 Name</th>
                        <th className="px-4 py-3">Request </th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>

                    <tbody className="bg-white divide-y ">
                      {hasExchangeSkillsOrders(
                        exchangeSkillsOrders,
                        indexOfFirstExchangeSkillsOrder,
                        indexOfLastExchangeSkillsOrder
                      )?.map &&
                        hasExchangeSkillsOrders(
                          exchangeSkillsOrders,
                          indexOfFirstExchangeSkillsOrder,
                          indexOfLastExchangeSkillsOrder
                        )?.map((exchangeSkillsOrder, index) => (
                          <tr key={index} className="text-gray-700 ">
                            <td className="px-4 py-3">
                              <div className="flex items-center text-sm">
                                <Link
                                  to="/admin/exchange-skill-order-details"
                                  className="hover:underline hover:text-teal-600 "
                                  state={{ exchangeSkillsOrder }}
                                >
                                  <div>
                                    <p className="font-semibold">
                                      {exchangeSkillsOrder?._id}
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {exchangeSkillsOrder?.freelancer?.firstName}{" "}
                              {exchangeSkillsOrder?.freelancer?.lastName}
                            </td>
                            <td className="px-4 py-3 text-xs">
                              <p className="text-sm  ">
                                {exchangeSkillsOrder?.submittedBy?.firstName}{" "}
                                {exchangeSkillsOrder?.submittedBy?.lastName}
                              </p>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {
                                exchangeSkillsOrder?.exchangeSkillsOrderType
                                  ?._id
                              }
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center space-x-4 text-sm">
                                <button
                                  className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                                  aria-label="Delete"
                                  onClick={() =>
                                    handleDeleteExchangeSkillsModal(
                                      exchangeSkillsOrder?._id
                                    )
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
                                {deleteExchangeSkillsModal && (
                                  <Modal
                                    closeDeleteModal={
                                      closeDeleteExchangeSkillsModal
                                    }
                                    del={() => delOrder(id)}
                                    comment={"Exchange Skills Order"}
                                    message={"Exchange Skills Order"}
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
                  freelancersPerPage={exchangeSkillsOrderPerPage}
                  totalFreelancers={exchangeSkillsOrders?.length}
                  paginate={paginateExchangeSkillsOrder}
                  currentPage={currentExchangeSkillsOrderPage}
                />
              </div>
            ) : (
              <div className="flex justify-center w-full">
                <EmptyState message="No Exchange Skills Orders To Show" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllOrders;
