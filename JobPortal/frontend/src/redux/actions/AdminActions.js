import {
  GET_ADMIN_JOB_PROPOSALS_SUCCESS,
  GET_ADMIN_JOB_PROPOSALS_FAIL,
  GET_ALL_CLIENTS_FAIL,
  GET_ALL_CLIENTS_SUCCESS,
  GET_ALL_FREELANCER_FAIL,
  userAuth,
  GET_ALL_ADMIN_EXCHANGE_SKILLS_SUCCESS,
  GET_ALL_ADMIN_EXCHANGE_SKILLS_FAIL,
  GET_ALL_FREELANCER_SUCCESS,
  GET_ADMIN_ALL_GIGS_SUCCESS,
  GET_ADMIN_ALL_GIGS_FAIL,
  GET_ADMIN_BLOGS_SUCCESS,
  GET_ADMIN_BLOGS_FAIL,
  GET_ADMIN_JOBS_SUCCESS,
  GET_ADMIN_JOBS_FAIL,
  GET_ADMIN_EXCHANGE_SKILLS_REQUESTS_SUCCESS,
  GET_ADMIN_EXCHANGE_SKILLS_REQUESTS_FAIL,
  GET_ADMIN_ORDERS_SUCCESS,
  GET_ADMIN_ORDERS_FAIL,
  GET_ADMIN_FREELANCER_REVIEWS_SUCCESS,
  GET_ADMIN_FREELANCER_REVIEWS_FAIL,
  GET_ADMIN_BLOGS_COMMENTS_SUCCESS,
  GET_ADMIN_BLOGS_COMMENTS_FAIL,
  GET_ADMIN_BLOGS_REPLY_COMMENTS_SUCCESS,
  GET_ADMIN_BLOGS_REPLY_COMMENTS_FAIL,
  DELETE_ADMIN_JOBS_SUCCESS,
  DELETE_ALL_FREELANCER_SUCCESS,
  DELETE_ADMIN_JOB_PROPOSALS_SUCCESS,
  DELETE_ALL_ADMIN_EXCHANGE_SKILLS_SUCCESS,
  DELETE_ALL_CLIENTS_SUCCESS,
  DELETE_ADMIN_ALL_GIGS_SUCCESS,
  DELETE_ADMIN_BLOGS_SUCCESS,
  DELETE_ADMIN_EXCHANGE_SKILLS_REQUESTS_SUCCESS,
  DELETE_ADMIN_ORDERS_SUCCESS,
  DELETE_ADMIN_ORDERS_FAIL,
  DELETE_ADMIN_FREELANCER_REVIEWS_SUCCESS,
  DELETE_ADMIN_BLOGS_COMMENTS_SUCCESS,
  DELETE_ADMIN_BLOGS_REPLY_COMMENTS_SUCCESS,
  DELETE_ADMIN_JOBS_FAIL,
  DELETE_ALL_FREELANCER_FAIL,
  DELETE_ADMIN_JOB_PROPOSALS_FAIL,
  DELETE_ALL_ADMIN_EXCHANGE_SKILLS_FAIL,
  DELETE_ALL_CLIENTS_FAIL,
  DELETE_ADMIN_ALL_GIGS_FAIL,
  DELETE_ADMIN_BLOGS_FAIL,
  DELETE_ADMIN_EXCHANGE_SKILLS_REQUESTS_FAIL,
  DELETE_ADMIN_FREELANCER_REVIEWS_FAIL,
  DELETE_ADMIN_BLOGS_COMMENTS_FAIL,
  DELETE_ADMIN_BLOGS_REPLY_COMMENTS_FAIL,
  GET_ALL_FREELANCER_REQUEST,
  GET_ALL_CLIENTS_REQUEST,
  GET_ADMIN_ALL_GIGS_REQUEST,
  GET_ALL_ADMIN_EXCHANGE_SKILLS_REQUEST,
  GET_ADMIN_JOBS_REQUEST,
  GET_ADMIN_BLOGS_REQUEST,
  GET_ADMIN_JOB_PROPOSALS_REQUEST,
  GET_ADMIN_EXCHANGE_SKILLS_REQUESTS_REQUEST,
  GET_ADMIN_ORDERS_REQUEST,
  GET_ADMIN_FREELANCER_REVIEWS_REQUEST,
  GET_ADMIN_BLOGS_COMMENTS_REQUEST,
  GET_ADMIN_BLOGS_REPLY_COMMENTS_REQUEST,
  DELETE_ALL_FREELANCER_REQUEST,
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
  GET_ADMIN_MESSAGES_REQUEST,
  GET_ADMIN_MESSAGES_SUCCESS,
  GET_ADMIN_MESSAGES_FAIL,
} from "./types";
import axios from "axios";
import { BASE_URL } from "../../config/constant";
import { authHeader } from "../config";
import { headers } from "../config";

export const RegisterAdmin = (payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: userAuth.ADMIN_REGISTRATION_REQUEST,
    });
    axios
      .post(`${BASE_URL}/admin/register`, payload, {
        headers: headers,
      })
      .then((response) => {
        navigate("/admin/admin-dashboard");
        localStorage.setItem("token", response.data.token);
        toast.success("Signed Up Successfully", {
          theme: "colored",
        });
        dispatch({
          type: userAuth.ADMIN_REGISTRATION_SUCCESS,
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
          type: userAuth.ADMIN_REGISTRATION_FAIL,
        });
      });
  };
};

// Admin Login
export const LoginAdmin = (payload, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: userAuth.ADMIN_LOGIN_REQUEST,
    });
    axios
      .post(`${BASE_URL}/admin/login`, payload, {
        headers: headers,
      })
      .then((response) => {
        navigate("/admin/admin-dashboard");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("authID", response.data._id);
        toast.success("Logged In Successfully", {
          theme: "colored",
        });
        dispatch({
          type: userAuth.ADMIN_LOGIN_SUCCESS,
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
          type: userAuth.ADMIN_LOGIN_FAIL,
        });
      });
  };
};

// Admin LogOUT
export const logoutAdmin = (navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: userAuth.ADMIN_LOGOUT_REQUEST,
    });
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("authID");
    toast.success("Logged Out Successfully", {
      theme: "colored",
    });
    dispatch({
      type: userAuth.ADMIN_LOGOUT_SUCCESS,
    });
    setTimeout(function () {
      window.location.reload();
    }, 400);
  };
};

// Get All Freelancers
export const GetAllFreelancers = (toast) => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_FREELANCER_REQUEST });
    axios
      .get(`${BASE_URL}/admin/freelancers`, authHeader)
      .then((response) => {
        dispatch({
          type: GET_ALL_FREELANCER_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: GET_ALL_FREELANCER_FAIL,
        });
      });
  };
};

// Get All Clients
export const GetAllClients = (toast) => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_CLIENTS_REQUEST });
    axios
      .get(`${BASE_URL}/admin/clients`, authHeader)
      .then((response) => {
        dispatch({
          type: GET_ALL_CLIENTS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: GET_ALL_CLIENTS_FAIL,
        });
      });
  };
};

// Get All Gigs
export const getAllGigs = (toast) => {
  return (dispatch) => {
    dispatch({ type: GET_ADMIN_ALL_GIGS_REQUEST });
    axios
      .get(`${BASE_URL}/admin/gigs`, authHeader)
      .then((response) => {
        dispatch({
          type: GET_ADMIN_ALL_GIGS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: GET_ADMIN_ALL_GIGS_FAIL,
        });
      });
  };
};

// Get All Exchange Skills
export const GetAllExchangeSkills = (toast) => {
  return (dispatch) => {
    dispatch({ type: GET_ALL_ADMIN_EXCHANGE_SKILLS_REQUEST });
    axios
      .get(`${BASE_URL}/admin/ExchangeSkills`, authHeader)
      .then((response) => {
        dispatch({
          type: GET_ALL_ADMIN_EXCHANGE_SKILLS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: GET_ALL_ADMIN_EXCHANGE_SKILLS_FAIL,
        });
      });
  };
};

// Get All Jobs
export const getAllJobs = (toast) => {
  return (dispatch) => {
    dispatch({ type: GET_ADMIN_JOBS_REQUEST });
    axios
      .get(`${BASE_URL}/admin/jobs`, authHeader)
      .then((response) => {
        dispatch({
          type: GET_ADMIN_JOBS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: GET_ADMIN_JOBS_FAIL,
        });
      });
  };
};

// Get All Blogs
export const getAllBlogs = (toast) => {
  return (dispatch) => {
    dispatch({ type: GET_ADMIN_BLOGS_REQUEST });
    axios
      .get(`${BASE_URL}/admin/blogs`, authHeader)
      .then((response) => {
        dispatch({
          type: GET_ADMIN_BLOGS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: GET_ADMIN_BLOGS_FAIL,
        });
      });
  };
};

// Get All Jobs Proposals
export const getAllJobsProposals = (toast) => {
  return (dispatch) => {
    dispatch({ type: GET_ADMIN_JOB_PROPOSALS_REQUEST });
    axios
      .get(`${BASE_URL}/admin/jobProposals`, authHeader)
      .then((response) => {
        dispatch({
          type: GET_ADMIN_JOB_PROPOSALS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: GET_ADMIN_JOB_PROPOSALS_FAIL,
        });
      });
  };
};

// Get All Exchange Skills Requests

export const getAllExchangeSkillsRequests = (toast) => {
  return (dispatch) => {
    dispatch({ type: GET_ADMIN_EXCHANGE_SKILLS_REQUESTS_REQUEST });
    axios
      .get(`${BASE_URL}/admin/exchange-skills-proposals`, authHeader)
      .then((response) => {
        dispatch({
          type: GET_ADMIN_EXCHANGE_SKILLS_REQUESTS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: GET_ADMIN_EXCHANGE_SKILLS_REQUESTS_FAIL,
        });
      });
  };
};

// Get All Orders

export const getAllOrders = (toast) => {
  return (dispatch) => {
    dispatch({ type: GET_ADMIN_ORDERS_REQUEST });
    axios
      .get(`${BASE_URL}/admin/orders`, authHeader)
      .then((response) => {
        dispatch({
          type: GET_ADMIN_ORDERS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: GET_ADMIN_ORDERS_FAIL,
        });
      });
  };
};

// Get All Freelancers Reviews

export const getAllFreelancersReviews = (toast) => {
  return (dispatch) => {
    dispatch({ type: GET_ADMIN_FREELANCER_REVIEWS_REQUEST });
    axios
      .get(`${BASE_URL}/admin/freelancer-reviews`, authHeader)
      .then((response) => {
        dispatch({
          type: GET_ADMIN_FREELANCER_REVIEWS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: GET_ADMIN_FREELANCER_REVIEWS_FAIL,
        });
      });
  };
};

// Get All Blogs Comments

export const getAllBlogsComments = (toast) => {
  return (dispatch) => {
    dispatch({ type: GET_ADMIN_BLOGS_COMMENTS_REQUEST });
    axios
      .get(`${BASE_URL}/admin/blog-comments`, authHeader)
      .then((response) => {
        dispatch({
          type: GET_ADMIN_BLOGS_COMMENTS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: GET_ADMIN_BLOGS_COMMENTS_FAIL,
        });
      });
  };
};

// Get All Blogs Reply Comments

export const getAllBlogsReplyComments = (toast) => {
  return (dispatch) => {
    dispatch({ type: GET_ADMIN_BLOGS_REPLY_COMMENTS_REQUEST });
    axios
      .get(`${BASE_URL}/admin/blog-replies`, authHeader)
      .then((response) => {
        dispatch({
          type: GET_ADMIN_BLOGS_REPLY_COMMENTS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        const err = error.response.data.errorMessage;
        toast.error(err, {
          theme: "colored",
        });
        dispatch({
          type: GET_ADMIN_BLOGS_REPLY_COMMENTS_FAIL,
        });
      });
  };
};

/* Delete Actions for Admin */

// Delete Frelancer
export const DeleteFreelancer = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({ type: DELETE_ALL_FREELANCER_REQUEST });
    axios
      .delete(`${BASE_URL}/admin/freelancer/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/admin/admin-dashboard");
          toast.success("Freelancer Deleted Successfully", {
            theme: "colored",
          });
        }
        dispatch({
          type: DELETE_ALL_FREELANCER_SUCCESS,
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
          type: DELETE_ALL_FREELANCER_FAIL,
          payload: error,
        });
      });
  };
};

// Delete Client
export const DeleteClient = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({ type: DELETE_ALL_CLIENTS_REQUEST });
    axios
      .delete(`${BASE_URL}/admin/client/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/admin/admin-dashboard/clients-list");
          toast.success("Client Deleted Successfully ", {
            theme: "colored",
          });
        }
        dispatch({
          type: DELETE_ALL_CLIENTS_SUCCESS,
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
          type: DELETE_ALL_CLIENTS_FAIL,
          payload: error,
        });
      });
  };
};

// Delete Gig
export const DeleteGig = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({ type: DELETE_ADMIN_ALL_GIGS_REQUEST });
    axios
      .delete(`${BASE_URL}/admin/gig/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/admin/admin-dashboard/gigs-list");
          toast.success("Gig Deleted Successfully", {
            theme: "colored",
          });
        }

        dispatch({
          type: DELETE_ADMIN_ALL_GIGS_SUCCESS,
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
          type: DELETE_ADMIN_ALL_GIGS_FAIL,
          payload: error,
        });
      });
  };
};

// Delete Job
export const DeleteJob = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({ type: DELETE_ADMIN_JOBS_REQUEST });
    axios
      .delete(`${BASE_URL}/admin/job/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/admin/admin-dashboard/jobs-list");
          toast.success("Job Deleted Successfully", {
            theme: "colored",
          });
        }

        dispatch({
          type: DELETE_ADMIN_JOBS_SUCCESS,
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
          type: DELETE_ADMIN_JOBS_FAIL,
          payload: error,
        });
      });
  };
};

// Delete ExchangeSkills
export const DeleteExchangeSkills = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({ type: DELETE_ALL_ADMIN_EXCHANGE_SKILLS_REQUEST });
    axios
      .delete(`${BASE_URL}/admin/ExchangeSkills/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/admin/admin-dashboard/exchange-skills-list");
          toast.success("Exchange Skill Successfully Deleted", {
            theme: "colored",
          });
        }
        dispatch({
          type: DELETE_ALL_ADMIN_EXCHANGE_SKILLS_SUCCESS,
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
          type: DELETE_ALL_ADMIN_EXCHANGE_SKILLS_FAIL,
          payload: error,
        });
      });
  };
};

// Delete Blog
export const DeleteBlog = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_ADMIN_BLOGS_REQUEST,
    });
    axios
      .delete(`${BASE_URL}/admin/blog/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/admin/admin-dashboard/blogs-list");
          toast.success("Blog Deleted Successfully", {
            theme: "colored",
          });
        }

        dispatch({
          type: DELETE_ADMIN_BLOGS_SUCCESS,
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
          type: DELETE_ADMIN_BLOGS_FAIL,
          payload: error,
        });
      });
  };
};

// Delete ExchangeSkillsRequest
export const DeleteExchangeSkillsRequest = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_ADMIN_EXCHANGE_SKILLS_REQUESTS_REQUEST,
    });
    axios
      .delete(`${BASE_URL}/admin/exchange-skills-proposal/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/admin/admin-dashboard/exchange-skills-request-list");
          toast.success("Exchange Skill Request Successfully Deleted", {
            theme: "colored",
          });
        }
        dispatch({
          type: DELETE_ADMIN_EXCHANGE_SKILLS_REQUESTS_SUCCESS,
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
          type: DELETE_ADMIN_EXCHANGE_SKILLS_REQUESTS_FAIL,
          payload: error,
        });
      });
  };
};

// Delete Job Proposal
export const DeleteJobProposal = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_ADMIN_JOB_PROPOSALS_REQUEST,
    });
    axios
      .delete(`${BASE_URL}/admin/jobProposal/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/admin/admin-dashboard/job-proposals-list");
          toast.success("Job Proposal Successfully Deleted", {
            theme: "colored",
          });
        }

        dispatch({
          type: DELETE_ADMIN_JOB_PROPOSALS_SUCCESS,
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
          type: DELETE_ADMIN_JOB_PROPOSALS_FAIL,
          payload: error,
        });
      });
  };
};

// Delete Orders
export const DeleteOrder = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_ADMIN_ORDERS_REQUEST,
    });
    axios
      .delete(`${BASE_URL}/admin/order/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/admin/admin-dashboard/orders-list");
          toast.success("Order Successfully Deleted", {
            theme: "colored",
          });
        }

        dispatch({
          type: DELETE_ADMIN_ORDERS_SUCCESS,
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
          type: DELETE_ADMIN_ORDERS_FAIL,
          payload: error,
        });
      });
  };
};

// Delete Frelancer Review
export const DeleteFreelancerReview = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_ADMIN_FREELANCER_REVIEWS_REQUEST,
    });
    axios
      .delete(`${BASE_URL}/admin/freelancer-reviews/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/admin/admin-dashboard/freelancers-reviews-list");
          toast.success("Freelancer Review Successfully Deleted", {
            theme: "colored",
          });
        }

        dispatch({
          type: DELETE_ADMIN_FREELANCER_REVIEWS_SUCCESS,
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
          type: DELETE_ADMIN_FREELANCER_REVIEWS_FAIL,
          payload: error,
        });
      });
  };
};

// Delete Blog Comment
export const DeleteBlogComment = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_ADMIN_BLOGS_COMMENTS_REQUEST,
    });
    axios
      .delete(`${BASE_URL}/admin/blog-comment/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/admin/admin-dashboard/blog-comments");
          toast.success("Blog Comment  Successfully Deleted ", {
            theme: "colored",
          });
        }

        dispatch({
          type: DELETE_ADMIN_BLOGS_COMMENTS_SUCCESS,
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
          type: DELETE_ADMIN_BLOGS_COMMENTS_FAIL,
          payload: error,
        });
      });
  };
};

// Delete Blog Reply Comment
export const DeleteBlogReplyComment = (id, navigate, toast) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_ADMIN_BLOGS_REPLY_COMMENTS_REQUEST,
    });
    axios
      .delete(`${BASE_URL}/admin/blog-replies/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/admin/admin-dashboard/blogs-reply-comments");
          toast.success("Blog Reply Successfully Deleted", {
            theme: "colored",
          });
        }

        dispatch({
          type: DELETE_ADMIN_BLOGS_REPLY_COMMENTS_SUCCESS,
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
          type: DELETE_ADMIN_BLOGS_REPLY_COMMENTS_FAIL,
          payload: error,
        });
      });
  };
};

export const GetAllMessages = (toast, id) => {
  return (dispatch) => {
    dispatch({
      type: GET_ADMIN_MESSAGES_REQUEST,
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
          type: GET_ADMIN_MESSAGES_SUCCESS,
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
          type: GET_ADMIN_MESSAGES_FAIL,
          payload: error,
        });
      });
  };
};
