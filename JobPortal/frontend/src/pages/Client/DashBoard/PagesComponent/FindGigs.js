import { useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "./Helpers/Title";
import SingleGig from "../../Gigs/SingleGig";
import { useDispatch, useSelector } from "react-redux";
import { GetAllGigs } from "../../../../redux/actions/ClientActions";
import Spinner from "./../../../Guest/AuthPages/Spinner";
import EmptyState from "../PagesComponent/Helpers/EmptyState";
import { GetReviews } from "../../../../redux/actions/ClientActions";
import { toast } from "react-toastify";

const FindFreelancers = () => {
  const dispatch = useDispatch();
  const { gigs, loading } = useSelector((state) => state?.clientData);
  const reviews = useSelector((state) => state?.clientData?.reviews);

  useEffect(() => {
    dispatch(GetAllGigs());
    dispatch(GetReviews(toast));
  }, [dispatch]);

 
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="h-full pb-16 overflow-y-auto ">
          <div className="container  mx-auto grid ">
            <div className=" mx-8">
              <Title title=" Gigs You Might Like" />
            </div>
            <div className="container overflow-hidden rounded-lg shadow-xs">
              <div className="sm:grid grid-cols-2 gap-2 grid-cols-2 gap-4 ">
                {gigs && gigs.length > 0 ? (
                  <>
                    {gigs.map &&
                      gigs?.map((gig, index) => (
                        <div key={index}>
                          <Link
                            to="/client/gigs/gig-details"
                            state={{ gig, reviews }}
                          >
                            <SingleGig gig={gig} reviews={reviews} />
                          </Link>
                        </div>
                      ))}
                  </>
                ) : (
                  <div className="flex justify-center w-full">
                    <EmptyState message="No Gigs To Show You" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindFreelancers;
