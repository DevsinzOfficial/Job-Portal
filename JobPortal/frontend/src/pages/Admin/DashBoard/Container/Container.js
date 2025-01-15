
import { Outlet } from "react-router-dom";

const Container = () => {
  return (
    <div>
      <div className=" lg:ml-60 mt-0 p-4 ">
        <div className="-mb-18">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Container;
