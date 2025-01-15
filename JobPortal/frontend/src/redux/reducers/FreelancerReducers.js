import {
  GET_ALL_FREELANCER_EXCHANGE_SKILLS_SUCCESS,
  GET_ALL_FREELANCER_EXCHANGE_SKILLS_FAIL,
  GET_ALL_FREELANCER_EXCHANGE_SKILLS_REQUEST,
  UPDATE_EXCHANGE_SKILLS_SUCCESS,
  ADD_EXCHANGE_SKILLS_SUCCESS,
  userAuth,
  COMPLETE_FREELANCER_PROFILE_SUCCESS,
  GET_ALL_FREELANCER_JOBS_SUCCESS,
  GET_ALL_FREELANCER_JOBS_FAIL,
  GET_ALL_FREELANCER_JOBS_REQUEST,
  CREATE_NEW_BLOG_SUCCESS,
  CREATE_NEW_BLOG_FAIL,
  CREATE_NEW_BLOG_REQUEST,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_FAIL,
  UPDATE_BLOG_REQUEST,
  FREELANCER_PROPOSAL_SENT_SUCCESS,
  FREELANCER_PROPOSAL_SENT_FAIL,
  FREELANCER_PROPOSAL_SENT_REQUEST,
  GET_ALL_FREELANCER_ORDERS_SUCCESS,
  GET_ALL_FREELANCER_ORDERS_FAIL,
  GET_ALL_FREELANCER_ORDERS_REQUEST,
  GET_ALL_FREELANCER_BLOGS_SUCCESS,
  GET_ALL_FREELANCER_BLOGS_FAIL,
  GET_ALL_FREELANCER_BLOGS_REQUEST,
  GET_ALL_FREELANCER_REPORTS_SUCCESS,
  GET_ALL_FREELANCER_REPORTS_FAIL,
  GET_ALL_FREELANCER_REPORTS_REQUEST,
  GET_FREELANCER_PROFILE_SUCCESS,
  UPDATE_FREELANCER_ACCOUNT_SUCCESS,
  DELETE_FREELANCER_ACCOUNT_SUCCESS,
  GET_MY_FREELANCER_BLOGS_SUCCESS,
  GET_MY_FREELANCER_BLOGS_FAIL,
  GET_MY_FREELANCER_BLOGS_REQUEST,
  GET_ALL_MY_EXCHANGE_SKILLS_SUCCESS,
  GET_ALL_MY_EXCHANGE_SKILLS_FAIL,
  GET_ALL_MY_EXCHANGE_SKILLS_REQUEST,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAIL,
  DELETE_BLOG_REQUEST,
  DELETE_EXCHANGE_SKILLS_SUCCESS,
  DELETE_EXCHANGE_SKILLS_FAIL,
  DELETE_EXCHANGE_SKILLS_REQUEST,
  FREELANCER_EXCHANGE_SKILL_PROPOSAL_SENT_SUCCESS,
  FREELANCER_EXCHANGE_SKILL_PROPOSAL_SENT_FAIL,
  FREELANCER_EXCHANGE_SKILL_PROPOSAL_SENT_REQUEST,
  GET_ALL_SUBMITTED_EXCHANGE_SKILLS_REQUESTS_SUCCESS,
  GET_ALL_SUBMITTED_EXCHANGE_SKILLS_REQUESTS_FAIL,
  GET_ALL_SUBMITTED_EXCHANGE_SKILLS_REQUESTS_REQUEST,
  GET_ALL_RECEIVED_EXCHANGE_SKILLS_REQUESTS_SUCCESS,
  GET_ALL_RECEIVED_EXCHANGE_SKILLS_REQUESTS_REQUEST,
  GET_ALL_RECEIVED_EXCHANGE_SKILLS_REQUESTS_FAIL,
  FREELANCER_EXCHANGE_SKILL_PROPOSAL_UPDATE_SUCCESS,
  FREELANCER_EXCHANGE_SKILL_PROPOSAL_UPDATE_FAIL,
  FREELANCER_EXCHANGE_SKILL_PROPOSAL_UPDATE_REQUEST,
  DELETE_EXCHANGE_SKILL_REQUEST_SUCCESS,
  DELETE_EXCHANGE_SKILL_REQUEST_FAIL,
  DELETE_EXCHANGE_SKILL_REQUEST_REQUEST,
  ACCEPT_REQUEST_SUCCESS,
  ACCEPT_REQUEST_FAIL,
  ACCEPT_REQUEST_REQUEST,
  REJECT_REQUEST_SUCCESS,
  REJECT_REQUEST_REQUEST,
  REJECT_REQUEST_FAIL,
  ACCEPT_GIG_ORDER_SUCCESS,
  ACCEPT_GIG_ORDER_FAIL,
  ACCEPT_GIG_ORDER_REQUEST,
  READ_FREELANCER_NOTIFICATION_SUCCESS,
  READ_FREELANCER_NOTIFICATION_FAIL,
  READ_FREELANCER_NOTIFICATION_REQUEST,
  GET_ALL_FREELANCER_EXCHANGE_SKILLS_ORDERS_SUCCESS,
  GET_ALL_FREELANCER_EXCHANGE_SKILLS_ORDERS_FAIL,
  GET_ALL_FREELANCER_EXCHANGE_SKILLS_ORDERS_REQUEST,
  CREATE_NEW_BLOG_REPLY_COMMENT_FREELANCER_SUCCESS,
  CREATE_NEW_BLOG_REPLY_COMMENT_FREELANCER_FAIL,
  CREATE_NEW_BLOG_REPLY_COMMENT_FREELANCER_REQUEST,
  GET_FREELANCER_REVIEWS_SUCCESS,
  GET_FREELANCER_REVIEWS_FAIL,
  GET_FREELANCER_REVIEWS_REQUEST,
  GET_FREELANCER_ALL_REVIEWS_SUCCESS,
  GET_FREELANCER_ALL_REVIEWS_FAIL,
  GET_FREELANCER_ALL_REVIEWS_REQUEST,
  DELETE_JOB_PROPOSAL_SUCCESS,
  DELETE_JOB_PROPOSAL_FAIL,
  DELETE_JOB_PROPOSAL_REQUEST,
  GET_ALL_JOBS_PROPOSALS_FOR_FREELANCER_SUCCESS,
  GET_ALL_JOBS_PROPOSALS_FOR_FREELANCER_FAIL,
  GET_ALL_JOBS_PROPOSALS_FOR_FREELANCER_REQUEST,
  EDIT_PROPOSAL_SUCCESS,
  EDIT_PROPOSAL_FAIL,
  EDIT_PROPOSAL_REQUEST,
  CREATE_NEW_GIG_SUCCESS,
  CREATE_NEW_GIG_FAIL,
  CREATE_NEW_GIG_REQUEST,
  GET_MY_GIGS_SUCCESS,
  GET_MY_GIGS_FAIL,
  GET_MY_GIGS_REQUEST,
  DELETE_GIG_SUCCESS,
  DELETE_GIG_FAIL,
  DELETE_GIG_REQUEST,
  EDIT_GIG_SUCCESS,
  EDIT_GIG_FAIL,
  EDIT_GIG_REQUEST,
  FORGET_FREELANCER_PASSWORD_SUCCESS,
  FORGET_FREELANCER_PASSWORD_FAIL,
  FORGET_FREELANCER_PASSWORD_REQUEST,
  GET_FREELANCER_PROFILE_FAIL,
  GET_FREELANCER_PROFILE_REQUEST,
  COMPLETE_FREELANCER_PROFILE_FAIL,
  COMPLETE_FREELANCER_PROFILE_REQUEST,
  UPDATE_FREELANCER_ACCOUNT_FAIL,
  UPDATE_FREELANCER_ACCOUNT_REQUEST,
  RESET_FREELANCER_PASSWORD_SUCCESS,
  RESET_FREELANCER_PASSWORD_FAIL,
  RESET_FREELANCER_PASSWORD_REQUEST,
  VERIFY_FREELANCER_TOKEN_SUCCESS,
  VERIFY_FREELANCER_TOKEN_FAIL,
  VERIFY_FREELANCER_TOKEN_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAIL,
  VERIFY_EMAIL_REQUEST,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAIL,
  SEND_OTP_REQUEST,
  DELETE_FREELANCER_ACCOUNT_FAIL,
  DELETE_FREELANCER_ACCOUNT_REQUEST,
  DELETE_FREELANCER_PAYMENT_SUCCESS,
  DELETE_FREELANCER_PAYMENT_FAIL,
  DELETE_FREELANCER_PAYMENT_REQUEST,
  ADD_FREELANCER_PAYMENT_REQUEST,
  ADD_FREELANCER_PAYMENT_SUCCESS,
  ADD_FREELANCER_PAYMENT_FAIL,
  GET_FREELANCER_PAYMENT_REQUEST,
  GET_FREELANCER_PAYMENT_SUCCESS,
  GET_FREELANCER_PAYMENT_FAIL,
  ADD_EXCHANGE_SKILLS_FAIL,
  ADD_EXCHANGE_SKILLS_REQUEST,
  UPDATE_EXCHANGE_SKILLS_FAIL,
  UPDATE_EXCHANGE_SKILLS_REQUEST,
  CREATE_NEW_FREELANCER_CONVERSATION_SUCCESS,
  CREATE_NEW_FREELANCER_CONVERSATION_REQUEST,
  CREATE_NEW_FREELANCER_CONVERSATION_FAIL,
  GET_FREELANCER_MESSAGES_SUCCESS,
  GET_FREELANCER_MESSAGES_FAIL,
  GET_FREELANCER_MESSAGES_REQUEST,
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  exchangeSkills: {},
  jobs: {},
  blogs: {},
  myBlogs: {},
  myExchangeSkills: {},
  exchangeSkillsOrders: {},
  proposals: {},
  orders: {},
  reports: {},
  receivedRequests: {},
  submittedRequests: {},
  notifications: {},
  reviews: {},
  allReviews: {},
  blogReplyComments: {},
  userInfo: {},
  gigs: {},
  payments: {},
  conversations: {},
  messages: {},
};
const FreelancerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userAuth.FREELANCER_SIGN_UP_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case userAuth.FREELANCER_SIGN_UP_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    }
    case userAuth.FREELANCER_SIGN_UP_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    
    case userAuth.FREELANCER_LOG_IN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case userAuth.FREELANCER_LOG_IN_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    }

    case userAuth.FREELANCER_LOG_IN_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case userAuth.FREELANCER_LOGOUT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case userAuth.FREELANCER_LOGOUT_SUCCESS: {
      return {
        ...state,
        userInfo: {},
        loading: false,
      };
    }

    case FORGET_FREELANCER_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case FORGET_FREELANCER_PASSWORD_SUCCESS: {
      return {
        ...state,

        loading: false,
      };
    }

    case FORGET_FREELANCER_PASSWORD_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case COMPLETE_FREELANCER_PROFILE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case COMPLETE_FREELANCER_PROFILE_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    }

    case COMPLETE_FREELANCER_PROFILE_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case UPDATE_FREELANCER_ACCOUNT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case UPDATE_FREELANCER_ACCOUNT_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    }

    case UPDATE_FREELANCER_ACCOUNT_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case GET_FREELANCER_PROFILE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_FREELANCER_PROFILE_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    }

    case GET_FREELANCER_PROFILE_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case RESET_FREELANCER_PASSWORD_REQUEST: {
      return {
        ...state,

        loading: true,
      };
    }

    case RESET_FREELANCER_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case RESET_FREELANCER_PASSWORD_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case VERIFY_FREELANCER_TOKEN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case VERIFY_FREELANCER_TOKEN_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case VERIFY_FREELANCER_TOKEN_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case VERIFY_EMAIL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case VERIFY_EMAIL_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case VERIFY_EMAIL_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case SEND_OTP_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case SEND_OTP_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case SEND_OTP_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case DELETE_FREELANCER_ACCOUNT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_FREELANCER_ACCOUNT_SUCCESS: {
      return {
        ...state,
        loading: false,
        userInfo: null,
      };
    }

    case DELETE_FREELANCER_ACCOUNT_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case ADD_FREELANCER_PAYMENT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case ADD_FREELANCER_PAYMENT_SUCCESS: {
      return {
        ...state,
        payments: action.payload,
        loading: false,
      };
    }

    case ADD_FREELANCER_PAYMENT_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_FREELANCER_PAYMENT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_FREELANCER_PAYMENT_SUCCESS: {
      return {
        ...state,
        payments: action.payload,
        loading: false,
      };
    }

    case GET_FREELANCER_PAYMENT_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case DELETE_FREELANCER_PAYMENT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_FREELANCER_PAYMENT_SUCCESS: {
      return {
        ...state,
        payments: action.payload,
        loading: false,
      };
    }

    case DELETE_FREELANCER_PAYMENT_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_FREELANCER_REVIEWS_REQUEST: {
      return {
        ...state,

        loading: true,
      };
    }

    case GET_FREELANCER_REVIEWS_SUCCESS: {
      return {
        ...state,
        reviews: action.payload,
        loading: false,
      };
    }

    case GET_FREELANCER_REVIEWS_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case GET_FREELANCER_ALL_REVIEWS_REQUEST: {
      return {
        ...state,

        loading: true,
      };
    }

    case GET_FREELANCER_ALL_REVIEWS_SUCCESS: {
      return {
        ...state,
        allReviews: action.payload,
        loading: false,
      };
    }

    case GET_FREELANCER_ALL_REVIEWS_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case READ_FREELANCER_NOTIFICATION_REQUEST: {
      return {
        ...state,

        loading: true,
      };
    }

    case READ_FREELANCER_NOTIFICATION_SUCCESS: {
      return {
        ...state,
        notifications: action.payload,
        loading: false,
      };
    }

    case READ_FREELANCER_NOTIFICATION_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case DELETE_BLOG_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_BLOG_SUCCESS: {
      return {
        ...state,
        myBlogs: state.myBlogs.snapshot.filter(
          (myBlog) => myBlog._id !== action.payload._id
        ),
        loading: false,
      };
    }

    case DELETE_BLOG_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case DELETE_EXCHANGE_SKILL_REQUEST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_EXCHANGE_SKILL_REQUEST_SUCCESS: {
      return {
        ...state,
        submittedRequests: state.submittedRequests.response.filter(
          (submittedRequest) => submittedRequest._id !== action.payload._id
        ),
        loading: false,
      };
    }
    case DELETE_EXCHANGE_SKILL_REQUEST_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case DELETE_EXCHANGE_SKILLS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_EXCHANGE_SKILLS_SUCCESS: {
      return {
        ...state,
        myExchangeSkills: state.myExchangeSkills.filter(
          (myExchangeSkill) => myExchangeSkill._id !== action.payload._id
        ),
        loading: false,
      };
    }

    case DELETE_EXCHANGE_SKILLS_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case ADD_EXCHANGE_SKILLS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case ADD_EXCHANGE_SKILLS_SUCCESS: {
      return {
        ...state,
        myExchangeSkills: action.payload,
        loading: false,
      };
    }

    case ADD_EXCHANGE_SKILLS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_ALL_FREELANCER_EXCHANGE_SKILLS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_FREELANCER_EXCHANGE_SKILLS_SUCCESS: {
      return {
        ...state,
        exchangeSkills: action.payload,
        loading: false,
      };
    }

    case GET_ALL_FREELANCER_EXCHANGE_SKILLS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_ALL_FREELANCER_JOBS_REQUEST: {
      return {
        ...state,

        loading: true,
      };
    }

    case GET_ALL_FREELANCER_JOBS_SUCCESS: {
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    }

    case GET_ALL_FREELANCER_JOBS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case ACCEPT_REQUEST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case ACCEPT_REQUEST_SUCCESS: {
      return {
        ...state,
        receivedRequests: action.payload,
        loading: false,
      };
    }

    case ACCEPT_REQUEST_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case REJECT_REQUEST_REQUEST: {
      return {
        ...state,

        loading: true,
      };
    }

    case REJECT_REQUEST_SUCCESS: {
      return {
        ...state,
        receivedRequests: action.payload,
        loading: false,
      };
    }

    case REJECT_REQUEST_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case UPDATE_EXCHANGE_SKILLS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case UPDATE_EXCHANGE_SKILLS_SUCCESS: {
      return {
        ...state,
        myExchangeSkills: action.payload,
        loading: false,
      };
    }

    case UPDATE_EXCHANGE_SKILLS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case CREATE_NEW_BLOG_REQUEST: {
      return {
        ...state,

        loading: true,
      };
    }

    case CREATE_NEW_BLOG_SUCCESS: {
      return {
        ...state,
        myBlogs: action.payload,
        loading: false,
      };
    }

    case CREATE_NEW_BLOG_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }
    case UPDATE_BLOG_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case UPDATE_BLOG_SUCCESS: {
      return {
        ...state,
        myBlogs: action.payload,
        loading: false,
      };
    }

    case UPDATE_BLOG_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case CREATE_NEW_BLOG_REPLY_COMMENT_FREELANCER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case CREATE_NEW_BLOG_REPLY_COMMENT_FREELANCER_SUCCESS: {
      return {
        ...state,
        blogReplyComments: action.payload,
        loading: false,
      };
    }

    case CREATE_NEW_BLOG_REPLY_COMMENT_FREELANCER_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case FREELANCER_EXCHANGE_SKILL_PROPOSAL_UPDATE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case FREELANCER_EXCHANGE_SKILL_PROPOSAL_UPDATE_SUCCESS: {
      return {
        ...state,
        submittedRequests: action.payload,
        loading: false,
      };
    }

    case FREELANCER_EXCHANGE_SKILL_PROPOSAL_UPDATE_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case FREELANCER_PROPOSAL_SENT_REQUEST: {
      return {
        ...state,

        loading: true,
      };
    }

    case FREELANCER_PROPOSAL_SENT_SUCCESS: {
      return {
        ...state,
        proposals: action.payload,
        loading: false,
      };
    }

    case FREELANCER_PROPOSAL_SENT_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case EDIT_PROPOSAL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case EDIT_PROPOSAL_SUCCESS: {
      return {
        ...state,
        proposals: action.payload,
        loading: false,
      };
    }

    case EDIT_PROPOSAL_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case DELETE_JOB_PROPOSAL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_JOB_PROPOSAL_SUCCESS: {
      return {
        ...state,
        proposals: state.proposals.response.filter(
          (proposal) => proposal._id !== action.payload._id
        ),
        loading: false,
      };
    }

    case DELETE_JOB_PROPOSAL_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_ALL_JOBS_PROPOSALS_FOR_FREELANCER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_JOBS_PROPOSALS_FOR_FREELANCER_SUCCESS: {
      return {
        ...state,
        proposals: action.payload,
        loading: false,
      };
    }

    case GET_ALL_JOBS_PROPOSALS_FOR_FREELANCER_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case FREELANCER_EXCHANGE_SKILL_PROPOSAL_SENT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case FREELANCER_EXCHANGE_SKILL_PROPOSAL_SENT_SUCCESS: {
      return {
        ...state,
        submittedRequests: action.payload,
        loading: false,
      };
    }

    case FREELANCER_EXCHANGE_SKILL_PROPOSAL_SENT_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case GET_ALL_SUBMITTED_EXCHANGE_SKILLS_REQUESTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_SUBMITTED_EXCHANGE_SKILLS_REQUESTS_SUCCESS: {
      return {
        ...state,
        submittedRequests: action.payload,
        loading: false,
      };
    }

    case GET_ALL_SUBMITTED_EXCHANGE_SKILLS_REQUESTS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_ALL_RECEIVED_EXCHANGE_SKILLS_REQUESTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_RECEIVED_EXCHANGE_SKILLS_REQUESTS_SUCCESS: {
      return {
        ...state,
        receivedRequests: action.payload,
        loading: false,
      };
    }

    case GET_ALL_RECEIVED_EXCHANGE_SKILLS_REQUESTS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_ALL_FREELANCER_ORDERS_REQUEST: {
      return {
        ...state,

        loading: true,
      };
    }

    case GET_ALL_FREELANCER_ORDERS_SUCCESS: {
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    }

    case GET_ALL_FREELANCER_ORDERS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_ALL_FREELANCER_EXCHANGE_SKILLS_ORDERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_FREELANCER_EXCHANGE_SKILLS_ORDERS_SUCCESS: {
      return {
        ...state,
        exchangeSkillsOrders: action.payload,
        loading: false,
      };
    }

    case GET_ALL_FREELANCER_EXCHANGE_SKILLS_ORDERS_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case ACCEPT_GIG_ORDER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case ACCEPT_GIG_ORDER_SUCCESS: {
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    }

    case ACCEPT_GIG_ORDER_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case GET_ALL_FREELANCER_BLOGS_REQUEST: {
      return {
        ...state,

        loading: true,
      };
    }

    case GET_ALL_FREELANCER_BLOGS_SUCCESS: {
      return {
        ...state,
        blogs: action.payload,
        loading: false,
      };
    }
    case GET_ALL_FREELANCER_BLOGS_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }
    case GET_MY_FREELANCER_BLOGS_REQUEST: {
      return {
        ...state,

        loading: true,
      };
    }

    case GET_MY_FREELANCER_BLOGS_SUCCESS: {
      return {
        ...state,
        myBlogs: action.payload,
        loading: false,
      };
    }

    case GET_MY_FREELANCER_BLOGS_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case GET_ALL_MY_EXCHANGE_SKILLS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_MY_EXCHANGE_SKILLS_SUCCESS: {
      return {
        ...state,
        myExchangeSkills: action.payload,
        loading: false,
      };
    }

    case GET_ALL_MY_EXCHANGE_SKILLS_FAIL: {
      return {
        ...state,
        myExchangeSkills: action.payload,
        loading: false,
      };
    }

    case GET_ALL_FREELANCER_REPORTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_FREELANCER_REPORTS_SUCCESS: {
      return {
        ...state,
        reports: action.payload,
        loading: false,
      };
    }

    case GET_ALL_FREELANCER_REPORTS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case CREATE_NEW_GIG_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case CREATE_NEW_GIG_SUCCESS: {
      return {
        ...state,
        gigs: action.payload,
        loading: false,
      };
    }

    case CREATE_NEW_GIG_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case EDIT_GIG_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case EDIT_GIG_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case EDIT_GIG_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case DELETE_GIG_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_GIG_SUCCESS: {
      return {
        ...state,
        gigs: state.gigs.filter((gig) => gig._id !== action.payload._id),
        loading: false,
      };
    }

    case DELETE_GIG_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_MY_GIGS_REQUEST: {
      return {
        ...state,

        loading: true,
      };
    }

    case GET_MY_GIGS_SUCCESS: {
      return {
        ...state,
        gigs: action.payload,
        loading: false,
      };
    }

    case GET_MY_GIGS_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case CREATE_NEW_FREELANCER_CONVERSATION_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case CREATE_NEW_FREELANCER_CONVERSATION_SUCCESS: {
      return {
        ...state,
        conversations: action.payload,
        loading: false,
      };
    }

    case CREATE_NEW_FREELANCER_CONVERSATION_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_FREELANCER_MESSAGES_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_FREELANCER_MESSAGES_SUCCESS: {
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };
    }

    case GET_FREELANCER_MESSAGES_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default FreelancerReducer;
