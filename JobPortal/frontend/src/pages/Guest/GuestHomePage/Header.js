
import { Link } from "react-router-dom";
import clap from "./img/clapping.png";
import scrum from "./img/scrum.svg";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="header-container min-h-screen flex flex-col md:flex-row-reverse items-center px-10 container m-auto">
          <div className="px-8 py-6 w-full md:w-3/6 mt-20 md:mt-1">
            <img src={scrum} className="w-full" alt="work" />
          </div>
          <div className="h-full w-full md:w-3/6">
            <h1 className="text-2xl mt-2 md:mt-0 sm:text-4xl md:text-6xl font-bold leading-tight">
              How <span className="text-teal-600">Work</span> should work
              <img
                src={clap}
                className="h-8 w-8 md:h-12 md:w-12 inline-block"
                alt=""
              />
            </h1>
            <p className="text-gray-600 mb-6 mt-2">
              Forget the old rules. You can have the best people. Right now.
              Right here.
            </p>
            <Link
              to="/register-client"
              className="px-6 py-2 text-sm font-semibold text-white bg-teal-600 mr-2 rounded-md"
            >
              Find Talent
            </Link>
            <Link
              to="/register-freelancer"
              className="px-6 py-2 text-sm font-semibold text-teal-600 bg-white border border-teal-500 mr-2 rounded-md"
            >
              Find Work
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};
export default Header;
