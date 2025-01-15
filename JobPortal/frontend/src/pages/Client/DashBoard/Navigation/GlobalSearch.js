import { useState, useEffect } from "react";
import {
  GetAllBlogsClient,
  GetReviews,
  GetAllGigs,
  GetAllFreelancer,
} from "../../../../redux/actions/ClientActions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../PagesComponent/Helpers/Spinner";

const GlobalSearch = () => {
  const [selectedOption, setSelectedOption] = useState("freelancers");
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clientfreelancers = useSelector(
    (state) => state.clientData.freelancers
  );
  const { gigs, gigsLoading } = useSelector((state) => state?.clientData);
  const blogs = useSelector((state) => state?.clientData.blogs.snapshot);
  const blogsLoading = useSelector((state) => state?.clientData.blogsLoading);
  const reviews = useSelector((state) => state?.clientData?.reviews);
  const { loading } = useSelector((state) => state?.clientData);

  useEffect(() => {
    if (selectedOption === "freelancers") {
      dispatch(GetAllFreelancer(toast));
      dispatch(GetReviews(toast));
    } else if (selectedOption === "gigs") {
      dispatch(GetAllGigs(toast));
      dispatch(GetReviews(toast));
    } else if (selectedOption === "blogs") {
      dispatch(GetAllBlogsClient(toast));
      dispatch(GetReviews(toast));
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
    if (selectedOption === "freelancers") {
      navigate("/client/freelancers", {
        state: {
          freelancers: clientfreelancers,
          searchQuery: searchQuery,
          reviews: reviews,
        },
      });
    } else if (selectedOption === "gigs") {
      navigate("/client/gigs", {
        state: {
          gigs: gigs,
          reviews: reviews,
          searchQuery: searchQuery,
          gigsLoading: gigsLoading,
        },
      });
    } else if (selectedOption === "blogs") {
      navigate("/client/blogs", {
        state: {
          blogs: blogs,
          reviews: reviews,
          searchQuery: searchQuery,
          blogsLoading: blogsLoading,
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading ? (
        <Spinner />
      ) : (
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
              <option value="freelancers">Freelancers</option>
              <option value="gigs">Gigs</option>
              <option value="blogs">Blogs</option>
            </select>
          </div>
        </div>
      )}
    </form>
  );
};

export default GlobalSearch;
