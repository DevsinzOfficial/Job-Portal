
import NavbarBurgerMenu from "./NavbarBurgerMenu";
import NavbarRightMenu from "./NavbarRightMenu";
import GlobalSearch from "./GlobalSearch";
const DashboardNavbar = () => {
  return (
    <div>
      <div className="ml-0 transition">
        <header className="flex items-center justify-between w-full py-8 mt-auto bg-white border-b shadow-md h-14">
          <NavbarBurgerMenu />
          <div className=" -ml-7 form-icon ">
            <GlobalSearch />
          </div>
          <NavbarRightMenu />
        </header>
      </div>
    </div>
  );
};

export default DashboardNavbar;
