import {
  userAuth,
  DELETE_CLIENT_ACCOUNT_SUCCESS,
  GET_CLIENT_PROFILE_SUCCESS,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_CLIENT_BLOGS_SUCCESS,
  GET_ALL_CLIENT_REPORTS_SUCCESS,
  READ_CLIENT_NOTIFICATION_SUCCESS,
  CREATE_NEW_BLOG_COMMENT_SUCCESS,
  CREATE_NEW_BLOG_REPLY_COMMENT_SUCCESS,
  CREATE_NEW_GIG_ORDER_SUCCESS,
  SUBMIT_REVIEW_SUCCESS,
  GET_FREELANCER_CLIENT_REVIEWS_SUCCESS,
  DELETE_CLIENT_ACCOUNT_FAIL,
  DELETE_CLIENT_ACCOUNT_REQUEST,
  GET_CLIENT_PROFILE_FAIL,
  GET_CLIENT_PROFILE_REQUEST,
  GET_ALL_ORDERS_FAIL,
  GET_ALL_ORDERS_REQUEST,
  CREATE_NEW_GIG_ORDER_FAIL,
  CREATE_NEW_GIG_ORDER_REQUEST,
  GET_ALL_CLIENT_BLOGS_REQUEST,
  GET_ALL_CLIENT_BLOGS_FAIL,
  CREATE_NEW_BLOG_COMMENT_FAIL,
  CREATE_NEW_BLOG_COMMENT_REQUEST,
  CREATE_NEW_BLOG_REPLY_COMMENT_FAIL,
  CREATE_NEW_BLOG_REPLY_COMMENT_REQUEST,
  SUBMIT_REVIEW_FAIL,
  SUBMIT_REVIEW_REQUEST,
  GET_ALL_CLIENT_REPORTS_REQUEST,
  GET_ALL_CLIENT_REPORTS_FAIL,
  GET_FREELANCER_CLIENT_REVIEWS_FAIL,
  GET_FREELANCER_CLIENT_REVIEWS_REQUEST,
  READ_CLIENT_NOTIFICATION_FAIL,
  READ_CLIENT_NOTIFICATION_REQUEST,
  UPDATE_CLIENT_ACCOUNT_SUCCESS,
  UPDATE_CLIENT_ACCOUNT_FAIL,
  UPDATE_CLIENT_ACCOUNT_REQUEST,
  UPDATE_CLIENT_PROFILE_SUCCESS,
  UPDATE_CLIENT_PROFILE_FAIL,
  UPDATE_CLIENT_PROFILE_REQUEST,
  VERIFY_CLIENT_EMAIL_SUCCESS,
  VERIFY_CLIENT_EMAIL_FAIL,
  VERIFY_CLIENT_EMAIL_REQUEST,
  SEND_OTP_CLIENT_SUCCESS,
  SEND_OTP_CLIENT_FAIL,
  SEND_OTP_CLIENT_REQUEST,
  ADD_PAYMENT_REQUEST,
  ADD_PAYMENT_SUCCESS,
  ADD_PAYMENT_FAIL,
  GET_PAYMENT_REQUEST,
  GET_PAYMENT_SUCCESS,
  GET_PAYMENT_FAIL,
  DELETE_PAYMENT_REQUEST,
  DELETE_PAYMENT_SUCCESS,
  DELETE_PAYMENT_FAIL,
  ACCEPT_PROPOSAL_SUCCESS,
  CREATE_NEW_JOB_SUCCESS,
  GET_ALL_JOBS_SUCCESS,
  DELETE_JOB_SUCCESS,
  EDIT_JOB_SUCCESS,
  GET_ALL_JOBS_PROPOSALS_FOR_CLIENT_SUCCESS,
  REJECT_PROPOSAL_SUCCESS,
  CREATE_NEW_JOB_FAIL,
  CREATE_NEW_JOB_REQUEST,
  EDIT_JOB_FAIL,
  EDIT_JOB_REQUEST,
  DELETE_JOB_FAIL,
  DELETE_JOB_REQUEST,
  GET_ALL_JOBS_FAIL,
  GET_ALL_JOBS_REQUEST,
  GET_ALL_GIGS_SUCCESS,
  GET_ALL_JOBS_PROPOSALS_FOR_CLIENT_FAIL,
  GET_ALL_JOBS_PROPOSALS_FOR_CLIENT_REQUEST,
  ACCEPT_PROPOSAL_FAIL,
  ACCEPT_PROPOSAL_REQUEST,
  REJECT_PROPOSAL_FAIL,
  REJECT_PROPOSAL_REQUEST,
  GET_ALL_GIGS_FAIL,
  GET_ALL_GIGS_REQUEST,
  GET_ALL_FREELANCERS_SUCCESS,
  GET_ALL_FREELANCERS_FAIL,
  GET_ALL_FREELANCERS_REQUEST,
  FORGET_CLIENT_PASSWORD_SUCCESS,
  FORGET_CLIENT_PASSWORD_FAIL,
  FORGET_CLIENT_PASSWORD_REQUEST,
  RESET_CLIENT_PASSWORD_SUCCESS,
  RESET_CLIENT_PASSWORD_FAIL,
  RESET_CLIENT_PASSWORD_REQUEST,
  VERIFY_CLIENT_TOKEN_SUCCESS,
  VERIFY_CLIENT_TOKEN_FAIL,
  VERIFY_CLIENT_TOKEN_REQUEST,
  CREATE_NEW_CLIENT_CONVERSATION_SUCCESS,
  CREATE_NEW_CLIENT_CONVERSATION_REQUEST,
  CREATE_NEW_CLIENT_CONVERSATION_FAIL,
  GET_CLIENT_MESSAGES_SUCCESS,
  GET_CLIENT_MESSAGES_FAIL,
  GET_CLIENT_MESSAGES_REQUEST,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_SUCCESS,
  CANCEL_ORDER_FAIL,
} from "../actions/types";
const INITIAL_STATE = {
  loading: false,
  reviews: {},
  blogComments: {},
  blogReplyComments: {},
  userInfo: {},
  orders: {},
  blogs: {},
  reports: {},
  notifications: {},
  forgotPassword: {},
  payments: {},
  jobs: {},
  proposals: {},
  gigs: {},
  freelancers: {},
  conversations: {},
  messages: {},
};
const ClientReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userAuth.CLIENT_SIGN_UP_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case userAuth.CLIENT_SIGN_UP_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    }

    case userAuth.CLIENT_SIGN_UP_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case userAuth.CLIENT_LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case userAuth.CLIENT_LOGIN_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    }

    case userAuth.CLIENT_LOGIN_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case userAuth.CLIENT_LOGOUT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case userAuth.CLIENT_LOGOUT_SUCCESS: {
      return {
        ...state,
        userInfo: {},
        loading: false,
      };
    }

    case DELETE_CLIENT_ACCOUNT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_CLIENT_ACCOUNT_SUCCESS: {
      return {
        ...state,
        loading: false,
        userInfo: null,
      };
    }

    case DELETE_CLIENT_ACCOUNT_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_CLIENT_PROFILE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CLIENT_PROFILE_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    }

    case GET_CLIENT_PROFILE_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_ALL_ORDERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_ORDERS_SUCCESS: {
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    }

    case GET_ALL_ORDERS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case CREATE_NEW_GIG_ORDER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case CREATE_NEW_GIG_ORDER_SUCCESS: {
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    }

    case CREATE_NEW_GIG_ORDER_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_ALL_CLIENT_BLOGS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_CLIENT_BLOGS_SUCCESS: {
      return {
        ...state,
        blogs: action.payload,
        loading: false,
      };
    }

    case GET_ALL_CLIENT_BLOGS_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case CREATE_NEW_BLOG_COMMENT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case CREATE_NEW_BLOG_COMMENT_SUCCESS: {
      return {
        ...state,
        blogComments: action.payload,
        loading: false,
      };
    }

    case CREATE_NEW_BLOG_COMMENT_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case CREATE_NEW_BLOG_REPLY_COMMENT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case CREATE_NEW_BLOG_REPLY_COMMENT_SUCCESS: {
      return {
        ...state,
        blogReplyComments: action.payload,
        loading: false,
      };
    }

    case CREATE_NEW_BLOG_REPLY_COMMENT_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case SUBMIT_REVIEW_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case SUBMIT_REVIEW_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case SUBMIT_REVIEW_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_ALL_CLIENT_REPORTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_CLIENT_REPORTS_SUCCESS: {
      return {
        ...state,
        reports: action.payload,
        loading: false,
      };
    }

    case GET_ALL_CLIENT_REPORTS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_FREELANCER_CLIENT_REVIEWS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_FREELANCER_CLIENT_REVIEWS_SUCCESS: {
      return {
        ...state,
        reviews: action.payload,
        loading: false,
      };
    }

    case GET_FREELANCER_CLIENT_REVIEWS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case READ_CLIENT_NOTIFICATION_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case READ_CLIENT_NOTIFICATION_SUCCESS: {
      return {
        ...state,
        notifications: action.payload,
        loading: false,
      };
    }

    case READ_CLIENT_NOTIFICATION_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case UPDATE_CLIENT_ACCOUNT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case UPDATE_CLIENT_ACCOUNT_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    }

    case UPDATE_CLIENT_ACCOUNT_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case UPDATE_CLIENT_PROFILE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case UPDATE_CLIENT_PROFILE_SUCCESS: {
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    }

    case UPDATE_CLIENT_PROFILE_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case SEND_OTP_CLIENT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case SEND_OTP_CLIENT_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case SEND_OTP_CLIENT_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case VERIFY_CLIENT_EMAIL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case VERIFY_CLIENT_EMAIL_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case VERIFY_CLIENT_EMAIL_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case ADD_PAYMENT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case ADD_PAYMENT_SUCCESS: {
      return {
        ...state,
        payments: action.payload,
        loading: false,
      };
    }

    case ADD_PAYMENT_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_PAYMENT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_PAYMENT_SUCCESS: {
      return {
        ...state,
        payments: action.payload,
        loading: false,
      };
    }

    case GET_PAYMENT_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case DELETE_PAYMENT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_PAYMENT_SUCCESS: {
      return {
        ...state,
        payments: action.payload,
        loading: false,
      };
    }

    case DELETE_PAYMENT_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case CREATE_NEW_JOB_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case CREATE_NEW_JOB_SUCCESS: {
      return {
        ...state,
        job: action.payload,
        loading: false,
      };
    }

    case CREATE_NEW_JOB_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case EDIT_JOB_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case EDIT_JOB_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case EDIT_JOB_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case DELETE_JOB_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case DELETE_JOB_SUCCESS: {
      return {
        ...state,
        jobs: state.jobs.response.filter(
          (job) => job._id !== action.payload._id
        ),
        loading: false,
      };
    }

    case DELETE_JOB_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_ALL_JOBS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_JOBS_SUCCESS: {
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };
    }

    case GET_ALL_JOBS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_ALL_JOBS_PROPOSALS_FOR_CLIENT_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_JOBS_PROPOSALS_FOR_CLIENT_SUCCESS: {
      return {
        ...state,
        proposals: action.payload,
        loading: false,
      };
    }

    case GET_ALL_JOBS_PROPOSALS_FOR_CLIENT_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case ACCEPT_PROPOSAL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case ACCEPT_PROPOSAL_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case ACCEPT_PROPOSAL_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case REJECT_PROPOSAL_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case REJECT_PROPOSAL_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case REJECT_PROPOSAL_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_ALL_GIGS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_GIGS_SUCCESS: {
      return {
        ...state,
        gigs: action.payload,
        loading: false,
      };
    }

    case GET_ALL_GIGS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_ALL_FREELANCERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_FREELANCERS_SUCCESS: {
      return {
        ...state,
        freelancers: action.payload,
        loading: false,
      };
    }

    case GET_ALL_FREELANCERS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case FORGET_CLIENT_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case FORGET_CLIENT_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case FORGET_CLIENT_PASSWORD_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case RESET_CLIENT_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case RESET_CLIENT_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case RESET_CLIENT_PASSWORD_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case VERIFY_CLIENT_TOKEN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case VERIFY_CLIENT_TOKEN_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case VERIFY_CLIENT_TOKEN_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    
    case CREATE_NEW_CLIENT_CONVERSATION_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case CREATE_NEW_CLIENT_CONVERSATION_SUCCESS: {
      return {
        ...state,
        conversations: action.payload,
        loading: false,
      };
    }

    case CREATE_NEW_CLIENT_CONVERSATION_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case GET_CLIENT_MESSAGES_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_CLIENT_MESSAGES_SUCCESS: {
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };
    }

    case GET_CLIENT_MESSAGES_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case CANCEL_ORDER_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case CANCEL_ORDER_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    case CANCEL_ORDER_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }


    default:
      return state;
  }
};

export default ClientReducer;
