import { useEffect } from "react";
import Title from "./Helpers/Title";
import { useSelector, useDispatch } from "react-redux";
import { GetClientReport } from "../../../../redux/actions/ClientActions";
import Spinner from "./../../../Guest/AuthPages/Spinner";
import { toast } from "react-toastify";

const ClientReports = () => {
  const dispatch = useDispatch();

  const { reports, loading } = useSelector((state) => state?.clientData);
 
  useEffect(() => {
    dispatch(GetClientReport(toast));
  }, [dispatch]);

  return (
    <div className="h-full pb-16 overflow-y-auto">
      {loading ? (
        <Spinner />
      ) : (
        <div className="container  mx-auto grid">
          <div className="flex flex-row flex-wrap  items-center justify-between mb-4">
            <Title title="Your Account Report " />
          </div>

          <div className="w-full overflow-hidden rounded-lg shadow-xs">
            <div className="w-full overflow-x-auto">
              <section className="  mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                  <div className="card">
                    <div className="p-5">
                      <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">
                        Total Spent
                      </p>
                      <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">
                        ${!reports[0]?.TotalSpend ? 0 : reports[0]?.TotalSpend}
                      </h2>
                    </div>
                  </div>
                  <div className="card">
                    <div className="p-5">
                      <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">
                        Jobs Posted
                      </p>
                      <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">
                        {!reports[0]?.TotalJobs ? 0 : reports[0]?.TotalJobs}
                      </h2>
                    </div>
                  </div>
                  <div className="card">
                    <div className="p-5">
                      <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">
                        Accepted Proposals
                      </p>
                      <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">
                        {!reports[0]?.AcceptedProposals
                          ? 0
                          : reports[0]?.AcceptedProposals}
                      </h2>
                    </div>
                  </div>
                  <div className="card">
                    <div className="p-5">
                      <p className="mb-2 text-xs font-semibold leading-none tracking-wide text-gray-500 uppercase">
                        Gigs Ordered
                      </p>
                      <h2 className="text-3xl font-extrabold leading-none text-gray-800 truncate">
                        {!reports[0]?.GigsOrders ? 0 : reports[0]?.GigsOrders}
                      </h2>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientReports;
