import { useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "./Helpers/Title";
import OngoingJobCard from "./Helpers/OngoingJobCard";
import OngoingGigCard from "./Helpers/OngoingGigCard";
import OngoingExchnageSkillsCard from "./Helpers/OngoingExchangeSkillsCard";
import { useSelector, useDispatch } from "react-redux";
import {
  GetAllOrders,
  GetExchangeSkillsOrders,
} from "./../../../../redux/actions/FreelancerActions";
import EmptyState from "./Helpers/EmptyState";
import Spinner from "./Helpers/Spinner";
import { toast } from "react-toastify";

const MyHome = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.freelancerData.orders);
  const { loading } = useSelector((state) => state?.freelancerData);
  const submittedExchangeOrders = useSelector(
    (state) => state.freelancerData.exchangeSkillsOrders
  );

  useEffect(() => {
    dispatch(GetAllOrders(toast));
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetExchangeSkillsOrders(toast));
  }, [dispatch]);

  const gigOrders =
    (orders?.filter &&
      orders?.filter((order) => order?.type === "gig" && order.status === 1)) ||
    [];

  const jobOrders =
    (orders?.filter &&
      orders?.filter((job) => job?.type === "job" && job?.status === 1)) ||
    [];

  const acceptedExchangeSkills =
    (orders?.filter &&
      orders?.filter((job) => job?.type === "ExchangeSkills")) ||
    [];

  const combinedExchangeSkillsOrders = acceptedExchangeSkills.concat(
    submittedExchangeOrders
  );

  return (
    <div className="h-full pb-16 overflow-y-auto">
      {loading ? (
        <Spinner />
      ) : (
        <div className="container  mx-auto grid">
          <div className="flex flex-row flex-wrap  items-center justify-between mb-4 mx-4">
            <Title title="Your Ongoing Jobs" />
          </div>
          {jobOrders && jobOrders.length > 0 ? (
            <div className="container overflow-hidden rounded-lg shadow-xs">
              <div className=" sm:grid grid-cols-4 gap-2 grid-cols-2 gap-4 ">
                {jobOrders?.map &&
                  jobOrders?.map((job, index) => (
                    <div key={index}>
                      <Link to="/freelancer/ongoing-job" state={{ job }}>
                        <OngoingJobCard data={job} />
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <EmptyState message="Currently No OnGoing Jobs" />
            </div>
          )}

          <div className="flex flex-row flex-wrap  items-center justify-between my-4 mx-4">
            <Title title="Your Ongoing Exchange Skills" />
          </div>

          {combinedExchangeSkillsOrders &&
          combinedExchangeSkillsOrders.length > 0 ? (
            <div className="container overflow-hidden rounded-lg shadow-xs">
              <div className="sm:grid grid-cols-4 gap-2 grid-cols-2 gap-4 ">
                {combinedExchangeSkillsOrders?.map &&
                  combinedExchangeSkillsOrders?.map((job, index) => (
                    <div key={index}>
                      <Link
                        to="/freelancer/ongoing-exchange-skill"
                        state={{ singleExchnageSkill: job }}
                      >
                        <OngoingExchnageSkillsCard data={job} />
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <EmptyState message="Currently No OnGoing Exchange Skills" />
            </div>
          )}

          <div className="flex flex-row flex-wrap  items-center justify-between my-4 mx-4">
            <Title title="Your Gigs Orders" />
          </div>
          {gigOrders && gigOrders.length > 0 ? (
            <div className="container overflow-hidden rounded-lg shadow-xs">
              <div className="sm:grid grid-cols-4 gap-2 grid-cols-2 gap-4 ">
                {gigOrders?.map &&
                  gigOrders?.map((order, index) => (
                    <div key={index}>
                      <Link to="/freelancer/ongoing-gig" state={{ order }}>
                        <OngoingGigCard data={order} />
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-center ">
              <EmptyState message="Currently No Gigs Orders" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyHome;
