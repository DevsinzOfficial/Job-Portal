const express = require("express");
const router = express.Router();
const {
  addJob,
  getAllJobs,
  updateJob,
  deletejob,
  submitProposal,
  getJobProposalsForFreelancer,
  updateProposals,
  getJobProposalsForClient,
  getOneJob,
  getJobForFreelancer,
  acceptJobProposal,
  rejectJobProposal,
  getMyJobs,
  getJobProposalsForSingleJob,
  getJobProposalsForFreelancerSingleJob,
  getGuestJobs,
  deleteProposal,
} = require("../controllers/jobController");
const { protect } = require("../middleware/authMiddleware");

const multer = require("multer");
let upload = multer({ dest: "uploads/" });
//Configuration for Multer
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `/${file.fieldname}-${Date.now()}.${ext}`);
  },
});

/* const multerFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[1] === "pdf") {
    cb(null, true);
  } else {
    cb(new Error("Not a PDF File!!"), false);
  }
}; */

upload = multer({
  storage: multerStorage,
  /* fileFilter: multerFilter, */
});

router
  .route("/client-proposals")
  .get(protect, getJobProposalsForClient); /* with auth and client id */

router
  .route("/freelancer-proposals")
  .get(protect, getJobProposalsForFreelancer); /* with auth and freelancer id */

router.route("/freelancer_job").get(protect, getJobForFreelancer); // get job  for freelancer in profile

router.route("/:_id").delete(protect, deletejob); //   //delete job

router.route("/").post(protect, addJob); //addjob

router.route("/").get(protect, getAllJobs); //getall jobs

router.route("/guest-jobs").get(getGuestJobs); //get Guest jobs

router.route("/my-jobs").get(protect, getMyJobs); //get my jobs client

router.route("/:_id").get(protect, getOneJob); //getone jobs

router.route("/:_id").patch(protect, updateJob); //update job

router
  .route("/submitProposal")
  .post(protect, upload.single("attachment"), submitProposal); //send  proposal

router
  .route("/proposal/:_id")
  .patch(protect, upload.single("attachment"), updateProposals); //update  proposal

// delete proposal with id // freelancer only
router.route("/deleteProposal/:_id").delete(protect, deleteProposal);

router.route("/proposal/accept/:_id").patch(protect, acceptJobProposal); //acept proposal

router.route("/proposal/reject/:_id").patch(protect, rejectJobProposal); //reject proposal

router
  .route("/proposals/:_id")
  .get(protect, getJobProposalsForFreelancerSingleJob); // get job proposals for freelancer with job id

router
  .route("/client_proposals/:_id")
  .get(protect, getJobProposalsForSingleJob); //  // get job proposals for client with job id

//  // get job proposals for client

module.exports = router;
