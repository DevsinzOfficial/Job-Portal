
import ExchangeSkillsFilterDesktop from "./ExchangeSkillsFilterDesktop";
import { Outlet } from "react-router-dom";

const ExchangeSkillsList = () => {
  return (
    <div>
      <ExchangeSkillsFilterDesktop />
      <Outlet />
    </div>
  );
};

export default ExchangeSkillsList;
