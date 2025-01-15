const express = require("express");
const router = express.Router();
const {
  getFreelancers,
  updateFreelancerAccount,
  updateFreelancerProfile,
  deleteFreelancer,
  getOneFreelancer,
  loginFreelancer,
  registerFreelancer,
  verifyEmail,
  forgotPassword,
  resetPassword,
  addExchangeSkills,
  getAllExchangeSkills,
  updateExchangeSkills,
  getExchangeSkill,
  submitProposal,
  getProposals,
  exchangeSkillsList,
  updateProposal,
  acceptProposals,
  rejectProposals,
  contourProposals,
  getProposalsForFreelancer2,
  getOneProposal,
  getGuestFreelancers,
  getGuestExchangeSkills,
  deleteExchangeSkill,
  getSubmittedExchangeSkillsRequestsForFreelancer,
  getReceivedExchangeSkillsRequestsForFreelancer,
  deleteRequest,
  sendVerificationToken,
  getFreelancerPayment,
  deleteFreelancerPayment,
} = require("../controllers/freelancerController");
const { protect } = require("../middleware/authMiddleware");
const proposal = require("../models/proposalModel");
const { isResetTokenValid } = require("../utils/verifyPasswordTokenFreelancer");
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

/* photo cloudinary multer  */

const uploadImage = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: function (req, file, done) {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      done(null, true);
    } else {
      var newError = new Error("please select an image");
      newError.name = "MulterError";
      done(newError, false);
    }
  },
});

// Exchange skills apis  start

router.route("/guest-exchangeskills").get(getGuestExchangeSkills); // get all Exchage skills  list for guests

router
  .route("/ExchangeSkills")
  .post(protect, uploadImage.single("attachments"), addExchangeSkills) //add Exchange skill
  .get(protect, getAllExchangeSkills) // get all Exchage skills  list
  .patch(protect, updateExchangeSkills); // // update Exchage skill

// delete exchange skill with id // freelancer only
router.route("/deleteExchangeSkill/:_id").delete(protect, deleteExchangeSkill);

// get exchange skills list which is posted by fiver and this will show for whom it poasted
router.route("/exchangeSkillsList").get(protect, exchangeSkillsList);

// get one exchane skills  deatils of
router.route("/ExchangeSkills/Details").get(protect, getExchangeSkill);

// send proposal
router
  .route("/proposal")
  .post(protect, upload.single("attachment"), submitProposal) //submit proposal
  .get(protect, getProposals) //  get proposal for freelancer  2  who submit proposal
  .patch(protect, upload.single("attachment"), updateProposal); //update proposal

router
  .route("/submitted-requests")
  .get(
    protect,
    getSubmittedExchangeSkillsRequestsForFreelancer
  ); /* get all submitted requests */

router
  .route("/received-requests")
  .get(
    protect,
    getReceivedExchangeSkillsRequestsForFreelancer
  ); /* get all received requests */

//  get proposals for freelancer  2  who submit proposal
router.route("/proposals").get(protect, getProposalsForFreelancer2);

//  get onee proposals for freelancer  2 and freelancer 1
router.route("/proposal/Detail").get(protect, getOneProposal);

// accept proposal
router.route("/proposal/accept/:_id").patch(protect, acceptProposals);

// reject proposal
router.route("/proposal/reject/:_id").patch(protect, rejectProposals);

// delete proposal with submitted freelancer only
router.route("/deleteRequest/:_id").delete(protect, deleteRequest);

// contour proposal
router.route("/proposal/contour").patch(protect, contourProposals);

// Exchange skills apis  end

router.route("/forgot-password").post(forgotPassword);

router.route("/").get(protect, getFreelancers); /* get freelancer in auth */

router
  .route("/guest-freelancers")
  .get(getGuestFreelancers); /* get freelancers in guest  */
router.route("/verify-token").get(isResetTokenValid, resetPassword);

router
  .route("/:id")
  .get(protect, getOneFreelancer)
  .put(protect, updateFreelancerAccount)
  .delete(protect, deleteFreelancer);

router
  .route("/profile/:id")
  .put(protect, uploadImage.single("photo"), updateFreelancerProfile);

router.route("/register").post(registerFreelancer);

router.route("/login").post(loginFreelancer);

router.route("/verify").post(verifyEmail);

router
  .route("/send-verification-token/:id")
  .post(protect, sendVerificationToken);

router.route("/reset-password").post(isResetTokenValid, resetPassword);

router
  .route("/freelancer-payment/:id")
  .get(protect, getFreelancerPayment)
  .delete(protect, deleteFreelancerPayment);

module.exports = router;
