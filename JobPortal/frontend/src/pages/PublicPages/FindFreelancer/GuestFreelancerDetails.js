import { Link, useLocation } from "react-router-dom";
import Reviews from "../Helpers/Reviews";
import RatingStars from "../Helpers/RatingStars";
import profile from "../../../img/profile.jpg";

const GuestFreelancerDetails = () => {
  const { singleFreelancer } = useLocation().state;
  const reviews = useLocation()?.state?.reviews;

  const {
    firstName,
    lastName,
    verified,
    gender,
    languages,
    photo,
    address,
    Education,
    Description,
    Title,
    Category,
    Skills,
    createdAt,
    _id,
  } = singleFreelancer;

  const filteredReviews = reviews?.filter(
    (review) => review?.freelancer?._id === _id
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

  return (
    <div>
      <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-8 mt-36 lg:mt-24 ">
        <div className="item w-full  lg:w-1/3 h-auto border-3 border lg:rounded-l-md border-r-1 lg:border-r-0 border-gray-300 ">
          <div className="flex flex-col flex-nowrap justify-center items-center space-y-2 my-4 ">
            <div className="flex flex-row space-x-6 ">
              <div className="item w-full h-auto flex-grow ml-16 lg:ml-10">
                <div className="relative w-32 rounded-full">
                  <img
                    className="rounded-full border border-gray-100 shadow-sm"
                    src={photo ? photo : profile}
                    alt="Avatar"
                  />
                  <div className="absolute top-0 right-0 h-6 w-6 my-1 border-4 border-white rounded-full z-2 ">
                    {verified ? (
                      <svg
                        className="w-4 h-4 -ml-2"
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
                    ) : (
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
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="item ">
              <h2 className="text-2xl font-semibold text-gray-900 ">
                {firstName} {lastName}
              </h2>
            </div>

            <div className="item ">
              <h2 className="font-semibold text-gray-900 ">{Category}</h2>
            </div>
            <div className="item ">
              <h2 className=" font-semibold text-gray-900">
                {address?.country}
              </h2>
            </div>
            <div className="item ">
              <h2 className="font-semibold text-gray-900 ">{gender}</h2>
            </div>
            <div className="item">
              <div className="flex flex-row flex-wrap ">
                <RatingStars
                  rating={average ? average : 0}
                  color="text-yellow-500"
                />
                <p className="  text-lg text-gray-400 ">
                  {" "}
                  ({reviews ? filteredReviews?.length : 0})
                </p>
              </div>
            </div>
          </div>

          <div className="item w-full h-auto flex-grow px-6 my-4 ">
            <Link to="/login-type">
              <button className="w-full h-12 px-12 text-sm font-medium text-white transition-colors duration-150 bg-teal-600 border border-transparent rounded-md active:bg-teal-600 hover:bg-teal-700 focus:outline-none focus:shadow-outline-teal">
                <span>Contact Freelancer</span>
              </button>
            </Link>
          </div>

          <div className="border-b border-gray-200 mt-4"></div>
          <div className="flex flex-col flex-nowrap justify-center space-y-4 my-4 mx-6 ">
            <div className="item ">
              <h2 className=" text-xl font-medium text-gray-900 mb-2 ">
                Education
              </h2>
              {Education?.map(({ degree, year }, index) => (
                <div
                  className="flex flex-col flex-nowrap justify-center space-y-1 "
                  key={index}
                >
                  <div className="item">
                    <p>
                      <span className=" font-medium text-gray-900 ">
                        {degree}: {}
                      </span>
                      <span className="font-regular text-gray-600">{year}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="item ">
              <h2 className=" text-xl font-medium text-gray-900 mb-2 ">
                Languages
              </h2>
              <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
                {languages?.map(({ language, proficiency }, index) => (
                  <div
                    className="flex flex-col flex-nowrap justify-center space-y-1 "
                    key={index}
                  >
                    <div className="item">
                      <p>
                        <span className=" font-medium text-gray-900 ">
                          {language}: {}
                        </span>
                        <span className="font-regular text-gray-600">
                          {proficiency}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="item ">
              <h2 className=" text-xl font-medium text-gray-900 mb-2 ">
                Address
              </h2>
              <div className="flex flex-col flex-nowrap justify-center space-y-1 ">
                <div className="item ">
                  <p className=" font-regular text-gray-600 ">
                    {address?.streetAddress}
                  </p>
                </div>
                <div className="item ">
                  <p className=" font-regular text-gray-600 ">
                    {address?.city}, {address?.province}, {address?.zipCode}
                  </p>
                </div>
              </div>
            </div>
            <div className="item ">
              <h2 className=" text-xl font-medium text-gray-900 mb-2 ">
                Member Since
              </h2>
              <div className="flex flex-col flex-nowrap justify-center space-y-1 ">
                <div className="item ">
                  <p className=" font-regular text-gray-600 ">
                    Member since {dateConverter(createdAt)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item w-full lg:w-1/2  h-auto flex-grow border border-3 lg:rounded-r-md border-l-1  border-gray-300 py-2">
          <div className="item px-6 my-4 ">
            <h2 className=" text-xl font-medium text-gray-900 my-4 ">
              {Title}
            </h2>
            <div className="flex flex-col flex-nowrap justify-center space-y-1 ">
              <div className="item ">
                <p className=" font-regular text-gray-600 ">{Description}</p>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 mt-3"></div>

          <div className="item px-6 my-4 ">
            <h2 className=" text-xl font-medium text-gray-900 my-4 ">
              Skills and Expertise
            </h2>
            <div className="flex flex-row flex-wrap space-x-2 w-full ">
              {Skills?.map(({ skill }, index) => (
                <div
                  key={index}
                  className="flex flex-col flex-nowrap justify-center space-y-1 "
                >
                  <div className="item ">
                    <div className="item w-full h-auto flex-grow  ">
                      <div className="flex flex-row flex-wrap space-x-2 w-full ">
                        <div className=" px-3 py-1 text-sm font-thin text-white bg-teal-600  rounded-md ">
                          <span>{skill}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b border-gray-200 "></div>

          <div className="border-b border-gray-200"></div>

          <div className="item w-full h-auto px-6 -mb-2 ">
            <div className="flex flex-nowrap -mx-4 ">
              <div className="item ">
                <Reviews reviews={filteredReviews} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestFreelancerDetails;
