const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    freelancer1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Freelancer",
    },
    client1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
    admin1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "admin",
    },
    freelancer2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Freelancer",
    },
    client2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
    admin2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "admin",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Conversation", conversationSchema);
