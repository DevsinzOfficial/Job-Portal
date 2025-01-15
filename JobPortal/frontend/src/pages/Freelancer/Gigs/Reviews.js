
import RatingStars from "../DashBoard/PagesComponent/Helpers/RatingStars";
import EmptyState from "../DashBoard/PagesComponent/Helpers/EmptyState";

const Reviews = ({ reviews }) => {
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

  const average = calculateAverage(reviews);

  /* const total = reviews?.reduce((acc, rating) => acc + rating?.Ratings, 0);
  const average = total / reviews?.length; */

  return (
    <div className="mx-auto py-8 px-4 w-full max-w-7xl bg-white">
      <div className="mx-auto max-w-4xl flex flex-col">
        <h3 className="text-xl font-medium tracking-tight text-gray-900">
          Clients Reviews
        </h3>
        {reviews && reviews?.length > 0 ? (
          <div>
            <div className="mt-4 flex items-center ">
              <p className="text-3xl font-medium">
                {average ? average : 0}
                <span className="sr-only"> Average review score </span>
              </p>

              <div className="ml-4">
                <div className="-ml-1 flex">
                  <RatingStars
                    rating={average ? average : 0}
                    color="text-yellow-500"
                  />
                </div>

                <p className="mt-0.5 text-xs text-gray-500">
                  Based on {reviews?.length} reviews
                </p>
              </div>
            </div>
            <div className="border-b-2 border-gray-100 mt-4"></div>

            {/* :REVIEWS */}

            <div className="mt-5">
              {reviews?.map((review, index) => (
                <article
                  key={review?._id}
                  className={`py-5 flex items-start ${
                    index !== 0 && "border-t-2 border-gray-100"
                  }`}
                >
                  {/* ::Avatar */}
                  <span
                    className="flex-shrink-0 inline-block border-2 border-gray-50 rounded-full overflow-hidden"
                    aria-label="avatar"
                  >
                    <img
                      src={review?.ClientId?.photo}
                      alt="profile"
                      className="w-12 h-12"
                    />
                  </span>
                  {/* ::Review Content */}
                  <div className="ml-3">
                    {/* :::author */}
                    <p className="text-sm text-gray-700 font-semibold">
                      {review?.ClientId?.firstName} {review?.ClientId?.lastName}
                    </p>
                    {/* :::date */}
                    <p className="mt-1 text-xs text-gray-400 font-medium">
                      {dateConverter(review?.createdAt)}
                    </p>
                    {/* :::rating */}
                    <div className="my-4">
                      <RatingStars
                        rating={review?.Ratings ? review?.Ratings : 0}
                        /* rating={average ? average : 0} */
                        color="text-yellow-500"
                      />
                    </div>

                    {/* :::text */}
                    <p className="text-sm text-gray-500 font-medium">
                      {review?.Review}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex justify-center w-full mx-12 my-4">
            <EmptyState message="No Reviews Associated with this Profile" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
