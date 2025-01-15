import { useState, useEffect } from "react";

const FilterForm = ({ onFilterDataChange, freelancers, searchQuery }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const [search, setSearch] = useState(searchQuery);

  const handleCheckBoxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFilters([...selectedFilters, value]);
    } else {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
    }
  };

  useEffect(() => {
    const filteredData = freelancers?.filter(
      (freelancer) =>
        selectedFilters.includes(freelancer?.languages[0]?.language) ||
        selectedFilters.includes(freelancer?.languages[1]?.language) ||
        selectedFilters.includes(freelancer?.address?.country) ||
        selectedFilters.includes(freelancer?.Category) ||
        selectedFilters.includes(freelancer?.verified?.toString()) ||
        freelancer?.Title?.toString()?.toLowerCase()?.includes(search) ||
        freelancer?.firstName?.toString()?.toLowerCase()?.includes(search)
    );

    if (filteredData?.length < 1) {
      onFilterDataChange([]);
    } else {
      onFilterDataChange(filteredData);
    }
    setSearch(searchQuery);
  }, [selectedFilters, onFilterDataChange, freelancers, search, searchQuery]);

  const [isLanguagesMenuOpen, setIsLanguagesMenuOpen] = useState(false);
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);
  const [isFreelancerMenuOpen, setIsFreelancerMenuOpen] = useState(false);
  const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);

  const handleLanguagesClick = () => {
    setIsLanguagesMenuOpen(!isLanguagesMenuOpen);
  };

  const handleCountryClick = () => {
    setIsCountryMenuOpen(!isCountryMenuOpen);
  };

  const handleFreelancerClick = () => {
    setIsFreelancerMenuOpen(!isFreelancerMenuOpen);
  };

  const handleCategoriesClick = () => {
    setIsCategoriesMenuOpen(!isCategoriesMenuOpen);
  };

  return (
    <div>
      <form>
        <h2 className="hidden lg:block text-2xl font-medium tracking-tight text-gray-900 mb-2  ">
          Filter By
        </h2>
        <div className="border-b border-gray-200 py-6  px-4 lg:px-0 ">
          <h3 className="-my-3 flow-root">
            <button
              type="button"
              className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
              aria-expanded="false"
              onClick={handleLanguagesClick}
            >
              <span className="font-medium text-gray-900 ">Language</span>
              <span className="ml-6 flex items-center">
                {!isLanguagesMenuOpen && (
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                )}

                {isLanguagesMenuOpen && (
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </button>
          </h3>

          {isLanguagesMenuOpen && (
            <div className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    name="English"
                    value="English"
                    type="checkbox"
                    onChange={handleCheckBoxChange}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label
                    htmlFor="English"
                    className="ml-3 text-sm text-gray-600"
                  >
                    English
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    name="Urdu"
                    value="Urdu"
                    type="checkbox"
                    onChange={handleCheckBoxChange}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label htmlFor="Urdu" className="ml-3 text-sm text-gray-600">
                    Urdu
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 py-6 px-4 lg:px-0 ">
          <h3 className="-my-3 flow-root">
            <button
              type="button"
              className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
              aria-controls="filter-section-1"
              aria-expanded="false"
              onClick={handleCountryClick}
            >
              <span className="font-medium text-gray-900">Country</span>
              <span className="ml-6 flex items-center">
                {!isCountryMenuOpen && (
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                )}

                {isCountryMenuOpen && (
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </button>
          </h3>

          {isCountryMenuOpen && (
            <div className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    name="Pakistan"
                    value="Pakistan"
                    type="checkbox"
                    onChange={handleCheckBoxChange}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label
                    htmlFor="Pakistan"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Pakistan
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    name="India"
                    value="India"
                    type="checkbox"
                    onChange={handleCheckBoxChange}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label htmlFor="India" className="ml-3 text-sm text-gray-600">
                    India
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    name="Bangladesh"
                    value="Bangladesh"
                    type="checkbox"
                    onChange={handleCheckBoxChange}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label
                    htmlFor="Bangladesh"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Bangladesh
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 py-6 px-4 lg:px-0 ">
          <h3 className="-my-3 flow-root">
            <button
              type="button"
              className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
              aria-controls="filter-section-2"
              aria-expanded="false"
              onClick={handleFreelancerClick}
            >
              <span className="font-medium text-gray-900">Freelancer Info</span>
              <span className="ml-6 flex items-center">
                {!isFreelancerMenuOpen && (
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                )}

                {isFreelancerMenuOpen && (
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </button>
          </h3>

          {isFreelancerMenuOpen && (
            <div className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    name="verified"
                    value="true"
                    type="checkbox"
                    onChange={handleCheckBoxChange}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label
                    htmlFor="verified"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Verified Freelancer
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 py-6 px-4 lg:px-0 ">
          <h3 className="-my-3 flow-root">
            <button
              type="button"
              className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
              aria-controls="filter-section-3"
              aria-expanded="false"
              onClick={handleCategoriesClick}
            >
              <span className="font-medium text-gray-900">Categories</span>
              <span className="ml-6 flex items-center">
                {!isCategoriesMenuOpen && (
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                  </svg>
                )}

                {isCategoriesMenuOpen && (
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </button>
          </h3>

          {isCategoriesMenuOpen && (
            <div className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    name="Development and Programming"
                    value="Development and Programming"
                    type="checkbox"
                    onChange={handleCheckBoxChange}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label
                    htmlFor="Development and Programming"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Programming
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    name="Graphic and Design"
                    value="Graphic and Design"
                    type="checkbox"
                    onChange={handleCheckBoxChange}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label
                    htmlFor="Graphic and Design"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Design
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    name="Marketing"
                    value="Marketing"
                    type="checkbox"
                    onChange={handleCheckBoxChange}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label
                    htmlFor="Marketing"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Marketing
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    name="Data Science"
                    value="Data Science"
                    type="checkbox"
                    onChange={handleCheckBoxChange}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label
                    htmlFor="Data Science"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Data Science
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    name="Customer Support"
                    value="Customer Support"
                    type="checkbox"
                    onChange={handleCheckBoxChange}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label
                    htmlFor="Customer Support"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Customer Support
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    name="Writing and Translation"
                    value="Writing and Translation"
                    type="checkbox"
                    onChange={handleCheckBoxChange}
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label
                    htmlFor="Writing and Translation"
                    className="ml-3 text-sm text-gray-600"
                  >
                    Writing and Translation
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
