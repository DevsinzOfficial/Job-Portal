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
} from "./types";
import axios from "axios";
import { BASE_URL } from "../../config/constant";
import { headers } from "../config";

export const GetGuestJobs = (toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_GUEST_JOBS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/job/guest-jobs`, headers)
      .then((response) => {
        dispatch({
          type: GET_ALL_GUEST_JOBS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        const err2 = error.message;
        toast.error(err, {
          theme: "colored",
        });
        toast.error(err2, {
          theme: "colored",
        });
        dispatch({
          type: GET_ALL_GUEST_JOBS_FAIL,
        });
      });
  };
};

export const GetGuestFreelancers = (toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_GUEST_FREELANCERS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/freelancer/guest-freelancers`, headers)
      .then((response) => {
        dispatch({
          type: GET_ALL_GUEST_FREELANCERS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        const err2 = error.message;
        toast.error(err, {
          theme: "colored",
        });
        toast.error(err2, {
          theme: "colored",
        });
        dispatch({
          type: GET_ALL_GUEST_FREELANCERS_FAIL,
        });
      });
  };
};

export const GetGuestExchangeSkills = (toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_GUEST_EXCHANGE_SKILLS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/freelancer/guest-exchangeskills`, headers)
      .then((response) => {
        dispatch({
          type: GET_ALL_GUEST_EXCHANGE_SKILLS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        const err2 = error.message;
        toast.error(err, {
          theme: "colored",
        });
        toast.error(err2, {
          theme: "colored",
        });
        dispatch({
          type: GET_ALL_GUEST_EXCHANGE_SKILLS_FAIL,
        });
      });
  };
};

/* Get Reviews and Ratings */
export const GetReviews = (toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_GUEST_REVIEWS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/gig/getGuestReviews`, headers)
      .then((response) => {
        dispatch({
          type: GET_GUEST_REVIEWS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        const err2 = error.message;
        toast.error(err, {
          theme: "colored",
        });
        toast.error(err2, {
          theme: "colored",
        });
        dispatch({
          type: GET_GUEST_REVIEWS_FAIL,
          payload: error,
        });
      });
  };
};
