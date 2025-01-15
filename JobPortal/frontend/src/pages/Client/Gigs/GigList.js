
import GigsFilterDesktop from "./GigsFilterDesktop";
import { Outlet } from "react-router-dom";

const GigList = () => {
  return (
    <div>
      <GigsFilterDesktop />
      <Outlet />
    </div>
  );
};

export default GigList;
