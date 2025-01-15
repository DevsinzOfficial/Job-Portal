import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AcceptProposal,
  RejectProposal,
} from "../../../redux/actions/ClientActions";
import Spinner from "../DashBoard/PagesComponent/Helpers/Spinner";

const ClientPageProposalDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { jobProposal } = useLocation().state;
  const { loading } = useSelector((state) => state?.clientData);

  const acceptProposal = (proposalId) => {
    dispatch(AcceptProposal(proposalId, navigate, toast));
  };

  const rejectProposal = (proposalId) => {
    dispatch(RejectProposal(proposalId, navigate, toast));
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
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-8">
            <div className="item w-full h-auto flex-grow px-6 ">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Proposal Details
              </h1>
            </div>

            <div className="item w-full lg:w-1/2  h-auto flex-grow border border-3 lg:rounded-l-md border-r-1  border-gray-300 py-2">
              <div className="item w-full h-auto flex-grow px-6 space-y-2 ">
                <div className="item w-full h-auto flex-grow ">
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
                    Job Details
                  </h2>
                </div>
                <div className="item w-full h-auto flex-grow ">
                  <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4">
                    {jobProposal?.job?.title}
                  </h2>
                </div>
                <div className="item w-full h-auto flex-grow  ">
                  <div>
                    <span className=" px-3 py-1 text-sm font-thin text-white bg-teal-600 rounded-md ">
                      <span>{jobProposal?.job?.category}</span>
                    </span>
                  </div>
                </div>
                <div className="item w-full h-auto flex-grow text-sm text-gray-500 ">
                  <p>Posted on {dateConverter(jobProposal?.job?.createdAt)}</p>
                </div>
              </div>
              <div className="border-b border-gray-200 mt-4"></div>

              <div className="item w-full h-auto flex-grow px-6 ">
                <p className="font-medium text-gray-700 my-2">
                  {jobProposal?.job?.discription}
                </p>
              </div>
              <div className="border-b border-gray-200 mt-3"></div>

              <div className="item w-full h-auto flex-grow px-6 mt-2 mb-3 space-y-2">
                <div className="item w-full h-auto flex-grow font-semibold mb-3">
                  <h3>Skills and Expertise</h3>
                </div>
                <div className="item w-full h-auto flex-grow  ">
                  <div className="flex flex-row flex-wrap space-x-2 w-full ">
                    {jobProposal?.job?.skills &&
                      jobProposal?.job.skills?.map((skill, index) => (
                        <div
                          key={index}
                          className="flex flex-col flex-nowrap justify-center space-y-1 "
                        >
                          <div className="item ">
                            <div className="item w-full h-auto flex-grow  ">
                              <div className="flex flex-row flex-wrap space-x-2 w-full ">
                                <div className=" px-3 py-1 text-sm font-thin text-white bg-teal-600  rounded-md ">
                                  <span>{skill}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className=" hidden lg:block item w-full lg:w-1/4 h-auto border-3 border lg:rounded-r-md border-l-0 border-gray-300">
              <div className="flex flex-col flex-wrap w-auto flex-grow px-4 my-4 space-y-3">
                <div className="item">
                  <div className="flex px-2 py-2 text-sm font-thin text-gray-700 bg-gray-300 rounded-md ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2 -ml-1 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="-mt-1">
                      Duration: {jobProposal?.job?.duration} days
                    </span>
                  </div>
                </div>
                <div className="item">
                  <div className="flex px-2 py-2 text-sm font-thin text-gray-600 bg-gray-300  rounded-md ">
                    <svg
                      className="w-4 h-4 mr-2 -ml-1"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <span className="-mt-1">
                      {jobProposal?.job?.experienceLevel}
                    </span>
                  </div>
                </div>
                <div className="item">
                  <div className="flex px-2 py-2  text-sm font-thin text-gray-600 bg-gray-300  rounded-md ">
                    <svg
                      className="w-4 h-4 mr-2 -ml-1"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="-mt-1">
                      Est.Budget: ${jobProposal?.job?.budget}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-8">
              <div className="item w-full lg:w-1/2  h-auto flex-grow border border-3 lg:rounded-md border-gray-300 py-2">
                <div className="item w-full h-auto flex-grow px-6 ">
                  <div className="flex flex-wrap justify-between w-auto">
                    <div className="item">
                      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4 ">
                        Terms
                      </h2>
                    </div>
                    {jobProposal?.status === 1 ||
                    jobProposal?.status === -1 ? null : (
                      <div className="item">
                        <div className="flex items-center space-x-4 text-sm">
                          <button
                            onClick={() => acceptProposal(jobProposal?._id)}
                            className=" h-8 flex mr-2 items-center justify-between px-2 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-teal-600 border border-transparent rounded-md active:bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline-teal"
                          >
                            <svg
                              className="w-4 h-4 mr-2 -ml-1"
                              fill="currentColor"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clipRule="evenodd"
                              />
                            </svg>

                            <span>Accept Proposal</span>
                          </button>
                          <button
                            onClick={() => rejectProposal(jobProposal?._id)}
                            className=" h-8 flex mr-2 items-center justify-between px-2 py-1 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-md active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-teal"
                          >
                            <svg
                              className="w-4 h-4 mr-2 -ml-1"
                              fill="currentColor"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                                clipRule="evenodd"
                              />
                            </svg>

                            <span>Reject Proposal</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="border-b border-gray-200 mt-4"></div>
                <div className="item mx-6 my-2 ">
                  <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
                    <div className="item ">
                      <p>
                        <span className=" font-medium text-gray-900 ">
                          Bid:{" "}
                        </span>
                        <span className="font-regular text-gray-600">
                          $ {jobProposal?.bid}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-8">
              <div className="item w-full lg:w-1/2  h-auto flex-grow border border-3 lg:rounded-md border-gray-300 py-2">
                <div className="item w-full h-auto flex-grow px-6 ">
                  <div className="item">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4 ">
                      Duration
                    </h2>
                  </div>
                </div>

                <div className="border-b border-gray-200 mt-4"></div>
                <div className="item mx-6 my-2 ">
                  <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
                    <div className="item ">
                      <p>
                        <span className=" font-medium text-gray-900 ">
                          Proposed Time:{" "}
                        </span>
                        <span className="font-regular text-gray-600">
                          {jobProposal?.duration} days
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-8">
              <div className="item w-full lg:w-1/2  h-auto flex-grow border border-3 lg:rounded-md border-gray-300 py-2">
                <div className="item w-full h-auto flex-grow px-6 ">
                  <div className="item">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4 ">
                      More Information
                    </h2>
                  </div>
                </div>

                <div className="border-b border-gray-200 mt-4"></div>
                <div className="item px-6 my-4 ">
                  <h2 className=" text-xl font-medium text-gray-900 my-4 ">
                    Cover Letter
                  </h2>
                  <div className="flex flex-col flex-nowrap justify-center space-y-1 ">
                    <div className="item ">
                      <p className=" font-regular text-gray-600 ">
                        {jobProposal?.coverLetter}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 mt-4"></div>

                <div className="item px-6 my-4 ">
                  <h2 className=" text-xl font-medium text-gray-900 my-4 ">
                    Recent experience with similar projects
                  </h2>
                  <div className="flex flex-col flex-nowrap justify-center space-y-1 ">
                    <div className="item ">
                      <p className=" font-regular text-gray-600 ">
                        {jobProposal?.recentExperience}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 mt-4"></div>
                <div className="item px-6 my-4 ">
                  <h2 className=" text-xl font-medium text-gray-900 my-4 ">
                    GitHub profile and/or Website Links
                  </h2>
                  {jobProposal?.socialMediaLinks?.map(
                    (socialMediaLink, index) => (
                      <div
                        key={index}
                        className="flex flex-col flex-nowrap justify-center space-y-1 "
                      >
                        <div className="item ">
                          <p className=" font-regular text-gray-600 ">
                            <a
                              href={`https://www.${socialMediaLink}.com/`}
                              rel="noopener noreferrer"
                              target="_blank"
                              className="text-teal-700 transition hover:text-teal-700/75"
                            >
                              www.{socialMediaLink}.com
                            </a>
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ClientPageProposalDetails;
