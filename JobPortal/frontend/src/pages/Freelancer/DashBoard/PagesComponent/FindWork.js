import { useEffect } from "react";
import { Link } from "react-router-dom";
import SingleJob from "../../JobsList/SingleJob";
import Title from "./Helpers/Title";
import { GetAllJobs } from "../../../../redux/actions/FreelancerActions";
import { useSelector, useDispatch } from "react-redux";
import EmptyState from "./Helpers/EmptyState";
import Spinner from "./Helpers/Spinner";
import { toast } from "react-toastify";

const FindWork = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.freelancerData.jobs);
  const { loading } = useSelector((state) => state.freelancerData);

  useEffect(() => {
    dispatch(GetAllJobs(toast));
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="h-full pb-16 overflow-y-auto">
          <div className="container  mx-auto grid">
            <div>
              <Title title="Jobs You Might Like" />
            </div>
            {jobs && jobs.length > 0 ? (
              <>
                {jobs?.map &&
                  jobs?.map((job, index) => (
                    <Link
                      key={index}
                      to="/freelancer/jobs/job-details"
                      state={{ singleJob: job }}
                    >
                      <SingleJob data={job} />
                    </Link>
                  ))}
              </>
            ) : (
              <div className="flex justify-center w-full">
                <EmptyState message="No Jobs For You" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FindWork;
