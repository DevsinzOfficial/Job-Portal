
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="relative py-16 px-4 w-full min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">
        <div className="text-center space-y-5">
          <p className="text-6xl sm:text-7xl text-teal-500 font-bold tracking-wide">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-700 font-semibold capitalize">
            This page does not exist
          </h1>
          <p className="text-sm text-gray-500 font-medium">
            Sorry! We could not find the page you are looking for. Please check
            URL in address bar and try again.
          </p>
        </div>

        {/* :OPTION LINKS */}

        <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Link
            to="/client"
            className="px-5 py-2.5 rounded-md border border-transparent bg-teal-600 text-center text-base text-white font-medium hover:bg-teal-700"
          >
            Get back to Homepage
          </Link>
          <Link
            to="/client/help-support"
            className="px-5 py-2.5 rounded-md border-2 border-teal-400 bg-transparent text-center text-base text-teal-400 font-medium hover:border-teal-500 hover:text-teal-500"
          >
            Contact Support
          </Link>
        </div>

        {/* :ILLUSTRATION */}
        <img
          src="https://fancytailwind.com/static/under_construction-503cab99df4458de6d2801e7ee4fa400.svg"
          alt=""
          className="mt-10 max-h-72"
        />
      </div>
    </div>
  );
};

export default PageNotFound;
