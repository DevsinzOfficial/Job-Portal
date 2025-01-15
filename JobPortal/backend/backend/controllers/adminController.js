const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
//models
const Admin = require("../models/adminModel");
const Client = require("../models/clientModel");
const Freelancer = require("../models/freelancerModel");
const ExchangeSkills = require("../models/exchangeSkills");
const proposalModel = require("../models/proposalModel");
const jobProposalModel = require("../models/jobProposal");
const exchangeSkills = require("../models/exchangeSkills");
const jobModel = require("../models/jobModel");
const gigModel = require("../models/gigModel");
const blogModel = require("../models/BlogModel");
const orderModel = require("../models/orderModel");
const freelancerReviewsModel = require("../models/FreelancerReviews");
const clientReviewsModel = require("../models/ClientReviews");
const blogCommentsModel = require("../models/commentModel");
const blogReplyCommentsModel = require("../models/RCommentsModel");
const Payment = require("../models/payment");

//REGISTER admin

const registerAdmin = async (req, res) => {
  const { username, email, password, secret } = req.body;

  if (!username || !email || !password || !secret) {
    return res.status(400).json("Please add all fields");
  }

  const adminExists = await Admin.findOne({ email });

  if (adminExists) {
    return res.status(403).json({ errorMessage: "Admin already exists" });
  }

  if (secret == process.env.ADMINSECRET) {
    const admin = await Admin.create({
      username,
      email,
      password,
      isAdmin: true,
    });

    if (!admin) {
      return res.status(400).json({ errorMessage: "Invalid Admin data" });
    }

    const { _id, Email, isAdmin } = admin;

    const token = jwt.sign({ _id, type: "admin" }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    return res.status(201).json({
      _id: admin._id,
      email: Email,
      token: token,
      isAdmin: isAdmin,
    });
  } else {
    return res
      .status(400)
      .json({ errorMessage: "Please Enter correct Secret Value" });
  }
};

// admin login
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for freelancer email
  const admin = await Admin.findOne({ email });

  if (admin && (await bcrypt.compare(password, admin.password))) {
    const { _id, Email } = admin;

    res.json({
      _id: admin.id,
      email: admin.email,
      token: jwt.sign({ _id, type: "admin" }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      }),
    });
  } else {
    return res.status(401).json({ errorMessage: "Invalid Admin Credentials" });
  }
});

//   get freelancer
const getFreelancers = asyncHandler(async (req, res) => {
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let response = await Freelancer.find();

  if (response) {
    return res.status(200).json(response);
  } else {
    return res.status(400).json({ errorMessage: "Error Occured" });
  }
});

//   get Clients
const getClients = asyncHandler(async (req, res) => {
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let response = await Client.find();

  if (response) {
    return res.status(200).json(response);
  } else {
    return res.status(404).json({ errorMessage: "Error Occured" });
  }
});

//   get  ExchangeSkills
const getExchangeSkills = asyncHandler(async (req, res) => {
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let response = await ExchangeSkills.find().populate("freelancer");

  if (response) {
    return res.status(200).json(response);
  } else {
    return res.status(404).json({ errorMessage: "Error Occured" });
  }
});

//   get  proposals of one  Exchange skills
const getProposal = asyncHandler(async (req, res) => {
  const _id = req.body._id;
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let response = await proposalModel
    .find({ ExchangeSkillsId: _id })
    .populate("exchangeSkillsId")
    .populate("submittedBy")
    .populate("freelancer");

  if (response) {
    return res.status(200).json(response);
  } else {
    return res.status(404).json({ errorMessage: "Error Occured" });
  }
});

//   delete freelancer
const deleteFreelancer = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let freelancer = await Freelancer.findOne({ _id: _id });

  if (freelancer) {
    let response = await Freelancer.deleteOne({ _id: _id });

    if (response.deletedCount == 1) {
      return res.status(200).json("Freelancer Successfully Deleted");
    } else {
      return res.status(400).json({ errorMessage: "Error Occured" });
    }
  } else {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }
});

//   delete clinets
const deleteClients = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let client = await Client.findOne({ _id: _id });

  if (client) {
    let response = await Client.deleteOne({ _id: _id });

    if (response.deletedCount == 1) {
      return res.status(200).json("Client Successfully Deleted");
    } else {
      return res.status(400).json({ errorMessage: "Error Occured" });
    }
  } else {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }
});

//   delete  ExchangeSkills
const deleteExchangeSkills = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let exchangeSkill = await exchangeSkills.findOne({ _id: _id });

  if (exchangeSkill) {
    let result = await exchangeSkills.deleteOne({ _id: _id });

    let response = await proposalModel.deleteMany({ ExchangeSkillsId: _id });
    return res
      .status(200)
      .json(
        `Exchange Skills And ${response.deletedCount} Submitted Proposals On Exchange Skills  Successfully Deleted`
      );
  } else {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }
});

//   get  job
const getJobs = asyncHandler(async (req, res) => {
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let response = await jobModel.find().populate("client");

  if (response) {
    return res.status(200).json(response);
  } else {
    return res.status(404).json({ errorMessage: "Error Occured" });
  }
});

//   delete jobs
const deleteJobs = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let job = await jobModel.findOne({ _id: _id });

  if (job) {
    let response = await jobModel.deleteOne({ _id: _id });

    if (response.deletedCount == 1) {
      return res.status(200).json("Client Successfully Deleted");
    } else {
      return res.status(400).json({ errorMessage: "Error Occured" });
    }
  } else {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }
});

//   get  gig
const getGigs = asyncHandler(async (req, res) => {
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let response = await gigModel.find().populate("freelancer");

  if (response) {
    return res.status(200).json(response);
  } else {
    return res.status(404).json({ errorMessage: "Error Occured" });
  }
});

//   delete jobs
const deleteGigs = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let gig = await gigModel.findOne({ _id: _id });

  if (gig) {
    let response = await gigModel.deleteOne({ _id: _id });

    if (response.deletedCount == 1) {
      return res.status(200).json("Client Successfully Deleted");
    } else {
      return res.status(400).json({ errorMessage: "Error Occured" });
    }
  } else {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }
});

//   get  blogs
const getBlogs = asyncHandler(async (req, res) => {
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let response = await blogModel.find().populate("freelancer");

  if (response) {
    return res.status(200).json(response);
  } else {
    return res.status(404).json({ errorMessage: "Error Occured" });
  }
});

//   delete blogs
const deleteBlogs = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let blog = await blogModel.findOne({ _id: _id });

  if (blog) {
    let response = await blogModel.deleteOne({ _id: _id });

    if (response.deletedCount == 1) {
      return res.status(200).json("Client Successfully Deleted");
    } else {
      return res.status(400).json({ errorMessage: "Error Occured" });
    }
  } else {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }
});

/// get al  job proposals with auth of admin
const getJobProposals = asyncHandler(async (req, res) => {
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let response = await jobProposalModel
    .find()
    .populate("job")
    .populate("submittedBy");

  if (response) {
    return res.status(200).json(response);
  } else {
    return res.status(404).json({ errorMessage: "Error Occured" });
  }
});

//   delete  JobProposals
const deleteJobProposals = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let jobProposal = await jobProposalModel.findOne({ _id: _id });

  if (jobProposal) {
    let response = await jobProposalModel.deleteOne({ _id: _id });

    if (response.deletedCount == 1) {
      return res.status(200).json("Job Proposal  Successfully Deleted");
    } else {
      return res.status(400).json({ errorMessage: "Error Occured" });
    }
  } else {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }
});

////// get all exchange skills requests with auth of admin
const getExchangeSkillsRequests = asyncHandler(async (req, res) => {
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let response = await proposalModel
    .find()
    .populate("exchangeSkillsId")
    .populate("submittedBy")
    .populate("freelancer");

  if (response) {
    return res.status(200).json(response);
  } else {
    return res.status(404).json({ errorMessage: "Error Occured" });
  }
});

//   delete  deleteExchangeSkillsRequests
const deleteExchangeSkillsRequests = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let exchangeSkillRequest = await proposalModel.findOne({ _id: _id });

  if (exchangeSkillRequest) {
    let response = await proposalModel.deleteOne({ _id: _id });

    if (response.deletedCount == 1) {
      return res
        .status(200)
        .json("Exchange Skill Request Successfully Deleted");
    } else {
      return res.status(400).json({ errorMessage: "Error Occured" });
    }
  } else {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }
});

/// get all orders with auth of admin
/* const getAllOrders = asyncHandler(async (req, res) => {
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let response = await orderModel
    .find()
    .populate("freelancer")
    .populate("submittedBy")
    .populate("client")
    .populate("gigOrderType")
    .populate({
      path: "jobOrderType",
      populate: {
        path: "job",
        model: "jobModel",
      },
    })
    .populate({
      path: "exchangeSkillsOrderType",
      populate: {
        path: "submittedBy",
        model: "Freelancer",
      },
    });

  if (response) {
    return res.status(200).json(response);
  } else {
    return res.status(404).json({ errorMessage: "Error Occured" });
  }
}); */

const getAllOrders = asyncHandler(async (req, res) => {
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let orders = await orderModel
    .find()
    .populate("freelancer")
    .populate("submittedBy")
    .populate("client")
    .populate("gigOrderType")
    .populate({
      path: "jobOrderType",
      populate: {
        path: "job",
        model: "jobModel",
      },
    })
    .populate({
      path: "exchangeSkillsOrderType",
      populate: {
        path: "submittedBy",
        model: "Freelancer",
      },
    });

  // find payments for client
  const clientIds = orders
    .filter((order) => order?.client)
    .map((order) => order?.client?._id);
  const clientPayments = await Payment?.find({ userId: { $in: clientIds } });

  // find payments for freelancer
  const freelancerIds = orders
    .filter((order) => order?.freelancer)
    .map((order) => order?.freelancer?._id);
  const freelancerPayments = await Payment?.find({
    userId: { $in: freelancerIds },
  });

  // find payments for submittedBy
  const submittedByIds = orders
    .filter((order) => order?.submittedBy)
    .map((order) => order?.submittedBy?._id);
  const submittedByPayments = await Payment?.find({
    userId: { $in: submittedByIds },
  });

  const ordersWithPayments = orders?.map((order) => {
    const orderClientPayments = clientPayments?.filter(
      (payment) =>
        payment?.userId?.toString() === order?.client?._id?.toString()
    );

    const orderFreelancerPayments = freelancerPayments?.filter(
      (payment) =>
        payment?.userId?.toString() === order?.freelancer._id?.toString()
    );
    const orderSubmittedByPayments = submittedByPayments?.filter(
      (payment) =>
        payment?.userId?.toString() === order?.submittedBy?._id?.toString()
    );
    return {
      ...order._doc,
      clientPayments: orderClientPayments,
      freelancerPayments: orderFreelancerPayments,
      submittedByPayments: orderSubmittedByPayments,
    };
  });

  if (ordersWithPayments) {
    return res.status(200).json(ordersWithPayments);
  } else {
    return res.status(404).json({ errorMessage: "Error Occured" });
  }
});

//   delete  Order
const deleteOrders = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let order = await orderModel.findOne({ _id: _id });

  if (order) {
    let response = await orderModel.deleteOne({ _id: _id });

    if (response.deletedCount == 1) {
      return res.status(200).json("Order Successfully Deleted");
    } else {
      return res.status(400).json({ errorMessage: "Error Occured" });
    }
  } else {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }
});

/// get all getBlogComments with auth of admin
const getBlogComments = asyncHandler(async (req, res) => {
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let response = await blogCommentsModel
    /* .find()
    .populate("client_id")
    .populate("Blog_id"); */

    .find()
    .populate("client_id")
    .populate({
      path: "Blog_id",
      populate: { path: " freelancer", model: "Freelancer" },
    });

  if (response) {
    return res.status(200).json(response);
  } else {
    return res.status(404).json({ errorMessage: "Error Occured" });
  }
});

//   delete Blog Comment
const deleteBlogComments = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let blogComments = await blogCommentsModel.findOne({ _id: _id });

  if (blogComments) {
    let response = await blogCommentsModel.deleteOne({ _id: _id });

    if (response.deletedCount == 1) {
      return res.status(200).json("Blog Comment Successfully Deleted");
    } else {
      return res.status(400).json({ errorMessage: "Error Occured" });
    }
  } else {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }
});

/// get all getBlogReplies with auth of admin
const getBlogReplies = asyncHandler(async (req, res) => {
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let response = await blogReplyCommentsModel
    .find()
    .populate("client_id")
    .populate("freelancer_id")
    .populate({
      path: "Blog_id",
      populate: {
        path: "freelancer",
        model: "Freelancer",
      },
    })
    /* .populate("Blog_id") */
    .populate("Comment_id");

  if (response) {
    return res.status(200).json(response);
  } else {
    return res.status(404).json({ errorMessage: "Error Occured" });
  }
});

//   delete Blog Replies Comment
const deleteBlogReplies = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let blogReplyComments = await blogReplyCommentsModel.findOne({ _id: _id });

  if (blogReplyComments) {
    let response = await blogReplyCommentsModel.deleteOne({ _id: _id });

    if (response.deletedCount == 1) {
      return res.status(200).json("Blog Comment Reply  Successfully Deleted");
    } else {
      return res.status(400).json({ errorMessage: "Error Occured" });
    }
  } else {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }
});

const getFreelancerReviews = asyncHandler(async (req, res) => {
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let response = await freelancerReviewsModel
    .find()
    .populate("ClientId")
    .populate("OrderId")
    .populate("freelancer");

  if (response) {
    return res.status(200).json(response);
  } else {
    return res.status(404).json({ errorMessage: "Error Occured" });
  }
});

//   delete  Freelancer Review
const deleteFreelancerReviews = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let freelancerReview = await freelancerReviewsModel.findOne({ _id: _id });

  if (freelancerReview) {
    let response = await freelancerReviewsModel.deleteOne({ _id: _id });

    if (response.deletedCount == 1) {
      return res.status(200).json("Freelancer Review Successfully Deleted");
    } else {
      return res.status(400).json({ errorMessage: "Error Occured" });
    }
  } else {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }
});

/// get all getClientReviews with auth of admin
const getClientReviews = asyncHandler(async (req, res) => {
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let response = await clientReviewsModel
    .find()
    .populate("client")
    .populate("freelancer");

  if (response) {
    return res.status(200).json(response);
  } else {
    return res.status(404).json({ errorMessage: "Error Occured" });
  }
});

//   delete  Client Review
const deleteClientReviews = asyncHandler(async (req, res) => {
  const { _id } = req.params;
  // Check for admin
  if (!req.admin) {
    return res
      .status(401)
      .json({ errorMessage: "User Cannot access this Resource" });
  }

  const { id } = req.admin;
  const admin = await Admin.findOne({ _id: id });

  if (!admin) {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }

  let clientReview = await clientReviewsModel.findOne({ _id: _id });

  if (clientReview) {
    let response = await clientReviewsModel.deleteOne({ _id: _id });

    if (response.deletedCount == 1) {
      return res.status(200).json("Client Review Successfully Deleted");
    } else {
      return res.status(400).json({ errorMessage: "Error Occured" });
    }
  } else {
    return res.status(403).json({ errorMessage: "Unauthorized" });
  }
});

module.exports = {
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
};
