import RatingStars from "../DashBoard/PagesComponent/Helpers/RatingStars";
import profile from "../../../img/profile.jpg";

const SingleGig = ({ gig, reviews }) => {
  const { Category, title, freelancer, BASIC, attachments } = gig;

  const filteredReviews = reviews?.filter(
    (review) => review?.freelancer?._id === freelancer[0]?._id
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

  const limitText = (text) => {
    return text && text.split(" ").slice(0, 5).join(" ");
  };

  return (
    <div>
      <div className="p-2 mx-6 my-4">
        <div className=" h-auto w-auto rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full  scale-100 transition-all duration-400 hover:scale-110"
            src={attachments}
            alt="gig"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {Category}
            </h2>
            <p className="title-font text-md font-medium text-gray-600 mb-3">
              {limitText(title)}..
            </p>
            <div className="flex items-center my-3 block relative">
              <div className="block relative">
                <img
                  alt="profile"
                  src={freelancer[0].photo ? freelancer[0].photo : profile}
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </div>
              <div className="flex flex-col justify-between ml-4 text-sm">
                <p className="text-gray-800 dark:text-white">
                  {freelancer
                    ? `${freelancer[0].firstName} ${freelancer[0].lastName}`
                    : "Not mentioned"}
                </p>
                <div className="flex flex-row flex-wrap ">
                  <RatingStars
                    rating={average ? average : 0}
                    color="text-yellow-500"
                  />
                  <p className=" text-lg text-gray-400 ">
                    {" "}
                    ({filteredReviews ? filteredReviews?.length : 0})
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b"></div>
            <div className="text-right text-sm mt-1 -mb-4 text-gray-500">
              STARTING AT{" "}
              <span className=" text-lg text-gray-800">
                {BASIC ? `$${BASIC.Price}` : "$10"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGig;
