
import { Link } from "react-router-dom";

const JobsCategories = () => {
  return (
    <div>
      <section className="sec1 p-5 container m-auto">
        <div className="subtitle text-center relative">
          <h1 className="inline-block text-3xl font-bold">
            Browse jobs by category
          </h1>
          <span className="rounded absolute w-72 bg-teal-600 inline-block"></span>
        </div>
        <div className="flex justify-center mt-16 mb-16 overflow-x-auto">
          <Link to="jobs">
            <button className="px-3 md:px-4 py-2 shadow-xl mx-1 md:mx-2 focus:outline-none">
              Programming
            </button>
          </Link>
          <Link to="jobs">
            <button className="px-3 md:px-4 py-2 shadow-xl mx-1 md:mx-2 focus:outline-none">
              Design
            </button>
          </Link>
          <Link to="jobs">
            <button className="px-3 md:px-4 py-2 shadow-xl mx-1 md:mx-2 focus:outline-none">
              Marketing
            </button>
          </Link>
          <Link to="jobs">
            <button className="px-3 md:px-4 py-2 shadow-xl mx-1 md:mx-2 focus:outline-none">
              Data
            </button>
          </Link>
          <Link to="jobs">
            <button className="px-3 md:px-4 py-2 shadow-xl mx-1 md:mx-2 focus:outline-none">
              Customer Support
            </button>
          </Link>
          <Link to="jobs">
            <button className="px-3 md:px-4 py-2 shadow-xl mx-1 md:mx-2 focus:outline-none">
              Writing and Translation
            </button>
          </Link>
        </div>
      </section>
      ;
    </div>
  );
};
export default JobsCategories;
