
import { Link } from "react-router-dom";

const ClientSideMenu = () => {
  return (
    <div>
      <nav
        className="text-sm font-medium text-gray-600 hover:text-gray-800 mt-1 ml-2 space-y-3"
        aria-label="Main Navigation"
      >
        <Link
          className="flex items-center px-4 py-3 transition cursor-pointer group  hover:text-gray-900"
          to="/client/client-dashboard"
        >
          <svg
            className="shrink-0 w-5 h-5 mr-2 text-teal-600 transition group-hover:text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <span>Home</span>
        </Link>
        <Link
          className="flex items-center px-4 py-3 transition cursor-pointer group  hover:text-gray-900"
          to="find-gigs"
        >
          <svg
            className="shrink-0 w-5 h-5 mr-2 text-teal-600 transition group-hover:text-gray-900"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" />
            <path
              fillRule="evenodd"
              d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
              clipRule="evenodd"
            />
          </svg>
          <span>Find Gigs</span>
        </Link>

        <Link
          className="flex items-center px-4 py-3 transition cursor-pointer group  hover:text-gray-900"
          to="my-posted-projects"
        >
          <svg
            className="shrink-0 w-5 h-5 mr-2 text-teal-600 transition group-hover:text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>Posted Projects</span>
        </Link>

        <Link
          className="flex items-center px-4 py-3 transition cursor-pointer group  hover:text-gray-900"
          to="project-proposals"
        >
          <svg
            className="shrink-0 w-5 h-5 mr-2 text-teal-600 transition group-hover:text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            />
          </svg>
          <span>Project Proposals</span>
        </Link>
        <Link
          className="flex items-center px-4 py-3 transition cursor-pointer group  hover:text-gray-900"
          to="my-reports"
        >
          <svg
            className="shrink-0 w-5 h-5 mr-2 text-teal-600 transition group-hover:text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
              clipRule="evenodd"
            />
          </svg>
          <span>My Reports</span>
        </Link>
      </nav>
    </div>
  );
};

export default ClientSideMenu;
