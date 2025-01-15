import { useState } from "react";
import Reviews from "./Reviews";
import { useLocation } from "react-router-dom";
import RatingStars from "../DashBoard/PagesComponent/Helpers/RatingStars";
import GigPricingTable from "./GigPricingTable";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteGig } from "../../../redux/actions/FreelancerActions";
import Spinner from "../DashBoard/PagesComponent/Helpers/Spinner";
import Modal from "../DashBoard/PagesComponent/Helpers/Modal";
import profile from "../../../img/profile.jpg";

const GigDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gig = useLocation()?.state?.gig;
  const reviews = useLocation()?.state?.reviews;
  const { loading } = useSelector((state) => state?.freelancerData);

  const { description, title, freelancer, Category, skills, attachments, _id } =
    gig;

  const calculateAverage = (reviews) => {
    let average = 0;

    if (reviews && reviews?.length > 0) {
      const total = reviews?.reduce((acc, rating) => {
        if (rating && rating.Ratings) {
          return acc + rating.Ratings;
        }
        return acc;
      }, 0);
      average = total / reviews.length;
    }

    return average;
  };

  const average = calculateAverage(reviews);

  const [deleteModal, setDeleteModal] = useState(false);

  const handleDeleteModal = () => {
    setDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setDeleteModal(false);
  };

  const delGig = (gigId) => {
    dispatch(DeleteGig(gigId, navigate, toast));
    setDeleteModal(false);
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-row flex-wrap w-auto mx-6 lg:mx-20 my-8 ">
          <div className="item w-full h-auto flex-grow  px-6 ">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
              Gig Details
            </h1>
          </div>

          <div className="  item w-full lg:w-1/2  h-auto flex-grow  py-2">
            <div className="item w-full h-auto flex-grow px-6 space-y-2 ">
              <div className="item w-full h-auto flex-grow ">
                <h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-4">
                  {title}
                </h2>
              </div>
              <div className="flex items-center my-3 block relative">
                <div className="block relative">
                  <img
                    alt="profile"
                    src={freelancer[0].photo ? freelancer[0].photo : profile}
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </div>
                <div className="flex flex-col justify-between ml-4 text-sm">
                  <div>
                    <p className="text-black font-medium ">
                      {`${freelancer[0].firstName} ${freelancer[0].lastName}`}
                    </p>
                  </div>
                  <div className="flex flex-row flex-wrap ">
                    <RatingStars
                      rating={average ? average : 0}
                      color="text-yellow-500"
                    />
                    <p className="  text-lg text-gray-400 ">
                      {" "}
                      ({reviews ? reviews?.length : 0})
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-200 mt-4"></div>

            <div className="item w-full h-auto flex-grow px-6 mt-4 ">
              <img
                className=" w-full  scale-100 transition-all duration-400 hover:scale-110"
                src={attachments}
                alt="blog"
              />
            </div>

            <div className="item w-full h-auto flex-grow px-6 my-4">
              <div className="item w-full h-auto flex-grow ">
                <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4">
                  About This Gig
                </h2>
              </div>
              <div className="item w-full h-auto flex-grow ">
                <p className="text-sm font-medium tracking-tight text-gray-600 mb-4">
                  {description}
                </p>
              </div>
            </div>

            <div className="border-b border-gray-200 "></div>
            <div className="item w-full h-auto flex-grow px-6 mt-2 mb-3 space-y-2">
              <div className="item w-full h-auto flex-grow font-semibold mb-3">
                <h3 className="text-xl font-medium tracking-tight text-gray-900">
                  Category
                </h3>
              </div>
              <div className="item w-full h-auto flex-grow  ">
                <div className="flex flex-row flex-wrap space-x-2 w-full ">
                  <div className=" px-3 py-1 text-sm font-thin text-white bg-teal-600  rounded-md ">
                    <span>{Category}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="item w-full h-auto flex-grow px-6 mt-2 mb-3 space-y-2">
              <div className="item w-full h-auto flex-grow font-semibold mb-3">
                <h3 className="text-xl font-medium tracking-tight text-gray-900">
                  Skills and Expertise
                </h3>
              </div>
              <div className="item w-full h-auto flex-grow  ">
                <div className="flex flex-row flex-wrap space-x-2 w-full ">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className=" px-3 py-1 text-sm font-thin text-white bg-teal-600  rounded-md "
                    >
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="item w-full h-auto flex-grow px-6 mt-2 mb-3 space-y-2"></div>
            <Reviews reviews={reviews} />
          </div>

          {/* if logged in then side screen: */}
          <div className="item w-full lg:w-1/3 h-1/2 border-2 border lg:rounded-md  border-gray-300 lg:ml-4 mt-4 sm:mt-0">
            <GigPricingTable
              basic={gig.BASIC}
              standard={gig.STANDARD}
              premium={gig.PREMIUM}
            />

            <div className="item mx-6 my-4 ">
              <Link to="/freelancer/gigs/edit" state={{ gig }}>
                <button className="w-full h-12 px-12 text-sm font-medium text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-md active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-teal">
                  <span>Edit</span>
                </button>
              </Link>
            </div>
            <div className="item mx-6 my-4 ">
              <button
                onClick={handleDeleteModal}
                className="w-full h-12 px-12 text-sm font-medium text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-md active:bg-red-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-teal"
              >
                <span>Delete</span>
              </button>

              {deleteModal && (
                <Modal
                  closeDeleteModal={closeDeleteModal}
                  del={() => delGig(_id)}
                  comment={"Gig"}
                  message={"Gig"}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GigDetails;
