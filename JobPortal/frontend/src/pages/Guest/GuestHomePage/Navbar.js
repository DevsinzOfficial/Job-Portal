import { Link } from "react-router-dom";
import clap from "./img/clapping.png";

const Navbar = () => {
  return (
    <div>
      <header className="bg-white shadow-sm w-full px-0 md:px-10 py-0 fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto">
          <div className="flex flex-1 w-0 lg:hidden">
            <Link
              className="px-4 py-2 text-sm font-medium text-teal-600 bg-gray-100 rounded-md hover:text-white hover:bg-teal-500"
              to="/login-type"
            >
              Log in
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="logo text-2xl md:text-2xl font-bold text-teal-600"
            >
              <img
                src={clap}
                className="h-6 w-6 mr-2 inline-block transform md:scale-150"
                alt="titfortat icon"
              />
              <span className="inline-block">TitforTat</span>
            </Link>
          </div>

          <div className="flex justify-end flex-1 w-0 lg:hidden">
            <Link
              className="px-4 py-2 text-sm font-medium text-teal-600 bg-gray-100 rounded-md hover:text-white hover:bg-teal-500"
              to="/register-type"
            >
              Sign Up
            </Link>
          </div>

          <nav className="items-center justify-center hidden space-x-8 text-md font-semibold text-gray-800 hover:text-black lg:flex lg:flex-1 lg:w-0">
            <Link to="/jobs">Find Work</Link>
            <Link to="/freelancers">Find Freelancer</Link>
            <Link to="/exchange-skills">Exchange Skills</Link>
          </nav>

          <div className="items-center hidden space-x-4 lg:flex">
            <Link
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:text-white hover:bg-teal-500"
              to="/login-type"
            >
              Log in
            </Link>
            <Link
              className="px-4 py-2 text-sm font-medium text-teal-600 bg-gray-100 rounded-md hover:text-white hover:bg-teal-500"
              to="/register-type"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-100 lg:hidden">
          <nav className="flex items-center justify-center p-4 overflow-x-auto text-sm font-semibold  text-gray-800 hover:text-black">
            <Link className="flex-shrink-0 pl-4 " to="/jobs">
              Find Work
            </Link>
            <Link className="flex-shrink-0 pl-4 " to="/freelancers">
              Find Freelancer
            </Link>
            <Link className="flex-shrink-0 pl-4 " to="/exchange-skills">
              Exchange Skills
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
