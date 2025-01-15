import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  GetAllFreelancers,
  DeleteFreelancer,
  getAllFreelancersReviews,
} from "../../../../redux/actions/AdminActions";
import Pagination from "./Helpers/Pagination";
import EmptyState from "../PagesComponent/Helpers/EmptyState";
import Profile from "../../../../img/profile.jpg";
import Modal from "./Helpers/Modal";
import Spinner from "./Helpers/Spinner";

const FreelancersList = () => {
  const { freelancers, getFreelancerLoader } = useSelector(
    (state) => state?.adminData
  );

  const reviews = useSelector((state) => state?.adminData?.freelancerReviews);

  const [currentPage, setCurrentPage] = useState(1);
  const [freelancersPerPage] = useState(5);

  // Get current freelancers
  const indexOfLastFreelancer = currentPage * freelancersPerPage;
  const indexOfFirstFreelancer = indexOfLastFreelancer - freelancersPerPage;

  function hasFreelancers(
    freelancers,
    indexOfFirstFreelancer,
    indexOfLastFreelancer
  ) {
    const currentFreelancers = freelancers?.slice(
      indexOfFirstFreelancer,
      indexOfLastFreelancer
    );
    if (currentFreelancers.length > 0) {
      return currentFreelancers;
    } else {
      return [];
    }
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetAllFreelancers(toast));
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

  const delFreelancer = (freelancerId) => {
    dispatch(DeleteFreelancer(freelancerId, navigate, toast));
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
      {getFreelancerLoader ? (
        <Spinner />
      ) : (
        <div className="h-full pb-16 overflow-y-auto">
          <div className="container  mx-auto grid">
            <div className="flex flex-row flex-wrap  items-center justify-between mb-4">
              <h2 className="my-2 text-2xl font-semibold text-gray-700 ">
                Freelancers List
              </h2>
            </div>
            {freelancers && freelancers.length > 0 ? (
              <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                  <table className="w-full whitespace-no-wrap">
                    <thead>
                      <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border boder-gray-500   bg-gray-100">
                        <th className="px-4 py-3">Freelancer Name</th>
                        <th className="px-4 py-3">Country</th>
                        <th className="px-4 py-3">Join Date</th>
                        <th className="px-4 py-3">Category</th>
                        <th className="px-4 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y ">
                      {hasFreelancers(
                        freelancers,
                        indexOfFirstFreelancer,
                        indexOfLastFreelancer
                      )?.map &&
                        hasFreelancers(
                          freelancers,
                          indexOfFirstFreelancer,
                          indexOfLastFreelancer
                        )?.map((freelancer, index) => (
                          <tr key={index} className="text-gray-700 ">
                            <td className="px-4 py-3">
                              <div className="flex items-center text-sm">
                                <Link
                                  to="/admin/freelancer-details"
                                  className="hover:underline hover:text-teal-600 "
                                  state={{ freelancer, reviews }}
                                >
                                  <div className="flex items-center text-sm space-x-2">
                                    <img
                                      className=" avatar avatar-sm object-cover w-8 h-8 rounded-full"
                                      src={
                                        !freelancer.photo
                                          ? Profile
                                          : freelancer.photo
                                      }
                                      alt="avatar"
                                      aria-hidden="true"
                                    />
                                    <div>
                                      <p className="font-semibold">
                                        {freelancer.firstName}{" "}
                                        {freelancer.lastName}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {freelancer?.address?.country}
                            </td>
                            <td className="px-4 py-3 text-xs">
                              <p className="text-sm ">
                                Member Since{" "}
                                {dateConverter(freelancer.createdAt)}
                              </p>
                            </td>
                            <td className="px-4 py-3 text-sm">
                              {freelancer.Category}
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center space-x-4 text-sm">
                                <button
                                  className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                                  aria-label="Delete"
                                  onClick={() =>
                                    handleDeleteModal(freelancer._id)
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
                                    del={() => delFreelancer(id)}
                                    comment={"Freelancer"}
                                    message={"Freelancer"}
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
                  totalFreelancers={freelancers?.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </div>
            ) : (
              <div className="flex justify-center w-full">
                <EmptyState message="No Freelancers  To Show" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FreelancersList;
