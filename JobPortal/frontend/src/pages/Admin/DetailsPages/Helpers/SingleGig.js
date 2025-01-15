
import RatingStars from "./RatingStars";
const SingleGig = () => {
  return (
    <div>
      <div className="container px-5 py-24 mx-auto -mt-16 ">
        <div className="flex flex-wrap -m-4  ">
          <div className="p-2 sm:w-1/2">
            <div className=" rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full  scale-100 transition-all duration-400 hover:scale-110"
                src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/240890002/original/ae2b1ba885e8902ae71a128e29d3ba618ecd44d3.png"
                alt="gig"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Web Development
                </h2>
                <p className="title-font text-md font-medium text-gray-600 mb-3">
                  I will develop react js redux firebase web app
                </p>
                <div className="flex items-center my-3 block relative">
                  <div className="block relative">
                    <img
                      alt="profile"
                      src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="text-gray-800 dark:text-white">
                      Jean Jacques
                    </p>
                    <div className="flex flex-row flex-wrap ">
                      <RatingStars rating={4} color="text-yellow-500" />
                      <p className=" -mt-1 text-lg text-gray-400 ">(20)</p>
                    </div>
                  </div>
                </div>
                <div className="border-b"></div>
                <div className="text-right text-sm mt-1 -mb-4 text-gray-500">
                  STARTING AT{" "}
                  <span className=" text-lg text-gray-800">$30</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 sm:w-1/2">
            <div className=" rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full  scale-100 transition-all duration-400 hover:scale-110"
                src="https://fiverr-res.cloudinary.com/t_gig_cards_web_x2,q_auto,f_auto/gigs/240890002/original/ae2b1ba885e8902ae71a128e29d3ba618ecd44d3.png"
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  Web Development
                </h2>
                <p className="title-font text-md font-medium text-gray-600 mb-3">
                  I will develop react js redux firebase web app
                </p>
                <div className="flex items-center my-3 ">
                  <div className="block relative">
                    <img
                      alt="profile"
                      src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="text-gray-800 dark:text-white">
                      Jean Jacques
                    </p>
                    <div className="flex flex-row flex-wrap ">
                      <RatingStars rating={4} color="text-yellow-500" />
                      <p className=" -mt-1 text-lg text-gray-400 ">(20)</p>
                    </div>
                  </div>
                </div>
                <div className="border-b"></div>
                <div className="text-right text-sm mt-1 -mb-4 text-gray-500">
                  STARTING AT{" "}
                  <span className=" text-lg text-gray-800">$30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGig;
