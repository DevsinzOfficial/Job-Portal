
import { Link } from "react-router-dom";
import { DeleteJob } from "../../../../../redux/actions/ClientActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Table = ({
  title,
  budget,
  description,
  category,
  actions,
  jobs,
  route,
  Edit,
}) => {
  const dispatch = useDispatch();

  const deleteJob = (jobId) => {
    dispatch(DeleteJob(jobId, toast));
  };

  return (
    <div>
      <table className="w-full whitespace-no-wrap">
        <thead>
          <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border boder-gray-500   bg-gray-100">
            <th className="px-4 py-3">{title}</th>
            <th className="px-4 py-3">{budget}</th>
            <th className="px-4 py-3">{description}</th>
            <th className="px-4 py-3">{category}</th>
            <th className="px-4 py-3">{actions}</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y ">
          {jobs &&
            jobs?.map((job, index) => (
              <tr key={index} className="text-gray-700">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <Link
                      to={route}
                      state={{ singleJob: job }}
                      className="hover:underline hover:text-teal-600 "
                    >
                      <div>
                        <p className="font-semibold">{job.title}</p>
                      </div>
                    </Link>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$ {job.budget}</td>
                <td className="px-4 py-3 text-sm">
                  <span className="px-2 py-1 font-semibold leading-tight   rounded-full ">
                    {job.discription}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">{job.category}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-4 text-sm">
                    <Link to={Edit} state={{ job }}>
                      <button
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-blue-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                        aria-label="Edit"
                      >
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                        </svg>
                      </button>
                    </Link>
                    <button
                      className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-red-600 rounded-lg  focus:outline-none focus:shadow-outline-gray"
                      aria-label="Delete"
                      onClick={() => deleteJob(job._id)}
                    >
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
