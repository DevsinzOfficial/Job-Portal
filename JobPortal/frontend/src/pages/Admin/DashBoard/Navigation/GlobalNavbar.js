
import { Link } from "react-router-dom";
import clap from "../../../../img/clapping.png";
import NavbarRightMenu from "./NavbarRightMenu";
const GlobalNavbar = () => {
  return (
    <div>
      <header className="flex items-center justify-between w-full py-8 mt-auto bg-white border-b shadow-md h-14">
        <Link
          to="admin-dashboard"
          className="logo text-2xl font-bold text-teal-600 sm:ml-4"
        >
          <img
            src={clap}
            className="h-6 w-6 mr-2 ml-2 inline-block transform md:scale-150"
            alt="titfortat icon"
          />
          <span className="hidden sm:inline-block">TitforTat</span>
        </Link>
        <NavbarRightMenu />
      </header>
    </div>
  );
};

export default GlobalNavbar;
