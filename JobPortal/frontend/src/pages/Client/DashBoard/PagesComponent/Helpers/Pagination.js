const Pagination = ({
  freelancersPerPage,
  totalFreelancers,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFreelancers / freelancersPerPage); i++) {
    pageNumbers.push(i);
  }

  const startIndex = (currentPage - 1) * freelancersPerPage + 1;
  const endIndex = Math.min(currentPage * freelancersPerPage, totalFreelancers);
  return (
    <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border boder-gray-500  bg-gray-100 sm:grid-cols-9 ">
      <span className="flex items-center col-span-3">
        {" "}
        Showing {startIndex}-{endIndex} of {totalFreelancers}
      </span>
      <span className="col-span-2"></span>

      <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
        <nav aria-label="Table navigation">
          <ul className="inline-flex items-center">
            <li>
              {currentPage === 1 ? (
                <button
                  className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-green cursor-pointer"
                  aria-label="Previous"
                  disabled
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              ) : (
                <button
                  className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-green"
                  aria-label="Previous"
                  onClick={() => paginate(currentPage - 1)}
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              )}
            </li>
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  className={`px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-green ${
                    number === currentPage ? "bg-teal-600 text-white" : ""
                  }`}
                  onClick={() => paginate(number)}
                >
                  {number}
                </button>
              </li>
            ))}

            <li>
              <button
                className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-green cursor-pointer"
                aria-label="Next"
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage ===
                  Math.ceil(totalFreelancers / freelancersPerPage)
                }
              >
                <svg
                  className="w-4 h-4 fill-current"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </span>
    </div>
  );
};

export default Pagination;
