const express = require("express");
const router = express.Router();
const {
  getClients,
  updateClientAccount,
  updateClientProfile,
  deleteClient,
  getOneClient,
  loginClient,
  registerClient,
  verifyEmail,
  forgotPassword,
  resetPassword,
  sendVerificationToken,
  getClientPayment,
  deleteClientPayment,
} = require("../controllers/clientController");
const { protect } = require("../middleware/authMiddleware");
const { isResetTokenValid } = require("../utils/verifyPasswordToken");

const multer = require("multer");

const upload = multer({
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

router.route("/forgot-password").post(forgotPassword);
router.route("/").get(protect, getClients);

router.route("/verify-token").get(isResetTokenValid, resetPassword);
router.route("/reset-password").post(isResetTokenValid, resetPassword);

router
  .route("/:id")
  .get(protect, getOneClient)
  .put(protect, updateClientAccount)
  .delete(protect, deleteClient);

router
  .route("/profile/:id")
  .put(protect, upload.single("photo"), updateClientProfile);

router.route("/register").post(registerClient);
router.route("/login").post(loginClient);
router.route("/verify").post(verifyEmail);
router
  .route("/send-verification-token/:id")
  .post(protect, sendVerificationToken);

router
  .route("/client-payment/:id")
  .get(protect, getClientPayment)
  .delete(protect, deleteClientPayment);

module.exports = router;
