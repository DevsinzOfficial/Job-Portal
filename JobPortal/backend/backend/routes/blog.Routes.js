const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { isResetTokenValid } = require("../utils/verifyPasswordToken");
const {
  addblog,
  get_all_blogs,
  add_comment,
  reply_comment,
  updateblog,
  get_freelancer_blogs,
  deleteblog,
  getMyBlogs,
  reply_comment_freelancer,
} = require("../controllers/blog.controller");

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

const multerFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[1] === "jpeg") {
    cb(null, true);
  } else {
    cb(new Error("Not a jpg File!!"), false);
  }
};

upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

/* photo for cloudinary */

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

// add Blog
router.route("/add_blog").post(protect, uploadImage.single("photo"), addblog);

// update blog by by freelancer
router
  .route("/update_blog/:blog_id")
  .patch(protect, uploadImage.single("photo"), updateblog);

// Only client can see all blogs
router.route("/get_all_blogs").get(protect, get_all_blogs);

// get all blogs for freelancer except its own blogs
router.route("/get_freelancer_blogs").get(protect, get_freelancer_blogs);

// get all blogs jo freelancerne create kiye
router.route("/getMyBlogs").get(protect, getMyBlogs);

// Only client can comment on freelancer blog
router.route("/comment/:blog_id").post(protect, add_comment);

// Only client can reply to comments on freelancer blog
router.route("/replycomment/:blog_id/:comment_id").post(protect, reply_comment);

// Only freelancer can reply to comments on freelancer blog
router
  .route("/replycommentfreelancer/:blog_id/:comment_id")
  .post(protect, reply_comment_freelancer);

// delete blog with id // freelancer only
router.route("/deleteblog/:blog_id").delete(protect, deleteblog);

module.exports = router;
