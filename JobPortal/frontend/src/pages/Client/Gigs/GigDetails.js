
import Reviews from "../DashBoard/PagesComponent/Helpers/Reviews";
import { Link, useLocation } from "react-router-dom";
import RatingStars from "../DashBoard/PagesComponent/Helpers/RatingStars";
import GigPricingTable from "./GigPricingTable";
import profile from "../../../img/profile.jpg";

const GigDetails = () => {
  const gigDetail = useLocation()?.state?.gig;
  const reviews = useLocation()?.state?.reviews;
 

  const { description, title, freelancer, Category, skills, attachments } =
    gigDetail;

  const filteredReviews = reviews?.filter(
    (review) => review?.freelancer?._id === freelancer[0]?._id
  );

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

  const average = calculateAverage(filteredReviews);
 

  return (
    <div>
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
                <Link
                  to={"/client/freelancers/freelancer-details"}
                  state={{ singleFreelancer: freelancer[0] }}
                >
                  <p className="text-black font-medium hover:underline cursor-pointer">
                    {`${freelancer[0].firstName} ${freelancer[0].lastName}`}
                  </p>
                </Link>
                <div className="flex flex-row flex-wrap ">
                  <RatingStars
                    rating={average ? average : 0}
                    color="text-yellow-500"
                  />
                  <p className="  text-lg text-gray-400 ">
                    {" "}
                    ({filteredReviews ? filteredReviews?.length : 0})
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

          <div className="item w-full h-auto flex-grow px-2 mt-2  mb-3 space-y-2">
            <div className="item w-full h-auto border-3 border rounded-md border-gray-300 ">
              <div className="item w-full h-auto flex-grow px-4 mt-2 mb-3 space-y-2  ">
                <div className="item w-full h-auto flex-grow  ">
                  <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4">
                    About the Freelancer
                  </h2>
                </div>
                <div className="item w-full h-auto flex-grow  ">
                  <div className="flex items-center  px-2 py-1 text-sm font-semibold text-sky-500 space-x-1">
                    {freelancer[0]?.verified ? (
                      <>
                        <svg
                          className="w-4 h-4 -ml-3"
                          fill="#0ea5e9"
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Freelancer Verified
                        </span>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="black"
                          viewBox="0 0 20 20"
                          strokeWidth="1.5"
                          stroke="white"
                          className="w-4 h-4 -ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLineJoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-700">
                          Freelancer Not Verified
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div className="item w-full h-auto flex-grow  ">
                  <RatingStars
                    rating={average ? average : 0}
                    color="text-yellow-500"
                  />
                </div>
                <div className="item w-full h-auto flex-grow font-semibold text-gray-700 ">
                  <h3>{freelancer[0]?.address?.country}</h3>
                </div>
                <div className="item w-full h-auto flex-grow font-semibold text-gray-700 ">
                  <h3>
                    Member since {dateConverter(freelancer[0].createdAt)}{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="item w-full h-auto flex-grow px-6 mt-2 mb-3 space-y-2"></div>
          <Reviews reviews={filteredReviews} />
        </div>

        <div className="item w-full lg:w-1/3 h-1/2 border-2 border lg:rounded-md  border-gray-300 lg:ml-4 mt-4 sm:mt-0">
          <GigPricingTable
            basic={gigDetail}
            standard={gigDetail}
            premium={gigDetail}
          />
        </div>
      </div>
    </div>
  );
};

export default GigDetails;
