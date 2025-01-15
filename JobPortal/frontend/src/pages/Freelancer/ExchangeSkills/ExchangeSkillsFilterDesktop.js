import { useState, useCallback, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import FilterForm from "./FilterForm";
import SingleExchangeSkill from "./SingleExchangeSkill";
import Pagination from "../DashBoard/PagesComponent/Helpers/Pagination";
import EmptyState from "../../Freelancer/DashBoard/PagesComponent/Helpers/EmptyState";

const ExchangeSkillsFilterDesktop = () => {
  const location = useLocation();
  const exchangeSkills = location?.state?.exchangeSkills;
  const reviews = location?.state?.reviews;
  const searchQuery = location?.state?.searchQuery;
  const [search, setSearch] = useState(searchQuery);

  const [filterExchangeSkill, setFilterExchangeSkill] = useState([]);
  const [isSortingMenuOpen, setIsSortingMenuOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const sortingMenuRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        isSortingMenuOpen &&
        sortingMenuRef.current &&
        !sortingMenuRef.current.contains(e.target)
      ) {
        setIsSortingMenuOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isSortingMenuOpen]);

  const handleSortingClick = () => {
    setIsSortingMenuOpen(!isSortingMenuOpen);
  };

  const handleFilterData = useCallback(
    (selectedFilters) => {
      setFilterExchangeSkill(selectedFilters);
    },
    [setFilterExchangeSkill]
  );

  const handleFilterClick = () => {
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  const handleResetFilterClick = () => {
    setFilterExchangeSkill(exchangeSkills);
  };

  const handleResetSearchQuery = () => {
    setSearch(null);
  };

  useEffect(() => {
    if (setSearch === null || setSearch) {
      setSearch(searchQuery);
    }
  }, [searchQuery]);

  const [currentPage, setCurrentPage] = useState(1);
  const [freelancersPerPage] = useState(5);

  // Get current freelancers
  const indexOfLastFreelancer = currentPage * freelancersPerPage;
  const indexOfFirstFreelancer = indexOfLastFreelancer - freelancersPerPage;

  function hasExchangeSkills(
    exchangeSkillsList,
    indexOfFirstFreelancer,
    indexOfLastFreelancer
  ) {
    const currentExchangeSkills = exchangeSkillsList?.slice(
      indexOfFirstFreelancer,
      indexOfLastFreelancer
    );
    if (currentExchangeSkills.length > 0) {
      return currentExchangeSkills;
    } else {
      return [];
    }
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-52 md:mb-14 lg:mb-14">
        <div className="flex items-baseline justify-between border-b border-gray-200 pt-10 pb-6 mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Posted Exchange Skills Request
          </h1>
          <div className="flex items-center">
            <div
              className="relative inline-block text-left "
              ref={sortingMenuRef}
            >
              <div>
                <button
                  type="button"
                  className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                  onClick={handleSortingClick}
                >
                  Reset
                  <svg
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {isSortingMenuOpen && (
                <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <button
                      className="text-gray-500 text-left w-full block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-800"
                      onClick={handleResetFilterClick}
                    >
                      Filters
                    </button>

                    <button
                      className="text-gray-500 text-left w-full block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-800"
                      onClick={handleResetSearchQuery}
                    >
                      Search Query
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={handleFilterClick}
            >
              <span className="sr-only">Filters</span>

              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isFilterMenuOpen && (
              <div>
                <div className="relative z-40 lg:hidden">
                  <div className="fixed inset-0 bg-black bg-opacity-25"></div>

                  <div className="fixed inset-0 z-40 flex">
                    <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
                        <h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-2 ">
                          Filter By
                        </h2>

                        <button
                          type="button"
                          className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                          onClick={handleFilterClick}
                        >
                          <span className="sr-only">Close menu</span>

                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div>
                        <FilterForm
                          onFilterDataChange={handleFilterData}
                          exchangeSkills={exchangeSkills}
                          searchQuery={search}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <section className="pt-6 pb-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-4">
            <div className="hidden lg:block">
              <FilterForm
                onFilterDataChange={handleFilterData}
                exchangeSkills={exchangeSkills}
                searchQuery={search}
              />
            </div>
            {filterExchangeSkill && filterExchangeSkill.length > 0 ? (
              <div className="lg:col-span-3 ">
                <div className="rounded-md border-3 border border-gray-300 lg:h-full mt-2">
                  <div className="mx-4 mt-4">
                    {hasExchangeSkills(
                      filterExchangeSkill,
                      indexOfFirstFreelancer,
                      indexOfLastFreelancer
                    )?.map &&
                      hasExchangeSkills(
                        filterExchangeSkill,
                        indexOfFirstFreelancer,
                        indexOfLastFreelancer
                      )?.map((exchangeskill, index) => (
                        <Link
                          key={index}
                          to="exchange-skills-details"
                          state={{
                            singleExchangeSkill: exchangeskill,
                            reviews,
                          }}
                        >
                          <SingleExchangeSkill
                            data={exchangeskill}
                            reviews={reviews}
                          />
                        </Link>
                      ))}
                    <div>
                      <Pagination
                        freelancersPerPage={freelancersPerPage}
                        totalFreelancers={filterExchangeSkill?.length}
                        paginate={paginate}
                        currentPage={currentPage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="lg:col-span-3 ">
                <div className="rounded-md border-3 border border-gray-300 lg:h-full mt-2">
                  <div className="mx-4 mt-4">
                    <div className="flex justify-center w-full">
                      <EmptyState message="No Exchange Skills To Show " />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExchangeSkillsFilterDesktop;
