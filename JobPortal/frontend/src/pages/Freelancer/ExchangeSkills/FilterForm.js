import { useState, useEffect } from "react";

const FilterForm = ({ onFilterDataChange, exchangeSkills, searchQuery }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [requiredSkillsFilters, setRequiredSkillsFilters] = useState([]);
  const [beginnerPriceInputValue, setBeginnerPriceInputValue] = useState("");
  const [intermediatePriceInputValue, setIntermediatePriceInputValue] =
    useState("");
  const [expertPriceInputValue, setExpertPriceInputValue] = useState("");
  const [durationInputValue, setDurationInputValue] = useState("");
  const [search, setSearch] = useState(searchQuery);

  const handleCheckBoxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFilters([...selectedFilters, value]);
    } else {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
    }
  };

  const handleRequiredSkillsBoxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setRequiredSkillsFilters([...requiredSkillsFilters, value]);
    } else {
      setRequiredSkillsFilters(
        requiredSkillsFilters.filter((filter) => filter !== value)
      );
    }
  };

  const handleBeginnerPriceInputChange = (event) => {
    setBeginnerPriceInputValue(event.target.value);
  };

  const handleIntermediatePriceInputChange = (event) => {
    setIntermediatePriceInputValue(event.target.value);
  };

  const handleExpertPriceInputChange = (event) => {
    setExpertPriceInputValue(event.target.value);
  };

  const handleDurationInputChange = (event) => {
    setDurationInputValue(event.target.value);
  };

  useEffect(() => {
    const filteredData = exchangeSkills?.filter(
      (exchangeSkill) =>
        exchangeSkill?.price?.beginnerLevel ===
          parseInt(beginnerPriceInputValue) ||
        exchangeSkill?.price?.intermediate ===
          parseInt(intermediatePriceInputValue) ||
        exchangeSkill?.price?.expert === parseInt(expertPriceInputValue) ||
        exchangeSkill?.duration === parseInt(durationInputValue) ||
        requiredSkillsFilters.includes(exchangeSkill?.offeredSkills) ||
        selectedFilters.includes(exchangeSkill?.requiredSkills) ||
        selectedFilters.includes(
          exchangeSkill?.freelancer?.verified.toString()
        ) ||
        exchangeSkill?.title.toString().toLowerCase().includes(search)
    );

    if (filteredData?.length < 1) {
      onFilterDataChange([]);
    } else {
      onFilterDataChange(filteredData);
    }
    setSearch(searchQuery);
  }, [
    selectedFilters,
    beginnerPriceInputValue,
    intermediatePriceInputValue,
    expertPriceInputValue,
    durationInputValue,
    onFilterDataChange,
    exchangeSkills,
    search,
    searchQuery,
    requiredSkillsFilters,
  ]);

  const [isFixedPriceMenuOpen, setIsFixedPriceMenuOpen] = useState(false);
  const [isBeginnerMenuOpen, setIsBeginnerMenuOpen] = useState(false);
  const [isIntermediateMenuOpen, setIsIntermediateMenuOpen] = useState(false);
  const [isExpertMenuOpen, setIsExpertMenuOpen] = useState(false);
  const [isFreelancerMenuOpen, setIsFreelancerMenuOpen] = useState(false);
  const [isYourSkillsMenuOpen, setIsYourSkillsMenuOpen] = useState(false);
  const [isRequiredSkillsMenuOpen, setIsRequiredSkillsMenuOpen] =
    useState(false);
  const [isExchangeDurationMenuOpen, setIsExchangeDurationMenuOpen] =
    useState(false);

  const handleFixedPriceClick = () => {
    setIsFixedPriceMenuOpen(!isFixedPriceMenuOpen);
  };

  const handleBeginnerClick = () => {
    setIsBeginnerMenuOpen(!isBeginnerMenuOpen);
  };

  const handleIntermediateClick = () => {
    setIsIntermediateMenuOpen(!isIntermediateMenuOpen);
  };

  const handleExpertClick = () => {
    setIsExpertMenuOpen(!isExpertMenuOpen);
  };

  const handleFreelancerClick = () => {
    setIsFreelancerMenuOpen(!isFreelancerMenuOpen);
  };

  const handleYourSkillsClick = () => {
    setIsYourSkillsMenuOpen(!isYourSkillsMenuOpen);
  };

  const handleRequiredSkillsClick = () => {
    setIsRequiredSkillsMenuOpen(!isRequiredSkillsMenuOpen);
  };

  const handleDurationClick = () => {
    setIsExchangeDurationMenuOpen(!isExchangeDurationMenuOpen);
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
              aria-controls="filter-section-0"
              aria-expanded="false"
              onClick={handleFixedPriceClick}
            >
              <span className="font-medium text-gray-900 ">
                Fixed Price For Skills
              </span>
              <span className="ml-6 flex items-center">
                {!isFixedPriceMenuOpen && (
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

                {isFixedPriceMenuOpen && (
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

          {isFixedPriceMenuOpen && (
            <div>
              <div className="space-y-2 ">
                <h3 className="-my-3 flow-root">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-0-0"
                    aria-expanded="false"
                    onClick={handleBeginnerClick}
                  >
                    <span className="font-medium text-gray-800">Beginner</span>
                    <span className="ml-6 flex items-center">
                      {!isBeginnerMenuOpen && (
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

                      {isBeginnerMenuOpen && (
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

                {isBeginnerMenuOpen && (
                  <div>
                    <div className="mb-2">
                      <label
                        htmlFor="beginner-price"
                        className=" font-medium text-sm text-gray-500"
                      >
                        Enter Beginner's Price
                      </label>
                      <div className="flex items-center">
                        <input
                          type="number"
                          name="beginner-price"
                          placeholder="$ 0"
                          onChange={handleBeginnerPriceInputChange}
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2 ">
                <h3 className="-my-3 flow-root">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-0-1"
                    aria-expanded="false"
                    onClick={handleIntermediateClick}
                  >
                    <span className="font-medium text-gray-800">
                      Intermediate
                    </span>
                    <span className="ml-6 flex items-center">
                      {!isIntermediateMenuOpen && (
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

                      {isIntermediateMenuOpen && (
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

                {isIntermediateMenuOpen && (
                  <div>
                    <div className="mb-2">
                      <label
                        htmlFor="intermediate-price"
                        className=" font-medium text-sm text-gray-500"
                      >
                        Enter Intermediate's Price
                      </label>
                      <div className="flex items-center">
                        <input
                          type="number"
                          name="intermediate-price"
                          placeholder="$ 0"
                          onChange={handleIntermediatePriceInputChange}
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="-my-3 flow-root">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-0-2"
                    aria-expanded="false"
                    onClick={handleExpertClick}
                  >
                    <span className="font-medium text-gray-800">Expert</span>
                    <span className="ml-6 flex items-center">
                      {!isExpertMenuOpen && (
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

                      {isExpertMenuOpen && (
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

                {isExpertMenuOpen && (
                  <div>
                    <div className="mb-2">
                      <label
                        htmlFor="beginner-price"
                        className=" font-medium text-sm text-gray-500"
                      >
                        Enter Experts's Price
                      </label>
                      <div className="flex items-center">
                        <input
                          type="number"
                          name="beginner-price"
                          placeholder="$ 0"
                          onChange={handleExpertPriceInputChange}
                          className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                )}
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
              onClick={handleYourSkillsClick}
            >
              <span className="font-medium text-gray-900">Offered Skills</span>
              <span className="ml-6 flex items-center">
                {!isYourSkillsMenuOpen && (
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

                {isYourSkillsMenuOpen && (
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

          {isYourSkillsMenuOpen && (
            <div className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    name="Development and Programming"
                    value="Development and Programming"
                    type="checkbox"
                    onChange={handleRequiredSkillsBoxChange}
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
                    onChange={handleRequiredSkillsBoxChange}
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
                    onChange={handleRequiredSkillsBoxChange}
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
                    onChange={handleRequiredSkillsBoxChange}
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
                    onChange={handleRequiredSkillsBoxChange}
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
                    onChange={handleRequiredSkillsBoxChange}
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

        <div className="border-b border-gray-200 py-6 px-4 lg:px-0 ">
          <h3 className="-my-3 flow-root">
            <button
              type="button"
              className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
              aria-controls="filter-section-4"
              aria-expanded="false"
              onClick={handleRequiredSkillsClick}
            >
              <span className="font-medium text-gray-900">Required Skills</span>
              <span className="ml-6 flex items-center">
                {!isRequiredSkillsMenuOpen && (
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

                {isRequiredSkillsMenuOpen && (
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

          {isRequiredSkillsMenuOpen && (
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

        <div className="border-b border-gray-200 py-6 px-4 lg:px-0">
          <h3 className="-my-3 flow-root">
            <button
              type="button"
              className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
              aria-controls="filter-section-5"
              aria-expanded="false"
              onClick={handleDurationClick}
            >
              <span className="font-medium text-gray-900">
                Exchange Duration
              </span>
              <span className="ml-6 flex items-center">
                {!isExchangeDurationMenuOpen && (
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

                {isExchangeDurationMenuOpen && (
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

          {isExchangeDurationMenuOpen && (
            <div className="pt-6">
              <div className="space-y-2">
                <label
                  htmlFor="duration"
                  className=" font-medium text-sm text-gray-900"
                >
                  Enter Your Desired Exchange Skill Duration
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    name="duration"
                    placeholder="Ex.2 days"
                    onChange={handleDurationInputChange}
                    className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
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
