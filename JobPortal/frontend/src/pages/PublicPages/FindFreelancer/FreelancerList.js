
import FreelancerFilterDesktop from "./FreelancerFilterDesktop";
import { Outlet } from "react-router-dom";

const FreelancerList = () => {
  return (
    <div>
      <FreelancerFilterDesktop />
      <Outlet />
    </div>
  );
};

export default FreelancerList;
