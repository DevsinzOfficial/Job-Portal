import {
  GET_ADMIN_JOBS_SUCCESS,
  userAuth,
  GET_ALL_FREELANCER_SUCCESS,
  GET_ALL_FREELANCER_FAIL,
  GET_ALL_FREELANCER_REQUEST,
  GET_ADMIN_JOB_PROPOSALS_SUCCESS,
  GET_ALL_ADMIN_EXCHANGE_SKILLS_SUCCESS,
  GET_ALL_CLIENTS_SUCCESS,
  GET_ALL_CLIENTS_FAIL,
  GET_ALL_CLIENTS_REQUEST,
  GET_ADMIN_ALL_GIGS_SUCCESS,
  GET_ADMIN_BLOGS_SUCCESS,
  GET_ADMIN_EXCHANGE_SKILLS_REQUESTS_SUCCESS,
  GET_ADMIN_ORDERS_SUCCESS,
  GET_ADMIN_FREELANCER_REVIEWS_SUCCESS,
  GET_ADMIN_BLOGS_COMMENTS_SUCCESS,
  GET_ADMIN_BLOGS_REPLY_COMMENTS_SUCCESS,
  DELETE_ADMIN_JOBS_SUCCESS,
  DELETE_ALL_FREELANCER_SUCCESS,
  DELETE_ADMIN_JOB_PROPOSALS_SUCCESS,
  DELETE_ALL_ADMIN_EXCHANGE_SKILLS_SUCCESS,
  DELETE_ALL_CLIENTS_SUCCESS,
  DELETE_ADMIN_ALL_GIGS_SUCCESS,
  DELETE_ADMIN_BLOGS_SUCCESS,
  DELETE_ADMIN_EXCHANGE_SKILLS_REQUESTS_SUCCESS,
  DELETE_ADMIN_ORDERS_SUCCESS,
  DELETE_ADMIN_FREELANCER_REVIEWS_SUCCESS,
  DELETE_ADMIN_BLOGS_COMMENTS_SUCCESS,
  DELETE_ADMIN_BLOGS_REPLY_COMMENTS_SUCCESS,
  GET_ADMIN_ALL_GIGS_FAIL,
  GET_ADMIN_ALL_GIGS_REQUEST,
  GET_ALL_ADMIN_EXCHANGE_SKILLS_REQUEST,
  GET_ALL_ADMIN_EXCHANGE_SKILLS_FAIL,
  GET_ADMIN_JOBS_FAIL,
  GET_ADMIN_JOBS_REQUEST,
  GET_ADMIN_BLOGS_REQUEST,
  GET_ADMIN_BLOGS_FAIL,
  GET_ADMIN_JOB_PROPOSALS_FAIL,
  GET_ADMIN_JOB_PROPOSALS_REQUEST,
  GET_ADMIN_EXCHANGE_SKILLS_REQUESTS_REQUEST,
  GET_ADMIN_EXCHANGE_SKILLS_REQUESTS_FAIL,
  GET_ADMIN_ORDERS_FAIL,
  GET_ADMIN_ORDERS_REQUEST,
  GET_ADMIN_FREELANCER_REVIEWS_FAIL,
  GET_ADMIN_FREELANCER_REVIEWS_REQUEST,
  GET_ADMIN_BLOGS_REPLY_COMMENTS_REQUEST,
  GET_ADMIN_BLOGS_REPLY_COMMENTS_FAIL,
  GET_ADMIN_BLOGS_COMMENTS_REQUEST,
  GET_ADMIN_BLOGS_COMMENTS_FAIL,
  DELETE_ALL_FREELANCER_REQUEST,
  DELETE_ALL_FREELANCER_FAIL,
  DELETE_ALL_CLIENTS_REQUEST,
  DELETE_ALL_ADMIN_EXCHANGE_SKILLS_REQUEST,
  DELETE_ADMIN_JOB_PROPOSALS_REQUEST,
  DELETE_ADMIN_EXCHANGE_SKILLS_REQUESTS_REQUEST,
  DELETE_ADMIN_ALL_GIGS_REQUEST,
  DELETE_ADMIN_BLOGS_REQUEST,
  DELETE_ADMIN_JOBS_REQUEST,
  DELETE_ADMIN_ORDERS_REQUEST,
  DELETE_ADMIN_FREELANCER_REVIEWS_REQUEST,
  DELETE_ADMIN_BLOGS_COMMENTS_REQUEST,
  DELETE_ADMIN_BLOGS_REPLY_COMMENTS_REQUEST,
  DELETE_ALL_CLIENTS_FAIL,
  DELETE_ALL_ADMIN_EXCHANGE_SKILLS_FAIL,
  DELETE_ADMIN_JOB_PROPOSALS_FAIL,
  DELETE_ADMIN_EXCHANGE_SKILLS_REQUESTS_FAIL,
  DELETE_ADMIN_ALL_GIGS_FAIL,
  DELETE_ADMIN_BLOGS_FAIL,
  DELETE_ADMIN_JOBS_FAIL,
  DELETE_ADMIN_ORDERS_FAIL,
  DELETE_ADMIN_FREELANCER_REVIEWS_FAIL,
  DELETE_ADMIN_BLOGS_COMMENTS_FAIL,
  DELETE_ADMIN_BLOGS_REPLY_COMMENTS_FAIL,
  GET_ADMIN_MESSAGES_FAIL,
  GET_ADMIN_MESSAGES_REQUEST,
  GET_ADMIN_MESSAGES_SUCCESS,
} from "./../actions/types";
const INITIAL_STATE = {
  getFreelancerLoader: false,
  getClientsLoader: false,
  getJobProposalsLoader: false,
  getExchangeSkillLoader: false,
  gigsLoading: false,
  blogsLoading: false,
  jobsLoading: false,
  getExchangeSkillsRequestsLoading: false,
  ordersLoading: false,
  clientReviewsLoading: false,
  freelancerReviewsLoading: false,
  blogCommentsLoading: false,
  blogReplyCommentsLoading: false,
  loginLoading: false,
  messagesLoading: false,
  freelancers: {},
  clients: {},
  exchangeSkills: {},
  jobProposals: {},
  exchangeSkillsRequests: {},
  gigs: {},
  blogs: {},
  jobs: {},
  orders: {},
  freelancerReviews: {},
  blogComments: {},
  blogReplyComments: {},
  userInfo: {},
  messages: {},
};
const AdminReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userAuth.ADMIN_REGISTRATION_REQUEST: {
      return {
        ...state,
        loginLoading: true,
      };
    }
    case userAuth.ADMIN_REGISTRATION_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    case userAuth.ADMIN_REGISTRATION_FAIL: {
      return {
        ...state,
        loginLoading: false,
      };
    }
    case userAuth.ADMIN_LOGIN_REQUEST: {
      return {
        ...state,
        loginLoading: true,
      };
    }
    case userAuth.ADMIN_LOGIN_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
        loginLoading: false,
      };
    }
    case userAuth.ADMIN_LOGIN_FAIL: {
      return {
        ...state,
        loginLoading: false,
      };
    }
    case userAuth.ADMIN_LOGOUT_SUCCESS: {
      return {
        ...state,
        userInfo: {},
        loginLoading: false,
      };
    }

    case userAuth.ADMIN_LOGOUT_REQUEST: {
      return {
        ...state,
        loginLoading: true,
      };
    }

    case GET_ALL_FREELANCER_REQUEST: {
      return {
        ...state,
        getFreelancerLoader: true,
      };
    }

    case GET_ALL_FREELANCER_SUCCESS: {
      return {
        ...state,
        freelancers: action.payload,
        getFreelancerLoader: false,
      };
    }
    case GET_ALL_FREELANCER_FAIL: {
      return {
        ...state,
        getFreelancerLoader: false,
      };
    }
    case GET_ALL_CLIENTS_REQUEST: {
      return {
        ...state,
        getClientsLoader: true,
      };
    }
    case GET_ALL_CLIENTS_SUCCESS: {
      return {
        ...state,
        clients: action.payload,
        getClientsLoader: false,
      };
    }
    case GET_ALL_CLIENTS_FAIL: {
      return {
        ...state,
        getClientsLoader: false,
      };
    }
    case GET_ALL_ADMIN_EXCHANGE_SKILLS_REQUEST: {
      return {
        ...state,
        getExchangeSkillLoader: true,
      };
    }
    case GET_ALL_ADMIN_EXCHANGE_SKILLS_SUCCESS: {
      return {
        ...state,
        exchangeSkills: action.payload,
        getExchangeSkillLoader: false,
      };
    }

    case GET_ALL_ADMIN_EXCHANGE_SKILLS_FAIL: {
      return {
        ...state,
        getExchangeSkillLoader: false,
      };
    }

    case GET_ADMIN_JOB_PROPOSALS_REQUEST: {
      return {
        ...state,
        getJobProposalsLoader: true,
      };
    }
    case GET_ADMIN_JOB_PROPOSALS_SUCCESS: {
      return {
        ...state,
        jobProposals: action.payload,
        getJobProposalsLoader: false,
      };
    }

    case GET_ADMIN_JOB_PROPOSALS_FAIL: {
      return {
        ...state,
        getJobProposalsLoader: false,
      };
    }
    case GET_ADMIN_EXCHANGE_SKILLS_REQUESTS_REQUEST: {
      return {
        ...state,
        getExchangeSkillsRequestsLoading: true,
      };
    }

    case GET_ADMIN_EXCHANGE_SKILLS_REQUESTS_SUCCESS: {
      return {
        ...state,
        exchangeSkillsRequests: action.payload,
        getExchangeSkillsRequestsLoading: false,
      };
    }

    case GET_ADMIN_EXCHANGE_SKILLS_REQUESTS_FAIL: {
      return {
        ...state,

        getExchangeSkillsRequestsLoading: false,
      };
    }
    case GET_ADMIN_ALL_GIGS_REQUEST: {
      return {
        ...state,

        gigsLoading: true,
      };
    }
    case GET_ADMIN_ALL_GIGS_SUCCESS: {
      return {
        ...state,
        gigs: action.payload,
        gigsLoading: false,
      };
    }

    case GET_ADMIN_ALL_GIGS_FAIL: {
      return {
        ...state,
        gigsLoading: false,
      };
    }
    case GET_ADMIN_BLOGS_REQUEST: {
      return {
        ...state,
        blogsLoading: true,
      };
    }

    case GET_ADMIN_BLOGS_SUCCESS: {
      return {
        ...state,
        blogs: action.payload,
        blogsLoading: false,
      };
    }

    case GET_ADMIN_BLOGS_FAIL: {
      return {
        ...state,
        blogsLoading: false,
      };
    }
    case GET_ADMIN_JOBS_REQUEST: {
      return {
        ...state,
        jobsLoading: true,
      };
    }

    case GET_ADMIN_JOBS_SUCCESS: {
      return {
        ...state,
        jobs: action.payload,
        jobsLoading: false,
      };
    }
    case GET_ADMIN_JOBS_FAIL: {
      return {
        ...state,
        jobsLoading: false,
      };
    }
    case GET_ADMIN_ORDERS_REQUEST: {
      return {
        ...state,

        ordersLoading: true,
      };
    }

    case GET_ADMIN_ORDERS_SUCCESS: {
      return {
        ...state,
        orders: action.payload,
        ordersLoading: false,
      };
    }

    case GET_ADMIN_ORDERS_FAIL: {
      return {
        ...state,

        ordersLoading: false,
      };
    }

    case GET_ADMIN_FREELANCER_REVIEWS_REQUEST: {
      return {
        ...state,

        freelancerReviewsLoading: true,
      };
    }

    case GET_ADMIN_FREELANCER_REVIEWS_SUCCESS: {
      return {
        ...state,
        freelancerReviews: action.payload,
        freelancerReviewsLoading: false,
      };
    }

    case GET_ADMIN_FREELANCER_REVIEWS_FAIL: {
      return {
        ...state,

        freelancerReviewsLoading: false,
      };
    }

    case GET_ADMIN_BLOGS_COMMENTS_REQUEST: {
      return {
        ...state,

        blogCommentsLoading: true,
      };
    }
    case GET_ADMIN_BLOGS_COMMENTS_SUCCESS: {
      return {
        ...state,
        blogComments: action.payload,
        blogCommentsLoading: false,
      };
    }

    case GET_ADMIN_BLOGS_COMMENTS_FAIL: {
      return {
        ...state,
        blogCommentsLoading: false,
      };
    }

    case GET_ADMIN_BLOGS_REPLY_COMMENTS_REQUEST: {
      return {
        ...state,

        blogReplyCommentsLoading: true,
      };
    }

    case GET_ADMIN_BLOGS_REPLY_COMMENTS_SUCCESS: {
      return {
        ...state,
        blogReplyComments: action.payload,
        blogReplyCommentsLoading: false,
      };
    }

    case GET_ADMIN_BLOGS_REPLY_COMMENTS_FAIL: {
      return {
        ...state,

        blogReplyCommentsLoading: false,
      };
    }

    case DELETE_ALL_FREELANCER_REQUEST: {
      return {
        ...state,
        getFreelancerLoader: true,
      };
    }

    case DELETE_ALL_FREELANCER_SUCCESS: {
      return {
        ...state,
        freelancers: state.freelancers.filter(
          (freelancer) => freelancer._id !== action.payload._id
        ),
        getFreelancerLoader: false,
      };
    }

    case DELETE_ALL_FREELANCER_FAIL: {
      return {
        ...state,
        getFreelancerLoader: false,
      };
    }

    case DELETE_ALL_CLIENTS_SUCCESS: {
      return {
        ...state,
        clients: state.clients.filter(
          (client) => client._id !== action.payload._id
        ),
        getClientsLoader: false,
      };
    }
    case DELETE_ALL_ADMIN_EXCHANGE_SKILLS_SUCCESS: {
      return {
        ...state,
        exchangeSkills: state.exchangeSkills.filter(
          (exchangeSkill) => exchangeSkill._id !== action.payload._id
        ),
        getExchangeSkillLoader: false,
      };
    }
    case DELETE_ADMIN_JOB_PROPOSALS_SUCCESS: {
      return {
        ...state,
        jobProposals: state.jobProposals.filter(
          (jobProposal) => jobProposal._id !== action.payload._id
        ),
        getProposalsLoader: false,
      };
    }
    case DELETE_ADMIN_EXCHANGE_SKILLS_REQUESTS_SUCCESS: {
      return {
        ...state,
        exchangeSkillsRequests: state.exchangeSkillsRequests.filter(
          (exchangeSkillsRequest) =>
            exchangeSkillsRequest._id !== action.payload._id
        ),
        getExchangeSkillsRequestsLoading: false,
      };
    }
    case DELETE_ADMIN_ALL_GIGS_SUCCESS: {
      return {
        ...state,
        gigs: state.gigs.filter((gig) => gig._id !== action.payload._id),
        gigsLoading: false,
      };
    }
    case DELETE_ADMIN_BLOGS_SUCCESS: {
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload._id),
        blogsLoading: false,
      };
    }
    case DELETE_ADMIN_JOBS_SUCCESS: {
      return {
        ...state,
        jobs: state.jobs.filter((job) => job._id !== action.payload._id),
        jobsLoading: false,
      };
    }
    case DELETE_ADMIN_ORDERS_SUCCESS: {
      return {
        ...state,
        orders: state.orders.filter(
          (order) => order._id !== action.payload._id
        ),
        ordersLoading: false,
      };
    }

    case DELETE_ADMIN_FREELANCER_REVIEWS_SUCCESS: {
      return {
        ...state,
        freelancerReviews: state.freelancerReviews.filter(
          (freelancerReview) => freelancerReview._id !== action.payload._id
        ),
        freelancerReviewsLoading: false,
      };
    }

    case DELETE_ADMIN_BLOGS_COMMENTS_SUCCESS: {
      return {
        ...state,
        blogComments: state.blogComments.filter(
          (blogComment) => blogComment._id !== action.payload._id
        ),
        blogCommentsLoading: false,
      };
    }

    case DELETE_ADMIN_BLOGS_REPLY_COMMENTS_SUCCESS: {
      return {
        ...state,
        blogReplyComments: state.blogReplyComments.filter(
          (blogReplyComment) => blogReplyComment._id !== action.payload._id
        ),
        blogReplyCommentsLoading: false,
      };
    }

    case DELETE_ALL_CLIENTS_FAIL: {
      return {
        ...state,

        getClientsLoader: false,
      };
    }
    case DELETE_ALL_ADMIN_EXCHANGE_SKILLS_FAIL: {
      return {
        ...state,

        getExchangeSkillLoader: false,
      };
    }
    case DELETE_ADMIN_JOB_PROPOSALS_FAIL: {
      return {
        ...state,

        getProposalsLoader: false,
      };
    }
    case DELETE_ADMIN_EXCHANGE_SKILLS_REQUESTS_FAIL: {
      return {
        ...state,

        getExchangeSkillsRequestsLoading: false,
      };
    }
    case DELETE_ADMIN_ALL_GIGS_FAIL: {
      return {
        ...state,

        gigsLoading: false,
      };
    }
    case DELETE_ADMIN_BLOGS_FAIL: {
      return {
        ...state,

        blogsLoading: false,
      };
    }
    case DELETE_ADMIN_JOBS_FAIL: {
      return {
        ...state,
        jobsLoading: false,
      };
    }
    case DELETE_ADMIN_ORDERS_FAIL: {
      return {
        ...state,
        ordersLoading: false,
      };
    }

    case DELETE_ADMIN_FREELANCER_REVIEWS_FAIL: {
      return {
        ...state,
        freelancerReviewsLoading: false,
      };
    }

    case DELETE_ADMIN_BLOGS_COMMENTS_FAIL: {
      return {
        ...state,
        blogCommentsLoading: false,
      };
    }

    case DELETE_ADMIN_BLOGS_REPLY_COMMENTS_FAIL: {
      return {
        ...state,
        blogReplyCommentsLoading: false,
      };
    }

    case DELETE_ALL_CLIENTS_REQUEST: {
      return {
        ...state,
        getClientsLoader: true,
      };
    }
    case DELETE_ALL_ADMIN_EXCHANGE_SKILLS_REQUEST: {
      return {
        ...state,
        getExchangeSkillLoader: true,
      };
    }
    case DELETE_ADMIN_JOB_PROPOSALS_REQUEST: {
      return {
        ...state,
        getProposalsLoader: true,
      };
    }
    case DELETE_ADMIN_EXCHANGE_SKILLS_REQUESTS_REQUEST: {
      return {
        ...state,
        getExchangeSkillsRequestsLoading: true,
      };
    }
    case DELETE_ADMIN_ALL_GIGS_REQUEST: {
      return {
        ...state,
        gigsLoading: true,
      };
    }
    case DELETE_ADMIN_BLOGS_REQUEST: {
      return {
        ...state,
        blogsLoading: true,
      };
    }
    case DELETE_ADMIN_JOBS_REQUEST: {
      return {
        ...state,
        jobsLoading: true,
      };
    }
    case DELETE_ADMIN_ORDERS_REQUEST: {
      return {
        ...state,
        ordersLoading: true,
      };
    }

    case DELETE_ADMIN_FREELANCER_REVIEWS_REQUEST: {
      return {
        ...state,
        freelancerReviewsLoading: true,
      };
    }

    case DELETE_ADMIN_BLOGS_COMMENTS_REQUEST: {
      return {
        ...state,
        blogCommentsLoading: true,
      };
    }

    case DELETE_ADMIN_BLOGS_REPLY_COMMENTS_REQUEST: {
      return {
        ...state,
        blogReplyCommentsLoading: true,
      };
    }

    case GET_ADMIN_MESSAGES_REQUEST: {
      return {
        ...state,
        messagesLoading: true,
      };
    }

    case GET_ADMIN_MESSAGES_SUCCESS: {
      return {
        ...state,
        messages: action.payload,
        messagesLoading: false,
      };
    }

    case GET_ADMIN_MESSAGES_FAIL: {
      return {
        ...state,
        messagesLoading: false,
      };
    }

    default:
      return state;
  }
};

export default AdminReducers;
