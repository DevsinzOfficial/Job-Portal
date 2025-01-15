const mongoose = require("mongoose");

const RCommentsSchema = mongoose.Schema(
  {
    Rcomment: {
      type: String,
    },
    client_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
      },
    ],
    freelancer_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Freelancer",
      },
    ],
    Blog_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blogs",
      },
    ],
    Comment_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("reply_comment", RCommentsSchema);
