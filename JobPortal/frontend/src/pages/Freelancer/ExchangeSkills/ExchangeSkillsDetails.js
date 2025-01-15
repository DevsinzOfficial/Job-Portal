import { Link, useLocation } from "react-router-dom";
import RatingStars from "../DashBoard/PagesComponent/Helpers/RatingStars";

const ExchangeSkillsDetails = () => {
  const { singleExchangeSkill } = useLocation().state;
  const reviews = useLocation()?.state?.reviews;
  const {
    requiredSkills,
    offeredSkills,
    price,
    duration,
    freelancer,
    discription,
    title,
    tags,
    createdAt,
  } = singleExchangeSkill;

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

  const filteredReviews = reviews?.filter(
    (review) => review?.freelancer?._id === freelancer?._id
  );

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
      <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-8 ">
        <div className="item w-full h-auto flex-grow px-6  ">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
            Exchange Skill Details
          </h1>
        </div>

        <div className="item w-full lg:w-1/2  h-auto flex-grow border border-3 lg:rounded-l-md border-r-1  border-gray-300 py-2">
          <div className="item w-full h-auto flex-grow px-6 space-y-2 ">
            <div className="item w-full h-auto flex-grow ">
              <h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-4">
                {title}
              </h2>
            </div>

            <div className="item w-full h-auto flex-grow text-sm text-gray-500 ">
              <p> Posted On {dateConverter(createdAt)}</p>
            </div>
            <div className="item w-full h-auto flex-grow">
              <div className="flex items-center text-sm font-semibold text-sky-500 space-x-1">
                <svg
                  className="w-5 h-5 -ml-1"
                  fill="currentColor"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className=" text-sm text-gray-500">
                  {" "}
                  {freelancer?.address?.country}
                </span>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200 mt-4"></div>

          <div className="item w-full h-auto flex-grow px-6 ">
            <p className="font-medium text-gray-700 my-2">{discription}</p>
          </div>
          <div className="border-b border-gray-200 mt-3"></div>

          <div className="item w-full h-auto flex-grow px-6 my-4">
            <div className="flex flex-row flex-wrap space-x-2">
              <div>
                <div className="flex items-center justify-around px-2 py-2 text-sm font-thin text-gray-700 bg-gray-300  rounded-md ">
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
                    Exchange Duration: {duration} days
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200 "></div>
          <div className="item w-full h-auto flex-grow px-6 my-4">
            <div className="flex flex-row flex-wrap space-x-2">
              <div>
                <div className="flex items-center justify-around px-2 py-2 ml-2 sm:ml-0 mt-2 sm:mt-0 text-sm font-thin text-gray-600 bg-gray-300  rounded-md ">
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
                  <span className="-mt-1">
                    Beginner Price: ${price.beginnerLevel}
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-around px-2 py-2 ml-2 sm:ml-0 mt-2 sm:mt-0 text-sm font-thin text-gray-600 bg-gray-300  rounded-md ">
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
                  <span className="-mt-1">
                    Intermediate Price: ${price.intermediate}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-around px-2 py-2 ml-2 sm:ml-0 mt-2 sm:mt-0 text-sm font-thin text-gray-600 bg-gray-300  rounded-md ">
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
                  <span className="-mt-1">Expert Price: ${price.expert}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 "></div>

          <div className="item w-full h-auto flex-grow px-6 mt-2 mb-3 space-y-2">
            <div className="item w-full h-auto flex-grow font-semibold mb-3">
              <h3>Skills and Expertise</h3>
            </div>
            <div className="item w-full h-auto flex-grow  ">
              <div className="flex flex-row flex-wrap space-x-2 w-full ">
                {tags?.map((tag, index) => (
                  <div
                    key={index}
                    className=" px-3 py-1 text-sm font-thin text-white bg-teal-600  rounded-md "
                  >
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200 "></div>

          <div className="item w-full h-auto flex-grow px-6 mt-2 mb-3 space-y-2">
            <div className="item w-full h-auto flex-grow font-semibold mb-3">
              <h3>Offered and Required Skill</h3>
            </div>
            <div className="item w-full h-auto flex-grow  ">
              <div className="flex flex-row flex-wrap space-x-2 w-full ">
                <div className=" px-3 py-1 text-sm font-thin text-white bg-cyan-600  rounded-md ">
                  <span>Required Skill: {requiredSkills}</span>
                </div>
                <div className="px-3 py-1 text-sm font-thin text-white bg-cyan-600  rounded-md">
                  <span>Offered Skill: {offeredSkills}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item w-full lg:w-1/4 h-auto border-3 border lg:rounded-r-md border-l-1 lg:border-l-0 border-gray-300 ">
          <div className="item w-full h-auto flex-grow px-6 my-4 ">
            <Link
              to="/freelancer/send-request-form"
              state={{ singleExchangeSkill }}
            >
              <button className="w-full h-12 px-12 text-sm font-medium text-white transition-colors duration-150 bg-teal-600 border border-transparent rounded-md active:bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline-teal">
                <span>Submit a Request</span>
              </button>
            </Link>
          </div>

          <div className="border-b border-gray-200 "></div>
          <div className="item w-full h-auto flex-grow px-6 my-4 space-y-2 ">
            <div className="item w-full h-auto flex-grow  ">
              <h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-4">
                About the Freelancer
              </h2>
            </div>
            <div className="item w-full h-auto flex-grow  ">
              <div className="flex items-center  px-2 py-1 text-sm font-semibold text-sky-500 space-x-1">
                {freelancer?.verified ? (
                  <>
                    <svg
                      className="w-4 h-4 -ml-3 "
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
                    <span className="text-gray-700">Freelancer Verified</span>
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="black"
                      viewBox="0 0 20 20"
                      strokeWidth="1.5"
                      stroke="white"
                      className="w-4 h-4 -ml-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLineJoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700 ml-1">
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
              <h3>{freelancer.address?.country}</h3>
            </div>

            <div className="item w-full h-auto flex-grow font-semibold text-gray-700 ">
              <h3>Member since {dateConverter(freelancer.createdAt)}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeSkillsDetails;
