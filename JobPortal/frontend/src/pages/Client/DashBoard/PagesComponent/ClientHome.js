import { useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "./Helpers/Title";
import OngoingJobCard from "./Helpers/OngoingJobCard";
import OngoingGigCard from "./Helpers/OngoingGigCard";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./../../../Guest/AuthPages/Spinner";
import { GetAllOrders } from "./../../../../redux/actions/ClientActions";
import EmptyState from "../PagesComponent/Helpers/EmptyState";
import { toast } from "react-toastify";

const ClientHome = () => {
  const dispatch = useDispatch();
  const { orders, loading } = useSelector((state) => state?.clientData);



  useEffect(() => {
    dispatch(GetAllOrders(toast));
  }, [dispatch]);

  const gigOrders =
    (orders?.filter &&
      orders?.filter((order) => order?.type === "gig" && order.status === 1)) ||
    [];

  const jobOrders =
    (orders?.filter &&
      orders?.filter((job) => job?.type === "job" && job?.status === 1)) ||
    [];

  return (
    <div className="h-full pb-16 overflow-y-auto">
      {loading ? (
        <Spinner />
      ) : (
        <div className="container  mx-auto grid">
          <div className="flex flex-row flex-wrap  items-center justify-between mb-4 mx-4">
            <Title title="Your Due Projects By Freelancers" />
          </div>
          {jobOrders && jobOrders.length > 0 ? (
            <div className="container overflow-hidden rounded-lg shadow-xs">
              <div className=" sm:grid grid-cols-4 gap-2 grid-cols-2 gap-4 ">
                {jobOrders?.map &&
                  jobOrders?.map((job, index) => (
                    <div key={index}>
                      <Link to="/client/ongoing-job" state={{ job }}>
                        <OngoingJobCard data={job} />
                      </Link>
                    </div>
                  ))}
                {jobOrders.length === 0 && "No OnGoing Jobs"}
              </div>
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <EmptyState message="You don't have any Job Orders" />
            </div>
          )}
          <div className="flex flex-row flex-wrap items-center justify-between my-4 mx-4">
            <Title title="Your Due Gigs Orders By Freelancers" />
          </div>
          {gigOrders && gigOrders.length > 0 ? (
            <div className="container overflow-hidden rounded-lg shadow-xs">
              <div className="sm:grid grid-cols-4 gap-2 grid-cols-2 gap-4 ">
                {gigOrders?.map &&
                  gigOrders?.map((order, index) => (
                    <div key={index}>
                      <Link to="/client/ongoing-gig" state={{ order }}>
                        <OngoingGigCard data={order} />
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <EmptyState message="You don't have any Gig Orders" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ClientHome;
