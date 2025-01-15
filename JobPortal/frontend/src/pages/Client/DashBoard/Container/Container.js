
import { Outlet } from "react-router-dom";
import DashBoardFooter from "./Footer";
const Container = () => {
  return (
    <div>
      <div className=" lg:ml-60 mt-0 p-4 ">
        <div className="-mb-18">
          <Outlet />
        </div>
        <div className="-mx-4 -mb-4 ">
          <DashBoardFooter />
        </div>
      </div>
    </div>
  );
};

export default Container;
