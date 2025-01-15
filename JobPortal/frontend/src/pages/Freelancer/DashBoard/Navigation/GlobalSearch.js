import { useState, useEffect } from "react";
import { GetAllJobs } from "../../../../redux/actions/FreelancerActions";
import { GetAllBlogs } from "../../../../redux/actions/FreelancerActions";
import { GetAllExchangeSkills } from "../../../../redux/actions/FreelancerActions";
import { GetAllReviews } from "../../../../redux/actions/FreelancerActions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../PagesComponent/Helpers/Spinner";
import { toast } from "react-toastify";

const GlobalSearch = () => {
  const [selectedOption, setSelectedOption] = useState("jobs");
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jobs = useSelector((state) => state.freelancerData.jobs);
  const blogs = useSelector((state) => state?.freelancerData?.blogs?.snapshot);
  const exchangeSkills = useSelector(
    (state) => state?.freelancerData?.exchangeSkills
  );
  const reviews = useSelector((state) => state?.freelancerData?.allReviews);
  const { loading } = useSelector((state) => state?.freelancerData);

  useEffect(() => {
    if (selectedOption === "jobs") {
      dispatch(GetAllJobs(toast));
      dispatch(GetAllReviews(toast));
    } else if (selectedOption === "exchangeSkills") {
      dispatch(GetAllExchangeSkills(toast));
      dispatch(GetAllReviews(toast));
    } else if (selectedOption === "blogs") {
      dispatch(GetAllBlogs(toast));
      dispatch(GetAllReviews(toast));
    }
  }, [dispatch, selectedOption]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === "jobs") {
      navigate("/freelancer/jobs", {
        state: {
          jobs: jobs,
          searchQuery: searchQuery,
        },
      });
    } else if (selectedOption === "exchangeSkills") {
      navigate("/freelancer/exchange-skills", {
        state: {
          exchangeSkills: exchangeSkills,
          searchQuery: searchQuery,
          reviews: reviews,
        },
      });
    } else if (selectedOption === "blogs") {
      navigate("/freelancer/blogs", {
        state: {
          blogs: blogs,
          searchQuery: searchQuery,
          reviews: reviews,
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading?<Spinner/>:(
      <div className="flex justify-between mx-4">
        <div className="item lg:w-full sw-1/2 ">
          <div className=" form-icon ">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="teal"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className=" px-10 bg-white border rounded-l-md border-r-1 shadow-md border-slate-300 placeholder-slate-400 focus:outline-none focus:border-teal-500 focus:ring-teal-500 block w-full text-sm focus:ring-1 "
              type="text"
              name="search"
              value={searchQuery}
              onChange={handleSearchQueryChange}
              placeholder="Search..."
              aria-label="Search"
            />
          </div>
        </div>
        <div className="item ">
          <select
            value={selectedOption}
            onChange={handleOptionChange}
            name="category"
            className="inline-flex pr-7 items-center rounded-r-md border border-l-1  shadow-md focus:ring-teal-500 focus:border-teal-500 border-gray-300 bg-gray-50 text-gray-500 text-sm"
          >
            <option value="jobs">Jobs</option>
            <option value="exchangeSkills">Exchange Skills</option>
            <option value="blogs">Blogs</option>
          </select>
        </div>
      </div>
      )}
    </form>
  );
};

export default GlobalSearch;
