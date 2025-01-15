import { useState, useRef, useEffect } from "react";
import ChatMenu from "../../Chat/ChatMenu";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../../../redux/actions/AdminActions";
import profile from "../../../../img/profile.jpg";

const NavbarRightMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMessagesMenuOpen, setIsMessagesMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const messageMenuRef = useRef();
  const profileMenuRef = useRef();

  const onLogout = () => {
    dispatch(logoutAdmin(navigate, toast));
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
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
  }, [isMessagesMenuOpen, isProfileMenuOpen]);

  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleMessagesClick = () => {
    setIsMessagesMenuOpen(!isMessagesMenuOpen);
  };

  return (
    <div>
      <div className="flex items-center">
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
                src={profile}
                alt="logo of titfortat"
                aria-hidden="true"
              />
            </button>
            {isProfileMenuOpen && (
              <ul
                className="absolute right-0 w-80  mt-12 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md z-20 "
                aria-label="submenu"
              >
                <li className="flex cursor-pointer">
                  <div
                    className="inline-flex items-center  w-full px-2 py-2 font-semibold text-sm transition-colors duration-150 hover:bg-gray-100 hover:text-gray-800 "
                    onClick={onLogout}
                  >
                    <svg
                      className="w-4 h-4 mr-3 text-teal-600"
                      aria-hidden="true"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                    </svg>
                    <span className="cursor:pointer">Log out</span>
                  </div>
                </li>
              </ul>
            )}
          </li>
        </div>
      </div>
    </div>
  );
};

export default NavbarRightMenu;
