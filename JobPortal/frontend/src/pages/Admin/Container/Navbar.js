
import GlobalNavbar from "../DashBoard/Navigation/GlobalNavbar";
import { Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const url1 = "/admin-dashboard";

  return (
    <div>
      {pathname.includes(url1) ? null : <GlobalNavbar />}
      <Outlet />
    </div>
  );
};

export default Navbar;
