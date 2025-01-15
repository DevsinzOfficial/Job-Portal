import { Link } from "react-router-dom";
import profile from "../../../img/profile.jpg";

const SingleBlogCard = ({ blog, reviews }) => {
  const { Category, title, freelancer, story, photo, createdAt } = blog;

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

  const limitText = (text, char) => {
    return text && text.split(" ").slice(0, char).join(" ");
  };
  return (
    <div>
      <div className="p-4">
        <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
            src={photo}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {Category}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
              {limitText(title, 5)}..
            </h1>
            <p className="leading-relaxed mb-3">{limitText(story, 8)}..</p>
            <div className="flex items-center my-3">
              <Link to="#" className="block relative">
                <img
                  alt="profile"
                  src={freelancer[0].photo ? freelancer[0].photo : profile}
                  className="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </Link>
              <div className="flex flex-col justify-between ml-4 text-sm">
                <p className="text-gray-800 dark:text-white">
                  {freelancer[0].firstName} {freelancer[0].lastName}
                </p>
                <p className="text-gray-400 dark:text-gray-300">
                  {dateConverter(createdAt)}
                </p>
              </div>
            </div>
            <div className="flex items-center flex-wrap ">
              <Link
                to="/freelancer/blogs/blog-details"
                state={{ blog, reviews }}
              >
                <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;
