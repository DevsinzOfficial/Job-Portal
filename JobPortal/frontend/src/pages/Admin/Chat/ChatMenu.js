import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GetAllMessages } from "../../../redux/actions/AdminActions";
import Spinner from "../../Guest/AuthPages/Spinner";
import EmptyState from "./EmptyState";
import { toast } from "react-toastify";
import profile from "../../../img/profile.jpg";

const ChatMenu = () => {
  const dispatch = useDispatch();
  const { messages, messagesLoading } = useSelector(
    (state) => state?.adminData
  );
  const id = localStorage.getItem("authID");

  let sortedData = [];
  useEffect(() => {
    dispatch(GetAllMessages(toast, id));
  }, [dispatch, id]);

  if (messages && messages?.length > 0) {
    sortedData = messages
      .filter((message) => message?.receiver_admin?._id === id)
      .sort((a, b) => {
        return new Date(b?.createdAt) - new Date(a?.createdAt);
      });
  }

  const dateConverter = (createdAt) => {
    const userCreatedDate = new Date(createdAt);
    const currentDate = new Date();

    const timeDifference = currentDate - userCreatedDate;

    const minutes = Math.floor(timeDifference / 1000 / 60);

    if (minutes < 60) {
      return `${minutes} minutes ago`;
    } else {
      const hours = Math.floor(timeDifference / 1000 / 60 / 60);

      if (hours < 24) {
        return `${hours} hours ago`;
      } else {
        const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
        return `${days} days ago`;
      }
    }
  };
  return (
    <div>
      {messagesLoading ? (
        <Spinner />
      ) : (
        <ul
          className="absolute right-0 w-80  mt-10 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md z-20 "
          aria-label="submenu"
        >
          {sortedData && sortedData?.length > 0 ? (
            <>
              {sortedData?.map &&
                sortedData?.slice(0, 4).map((message, index) => (
                  <li key={index} className="flex">
                    <div className="inline-flex cursor-pointer items-center border-b -mb-2 w-full px-2 py-2 text-sm transition-colors duration-150 hover:bg-gray-100 hover:text-gray-800 ">
                      <img
                        className="h-8 w-8 rounded-full object-cover mx-1"
                        src={
                          message?.sender_client?.photo ||
                          message?.sender_freelancer?.photo ||
                          message?.sender_admin?.photo
                            ? message?.sender_client?.photo ||
                              message?.sender_freelancer?.photo ||
                              message?.sender_admin?.photo
                            : profile
                        }
                        alt="avatar"
                      />
                      <p className="text-gray-600 text-sm mx-2">
                        <span className="font-bold" href="#">
                          {message?.sender_client?.firstName ||
                            message?.sender_freelancer?.firstName ||
                            message?.sender_admin?.username}
                        </span>{" "}
                        <span className="font-bold" href="#">
                          {message?.sender_client?.lastName ||
                            message?.sender_freelancer?.lastName}
                        </span>{" "}
                        sent you <span>a</span> Message{" "}
                        <span className="text-xs">
                          {" "}
                          {dateConverter(message?.createdAt)}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
            </>
          ) : (
            <div className="flex justify-center w-full">
              <EmptyState message="You don't have Any Messages" />
            </div>
          )}

          <li className="flex">
            <Link
              className="block bg-teal-600 text-white border border rounded-b-md w-full text-center font-bold py-2 "
              to="/admin/messages"
            >
              See all messages
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ChatMenu;
