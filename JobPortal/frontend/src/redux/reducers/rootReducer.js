import { combineReducers } from "redux";
import AdminReducers from "./AdminReducers";
import ClientReducers from "./ClientReducers";
import FreelancerReducers from "./FreelancerReducers";
import GuestReducers from "./GuestReducers";
const rootReducer = combineReducers({
  clientData: ClientReducers,
  freelancerData: FreelancerReducers,
  adminData: AdminReducers,
  guestData: GuestReducers,
});

export default rootReducer;
