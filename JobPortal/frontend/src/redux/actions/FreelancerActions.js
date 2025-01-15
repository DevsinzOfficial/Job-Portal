import axios from "axios";
import { BASE_URL } from "../../config/constant";
import { headers } from "../config";
import {
  ADD_EXCHANGE_SKILLS_FAIL,
  GET_ALL_FREELANCER_EXCHANGE_SKILLS_SUCCESS,
  GET_ALL_FREELANCER_EXCHANGE_SKILLS_FAIL,
  GET_ALL_FREELANCER_EXCHANGE_SKILLS_REQUEST,
  ADD_EXCHANGE_SKILLS_SUCCESS,
  userAuth,
  UPDATE_EXCHANGE_SKILLS_SUCCESS,
  UPDATE_EXCHANGE_SKILLS_FAIL,
  UPDATE_EXCHANGE_SKILLS_REQUEST,
  COMPLETE_FREELANCER_PROFILE_SUCCESS,
  COMPLETE_FREELANCER_PROFILE_FAIL,
  GET_ALL_FREELANCER_JOBS_SUCCESS,
  GET_ALL_FREELANCER_JOBS_REQUEST,
  GET_ALL_FREELANCER_JOBS_FAIL,
  CREATE_NEW_BLOG_FAIL,
  CREATE_NEW_BLOG_SUCCESS,
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
  GET_ALL_FREELANCER_REPORTS_FAIL,
  GET_ALL_FREELANCER_REPORTS_SUCCESS,
  GET_ALL_FREELANCER_REPORTS_REQUEST,
  GET_FREELANCER_PROFILE_SUCCESS,
  GET_FREELANCER_PROFILE_FAIL,
  UPDATE_FREELANCER_ACCOUNT_SUCCESS,
  UPDATE_FREELANCER_ACCOUNT_FAIL,
  DELETE_FREELANCER_ACCOUNT_SUCCESS,
  DELETE_FREELANCER_ACCOUNT_FAIL,
  FORGET_FREELANCER_PASSWORD_SUCCESS,
  FORGET_FREELANCER_PASSWORD_FAIL,
  VERIFY_FREELANCER_TOKEN_SUCCESS,
  VERIFY_FREELANCER_TOKEN_FAIL,
  RESET_FREELANCER_PASSWORD_SUCCESS,
  RESET_FREELANCER_PASSWORD_FAIL,
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
  GET_ALL_RECEIVED_EXCHANGE_SKILLS_REQUESTS_FAIL,
  GET_ALL_RECEIVED_EXCHANGE_SKILLS_REQUESTS_REQUEST,
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
  REJECT_REQUEST_FAIL,
  REJECT_REQUEST_REQUEST,
  READ_FREELANCER_NOTIFICATION_SUCCESS,
  READ_FREELANCER_NOTIFICATION_FAIL,
  READ_FREELANCER_NOTIFICATION_REQUEST,
  GET_ALL_FREELANCER_EXCHANGE_SKILLS_ORDERS_SUCCESS,
  GET_ALL_FREELANCER_EXCHANGE_SKILLS_ORDERS_FAIL,
  GET_ALL_FREELANCER_EXCHANGE_SKILLS_ORDERS_REQUEST,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAIL,
  SEND_OTP_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAIL,
  CREATE_NEW_BLOG_REPLY_COMMENT_FREELANCER_SUCCESS,
  CREATE_NEW_BLOG_REPLY_COMMENT_FREELANCER_FAIL,
  CREATE_NEW_BLOG_REPLY_COMMENT_FREELANCER_REQUEST,
  GET_FREELANCER_REVIEWS_SUCCESS,
  GET_FREELANCER_REVIEWS_FAIL,
  GET_FREELANCER_REVIEWS_REQUEST,
  GET_FREELANCER_ALL_REVIEWS_SUCCESS,
  GET_FREELANCER_ALL_REVIEWS_FAIL,
  GET_FREELANCER_ALL_REVIEWS_REQUEST,
  GET_ALL_JOBS_PROPOSALS_FOR_FREELANCER_SUCCESS,
  GET_ALL_JOBS_PROPOSALS_FOR_FREELANCER_FAIL,
  GET_ALL_JOBS_PROPOSALS_FOR_FREELANCER_REQUEST,
  DELETE_JOB_PROPOSAL_SUCCESS,
  DELETE_JOB_PROPOSAL_FAIL,
  DELETE_JOB_PROPOSAL_REQUEST,
  EDIT_PROPOSAL_SUCCESS,
  EDIT_PROPOSAL_FAIL,
  EDIT_PROPOSAL_REQUEST,
  CREATE_NEW_GIG_FAIL,
  CREATE_NEW_GIG_SUCCESS,
  CREATE_NEW_GIG_REQUEST,
  EDIT_GIG_FAIL,
  EDIT_GIG_SUCCESS,
  EDIT_GIG_REQUEST,
  DELETE_GIG_FAIL,
  DELETE_GIG_SUCCESS,
  DELETE_GIG_REQUEST,
  GET_MY_GIGS_SUCCESS,
  GET_MY_GIGS_FAIL,
  GET_MY_GIGS_REQUEST,
  ACCEPT_GIG_ORDER_SUCCESS,
  ACCEPT_GIG_ORDER_FAIL,
  ACCEPT_GIG_ORDER_REQUEST,
  FORGET_FREELANCER_PASSWORD_REQUEST,
  GET_FREELANCER_PROFILE_REQUEST,
  COMPLETE_FREELANCER_PROFILE_REQUEST,
  UPDATE_FREELANCER_ACCOUNT_REQUEST,
  RESET_FREELANCER_PASSWORD_REQUEST,
  VERIFY_FREELANCER_TOKEN_REQUEST,
  VERIFY_EMAIL_REQUEST,
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
  ADD_EXCHANGE_SKILLS_REQUEST,
  CREATE_NEW_FREELANCER_CONVERSATION_SUCCESS,
  CREATE_NEW_FREELANCER_CONVERSATION_FAIL,
  CREATE_NEW_FREELANCER_CONVERSATION_REQUEST,
  GET_FREELANCER_MESSAGES_SUCCESS,
  GET_FREELANCER_MESSAGES_FAIL,
  GET_FREELANCER_MESSAGES_REQUEST,
} from "./types";

// Freelancer Registration
export const RegisterFreelancer = (payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: userAuth.FREELANCER_SIGN_UP_REQUEST,
    });
    axios
      .post(`${BASE_URL}/freelancer/register`, payload, {
        headers: headers,
      })
      .then((response) => {
        navigate(`/freelancer/create-freelancer-profile/${response.data._id}`);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("authID", response.data._id);
        toast.success("Signed Up Successfully", {
          theme: "colored",
        });
        dispatch({
          type: userAuth.FREELANCER_SIGN_UP_SUCCESS,
          payload: response.data,
        });
        setTimeout(function () {
          window.location.reload();
        }, 50);
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: userAuth.FREELANCER_SIGN_UP_FAIL,
        });
      });
  };
};

export const LoginFreelancer = (payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: userAuth.FREELANCER_LOG_IN_REQUEST,
    });
    axios
      .post(`${BASE_URL}/freelancer/login`, payload, headers)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("authID", response.data._id);
        toast.success("Logged In Successfully", {
          theme: "colored",
        });
        dispatch({
          type: userAuth.FREELANCER_LOG_IN_SUCCESS,
          payload: response.data,
        });
        if (response.status === 200 && localStorage.getItem("token")) {
          navigate("/freelancer/freelancer-dashboard");
        }
        setTimeout(function () {
          window.location.reload();
        }, 50);
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: userAuth.FREELANCER_LOG_IN_FAIL,
        });
      });
  };
};

// Client LogOUT
export const logoutFreelancer = (navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: userAuth.FREELANCER_LOGOUT_REQUEST,
    });
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("authID");
    toast.success("Logged Out Successfully", {
      theme: "colored",
    });
    dispatch({
      type: userAuth.FREELANCER_LOGOUT_SUCCESS,
    });
    setTimeout(function () {
      window.location.reload();
    }, 400);
  };
};

// Forget Client Password
export const ForgetFreelancerPassword = (payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: FORGET_FREELANCER_PASSWORD_REQUEST,
    });
    axios
      .post(`${BASE_URL}/freelancer/forgot-password`, payload, {
        headers: headers,
      })
      .then((response) => {
        navigate("/login-type");
        toast.success("Reset Password Link sent to your email", {
          theme: "colored",
        });
        dispatch({
          type: FORGET_FREELANCER_PASSWORD_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: FORGET_FREELANCER_PASSWORD_FAIL,
          payload: error,
        });
      });
  };
};

// Get Client Information
export const GetFreelancerInformation = (id, toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_FREELANCER_PROFILE_REQUEST,
    });
    axios
      .get(`${BASE_URL}/freelancer/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_FREELANCER_PROFILE_SUCCESS,
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
          type: GET_FREELANCER_PROFILE_FAIL,
          payload: error,
        });
      });
  };
};

// Complete Freelancer Profile
export const CreateFreelancerProfile = (id, payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: COMPLETE_FREELANCER_PROFILE_REQUEST,
    });
    axios
      .put(`${BASE_URL}/freelancer/profile/${id}`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/freelancer");
          toast.success("Profile Updated Successfully", {
            theme: "colored",
          });
        }

        dispatch({
          type: COMPLETE_FREELANCER_PROFILE_SUCCESS,
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
          type: COMPLETE_FREELANCER_PROFILE_FAIL,
        });
      });
  };
};

// Update Freelancer Account
export const UpdateFreelancerAccount = (id, payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_FREELANCER_ACCOUNT_REQUEST,
    });
    axios
      .put(`${BASE_URL}/freelancer/${id}`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        navigate("/freelancer");
        toast.success("Account Updated Successfully", {
          theme: "colored",
        });
        dispatch({
          type: UPDATE_FREELANCER_ACCOUNT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: UPDATE_FREELANCER_ACCOUNT_FAIL,
          payload: error,
        });
      });
  };
};

// Reset Freelancer Password
export const ResetFreelancerPassword = (
  token,
  id,
  payload,
  navigate,
  toast
) => {
  return (dispatch) => {
    dispatch({
      type: RESET_FREELANCER_PASSWORD_REQUEST,
    });
    axios
      .post(
        `${BASE_URL}/freelancer/reset-password?token=${token}&id=${id}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        navigate("/login-type");
        toast.success("Password Reset Successfully", {
          theme: "colored",
        });

        dispatch({
          type: RESET_FREELANCER_PASSWORD_SUCCESS,
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
          type: RESET_FREELANCER_PASSWORD_FAIL,
          payload: error,
        });
      });
  };
};

export const verifyResetPasswordToken = (token, id, toast) => {
  return (dispatch) => {
    dispatch({
      type: VERIFY_FREELANCER_TOKEN_REQUEST,
    });
    axios
      .get(
        `${BASE_URL}/freelancer/verify-token?token=${token}&id=${id}`,
        headers
      )
      .then((response) => {
        toast.success("Reset Token Verified Successfully", {
          theme: "colored",
        });

        dispatch({
          type: VERIFY_FREELANCER_TOKEN_SUCCESS,
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
          type: VERIFY_FREELANCER_TOKEN_FAIL,
          payload: error,
        });
      });
  };
};

// Send OTP
export const SendOTP = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: SEND_OTP_REQUEST,
    });
    axios
      .post(
        `${BASE_URL}/freelancer/send-verification-token/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          navigate("/freelancer/settings/verification");
          toast.success("OTP is successfully sent to your email", {
            theme: "colored",
          });
        }
        if (response.status === 400) {
          toast.error(response.errorMessage, {
            theme: "colored",
          });
        }
        dispatch({
          type: SEND_OTP_SUCCESS,
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
          type: SEND_OTP_FAIL,
          payload: error,
        });
      });
  };
};

// Verify Email
export const VerifyEmail = (payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: VERIFY_EMAIL_REQUEST,
    });
    axios
      .post(`${BASE_URL}/freelancer/verify`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          navigate("/freelancer");
          toast.success("Your Email Has Been Verified Successfully", {
            theme: "colored",
          });
        }
        if (response.status === 400) {
          toast.error(response.errorMessage, {
            theme: "colored",
          });
        }
        dispatch({
          type: VERIFY_EMAIL_SUCCESS,
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
          type: VERIFY_EMAIL_FAIL,
          payload: error,
        });
      });
  };
};

// Delete Freelancer Account
export const DeleteFreelancerAccount = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_FREELANCER_ACCOUNT_REQUEST,
    });
    axios
      .delete(`${BASE_URL}/freelancer/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/");
          localStorage.removeItem("token");
          localStorage.removeItem("authID");
          toast.success("Account Deleted Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: DELETE_FREELANCER_ACCOUNT_SUCCESS,
          payload: response.data,
        });
        setTimeout(function () {
          window.location.reload();
        }, 400);
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
          type: DELETE_FREELANCER_ACCOUNT_FAIL,
          payload: error,
        });
      });
  };
};

/* Add payment */
export const addFreelancerPayment = (payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: ADD_FREELANCER_PAYMENT_REQUEST,
    });
    axios
      .post("http://localhost:5000/payment", payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 201) {
          navigate("/freelancer/freelancer-dashboard");
          toast.success("Payment Added Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: ADD_FREELANCER_PAYMENT_SUCCESS,
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
          type: ADD_FREELANCER_PAYMENT_FAIL,
          payload: error,
        });
      });
  };
};

/* get payment */
export const getFreelancerPayment = (id, toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_FREELANCER_PAYMENT_REQUEST,
    });
    axios
      .get(`${BASE_URL}/freelancer/freelancer-payment/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_FREELANCER_PAYMENT_SUCCESS,
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
          type: GET_FREELANCER_PAYMENT_FAIL,
          payload: error,
        });
      });
  };
};

/* delete payment */
export const deleteFreelancerPayment = (id, toast) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_FREELANCER_PAYMENT_REQUEST,
    });
    axios
      .delete(`${BASE_URL}/freelancer/freelancer-payment/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Payment Method Deleted Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: DELETE_FREELANCER_PAYMENT_SUCCESS,
          payload: response.data,
        });
        setTimeout(function () {
          window.location.reload();
        }, 400);
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
          type: DELETE_FREELANCER_PAYMENT_FAIL,
          payload: error,
        });
      });
  };
};

// Add Exchange Skills
export const AdExchangeSkills = (payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: ADD_EXCHANGE_SKILLS_REQUEST,
    });
    axios
      .post(`${BASE_URL}/freelancer/ExchangeSkills`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 201) {
          navigate("/freelancer/freelancer-dashboard/my-exchange-skills");
          toast.success("Exchange Skill Added Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: ADD_EXCHANGE_SKILLS_SUCCESS,
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
          type: ADD_EXCHANGE_SKILLS_FAIL,
        });
      });
  };
};
// Update Exchange Skills
export const UpdateExchangeSkills = (payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_EXCHANGE_SKILLS_REQUEST,
    });
    axios
      .patch(`${BASE_URL}/freelancer/ExchangeSkills`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/freelancer/freelancer-dashboard/my-exchange-skills");
          toast.success("Exchange Skill Updated Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: UPDATE_EXCHANGE_SKILLS_SUCCESS,
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
          type: UPDATE_EXCHANGE_SKILLS_FAIL,
        });
      });
  };
};

// DeleteExchange Skills
export const DeleteExchangeSkill = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_EXCHANGE_SKILLS_REQUEST,
    });
    axios
      .delete(`${BASE_URL}/freelancer/deleteExchangeSkill/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/freelancer/freelancer-dashboard/my-exchange-skills");
          toast.success("Exchange Skill Deleted Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: DELETE_EXCHANGE_SKILLS_SUCCESS,
          payload: response.data,
        });
        setTimeout(function () {
          window.location.reload();
        }, 400);
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
          type: DELETE_EXCHANGE_SKILLS_FAIL,
          payload: error,
        });
      });
  };
};

// Get All Exchange Skills
export const GetMyExchangeSkills = (toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_MY_EXCHANGE_SKILLS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/freelancer/exchangeSkillsList`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_MY_EXCHANGE_SKILLS_SUCCESS,
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
          type: GET_ALL_MY_EXCHANGE_SKILLS_FAIL,
        });
      });
  };
};

// Get All Exchange Skills
export const GetAllExchangeSkills = (toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_FREELANCER_EXCHANGE_SKILLS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/freelancer/ExchangeSkills`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_FREELANCER_EXCHANGE_SKILLS_SUCCESS,
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
          type: GET_ALL_FREELANCER_EXCHANGE_SKILLS_FAIL,
        });
      });
  };
};

export const GetAllJobs = (toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_FREELANCER_JOBS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/job`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_FREELANCER_JOBS_SUCCESS,
          payload: response.data.response,
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
          type: GET_ALL_FREELANCER_JOBS_FAIL,
          payload: error,
        });
      });
  };
};

export const GetAllBlogs = (toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_FREELANCER_BLOGS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/blog/get_freelancer_blogs`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_FREELANCER_BLOGS_SUCCESS,
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
          type: GET_ALL_FREELANCER_BLOGS_FAIL,
          payload: error,
        });
      });
  };
};

/* Get Reviews and Ratings */
export const GetReviews = (id, toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_FREELANCER_REVIEWS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/gig/getFreelancerReviews/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_FREELANCER_REVIEWS_SUCCESS,
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
          type: GET_FREELANCER_REVIEWS_FAIL,
          payload: error,
        });
      });
  };
};

/* Get Reviews and Ratings */
export const GetAllReviews = (toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_FREELANCER_ALL_REVIEWS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/gig/getReviews`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_FREELANCER_ALL_REVIEWS_SUCCESS,
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
          type: GET_FREELANCER_ALL_REVIEWS_FAIL,
          payload: error,
        });
      });
  };
};

// Submit Exchange skill Request
// Proposals

// Get All Submit Exchange skill Request For Freelancer who submitted Request
export const GetSubmittedExchangeSkillsRequests = (toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_SUBMITTED_EXCHANGE_SKILLS_REQUESTS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/freelancer/submitted-requests`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_SUBMITTED_EXCHANGE_SKILLS_REQUESTS_SUCCESS,
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
          type: GET_ALL_SUBMITTED_EXCHANGE_SKILLS_REQUESTS_FAIL,
          payload: error,
        });
      });
  };
};

export const SubmitExchangeSkillRequest = (payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: FREELANCER_EXCHANGE_SKILL_PROPOSAL_SENT_REQUEST,
    });
    axios
      .post(`${BASE_URL}/freelancer/proposal`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 201) {
          navigate(
            "/freelancer/freelancer-dashboard/my-submitted-exchange-skills-requests"
          );
          toast.success("Exchange Skill Sent Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: FREELANCER_EXCHANGE_SKILL_PROPOSAL_SENT_SUCCESS,
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
          type: FREELANCER_EXCHANGE_SKILL_PROPOSAL_SENT_FAIL,
          payload: error,
        });
      });
  };
};

/* update request  */

export const UpdateRequest = (payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: FREELANCER_EXCHANGE_SKILL_PROPOSAL_UPDATE_REQUEST,
    });
    axios
      .patch(`${BASE_URL}/freelancer/proposal`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 201) {
          navigate(
            "/freelancer/freelancer-dashboard/my-submitted-exchange-skills-requests"
          );
          toast.success("Exchange Skill Request Updated Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: FREELANCER_EXCHANGE_SKILL_PROPOSAL_UPDATE_SUCCESS,
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
          type: FREELANCER_EXCHANGE_SKILL_PROPOSAL_UPDATE_FAIL,
          payload: error,
        });
      });
  };
};

// Delete Blog
export const DeleteExchangeSkillRequest = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_EXCHANGE_SKILL_REQUEST_REQUEST,
    });
    axios
      .delete(`${BASE_URL}/freelancer/deleteRequest/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate(
            "/freelancer/freelancer-dashboard/my-submitted-exchange-skills-requests"
          );
          toast.success("Exchange Skill Request Deleted Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: DELETE_EXCHANGE_SKILL_REQUEST_SUCCESS,
          payload: response.data,
        });
        setTimeout(function () {
          window.location.reload();
        }, 400);
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
          type: DELETE_EXCHANGE_SKILL_REQUEST_FAIL,
          payload: error,
        });
      });
  };
};

// Get All Submit Exchange skill Request For Freelancer who submitted Request
export const GetReceivedExchangeSkillsRequests = (toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_RECEIVED_EXCHANGE_SKILLS_REQUESTS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/freelancer/received-requests`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_RECEIVED_EXCHANGE_SKILLS_REQUESTS_SUCCESS,
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
          type: GET_ALL_RECEIVED_EXCHANGE_SKILLS_REQUESTS_FAIL,
          payload: error,
        });
      });
  };
};

// Accept Exchange skill
export const acceptExchangeSkillRequest = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: ACCEPT_REQUEST_REQUEST,
    });
    axios
      .patch(
        `${BASE_URL}/freelancer/proposal/accept/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          navigate(
            "/freelancer/freelancer-dashboard/my-exchange-skills-requests"
          );
          toast.success("Request Accepted Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: ACCEPT_REQUEST_SUCCESS,
          payload: response.data,
        });
        setTimeout(function () {
          window.location.reload();
        }, 400);
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
          type: ACCEPT_REQUEST_FAIL,
          payload: error,
        });
      });
  };
};

// Reject Exchange skill
export const rejectExchangeSkillRequest = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: REJECT_REQUEST_REQUEST,
    });
    axios
      .patch(
        `${BASE_URL}/freelancer/proposal/reject/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          navigate(
            "/freelancer/freelancer-dashboard/my-exchange-skills-requests"
          );
          toast.success("Request Rejected Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: REJECT_REQUEST_SUCCESS,
          payload: response.data,
        });
        setTimeout(function () {
          window.location.reload();
        }, 400);
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
          type: REJECT_REQUEST_FAIL,
          payload: error,
        });
      });
  };
};

// Freelancer Blogs

// Get My Blogs in Dashboard
export const GetMyBlogs = (toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_MY_FREELANCER_BLOGS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/blog/getMyBlogs`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_MY_FREELANCER_BLOGS_SUCCESS,
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
          type: GET_MY_FREELANCER_BLOGS_FAIL,
          payload: error,
        });
      });
  };
};

// Ad New Blog
export const addBlog = (payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_NEW_BLOG_REQUEST,
    });
    axios
      .post(`${BASE_URL}/blog/add_blog`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/freelancer/freelancer-dashboard/my-blogs");
          toast.success("Blog Created Successfully", {
            theme: "colored",
          });
        }

        dispatch({
          type: CREATE_NEW_BLOG_SUCCESS,
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
          type: CREATE_NEW_BLOG_FAIL,
          payload: error,
        });
      });
  };
};

// Update Blog

export const updateBlog = (id, payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_BLOG_REQUEST,
    });
    axios
      .patch(`${BASE_URL}/blog/update_blog/${id}`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/freelancer/freelancer-dashboard/my-blogs");
          toast.success("Blog Updated Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: UPDATE_BLOG_SUCCESS,
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
          type: UPDATE_BLOG_FAIL,
          payload: error,
        });
      });
  };
};

// Delete Blog
export const DeleteBlog = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_BLOG_REQUEST,
    });
    axios
      .delete(`${BASE_URL}/blog/deleteblog/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/freelancer/freelancer-dashboard/my-blogs");
          toast.success("Blog Deleted Successfully", {
            theme: "colored",
          });
        }

        dispatch({
          type: DELETE_BLOG_SUCCESS,
          payload: response.data,
        });
        setTimeout(function () {
          window.location.reload();
        }, 400);
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
          type: DELETE_BLOG_FAIL,
          payload: error,
        });
      });
  };
};

// Proposals

export const GetAllJobsProposalsForFreelancer = (toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_JOBS_PROPOSALS_FOR_FREELANCER_REQUEST,
    });
    axios
      .get(`${BASE_URL}/job/freelancer-proposals`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_JOBS_PROPOSALS_FOR_FREELANCER_SUCCESS,
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
          type: GET_ALL_JOBS_PROPOSALS_FOR_FREELANCER_FAIL,
          payload: error,
        });
      });
  };
};

export const SendProposal = (payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: FREELANCER_PROPOSAL_SENT_REQUEST,
    });
    axios
      .post(`${BASE_URL}/job/submitProposal`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 201) {
          navigate("/freelancer/freelancer-dashboard");
          toast.success("Proposal Sent Successfully", {
            theme: "colored",
          });
        }

        dispatch({
          type: FREELANCER_PROPOSAL_SENT_SUCCESS,
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
          type: FREELANCER_PROPOSAL_SENT_FAIL,
          payload: error,
        });
      });
  };
};

// Update Proposal
export const UpdateProposal = (id, payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_PROPOSAL_REQUEST,
    });
    axios
      .patch(`${BASE_URL}/job/proposal/${id}`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 201) {
          navigate("/freelancer/freelancer-dashboard/my-proposals");
          toast.success("Proposal Updated Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: EDIT_PROPOSAL_SUCCESS,
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
          type: EDIT_PROPOSAL_FAIL,
          payload: error,
        });
      });
  };
};

// Delete JOb Proposal with single freelancer
export const DeleteJobProposal = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_JOB_PROPOSAL_REQUEST,
    });

    axios
      .delete(`${BASE_URL}/job/deleteProposal/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/freelancer/freelancer-dashboard/my-proposals");
          toast.success("Job Proposal Deleted Successfully", {
            theme: "colored",
          });
        }

        dispatch({
          type: DELETE_JOB_PROPOSAL_SUCCESS,
          payload: response.data,
        });
        setTimeout(function () {
          window.location.reload();
        }, 400);
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
          type: DELETE_JOB_PROPOSAL_FAIL,
          payload: error,
        });
      });
  };
};

// Get Home Page Orders (Freelancer Dashboard)
export const GetAllOrders = (toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_FREELANCER_ORDERS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/gig/getOrders`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_FREELANCER_ORDERS_SUCCESS,
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
          type: GET_ALL_FREELANCER_ORDERS_FAIL,
          payload: error,
        });
      });
  };
};

// Get All Exchange Skills Order
export const GetExchangeSkillsOrders = (toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_ALL_FREELANCER_EXCHANGE_SKILLS_ORDERS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/gig/getExchangeSkillsOrders`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_FREELANCER_EXCHANGE_SKILLS_ORDERS_SUCCESS,
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
          type: GET_ALL_FREELANCER_EXCHANGE_SKILLS_ORDERS_FAIL,
          payload: error,
        });
      });
  };
};

// Get My Report
export const GetMyReports = (toast) => {
  const id = localStorage.getItem("authID");
  return (dispatch) => {
    dispatch({
      type: GET_ALL_FREELANCER_REPORTS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/gig/getFreelancerReport/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_ALL_FREELANCER_REPORTS_SUCCESS,
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
          type: GET_ALL_FREELANCER_REPORTS_FAIL,
          payload: error,
        });
      });
  };
};

// Read Notifications Freelancer

export const ReadNotifications = (toast) => {
  return (dispatch) => {
    dispatch({
      type: READ_FREELANCER_NOTIFICATION_REQUEST,
    });
    axios
      .get(`${BASE_URL}/notification/freelancer`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: READ_FREELANCER_NOTIFICATION_SUCCESS,
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
          type: READ_FREELANCER_NOTIFICATION_FAIL,
          payload: error,
        });
      });
  };
};

export const replyBlogComment = (
  blogId,
  commentId,
  payload,
  navigate,
  toast
) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_NEW_BLOG_REPLY_COMMENT_FREELANCER_REQUEST,
    });
    axios
      .post(
        `${BASE_URL}/blog/replycommentfreelancer/${blogId}/${commentId}`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          navigate("/freelancer/freelancer-dashboard");
          toast.success("Reply on Comment Added Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: CREATE_NEW_BLOG_REPLY_COMMENT_FREELANCER_SUCCESS,
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
          type: CREATE_NEW_BLOG_REPLY_COMMENT_FREELANCER_FAIL,
          payload: error,
        });
      });
  };
};

// Create New Gig
export const CreateGig = (payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_NEW_GIG_REQUEST,
    });
    axios
      .post(`${BASE_URL}/gig/add_gig`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/freelancer/freelancer-dashboard/my-gigs");
          toast.success("Gig Added Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: CREATE_NEW_GIG_SUCCESS,
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
          type: CREATE_NEW_GIG_FAIL,
          payload: error,
        });
      });
  };
};

// Get All Gigs created by freelancer himself
export const GetMyGigs = (toast) => {
  return (dispatch) => {
    dispatch({
      type: GET_MY_GIGS_REQUEST,
    });
    axios
      .get(`${BASE_URL}/gig/myGigs`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_MY_GIGS_SUCCESS,
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
          type: GET_MY_GIGS_FAIL,
          payload: error,
        });
      });
  };
};

// Edit Gig
export const EditGig = (id, payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_GIG_REQUEST,
    });
    axios
      .patch(`${BASE_URL}/gig/edit_gig/${id}`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/freelancer/freelancer-dashboard/my-gigs");
          toast.success("Gig Updated Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: EDIT_GIG_SUCCESS,
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
          type: EDIT_GIG_FAIL,
        });
      });
  };
};

// Delete Gig
export const DeleteGig = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_GIG_REQUEST,
    });
    axios
      .delete(`${BASE_URL}/gig/delete_gig/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/freelancer/freelancer-dashboard/my-gigs");
          toast.success("Gig Deleted Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: DELETE_GIG_SUCCESS,
          payload: response.data,
        });
        setTimeout(function () {
          window.location.reload();
        }, 400);
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
          type: DELETE_GIG_FAIL,
          payload: error,
        });
      });
  };
};

// Response to  Gig Order
export const ResponseGigOrder = (id, payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: ACCEPT_GIG_ORDER_REQUEST,
    });
    axios
      .patch(`${BASE_URL}/gig/responseOrder/${id}`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/freelancer/freelancer-dashboard");
          toast.success("Gig Order Accepted Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: ACCEPT_GIG_ORDER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: ACCEPT_GIG_ORDER_FAIL,
          payload: error,
        });
      });
  };
};

// Create New Gig
export const CreateConversation = (payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_NEW_FREELANCER_CONVERSATION_REQUEST,
    });
    axios
      .post(`${BASE_URL}/conversations`, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/freelancer/messages");
        }
        dispatch({
          type: CREATE_NEW_FREELANCER_CONVERSATION_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        toast.success("Conversation already exists", {
          theme: "colored",
        });
        dispatch({
          type: CREATE_NEW_FREELANCER_CONVERSATION_FAIL,
          payload: error,
        });
        navigate("/freelancer/messages");
      });
  };
};

export const GetAllMessages = (toast, id) => {
  return (dispatch) => {
    dispatch({
      type: GET_FREELANCER_MESSAGES_REQUEST,
    });
    axios
      .get(`${BASE_URL}/messages/?participants[]=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({
          type: GET_FREELANCER_MESSAGES_SUCCESS,
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
          type: GET_FREELANCER_MESSAGES_FAIL,
          payload: error,
        });
      });
  };
};
