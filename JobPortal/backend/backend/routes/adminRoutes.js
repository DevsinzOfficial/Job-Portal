const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  getFreelancers,
  getClients,
  getExchangeSkills,
  getProposal,
  deleteFreelancer,
  deleteClients,
  deleteExchangeSkills,
  getJobs,
  getGigs,
  getBlogs,
  deleteBlogs,
  deleteJobs,
  deleteGigs,
  getJobProposals,
  getExchangeSkillsRequests,
  getAllOrders,
  getBlogComments,
  getBlogReplies,
  getFreelancerReviews,
  getClientReviews,
  deleteJobProposals,
  deleteExchangeSkillsRequests,
  deleteOrders,
  deleteFreelancerReviews,
  deleteClientReviews,
  deleteBlogComments,
  deleteBlogReplies,
} = require("../controllers/adminController");
const { protect } = require("../middleware/authMiddleware");

router.route("/register").post(registerAdmin); //register api

router.route("/login").post(loginAdmin); //login  api

router.route("/freelancers").get(protect, getFreelancers); //get freeelancers

router.route("/clients").get(protect, getClients); // get clients

router.route("/ExchangeSkills").get(protect, getExchangeSkills); // get Exchange Skills

/* new routes */
router.route("/jobProposals").get(protect, getJobProposals); // get All Jobs Proposal
router.route("/jobProposal/:_id").delete(protect, deleteJobProposals); // delete Job Proposal

router
  .route("/exchange-skills-proposals")
  .get(protect, getExchangeSkillsRequests); // get All ExchangeSkills Proposals

router
  .route("/exchange-skills-proposal/:_id")
  .delete(protect, deleteExchangeSkillsRequests); // delete ExchangeSkills Proposals

router.route("/orders").get(protect, getAllOrders); // get All Orders
router.route("/order/:_id").delete(protect, deleteOrders); // delete Order

router.route("/blog-comments").get(protect, getBlogComments); // get All Comments
router.route("/blog-comment/:_id").delete(protect, deleteBlogComments); // delete Comments

router.route("/blog-replies").get(protect, getBlogReplies); // get All Reply Comments
router.route("/blog-replies/:_id").delete(protect, deleteBlogReplies); // delete Reply Comments

router.route("/freelancer-reviews").get(protect, getFreelancerReviews); // get All Freelancer Reviews
router
  .route("/freelancer-reviews/:_id")
  .delete(protect, deleteFreelancerReviews); // delete Freelancer Reviews

router.route("/client-reviews").get(protect, getClientReviews); // get All Client Reviews
router.route("/client-review/:_id").delete(protect, deleteClientReviews); // delete Client Reviews

/* end new routes */

router.route("/jobs").get(protect, getJobs); // get jobs
router.route("/job/:_id").delete(protect, deleteJobs); // get blogs

router.route("/gigs").get(protect, getGigs); // get gigs
router.route("/gig/:_id").delete(protect, deleteGigs); // get blogs

router.route("/blogs").get(protect, getBlogs); // get blogs

router.route("/blog/:_id").delete(protect, deleteBlogs); // delete blogs

router.route("/proposals").get(protect, getProposal); // get propsoals one exchange skills

router.route("/freelancer/:_id").delete(protect, deleteFreelancer); // delete freelancer

router.route("/client/:_id").delete(protect, deleteClients); // delete client

router.route("/ExchangeSkills/:_id").delete(protect, deleteExchangeSkills);

module.exports = router;
