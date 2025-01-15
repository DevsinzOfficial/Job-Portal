
import { Link } from "react-router-dom";
import exchange from "./img/exchange.jpg";
import gigs from "./img/gigs.jpg";
import bids from "./img/bids.jpg";

const Features = () => {
  return (
    <div>
      <section className="sec3 p-10 container m-auto bg-gray-100">
        <div className="subtitle text-center relative">
          <h1 className="inline-block text-3xl font-bold">Come Earn With Us</h1>
          <span className="rounded absolute w-52 bg-teal-600 inline-block"></span>
        </div>

        <div className="md:flex sm:flex-col md:flex-row justify-center md:p-10 mt-10">
          <div className="md:px-8 w-full md:w-2/5">
            <img src={gigs} alt="work-illustration" />
          </div>
          <div className="md:p-4 mt-2 md:mt-0 w-full md:w-1/2">
            <h2 className="text-2xl font-bold mt-0">Gigs</h2>
            <p className="text-gray-600 mt-2 mb-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              omnis suscipit beatae consequatur exercitationem. Hic asperiores
              est nisi quas molestias?
            </p>
            <Link
              to="help-support"
              className="px-6 py-2 text-sm font-semibold text-white bg-teal-600 rounded-md"
            >
              Read more
            </Link>
          </div>
        </div>

        <div className="md:flex justify-center md:p-10 mt-10 felx-col md:flex-row-reverse">
          <div className="md:px-8 w-full md:w-2/5">
            <img src={bids} alt="work-illustration" />
          </div>
          <div className="md:p-4 mt-2 md:mt-0 w-full md:w-1/2">
            <h2 className="text-2xl font-bold mt-0">Proposals</h2>
            <p className="text-gray-600 mt-2 mb-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              omnis suscipit beatae consequatur exercitationem. Hic asperiores
              est nisi quas molestias?
            </p>
            <Link
              to="help-support"
              className="px-6 py-2 text-sm font-semibold text-teal-600 bg-white border border-teal-600 rounded-md"
            >
              Read more
            </Link>
          </div>
        </div>

        <div className="md:flex sm:flex-col md:flex-row justify-center md:p-10 mt-10">
          <div className="md:px-8 w-full md:w-2/5">
            <img src={exchange} alt="work-illustration" />
          </div>
          <div className="md:p-4 mt-2 md:mt-0 w-full md:w-1/2">
            <h2 className="text-2xl font-bold mt-0">Exchange Skills</h2>
            <p className="text-gray-600 mt-2 mb-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              omnis suscipit beatae consequatur exercitationem. Hic asperiores
              est nisi quas molestias?
            </p>
            <Link
              to="help-support"
              className="px-6 py-2 text-sm font-semibold text-white bg-teal-600 rounded-md"
            >
              Read more
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Features;
