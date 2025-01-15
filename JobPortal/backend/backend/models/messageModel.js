const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  conversationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Conversation",
  },
  content: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  sender_freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Freelancer",
  },
  sender_client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  sender_admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admin",
  },
  receiver_freelancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Freelancer",
  },
  receiver_client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
  receiver_admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admin",
  },
});

module.exports = mongoose.model("Message", messageSchema);
