
import JobsFilterDesktop from "./JobsFilterDesktop";
import { Outlet } from "react-router-dom";

const JobsList = () => {
  return (
    <div>
      <JobsFilterDesktop />
      <Outlet />
    </div>
  );
};

export default JobsList;
