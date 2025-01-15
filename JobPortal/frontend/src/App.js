import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* Footer Common Imports */
import FAQ from "./pages/PublicPages/FAQ";
import HelpAndSupport from "./pages/PublicPages/HelpAndSupport";
import PrivacyPolicies from "./pages/PublicPages/PrivacyPolicies";
import Team from "./pages/PublicPages/Team";
import TermsAndConditions from "./pages/PublicPages/TermsAndCondtions";

/* Start Guest imports */
import GuestHomePage from "./pages/Guest/GuestHomePage/HomePage";
import GuestContainer from "./pages/Guest/Container/GuestContainer";
import RegisterType from "./pages/Guest/AuthPages/RegisterType";
import SignUpClient from "./pages/Guest/AuthPages/SignUpClient";
import SignUpFreelancer from "./pages/Guest/AuthPages/SignUpFreelancer";
import SignInType from "./pages/Guest/AuthPages/SignInType";
import SignInClient from "./pages/Guest/AuthPages/SignInClient";
import SignInFreelancer from "./pages/Guest/AuthPages/SignInFreelancer";
import ForgotPasswordClient from "./pages/Guest/AuthPages/ForgotPasswordClient";
import ForgotPasswordFreelancer from "./pages/Guest/AuthPages/ForgotPasswordFreelancer";
import ResetPasswordClient from "./pages/Guest/AuthPages/ResetPasswordClient";
import ResetPasswordFreelancer from "./pages/Guest/AuthPages/ResetPasswordFreelancer";
import PageNotFound from "./pages/Guest/GuestHomePage/PageNotFound";
import RegisterAdmin from "./pages/Admin/auth/RegisterAdmin";
import LoginAdmin from "./pages/Admin/auth/LoginAdmin";
import GuestJobsList from "./pages/PublicPages/FindWork/JobsList";
import GuestJobDetails from "./pages/PublicPages/FindWork/JobDetails";
import GuestFreelancersList from "./pages/PublicPages/FindFreelancer/FreelancerList";
import GuestFreelancerDetails from "./pages/PublicPages/FindFreelancer/GuestFreelancerDetails";
import GuestExchangeSkillsList from "./pages/PublicPages/ExchangeSkills/ExchangeSkillsList";
import GuestExchangeSkillsDetails from "./pages/PublicPages/ExchangeSkills/ExchangeSkillsDetails";
/* Start Freelancer imports */
import Navbar from "./pages/Freelancer/Container/Navbar";
import FreelancerDashBoard from "./pages/Freelancer/DashBoard/Home";
import MyBlogs from "./pages/Freelancer/DashBoard/PagesComponent/MyBlogs";
import MyExchangeSkills from "./pages/Freelancer/DashBoard/PagesComponent/MyExchangeSkills";
import MyExchangeSkillsRequests from "./pages/Freelancer/DashBoard/PagesComponent/MyExchangeSkillsRequests";
import MySubmittedExchangeSkillsRequests from "./pages/Freelancer/DashBoard/PagesComponent/MySubmittedExchangeSkillsRequests";
import FindWork from "./pages/Freelancer/DashBoard/PagesComponent/FindWork";
import MyGigs from "./pages/Freelancer/DashBoard/PagesComponent/MyGigs";
import MyHome from "./pages/Freelancer/DashBoard/PagesComponent/MyHome";
import MyReports from "./pages/Freelancer/DashBoard/PagesComponent/MyReports";
import MyProposals from "./pages/Freelancer/DashBoard/PagesComponent/MyProposals";
import JobsList from "./pages/Freelancer/JobsList/JobsList";
import JobDetails from "./pages/Freelancer/JobsList/JobDetails";
import SendProposalForm from "./pages/Freelancer/JobsList/SendProposalForm";
import EditProposalForm from "./pages/Freelancer/JobsList/EditProposalForm";
import Proposal from "./pages/Freelancer/JobsList/Proposal";
import ExchangeSkillsList from "./pages/Freelancer/ExchangeSkills/ExchangeSkillsList";
import ExchangeSkillsDetails from "./pages/Freelancer/ExchangeSkills/ExchangeSkillsDetails";
import MyExchangeSkillsDetails from "./pages/Freelancer/ExchangeSkills/MyExchangeSkillsDetails";
import SendRequestForm from "./pages/Freelancer/ExchangeSkills/SendRequestForm";
import EditRequestForm from "./pages/Freelancer/ExchangeSkills/EditRequestForm";
import AddExchangeSkillForm from "./pages/Freelancer/ExchangeSkills/AddExchangeSkillForm";
import EditExchangeSkillForm from "./pages/Freelancer/ExchangeSkills/EditExchangeSkillForm";
import SubmitRequestDetails from "./pages/Freelancer/ExchangeSkills/SubmitRequestDetails";
import ReceivedRequestDetails from "./pages/Freelancer/ExchangeSkills/ReceivedRequestDetails";
import GigDetails from "./pages/Freelancer/Gigs/GigDetails";
import AddGigForm from "./pages/Freelancer/Gigs/AddGigForm";
import EditGigForm from "./pages/Freelancer/Gigs/EditGigForm";
import BlogsList from "./pages/Freelancer/Blogs/BlogsList";
import BlogDetails from "./pages/Freelancer/Blogs/BlogDetails";
import AddBlogForm from "./pages/Freelancer/Blogs/AddBlogForm";
import EditBlogForm from "./pages/Freelancer/Blogs/EditBlogForm";
import OngoingJob from "./pages/Freelancer/Ongoing/OngoingJob";
import OngoingGig from "./pages/Freelancer/Ongoing/OnGoingGig";
import OngoingExchangeSkill from "./pages/Freelancer/Ongoing/OngoingExchangeSkill";
import Notifications from "./pages/Freelancer/Notifications/Notifications";
import ChatPage from "./pages/Freelancer/Chat/ChatPage";
import CreateFreelancerProfile from "./pages/Freelancer/Profile/CreateFreelancerProfile";
import ProfilePage from "./pages/Freelancer/Profile/ProfilePage";
import EditFreelancerProfile from "./pages/Freelancer/Profile/EditFreelancerProfile";
import SettingsDashBoard from "./pages/Freelancer/Settings/Settings";
import AccountSettings from "./pages/Freelancer/Settings/PagesComponent/Account";
import SecuritySettings from "./pages/Freelancer/Settings/PagesComponent/Security";
import PaymentMethods from "./pages/Freelancer/Settings/PagesComponent/PaymentMethods";
import Verification from "./pages/Freelancer/Settings/PagesComponent/Verification";

/* Start Client imports */
import ClientNavbar from "./pages/Client/Container/Navbar";
import CreateClientProfile from "./pages/Client/Profile/CreateClientProfile";
import EditClientProfile from "./pages/Client/Profile/EditClientProfile";
import ClientSettingsDashBoard from "./pages/Client/Settings/ClientSettings";
import ClientAccountSettings from "./pages/Client/Settings/PagesComponent/ClientAccount";
import ClientSecuritySettings from "./pages/Client/Settings/PagesComponent/ClientSecurity";
import ClientVerification from "./pages/Client/Settings/PagesComponent/Verification";
import ClientPaymentMethods from "./pages/Client/Settings/PagesComponent/ClientPaymentMethods";
import ClientProfilePage from "./pages/Client/Profile/ClientProfilePage";
import ClientDashBoard from "./pages/Client/DashBoard/Home";
import FindGigs from "./pages/Client/DashBoard/PagesComponent/FindGigs";
import ProjectProposals from "./pages/Client/DashBoard/PagesComponent/ProjectProposals";
import PostedProjects from "./pages/Client/DashBoard/PagesComponent/PostedProjects";
import ClientHome from "./pages/Client/DashBoard/PagesComponent/ClientHome";
import ClientReports from "./pages/Client/DashBoard/PagesComponent/ClientReports";
import FreelancerList from "./pages/Client/FreelancerList/FreelancerList";
import ClientPageFreelancerDetails from "./pages/Client/FreelancerList/ClientPageFreelancerDetails";
import GigListClientPage from "./pages/Client/Gigs/GigList";
import GigDetailsClientPage from "./pages/Client/Gigs/GigDetails";
import BlogListClientPage from "./pages/Client/Blogs/BlogsList";
import BlogDetailsClientPage from "./pages/Client/Blogs/BlogDetails";
import CreateProject from "./pages/Client/Projects/CreateProject";
import ClientPageProposalDetails from "./pages/Client/Projects/ClientPageProposalDetails";
import ClientPageJobDetails from "./pages/Client/Projects/ClientPageJobDetails";
import OngoingGigClient from "./pages/Client/Ongoing/OnGoingGig";
import ClientNotifications from "./pages/Client/Notifications/ClientNotifications";
import OngoingJobClient from "./pages/Client/Ongoing/OngoingJob";
import EditProject from "./pages/Client/Projects/EditProject";
import ClientChatPage from "./pages/Client/Chat/ClientChatPage";

/* Start Admin imports */
import AdminNavbar from "./pages/Admin/Container/Navbar";
import AdminDashBoard from "./pages/Admin/DashBoard/AdminHome";
import ChatPageAdmin from "./pages/Admin/Chat/ChatPage";
import AllBlogs from "./pages/Admin/DashBoard/PagesComponent/AllBlogs";
import ClientsList from "./pages/Admin/DashBoard/PagesComponent/ClientsList";
import AllExchangeSkills from "./pages/Admin/DashBoard/PagesComponent/AllExchangeSkills";
import ExchangeSkillsRequestList from "./pages/Admin/DashBoard/PagesComponent/ExchangeSkillsRequestList";
import AllOrders from "./pages/Admin/DashBoard/PagesComponent/AllOrders";
import AllFreelancersReviews from "./pages/Admin/DashBoard/PagesComponent/AllFreelancersReviews";
import AllBlogsComments from "./pages/Admin/DashBoard/PagesComponent/AllBlogsComments";
import AllBlogsReplyComments from "./pages/Admin/DashBoard/PagesComponent/AllBlogsReplyComments";
import FreelancersList from "./pages/Admin/DashBoard/PagesComponent/FreelancersList";
import GigsList from "./pages/Admin/DashBoard/PagesComponent/GigsList";
import JobProposalsList from "./pages/Admin/DashBoard/PagesComponent/JobProposalsList";
import AllJobs from "./pages/Admin/DashBoard/PagesComponent/AllJobs";
import FreelancerDetails from "./pages/Admin/DetailsPages/FreelancerDetails";
import ClientDetails from "./pages/Admin/DetailsPages/ClientDetails";
import ViewExchangeSkill from "./pages/Admin/DetailsPages/ViewExchangeSkill";
import ViewJobDetails from "./pages/Admin/DetailsPages/ViewJobDetails";
import ViewGigDetails from "./pages/Admin/DetailsPages/ViewGigDetails";
import ViewBlogDetails from "./pages/Admin/DetailsPages/ViewBlogDetails";
import ViewProposalDetails from "./pages/Admin/DetailsPages/ViewProposalDetails";
import ViewRequestDetails from "./pages/Admin/DetailsPages/ViewRequestDetails";
import GigOrderDetails from "./pages/Admin/DetailsPages/GigOrderDetails";
import JobOrderDetails from "./pages/Admin/DetailsPages/JobOrderDetails";
import ExchangeSkillsOrderDetails from "./pages/Admin/DetailsPages/ExchangeSkillsOrderDetails";

import { useSelector } from "react-redux";

const token = localStorage.getItem("token");

const App = () => {
  const freelancer = useSelector((state) => state?.freelancerData?.userInfo);
  const client = useSelector((state) => state?.clientData?.userInfo);
  const admin = useSelector((state) => state?.adminData?.userInfo);

  function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            {/* ResetPasswrods */}
            <Route
              path="/reset-password-client"
              element={<ResetPasswordClient />}
            />
            <Route
              path="/reset-password-freelancer"
              element={<ResetPasswordFreelancer />}
            />
            {/* Start Guest Routes */}
            {isObjectEmpty(freelancer) &&
            isObjectEmpty(client) &&
            isObjectEmpty(admin) ? (
              <Route path="/" element={<GuestContainer />}>
                <Route index element={<GuestHomePage />} />
                <Route path="/login-type" element={<SignInType />} />
                <Route path="/login-client" element={<SignInClient />} />
                <Route
                  path="/login-freelancer"
                  element={<SignInFreelancer />}
                />
                <Route path="/register-type" element={<RegisterType />} />
                <Route path="/register-client" element={<SignUpClient />} />
                <Route path="/register-admin" element={<RegisterAdmin />} />
                <Route path="/login-admin" element={<LoginAdmin />} />
                <Route
                  path="/register-freelancer"
                  element={<SignUpFreelancer />}
                />
                <Route
                  path="/forgot-password-client"
                  element={<ForgotPasswordClient />}
                />
                <Route
                  path="/forgot-password-freelancer"
                  element={<ForgotPasswordFreelancer />}
                />
              



                <Route path="/exchange-skills">
                  <Route index element={<GuestExchangeSkillsList />} />
                  <Route
                    path="exchange-skills-details"
                    element={<GuestExchangeSkillsDetails />}
                  />
                </Route>
                <Route path="/jobs">
                  <Route index element={<GuestJobsList />} />
                  <Route path="job-details" element={<GuestJobDetails />} />
                </Route>
                <Route path="/freelancers">
                  <Route index element={<GuestFreelancersList />} />
                  <Route
                    path="freelancer-details"
                    element={<GuestFreelancerDetails />}
                  />
                </Route>
                <Route path="/faqs" element={<FAQ />} />
                <Route path="/help-support" element={<HelpAndSupport />} />
                <Route path="/privacy-policies" element={<PrivacyPolicies />} />
                <Route path="/team" element={<Team />} />
                <Route
                  path="/terms-conditions"
                  element={<TermsAndConditions />}
                />
              </Route>
            ) : null}
            {/* End Guest Routes */}
            {/* Start Freelancer Protected Routes */}
            {!isObjectEmpty(freelancer) && token ? (
              <Route path="/freelancer" element={<Navbar />}>
                {/* Profile */}
                <Route index element={<ProfilePage />} />
                <Route
                  path="create-freelancer-profile/:id"
                  element={<CreateFreelancerProfile />}
                />

                {/* Ongoing Work pages */}
                <Route
                  path="ongoing-exchange-skill"
                  element={<OngoingExchangeSkill />}
                />
                <Route path="ongoing-gig" element={<OngoingGig />} />
                <Route path="ongoing-job" element={<OngoingJob />} />

                {/* Footer Pages */}
                <Route path="faqs" element={<FAQ />} />
                <Route path="help-support" element={<HelpAndSupport />} />
                <Route path="privacy-policies" element={<PrivacyPolicies />} />
                <Route path="team" element={<Team />} />
                <Route
                  path="terms-conditions"
                  element={<TermsAndConditions />}
                />

                {/* Jobs */}
                <Route path="jobs">
                  <Route index element={<JobsList />} />
                  <Route path="job-details" element={<JobDetails />} />
                </Route>

                <Route
                  path="send-proposal-form"
                  element={<SendProposalForm />}
                />

                <Route
                  path="edit-proposal-form"
                  element={<EditProposalForm />}
                />
                <Route path="proposal-details" element={<Proposal />} />

                {/* ExchangeSkills */}
                <Route path="exchange-skills">
                  <Route index element={<ExchangeSkillsList />} />
                  <Route
                    path="exchange-skills-details"
                    element={<ExchangeSkillsDetails />}
                  />
                  <Route
                    path="my-exchange-skills-details"
                    element={<MyExchangeSkillsDetails />}
                  />
                  <Route path="add" element={<AddExchangeSkillForm />} />
                  <Route path="edit" element={<EditExchangeSkillForm />} />
                </Route>
                <Route path="send-request-form" element={<SendRequestForm />} />

                <Route path="edit-request-form" element={<EditRequestForm />} />
                {/* <Route path="details" element={<ProfilePage />} /> */}
                <Route
                  path="received-request-details"
                  element={<ReceivedRequestDetails />}
                />
                <Route
                  path="submitted-request-details"
                  element={<SubmitRequestDetails />}
                />

                {/* Gigs */}
                <Route path="gigs">
                  <Route path="gig-details" element={<GigDetails />} />
                  <Route path="add" element={<AddGigForm />} />
                  <Route path="edit" element={<EditGigForm />} />
                </Route>

                {/* Blogs */}
                <Route path="blogs">
                  <Route index element={<BlogsList />} />
                  <Route path="blog-details" element={<BlogDetails />} />
                  <Route path="add" element={<AddBlogForm />} />
                  <Route path="edit" element={<EditBlogForm />} />
                </Route>

                {/* Dashboard */}
                <Route
                  path="freelancer-dashboard"
                  element={<FreelancerDashBoard />}
                >
                  <Route index element={<MyHome />} />
                  <Route path="find-work" element={<FindWork />} />
                  <Route path="my-gigs" element={<MyGigs />} />
                  <Route
                    path="my-exchange-skills"
                    element={<MyExchangeSkills />}
                  />
                  <Route
                    path="my-exchange-skills-requests"
                    element={<MyExchangeSkillsRequests />}
                  />

                  <Route
                    path="my-submitted-exchange-skills-requests"
                    element={<MySubmittedExchangeSkillsRequests />}
                  />

                  <Route path="my-blogs" element={<MyBlogs />} />
                  <Route path="my-proposals" element={<MyProposals />} />
                  <Route path="my-reports" element={<MyReports />} />
                </Route>

                {/* Notifications Page */}
                <Route path="notifications" element={<Notifications />} />

                {/* ChatPage */}
                <Route path="messages" element={<ChatPage />} />

                {/* Settings Screen */}
                <Route path="settings" element={<SettingsDashBoard />}>
                  <Route index element={<AccountSettings />} />
                  <Route path="security" element={<SecuritySettings />} />
                  <Route
                    path="edit/profile"
                    element={<EditFreelancerProfile />}
                  />
                  <Route path="verification" element={<Verification />} />
                  <Route path="add-payment" element={<PaymentMethods />} />
                </Route>
              </Route>
            ) : null}
            {/* End Freelancer Protected Routes */}
            {/* Start Client Protected Routes */}
            {!isObjectEmpty(client) && token ? (
              <Route path="/client" element={<ClientNavbar />}>
                <Route index element={<ClientProfilePage />} />

                <Route
                  path="create-client-profile/:id"
                  element={<CreateClientProfile />}
                />

                {/* Footer Pages */}
                <Route path="faqs" element={<FAQ />} />
                <Route path="help-support" element={<HelpAndSupport />} />
                <Route path="privacy-policies" element={<PrivacyPolicies />} />
                <Route path="team" element={<Team />} />
                <Route
                  path="terms-conditions"
                  element={<TermsAndConditions />}
                />

                {/* On going Pages */}
                <Route path="ongoing-gig" element={<OngoingGigClient />} />
                <Route path="ongoing-job" element={<OngoingJobClient />} />

                {/* Projects */}
                <Route path="create-project" element={<CreateProject />} />
                <Route path="edit-project" element={<EditProject />} />
                <Route
                  path="proposal-details"
                  element={<ClientPageProposalDetails />}
                />

                <Route path="job-details" element={<ClientPageJobDetails />} />

                {/* FreelancersList */}
                <Route path="freelancers">
                  <Route index element={<FreelancerList />} />

                  <Route
                    path="freelancer-details"
                    element={<ClientPageFreelancerDetails />}
                  />
                </Route>

                {/* Gigs */}
                <Route path="gigs">
                  <Route index element={<GigListClientPage />} />
                  <Route
                    path="gig-details"
                    element={<GigDetailsClientPage />}
                  />
                </Route>

                {/* Blogs */}
                <Route path="blogs">
                  <Route index element={<BlogListClientPage />} />
                  <Route
                    path="blog-details"
                    element={<BlogDetailsClientPage />}
                  />
                </Route>

                {/* Client Dashboard */}
                <Route path="client-dashboard" element={<ClientDashBoard />}>
                  <Route index element={<ClientHome />} />
                  <Route path="find-gigs" element={<FindGigs />} />
                  <Route
                    path="my-posted-projects"
                    element={<PostedProjects />}
                  />

                  <Route
                    path="project-proposals"
                    element={<ProjectProposals />}
                  />
                  <Route path="my-reports" element={<ClientReports />} />
                </Route>

                {/* Notifications Page */}
                <Route path="notifications" element={<ClientNotifications />} />

                {/* ChatPage */}
                <Route path="messages" element={<ClientChatPage />} />

                {/* Settings Screen */}
                <Route path="settings" element={<ClientSettingsDashBoard />}>
                  <Route index element={<ClientAccountSettings />} />
                  <Route path="security" element={<ClientSecuritySettings />} />
                  <Route
                    path="edit/profile/:id"
                    element={<EditClientProfile />}
                  />
                  <Route path="verification" element={<ClientVerification />} />
                  <Route
                    path="add-payment"
                    element={<ClientPaymentMethods />}
                  />
                </Route>
              </Route>
            ) : null}
            {/* End Client Protected Routes */}
            {/* Start Admin Protected Routes */}
            {!isObjectEmpty(admin) && token ? (
              <Route path="/admin" element={<AdminNavbar />}>
                <Route path="messages" element={<ChatPageAdmin />} />
                <Route
                  path="freelancer-details"
                  element={<FreelancerDetails />}
                />
                <Route path="client-details" element={<ClientDetails />} />
                <Route
                  path="exchange-skill-details"
                  element={<ViewExchangeSkill />}
                />
                <Route path="job-details" element={<ViewJobDetails />} />
                <Route path="gig-details" element={<ViewGigDetails />} />
                <Route path="blog-details" element={<ViewBlogDetails />} />
                <Route
                  path="request-details"
                  element={<ViewRequestDetails />}
                />
                <Route
                  path="proposal-details"
                  element={<ViewProposalDetails />}
                />
                <Route path="gig-order-details" element={<GigOrderDetails />} />

                <Route path="job-order-details" element={<JobOrderDetails />} />
                <Route
                  path="exchange-skill-order-details"
                  element={<ExchangeSkillsOrderDetails />}
                />

                {/* Admin DashBoard */}
                <Route path="admin-dashboard" element={<AdminDashBoard />}>
                  <Route index element={<FreelancersList />} />
                  <Route path="clients-list" element={<ClientsList />} />
                  <Route path="gigs-list" element={<GigsList />} />
                  <Route
                    path="exchange-skills-list"
                    element={<AllExchangeSkills />}
                  />
                  <Route path="jobs-list" element={<AllJobs />} />

                  <Route path="blogs-list" element={<AllBlogs />} />
                  <Route
                    path="job-proposals-list"
                    element={<JobProposalsList />}
                  />
                  <Route
                    path="exchange-skills-request-list"
                    element={<ExchangeSkillsRequestList />}
                  />
                  <Route path="orders-list" element={<AllOrders />} />
                  <Route
                    path="freelancers-reviews-list"
                    element={<AllFreelancersReviews />}
                  />

                  <Route path="blog-comments" element={<AllBlogsComments />} />
                  <Route
                    path="blogs-reply-comments"
                    element={<AllBlogsReplyComments />}
                  />
                </Route>
              </Route>
            ) : null}
            {/* End Admin Protected Routes */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};
export default App;
