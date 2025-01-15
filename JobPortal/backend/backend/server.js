const path = require("path");
const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const { protect } = require("./middleware/authMiddleware");
const Conversation = require("./models/conversationModel");
const Message = require("./models/messageModel");

connectDB();
const app = express();
const server = require("http").Server(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const port = process.env.PORT || 5000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(errorHandler);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.post("/api/conversations", protect, async (req, res) => {
  try {
    // Check if a conversation with the same participants already exists
    const existingConversation = await Conversation.findOne({
      $or: [
        {
          freelancer1: { $in: req.body.freelancer1 },
          freelancer2: { $in: req.body.freelancer2 },
        },
        {
          client1: { $in: req.body.client1 },
          client2: { $in: req.body.client2 },
        },
        {
          admin1: { $in: req.body.admin1 },
          admin2: { $in: req.body.admin2 },
        },
      ],
    });

    if (existingConversation) {
      // If a conversation with the same participants already exists, return an error message
      res.status(400).send({ error: "Conversation already exists" });
    } else {
      // If a conversation with the same participants does not exist, create a new one
      const conversation = new Conversation({
        freelancer1: req.body.freelancer1,
        client1: req.body.client1,
        admin1: req.body.admin1,
        freelancer2: req.body.freelancer2,
        client2: req.body.client2,
        admin2: req.body.admin2,
      });
      await conversation.save();
      res.send(conversation);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/conversations", protect, async (req, res) => {
  try {
    // Find the conversations with the specified users as participants
    const conversations = await Conversation.find({
      $or: [
        { freelancer1: { $in: req.query.participants } },
        { freelancer2: { $in: req.query.participants } },
        { client1: { $in: req.query.participants } },
        { client2: { $in: req.query.participants } },
        { admin1: { $in: req.query.participants } },
        { admin2: { $in: req.query.participants } },
      ],
    })
      .populate("freelancer1")
      .populate("freelancer2")
      .populate("client1")
      .populate("client2")
      .populate("admin1")
      .populate("admin2")
      .exec();
    res.send(conversations);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/conversations/:id/messages", protect, async (req, res) => {
  try {
    // Find the conversation
    const conversation = await Conversation.findById(req.params.id);
    if (!conversation) {
      res.status(404).send("Conversation not found");
      return;
    }

    // Find the messages for the conversation
    const messages = await Message.find({ conversationId: conversation._id })
      .populate("sender_freelancer")
      .populate("sender_client")
      .populate("sender_admin")
      .populate("receiver_freelancer")
      .populate("receiver_client")
      .populate("receiver_admin")
      .exec();
    res.send(messages);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create a route to send a message in a specific conversation
app.post("/conversations/:id/messages", protect, async (req, res) => {
  try {
    // Find the conversation
    const conversation = await Conversation.findById(req.params.id);
    if (!conversation) {
      res.status(404).send("Conversation not found");
      return;
    }
    const message = new Message({
      conversationId: conversation._id,
      sender_freelancer: req.body.sender_freelancer,
      sender_client: req.body.sender_client,
      sender_admin: req.body.sender_admin,
      receiver_freelancer: req.body.receiver_freelancer,
      receiver_client: req.body.receiver_client,
      receiver_admin: req.body.receiver_admin,
      content: req.body.content,
      createdAt: new Date(),
    });
    await message.save();

    // Send the message to all participants in real-time using socket.io
    io.emit(conversation._id, message);

    res.send(message);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/messages", protect, async (req, res) => {
  try {
    // Find the conversations with the specified users as participants
    const messages = await Message.find({
      $or: [
        { sender_freelancer: { $in: req.query.participants } },
        { sender_client: { $in: req.query.participants } },
        { sender_admin: { $in: req.query.participants } },
        { receiver_freelancer: { $in: req.query.participants } },
        { receiver_client: { $in: req.query.participants } },
        { receiver_admin: { $in: req.query.participants } },
      ],
    })
      .populate("sender_freelancer")
      .populate("sender_client")
      .populate("sender_admin")
      .populate("receiver_freelancer")
      .populate("receiver_client")
      .populate("receiver_admin")
      .exec();
    res.send(messages);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.use("/api/client", require("./routes/clientRoutes"));
app.use("/api/freelancer", require("./routes/freelancerRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/job", require("./routes/jobRoutes"));
app.use("/api/blog", require("./routes/blog.Routes"));
app.use("/api/gig", require("./routes/gig.Routes"));
app.use("/api", require("./routes/notifications.Routes"));

app.get("/", (req, res) => {
  res.send("Hello ZAIR");
});

app.post("/payment", protect, async (req, res) => {
  const paymentModel = require("./models/payment");
  const Client = require("./models/clientModel");
  const Freelancer = require("./models/freelancerModel");

  const Stripe = require("stripe");
  /*  const stripe = process.env.stripeKey; */

  const stripe = Stripe(
    "sk_test_51M17OIK5zumRq0HzNjxrHefwzzbsBtJR5BUAHMaJ9HmI9GMqbBFFVc44AuQZG7UOMl9NagpyuuYNKzTDS6R0Yean00p4oej8zP"
  );

  if (!req.client && !req.freelancer) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  let id = req.client ? req.client._id : req.freelancer._id;
  id = req.freelancer ? req.freelancer._id : req.client._id;

  let doc1 = await Client.findOne({ _id: id });
  let doc2 = await Freelancer.findOne({ _id: id });

  if (!doc1 && !doc2) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  const {
    name,
    email,
    card_Name,
    card_ExpYear,
    card_ExpMonth,
    card_Number,
    card_CVC,
  } = req.body;

  if (
    !name ||
    !email ||
    !card_Name ||
    !card_ExpYear ||
    !card_ExpMonth ||
    !card_Number ||
    !card_CVC
  ) {
    return res.status.json("please add all the Required field");
  }

  try {
    const customer = await stripe.customers.create({
      name: name,
      email: email,
    });

    if (customer) {
      const card_Token = await stripe.tokens.create({
        card: {
          name: card_Name,
          number: card_Number,
          exp_month: card_ExpMonth,
          exp_year: card_ExpYear,
          cvc: card_CVC,
        },
      });

      if (!card_Token) {
        res.status(400).json("Error While adding Card");
      }

      const card = await stripe.customers.createSource(customer.id, {
        source: `${card_Token.id}`,
      });

      const cardDetails = await paymentModel.create({
        CardDetails: {
          name: name,
          email: email,
          customerId: customer.id,
          cardId: card.id,
        },
        userId: id,
      });

      if (!cardDetails) {
        res.status(400).json("Error while adding to database");
      }

      res.status(201).json(cardDetails);
    }
  } catch (error) {
    throw new Error(error);
  }
});
