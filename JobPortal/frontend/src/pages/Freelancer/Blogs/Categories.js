import { useState, useEffect } from "react";

const Categories = ({ onFilterDataChange, blogs, searchQuery }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [search, setSearch] = useState(searchQuery);

  const handleCategoryClick = (event) => {
    const { value } = event.target;
    setSelectedFilters([value]);
  };

  useEffect(() => {
    const filteredData = blogs?.filter(
      (blog) =>
        selectedFilters.includes(blog?.Category) ||
        blog?.title.toString().toLowerCase().includes(search)
    );

    if (filteredData?.length < 1) {
      onFilterDataChange([]);
    } else {
      onFilterDataChange(filteredData);
    }
    setSearch(searchQuery);
  }, [selectedFilters, onFilterDataChange, blogs, search, searchQuery]);

  return (
    <div>
      <div className="flex-inline lg:flex justify-evenly items-center space-y-8 lg:space-x-5 ">
        <div className="item  mt-10 lg:mt-8   ">
          <input
            type="button"
            onClick={handleCategoryClick}
            value="Programming"
            className="ml-4 lg:ml-0 hover:underline hover:text-teal-600 cursor-pointer"
          />
        </div>

        <div className="lg:border-0 border-b border-gray-200"></div>
        <div className="item  ">
          <input
            type="button"
            onClick={handleCategoryClick}
            value="Design"
            className="ml-4 lg:ml-0 hover:underline hover:text-teal-600 cursor-pointer "
          />
        </div>
        <div className="lg:border-0 border-b border-gray-200"></div>
        <div className="item  ">
          <input
            type="button"
            onClick={handleCategoryClick}
            value="Marketing"
            className="ml-4 lg:ml-0 hover:underline hover:text-teal-600 cursor-pointer "
          />
        </div>
        <div className="lg:border-0 border-b border-gray-200"></div>
        <div className="item  ">
          <input
            type="button"
            onClick={handleCategoryClick}
            value="Data"
            className="ml-4 lg:ml-0 hover:underline hover:text-teal-600 cursor-pointer "
          />
        </div>
        <div className="lg:border-0 border-b border-gray-200"></div>
        <div className="item  ">
          <input
            type="button"
            onClick={handleCategoryClick}
            value="Customer Support"
            className="ml-4 lg:ml-0 hover:underline hover:text-teal-600 cursor-pointer "
          />
        </div>
        <div className="lg:border-0 border-b border-gray-200"></div>
        <div className="item  ">
          <input
            type="button"
            onClick={handleCategoryClick}
            value="Writing and Translation"
            className="ml-4 lg:ml-0 hover:underline hover:text-teal-600 cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
