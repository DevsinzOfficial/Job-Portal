import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReadNotifications } from "../../../redux/actions/ClientActions";
import Spinner from "../../Guest/AuthPages/Spinner";
import EmptyState from "./EmptyState";
import { toast } from "react-toastify";

const ClientNotifications = () => {
  const dispatch = useDispatch();
  const { notifications, loading } = useSelector((state) => state?.clientData);

  let sortedData = [];

  useEffect(() => {
    dispatch(ReadNotifications(toast));
  }, [dispatch]);

  if (notifications && notifications?.length > 0) {
    sortedData = notifications?.sort((a, b) => {
      // Update sortedNotifications inside the if statement
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
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-8 ">
          <div className="item w-full h-auto flex-grow px-6 ">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
              Notifications
            </h1>
          </div>
          {sortedData && sortedData?.length > 0 ? (
            <div className="item w-full h-auto flex-grow border border-3 rounded-md  border-gray-300 py-4 px-4">
              <ul className="flex-inline space-y-3">
                {sortedData &&
                  sortedData?.map((notification, index) => (
                    <li key={index} className="flex">
                      <div className="inline-flex items-center border-b -mb-2 w-full px-2 py-2 text-sm transition-colors duration-150 hover:bg-gray-100 hover:text-gray-800 ">
                        <img
                          className="h-8 w-8 rounded-full object-cover mx-1"
                          src={
                            notification?.sendfrom?.photo
                              ? notification?.sendfrom?.photo
                              : notification?.sendto?.photo
                          }
                          alt="avatar"
                        />
                        <p className="text-gray-600 text-sm mx-2">
                          <span className="font-bold" href="#">
                            {notification?.sendfrom?.firstName
                              ? notification?.sendfrom?.firstName
                              : "You"}{" "}
                            {notification?.sendfrom?.lastName}
                          </span>{" "}
                          {notification?.title}.{" "}
                          <span className="text-xs">
                            {" "}
                            {dateConverter(notification?.createdAt)}
                          </span>
                        </p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <EmptyState message="You don't have Any Notifications" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ClientNotifications;
