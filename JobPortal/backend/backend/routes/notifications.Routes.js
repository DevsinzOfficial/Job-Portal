const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { isResetTokenValid } = require("../utils/verifyPasswordToken");
const {
  read_notification,
  read_notification_freelancer,
} = require("../controllers/notificationsController");

// read notifications
router.route("/notification").get(protect, read_notification);

// read notifications freelancer
router
  .route("/notification/freelancer")
  .get(protect, read_notification_freelancer);

module.exports = router;
