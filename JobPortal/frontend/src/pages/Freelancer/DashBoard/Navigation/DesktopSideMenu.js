import SideMenuHelper from "./SideMenuHelper";
const DesktopSideMenu = () => {
  return (
    <div>
      <nav className="fixed lg:visible invisible top-0 left-0 z-20 h-full pb-10 overflow-x-hidden overflow-y-auto bg-white w-60 ">
        <SideMenuHelper />
      </nav>
    </div>
  );
};

export default DesktopSideMenu;
