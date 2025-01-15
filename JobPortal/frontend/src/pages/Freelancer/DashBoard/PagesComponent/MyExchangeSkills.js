import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Helpers/Pagination";
import Title from "./Helpers/Title";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  GetMyExchangeSkills,
  DeleteExchangeSkill,
} from "../../../../redux/actions/FreelancerActions";
import { GetReviews } from "./../../../../redux/actions/FreelancerActions";
import EmptyState from "./Helpers/EmptyState";
import Spinner from "./Helpers/Spinner";
import Modal from "./Helpers/Modal";

const ExchangeSkills = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.freelancerData.userInfo._id);
  const myExchangeSkills = useSelector(
    (state) => state?.freelancerData?.myExchangeSkills
  );
  const { loading } = useSelector((state) => state?.freelancerData);
  const reviews = useSelector((state) => state?.freelancerData?.reviews);

  useEffect(() => {
    dispatch(GetMyExchangeSkills(toast));
    dispatch(GetReviews(userId, toast));
  }, [dispatch, userId]);

  const [deleteModal, setDeleteModal] = useState(false);
  const [id, setId] = useState(0);
  const handleDeleteModal = (id) => {
    setDeleteModal(true);
    setId(id);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const deleteExchangeSkill = (exchangeSkillId) => {
    dispatch(DeleteExchangeSkill(exchangeSkillId, navigate, toast));
    setDeleteModal(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [freelancersPerPage] = useState(5);

  // Get current freelancers
  const indexOfLastFreelancer = currentPage * freelancersPerPage;
  const indexOfFirstFreelancer = indexOfLastFreelancer - freelancersPerPage;

  function hasExchangeSkills(
    exchangeSkillsList,
    indexOfFirstFreelancer,
    indexOfLastFreelancer
  ) {
    const currentExchangeSkills = exchangeSkillsList?.slice(
      indexOfFirstFreelancer,
      indexOfLastFreelancer
    );
    if (currentExchangeSkills.length > 0) {
      return currentExchangeSkills;
    } else {
      return [];
    }
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const limitText = (text, char) => {
    return text && text.split(" ").slice(0, char).join(" ");
  };

  return (
    <div className="h-full pb-16 overflow-y-auto">
      {loading ? (
        <Spinner />
      ) : (
        <div className="container  mx-auto grid">
          <div className="flex flex-row flex-wrap  items-center justify-between my-4">
            <Title title=" Your ExchangeSkills" />
            <Link to="/freelancer/exchange-skills/add">
              <button className=" h-8 flex items-center mr-2  justify-between px-2 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-teal-600 border border-transparent rounded-md active:bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline-teal">
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

                <span>Create New Request</span>
              </button>
            </Link>
          </div>

          {myExchangeSkills && myExchangeSkills.length > 0 ? (
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
              <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-no-wrap">
                  <thead>
                    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border boder-gray-500   bg-gray-100">
                      <th className="px-4 py-3">Title</th>
                      <th className="px-4 py-3">Offered Skill</th>
                      <th className="px-4 py-3">Description</th>
                      <th className="px-4 py-3">Required Skill</th>
                      <th className="px-4 py-3">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y ">
                    {hasExchangeSkills(
                      myExchangeSkills,
                      indexOfFirstFreelancer,
                      indexOfLastFreelancer
                    )?.map &&
                      hasExchangeSkills(
                        myExchangeSkills,
                        indexOfFirstFreelancer,
                        indexOfLastFreelancer
                      )?.map((myExchangeSkill, index) => (
                        <tr key={index} className="text-gray-700 ">
                          <td className="px-4 py-3">
                            <div className="flex items-center text-sm">
                              <Link
                                to="/freelancer/exchange-skills/my-exchange-skills-details"
                                className="hover:underline hover:text-teal-600"
                                state={{
                                  singleExchangeSkill: myExchangeSkill,
                                  reviews,
                                }}
                              >
                                <div>
                                  <p className="font-semibold">
                                    {limitText(myExchangeSkill?.title, 5)}..
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {myExchangeSkill?.offeredSkills}
                          </td>
                          <td className="px-4 py-3 text-xs">
                            <p className="text-sm ">
                              {limitText(myExchangeSkill?.discription, 6)}..
                            </p>
                          </td>
                          <td className="px-4 py-3 text-sm">
                            {myExchangeSkill?.requiredSkills}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center space-x-4 text-sm">
                              <Link
                                to="/freelancer/exchange-skills/edit"
                                state={{ myExchangeSkill }}
                              >
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
                                onClick={() =>
                                  handleDeleteModal(myExchangeSkill._id)
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
                                  del={() => deleteExchangeSkill(id)}
                                  comment={"ExchangeSkill"}
                                  message={"ExchangeSkill"}
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
                totalFreelancers={myExchangeSkills?.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <EmptyState message="You don't have any Exchange Skills" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ExchangeSkills;
