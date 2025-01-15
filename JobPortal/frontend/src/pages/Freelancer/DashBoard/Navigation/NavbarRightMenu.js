import { useState, useRef, useEffect } from "react";
import NotificationMenu from "../../Notifications/NotficationMenu";
import profile from "../../../../img/profile.jpg";
import ChatMenu from "../../Chat/ChatMenu";
import ProfileMenu from "../../Profile/ProfileMenu";
import { useSelector, useDispatch } from "react-redux";
import { GetFreelancerInformation } from "../../../../redux/actions/FreelancerActions";
import Spinner from "../PagesComponent/Helpers/Spinner";
import { toast } from "react-toastify";

const RightMenu = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.freelancerData.userInfo._id);
  const userInfo = useSelector((state) => state.freelancerData.userInfo);
  const { loading } = useSelector((state) => state.freelancerData);

  const { photo } = userInfo;

  useEffect(() => {
    dispatch(GetFreelancerInformation(userId, toast));
  }, [dispatch, userId]);

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isMessagesMenuOpen, setIsMessagesMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const notificationMenuRef = useRef();
  const messageMenuRef = useRef();
  const profileMenuRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        isNotificationsMenuOpen &&
        notificationMenuRef.current &&
        !notificationMenuRef.current.contains(e.target)
      ) {
        setIsNotificationsMenuOpen(false);
      } else if (
        isMessagesMenuOpen &&
        messageMenuRef.current &&
        !messageMenuRef.current.contains(e.target)
      ) {
        setIsMessagesMenuOpen(false);
      } else if (
        isProfileMenuOpen &&
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target)
      ) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isNotificationsMenuOpen, isMessagesMenuOpen, isProfileMenuOpen]);

  const handleNotificationsClick = () => {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  };

  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleMessagesClick = () => {
    setIsMessagesMenuOpen(!isMessagesMenuOpen);
  };

  return (
    <div>
      <div className="flex items-center">
        <div ref={notificationMenuRef}>
          <li className="relative flex ml-4 text-gray-500 ">
            <button
              className="align-middle rounded-full focus:shadow-outline-teal focus:outline-none"
              onClick={handleNotificationsClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="teal"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>
            {isNotificationsMenuOpen && <NotificationMenu />}
          </li>
        </div>
        <div ref={messageMenuRef}>
          <li className="relative flex ml-4 text-gray-500 ">
            <button
              className="align-middle rounded-full focus:shadow-outline-teal focus:outline-none"
              onClick={handleMessagesClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" shrink-0 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="teal"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>
            {isMessagesMenuOpen && <ChatMenu />}
          </li>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div ref={profileMenuRef}>
              <li className="relative flex ml-4 text-gray-500 mr-2 sm:mr-4">
                <button
                  className="align-middle rounded-full focus:shadow-outline-teal-600 focus:outline-none"
                  onClick={handleProfileClick}
                  aria-label="Account"
                  aria-haspopup="true"
                >
                  <img
                    className=" avatar avatar-sm object-cover w-8 h-8 rounded-full"
                    src={!photo ? profile : photo}
                    alt="logo of titfortat"
                    aria-hidden="true"
                  />
                </button>
                {isProfileMenuOpen && <ProfileMenu />}
              </li>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RightMenu;
