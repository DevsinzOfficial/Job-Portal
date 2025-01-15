
import GlobalNavbar from "../DashBoard/Navigation/GlobalNavbar";
import Footer from "../DashBoard/Container/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const url1 = "/freelancer-dashboard";

  return (
    <div>
      {pathname.includes(url1) ? null : <GlobalNavbar />}
      <Outlet />
      {pathname.includes(url1) ? null : <Footer />}
    </div>
  );
};

export default Navbar;
