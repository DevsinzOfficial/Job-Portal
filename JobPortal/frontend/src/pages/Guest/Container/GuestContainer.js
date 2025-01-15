import GlobalNavbar from "../GuestHomePage/Navbar";
import Footer from "../GuestHomePage/Footer";
import { Outlet } from "react-router-dom";

const GuestNavbar = () => {
  return (
    <div>
      <GlobalNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default GuestNavbar;
