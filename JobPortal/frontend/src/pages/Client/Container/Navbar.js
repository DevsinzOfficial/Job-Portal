
import GlobalNavbar from "../DashBoard/Navigation/GlobalNavbar";
import Footer from "../DashBoard/Container/Footer";
import { Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const url2 = "/client-dashboard";

  return (
    <div>
      {pathname.includes(url2) ? null : <GlobalNavbar />}
      <Outlet />
      {pathname.includes(url2) ? null : <Footer />}
    </div>
  );
};

export default Navbar;
