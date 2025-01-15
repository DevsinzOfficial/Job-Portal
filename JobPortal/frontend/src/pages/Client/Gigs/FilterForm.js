import { useState, useEffect } from "react";

const FilterForm = ({ onFilterDataChange, gigs, searchQuery }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [priceInputValue, setPriceInputValue] = useState("");
  const [basicDurationInputValue, setBasicDurationInputValue] = useState("");
  const [standardDurationInputValue, setStandardDurationInputValue] =
    useState("");
  const [premiumDurationInputValue, setPremiumDurationInputValue] =
    useState("");
  const [basicRevisionInputValue, setBasicRevisionInputValue] = useState("");
  const [standardRevisionInputValue, setStandardRevisionInputValue] =
    useState("");
  const [premiumRevisionInputValue, setPremiumRevisionInputValue] =
    useState("");

  const [search, setSearch] = useState(searchQuery);

  const handleCheckBoxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFilters([...selectedFilters, value]);
    } else {
      setSelectedFilters(selectedFilters.filter((filter) => filter !== value));
    }
  };

  const handlePriceInputChange = (event) => {
    setPriceInputValue(event.target.value);
  };

  const handleBasicDurationInputChange = (event) => {
    setBasicDurationInputValue(event.target.value);
  };

  const handleStandardDurationInputChange = (event) => {
    setStandardDurationInputValue(event.target.value);
  };

  const handlePremiumDurationInputChange = (event) => {
    setPremiumDurationInputValue(event.target.value);
  };

  const handleBasicRevisionInputChange = (event) => {
    setBasicRevisionInputValue(event.target.value);
  };

  const handleStandardRevisionInputChange = (event) => {
    setStandardRevisionInputValue(event.target.value);
  };

  const handlePremiumRevisionInputChange = (event) => {
    setPremiumRevisionInputValue(event.target.value);
  };

  useEffect(() => {
    const filteredData = gigs?.filter(
      (gig) =>
        gig?.BASIC?.Price === parseInt(priceInputValue) ||
        selectedFilters.includes(gig?.Category) ||
        gig?.title.toString().toLowerCase().includes(search) ||
        selectedFilters.includes(gig?.freelancer[0]?.verified.toString()) ||
        gig?.BASIC?.revisions === parseInt(basicRevisionInputValue) ||
        gig?.STANDARD?.revisions === parseInt(standardRevisionInputValue) ||
        gig?.PREMIUM?.revisions === parseInt(premiumRevisionInputValue) ||
        gig?.BASIC?.time === basicDurationInputValue ||
        gig?.STANDARD?.time === standardDurationInputValue ||
        gig?.PREMIUM?.time === premiumDurationInputValue
    );

    if (filteredData?.length < 1) {
      onFilterDataChange([]);
    } else {
      onFilterDataChange(filteredData);
    }
    setSearch(searchQuery);
  }, [
    selectedFilters,
    onFilterDataChange,
    gigs,
    search,
    searchQuery,
    priceInputValue,
    basicRevisionInputValue,
    standardRevisionInputValue,
    premiumRevisionInputValue,
    basicDurationInputValue,
    standardDurationInputValue,
    premiumDurationInputValue,
  ]);

  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isPriceMenuOpen, setIsPriceMenuOpen] = useState(false);
  const [isFreelancerMenuOpen, setIsFreelancerMenuOpen] = useState(false);
  const [isRevisionsMenuOpen, setIsRevisionsMenuOpen] = useState(false);
  const [isDeliveryTimeMenuOpen, setIsDeliveryTimeMenuOpen] = useState(false);

  const handleCategoryClick = () => {
    setIsCategoryMenuOpen(!isCategoryMenuOpen);
  };

  const handlePriceClick = () => {
    setIsPriceMenuOpen(!isPriceMenuOpen);
  };

  const handleFreelancerClick = () => {
    setIsFreelancerMenuOpen(!isFreelancerMenuOpen);
  };

  const handleRevisionsClick = () => {
    setIsRevisionsMenuOpen(!isRevisionsMenuOpen);
  };

  const handleDeliveryTimeClick = () => {
    setIsDeliveryTimeMenuOpen(!isDeliveryTimeMenuOpen);
  };
  return (
    <div>
      <form>
        <h2 className="hidden lg:block text-2xl font-medium tracking-tight text-gray-900 mb-2  ">
          Filter By
        </h2>
        <div className="border-b border-gray-200 py-6 px-4 lg:px-0 ">
          <h3 className="-my-3 flow-root">
            <button
              type="button"
              className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
              aria-controls="filter-section-0"
              aria-expanded="false"
              onClick={handleCategoryClick}
            >
              <span className="font-medium text-gray-900">Category</span>
              <span className="ml-6 flex items-center">
                {!isCategoryMenuOpen && (
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

                {isCategoryMenuOpen && (
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

          {isCategoryMenuOpen && (
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

        <div className="border-b border-gray-200 py-6 px-4 lg:px-0 ">
          <h3 className="-my-3 flow-root">
            <button
              type="button"
              className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
              aria-controls="filter-section-1"
              aria-expanded="false"
              onClick={handlePriceClick}
            >
              <span className="font-medium text-gray-900">Price</span>
              <span className="ml-6 flex items-center">
                {!isPriceMenuOpen && (
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

                {isPriceMenuOpen && (
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

          {isPriceMenuOpen && (
            <div className="pt-6">
              <div className="space-y-2">
                <label
                  htmlFor="buget"
                  className=" font-medium text-sm text-gray-900"
                >
                  Enter Gig Starting Price
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    name="budget"
                    placeholder="$ 0"
                    onChange={handlePriceInputChange}
                    className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
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
              onClick={handleRevisionsClick}
            >
              <span className="font-medium text-gray-900">Revisions</span>
              <span className="ml-6 flex items-center">
                {!isRevisionsMenuOpen && (
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

                {isRevisionsMenuOpen && (
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

          {isRevisionsMenuOpen && (
            <div className="pt-4">
              <div className="space-y-2">
                <label
                  htmlFor="basic-revison"
                  className=" font-medium text-sm text-gray-900"
                >
                  Enter Revisions for Basic Gig
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    name="basic-revision"
                    placeholder="2 "
                    onChange={handleBasicRevisionInputChange}
                    className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="space-y-2 mt-2">
                <label
                  htmlFor="standard-revison"
                  className=" font-medium text-sm text-gray-900"
                >
                  Enter Revisions for Standard Gig
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    name="standard-revision"
                    placeholder="2"
                    onChange={handleStandardRevisionInputChange}
                    className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="space-y-2 mt-2">
                <label
                  htmlFor="premium-revison"
                  className=" font-medium text-sm text-gray-900"
                >
                  Enter Revisions for Premium Gig
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    name="premium-revision"
                    placeholder="2 "
                    onChange={handlePremiumRevisionInputChange}
                    className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
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
              aria-controls="filter-section-4"
              aria-expanded="false"
              onClick={handleDeliveryTimeClick}
            >
              <span className="font-medium text-gray-900">Delivery Time</span>
              <span className="ml-6 flex items-center">
                {!isDeliveryTimeMenuOpen && (
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

                {isDeliveryTimeMenuOpen && (
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

          {isDeliveryTimeMenuOpen && (
            <div className="pt-6">
              <div className="space-y-2">
                <label
                  htmlFor="basic-delivery"
                  className=" font-medium text-sm text-gray-900"
                >
                  Enter Delivery Time for Basic Gig
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    name="basic-delivery"
                    placeholder="2 days"
                    onChange={handleBasicDurationInputChange}
                    className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="space-y-2 mt-2">
                <label
                  htmlFor="standard-delivery"
                  className=" font-medium text-sm text-gray-900"
                >
                  Enter Delivery Time for Standard Gig
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    name="standard-delivery"
                    placeholder="2 days"
                    onChange={handleStandardDurationInputChange}
                    className="mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="space-y-2 mt-2">
                <label
                  htmlFor="premium-delivery"
                  className=" font-medium text-sm text-gray-900"
                >
                  Enter Delivery Time for Premium Gig
                </label>
                <div className="flex items-center">
                  <input
                    type="number"
                    name="premium-revision"
                    placeholder="2 days"
                    onChange={handlePremiumDurationInputChange}
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
