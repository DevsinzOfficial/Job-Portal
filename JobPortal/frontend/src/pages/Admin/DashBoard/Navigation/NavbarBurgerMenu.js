import { useState, useRef, useEffect } from "react";
import MobileSideMenu from "./MobileSideMenu";

const NavbarBurgerMenu = () => {
  const [isBurgerMenuShown, setIsBurgerMenuShown] = useState(false);
  const burgerMenuRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        isBurgerMenuShown &&
        burgerMenuRef.current &&
        !burgerMenuRef.current.contains(e.target)
      ) {
        setIsBurgerMenuShown(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);

    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [isBurgerMenuShown]);

  const handleBurgerMenuClick = () => {
    setIsBurgerMenuShown(!isBurgerMenuShown);
  };

  return (
    <div>
      <div ref={burgerMenuRef}>
        <button
          onClick={handleBurgerMenuClick}
          className="block btn lg:invisible visible text-teal-600 -ml-2 mr-2 "
        >
          <svg
            className="w-4 h-4"
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
        {isBurgerMenuShown && (
          <div>
            <MobileSideMenu />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarBurgerMenu;
