import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideMenuMobile from "./SideMenuMobile";
import SideMenuHelper from "./SideMenuHelper";

const SideMenuDesktop = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-baseline justify-between border-b border-gray-200 pt-10 pb-6 mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Settings
          </h1>

          <div className="flex items-center">
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={handleBurgerMenuClick}
            >
              <span className="sr-only">Filters</span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isBurgerMenuOpen && (
              <div>
                <SideMenuMobile closeMenu={handleBurgerMenuClick} />
              </div>
            )}
          </div>
        </div>

        <section className="pt-6 pb-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-4">
            <div className="hidden lg:block ">
              <SideMenuHelper />
            </div>
            <div className="lg:col-span-3 ">
              <div className=" mx-auto lg:-ml-12 bg-white p-4 rounded-md border-3 border border-gray-300">
                <div>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SideMenuDesktop;
