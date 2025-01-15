import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { submitReview } from "../../../redux/actions/ClientActions";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import Spinner from "../DashBoard/PagesComponent/Helpers/Spinner";

const Rating = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state?.clientData);

  const ratingSchema = Yup.object().shape({
    rating: Yup.number().required().min(1).max(5),
    review: Yup.string().required().min(10).max(1000),
  });

  const formik = useFormik({
    initialValues: {
      rating: 0,
      review: "",
    },
    validationSchema: ratingSchema,
    onSubmit: (values) => {
      
      dispatch(submitReview(id, values, navigate, toast));
    },
  });

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`${
            i <= formik.values.rating ? "text-yellow-500" : "text-gray-400"
          } hover:text-yellow-500 cursor-pointer`}
          onClick={() => formik.setFieldValue("rating", i)}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </span>
      );
    }

    return stars;
  };

  return (
    <form onSubmit={formik.handleSubmit} className=" py-4 mx-2 ">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="rating"
            >
              Rating:
            </label>
            <div className="flex items-center mb-2">{renderStars()}</div>
            {formik.errors.rating && formik.touched.rating ? (
              <div className="text-red-500 mt-2">{formik.errors.rating}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label htmlFor="review" className="block text-sm font-bold mb-2">
              Review
            </label>
            <textarea
              id="review"
              name="review"
              value={formik.values.review}
              onChange={formik.handleChange}
              placeholder="Write your review here..."
              className="focus:ring-teal-500 focus:border-teal-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              rows="4"
            />
            {formik.errors.review && formik.touched.review ? (
              <div className="text-red-500 mt-2">{formik.errors.review}</div>
            ) : null}
          </div>
          <div className=" text-right -mx-8 ">
            <button
              className="w-36 inline-flex justify-center py-2 px-4 mr-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default Rating;
