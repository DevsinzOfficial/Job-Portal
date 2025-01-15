
import { Link } from "react-router-dom";
import clap from "../../../../img/clapping.png";
import AdminSideMenu from "./AdminSideMenu";

const SideMenuHelper = () => {
  return (
    <div>
      <Link
        to={"/admin/admin-dashboard"}
        className="flex items-center px-5 py-5 logo text-2xl  font-bold text-teal-600"
      >
        <img
          src={clap}
          className="h-6 w-6 mr-2 inline-block transform md:scale-150"
          alt="titfortat icon"
        />
        <span className="inline-block">TitforTat</span>
      </Link>

      <AdminSideMenu />
    </div>
  );
};

export default SideMenuHelper;
