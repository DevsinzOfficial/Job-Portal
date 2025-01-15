import {
  GET_ALL_GUEST_JOBS_SUCCESS,
  GET_ALL_GUEST_EXCHANGE_SKILLS_SUCCESS,
  GET_ALL_GUEST_FREELANCERS_SUCCESS,
  GET_GUEST_REVIEWS_SUCCESS,
  GET_ALL_GUEST_JOBS_FAIL,
  GET_ALL_GUEST_JOBS_REQUEST,
  GET_ALL_GUEST_EXCHANGE_SKILLS_FAIL,
  GET_ALL_GUEST_EXCHANGE_SKILLS_REQUEST,
  GET_ALL_GUEST_FREELANCERS_FAIL,
  GET_ALL_GUEST_FREELANCERS_REQUEST,
  GET_GUEST_REVIEWS_FAIL,
  GET_GUEST_REVIEWS_REQUEST,
} from "../actions/types";

const INITIAL_STATE = {
  loading: false,
  guestjobs: {},
  guestfreelancers: {},
  guestExchangeskills: {},
  guestReviews: {},
};
const JobReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_GUEST_JOBS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_GUEST_JOBS_SUCCESS: {
      return {
        ...state,
        guestjobs: action.payload,
        loading: false,
      };
    }

    case GET_ALL_GUEST_JOBS_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case GET_ALL_GUEST_EXCHANGE_SKILLS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_GUEST_EXCHANGE_SKILLS_SUCCESS: {
      return {
        ...state,
        guestExchangeskills: action.payload,
        loading: false,
      };
    }

    case GET_ALL_GUEST_EXCHANGE_SKILLS_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case GET_ALL_GUEST_FREELANCERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ALL_GUEST_FREELANCERS_SUCCESS: {
      return {
        ...state,
        guestfreelancers: action.payload,
        loading: false,
      };
    }

    case GET_ALL_GUEST_FREELANCERS_FAIL: {
      return {
        ...state,

        loading: false,
      };
    }

    case GET_GUEST_REVIEWS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_GUEST_REVIEWS_SUCCESS: {
      return {
        ...state,
        guestReviews: action.payload,
        loading: false,
      };
    }

    case GET_GUEST_REVIEWS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default JobReducer;
