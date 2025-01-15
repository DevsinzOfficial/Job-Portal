import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CreateConversation,
  cancelOrder,
} from "./../../../redux/actions/ClientActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../DashBoard/PagesComponent/Helpers/Spinner";
import ReviewForm from "./ReviewForm";
import Modal from "./Modal";

const OngoingGig = () => {
  const gigOrder = useLocation()?.state?.order;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state?.clientData);
  const userId = localStorage.getItem("authID");

  const id = gigOrder?._id;

  const [deleteModal, setDeleteModal] = useState(false);

  const handleDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const cancel = (orderId) => {
    dispatch(cancelOrder(orderId, navigate, toast));
    setDeleteModal(false);
  };

  const selectUser = (currentId, freelancerId, clientId) => {
    if (currentId === freelancerId) {
      return clientId;
    } else if (currentId === clientId) {
      return freelancerId;
    } else {
      return null;
    }
  };

  const otherId = selectUser(
    userId,
    gigOrder?.freelancer?._id,
    gigOrder?.client?._id
  );

  // Create a new conversation
  const handleCreateConversation = () => {
    dispatch(
      CreateConversation(
        {
          freelancer1: otherId,
          client1: otherId,
          admin1: otherId,
          freelancer2: userId,
          client2: userId,
          admin2: userId,
        },
        navigate,
        toast
      )
    );
  };

  const getPackage = (duration, price) => {
    if (
      duration &&
      price === gigOrder?.gigOrderType?.BASIC?.Price &&
      gigOrder?.gigOrderType?.BASIC?.time
    ) {
      return "Basic";
    } else if (
      duration &&
      price === gigOrder?.gigOrderType?.STANDARD?.Price &&
      gigOrder?.gigOrderType?.STANDARD?.time
    ) {
      return "Standard";
    } else if (
      duration &&
      price === gigOrder?.gigOrderType?.PREMIUM?.Price &&
      gigOrder?.gigOrderType?.PREMIUM?.time
    ) {
      return "Premium";
    }
  };

  const duration = gigOrder?.duration;

  const [days, setDays] = useState(
    sessionStorage.getItem(`gigDaysClient-${id}`) || duration
  );
  const [hours, setHours] = useState(
    sessionStorage.getItem(`gigHoursClient-${id}`) || 0
  );
  const [minutes, setMinutes] = useState(
    sessionStorage.getItem(`gigMinutesClient-${id}`) || 0
  );
  const [seconds, setSeconds] = useState(
    sessionStorage.getItem(`gigSecondsClient-${id}`) || 0
  );

  useEffect(() => {
    sessionStorage.setItem(`gigDaysClient-${id}`, days);
    sessionStorage.setItem(`gigHoursClient-${id}`, hours);
    sessionStorage.setItem(`gigMinutesClient-${id}`, minutes);
    sessionStorage.setItem(`gigSecondsClient-${id}`, seconds);

    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
      if (seconds === 0) {
        setMinutes((minutes) => minutes - 1);
        setSeconds(59);
      }
      if (minutes === 0 && seconds === 0) {
        setHours((hours) => hours - 1);
        setMinutes(59);
      }
      if (hours === 0 && minutes === 0 && seconds === 0) {
        setDays((days) => days - 1);
        setHours(23);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [days, hours, minutes, seconds, id]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-8">
            <div className="item w-full h-auto flex-grow px-6 ">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Gig Order
              </h1>
            </div>

            <div className="item w-full lg:w-1/2  h-auto flex-grow border border-3 lg:rounded-l-md border-r-1  border-gray-300 py-2">
              <div className="item w-full h-auto flex-grow px-6 space-y-2 ">
                <div className="item w-full h-auto flex-grow ">
                  <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">
                    Gig Details
                  </h2>
                </div>
                <div className="item w-full h-auto flex-grow ">
                  <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4">
                    {gigOrder?.gigOrderType?.title}
                  </h2>
                </div>
              </div>
              <div className="border-b border-gray-200 mt-4"></div>

              <div className="item w-full h-auto flex-grow px-6 ">
                <p className="font-medium text-gray-700 my-2">
                  {gigOrder?.gigOrderType?.description}
                </p>
              </div>
              <div className="border-b border-gray-200 mt-3"></div>

              <div className="item w-full h-auto flex-grow px-6 mt-2 mb-3 space-y-2">
                <div className="item w-full h-auto flex-grow font-semibold mb-3">
                  <h3>Skills and Expertise</h3>
                </div>
                <div className="item w-full h-auto flex-grow  ">
                  <div className="flex flex-row flex-wrap space-x-2 w-full ">
                    {gigOrder?.gigOrderType?.skills?.map((skill, index) => (
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
            <div className=" item w-full lg:w-1/4 h-auto border-3 border lg:rounded-r-md border-l-0 border-gray-300">
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
                      Delivery: {gigOrder?.duration} Days
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
                      Package: {getPackage(gigOrder?.duration, gigOrder?.price)}
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
                    <span className="-mt-1">$ {gigOrder?.price}</span>
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                      />
                    </svg>

                    <span className="-mt-1">Id: {gigOrder?._id}</span>
                  </div>
                </div>
                <div className="item">
                  <button
                    onClick={() => handleDeleteModal()}
                    className="w-full h-12 px-12 text-sm font-medium text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-md active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-teal"
                  >
                    <span>Cancel Order</span>
                  </button>
                  {deleteModal && (
                    <Modal
                      closeDeleteModal={closeDeleteModal}
                      del={() => cancel(gigOrder?._id)}
                      comment={"Gig Order"}
                      message={"Gig Order"}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-8">
            <div className="item w-full lg:w-1/2  h-auto flex-grow border border-3 lg:rounded-md border-gray-300 py-2">
              <div className="item w-full h-auto flex-grow px-6 ">
                <div className="flex flex-wrap justify-between w-auto">
                  <div className="item">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900 ">
                      Timer
                    </h2>
                  </div>
                  <div className="item">
                    <h2 className="text-sm font-medium tracking-tight text-gray-700  ">
                      <button
                        onClick={handleCreateConversation}
                        className="w-full h-10 px-8 text-sm font-medium text-white transition-colors duration-150 bg-teal-600 border border-transparent rounded-md active:bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline-teal"
                      >
                        <span>Chat with Freelancer</span>
                      </button>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 mt-4"></div>
              <section className="bg-gradient py-8 md:py-16 mx-4 my-4 ">
                <div className="max-w-5xl mx-auto px-5 box-content">
                  <div className="flex items-center flex-col md:flex-row -mx-5">
                    <div className="w-full md:w-auto px-5 mx-auto">
                      <div className="flex justify-center text-teal-800 text-center">
                        <div className="w-20 md:w-24 border border-gray-800 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                          <div className="text-2xl md:text-3xl font-semibold">
                            <span>{days > 9 ? "" : "0"}</span>
                            <span>{days}</span>
                          </div>
                          <div className="opacity-75 text-xs mt-3 uppercase">
                            Day
                          </div>
                        </div>
                        <div className="w-20 md:w-24 border border-gray-800  bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                          <div className="text-2xl md:text-3xl font-semibold">
                            <span>{hours > 9 ? "" : "0"}</span>
                            <span>{hours}</span>
                          </div>
                          <div className=" opacity-75 text-xs mt-3 uppercase">
                            Hour
                          </div>
                        </div>
                        <div className="w-20 md:w-24 border border-gray-800  bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                          <div className="text-2xl md:text-3xl font-semibold">
                            <span>{minutes > 9 ? "" : "0"}</span>
                            <span>{minutes}</span>
                          </div>
                          <div className=" opacity-75 text-xs mt-3 uppercase">
                            Min
                          </div>
                        </div>
                        <div className="w-20 md:w-24 border  border-gray-800 bg-light-100 rounded-lg py-3 md:py-4 mx-2">
                          <div className="text-2xl md:text-3xl font-semibold">
                            <span>{seconds > 9 ? "" : "0"}</span>
                            <span>{seconds}</span>
                          </div>
                          <div className=" opacity-75 text-xs mt-3 uppercase">
                            Second
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-8">
            <div className="item w-full lg:w-1/2  h-auto flex-grow border border-3 lg:rounded-md border-gray-300 py-2">
              <div className="item w-full h-auto flex-grow px-6 ">
                <div className="flex flex-wrap justify-between w-auto">
                  <div className="item">
                    <h2 className="text-2xl font-semibold tracking-tight text-gray-900  ">
                      Leave a Review About Freelancer
                    </h2>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-200 mt-4"></div>
              <section className="bg-gradient  mx-4 ">
                {gigOrder?.reviewed === 0 ? (
                  <ReviewForm id={id} />
                ) : (
                  <div className="bg-white text-gray-700  py-3 rounded text-center">
                    <div className="flex flex-col mt-4 justify-center items-center">
                      <svg
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="shrink-0 w-10 h-10  text-teal-600 transition group-hover:text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="font-bold ">
                        You Have Already Reviewed The Freelancer
                      </span>
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OngoingGig;
