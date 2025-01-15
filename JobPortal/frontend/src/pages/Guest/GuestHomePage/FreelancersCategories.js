
import { Link } from "react-router-dom";
import program from "./img/program.png";
import pencil from "./img/pencil-case.png";
import market from "./img/marketing.png";
import data from "./img/data.png";
import customer from "./img/customer.png";
import writing from "./img/writing.png";

const FreelancersCategories = () => {
  return (
    <div>
      <section className="sec2 p-10 container m-auto">
        <div className="subtitle text-center relative">
          <h1 className="inline-block text-3xl font-bold">
            Browse Freelancers By Category
          </h1>
          <span className="rounded absolute w-96 bg-teal-600 inline-block"></span>
        </div>
        <p className="text-gray-600 my-5 mb-10 text-sm mx-auto w-64 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          reprehenderit
        </p>

        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 md:p-10">
          <div>
            <div className="flex items-center">
              <img
                src={program}
                alt="programming"
                className="h-12 w-12 object-fill"
              />
              <Link to="freelancers">
                <h1 className="text-teal-500 font-bold text-lg p-2">
                  Programming
                </h1>
              </Link>
            </div>
            <p className="mt-1 text-gray-600 my-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              reprehenderit
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <img
                src={pencil}
                alt="designing"
                className="h-12 w-12 object-fill"
              />
              <Link to="freelancers">
                <h1 className="text-teal-500 font-bold text-lg p-2">Design</h1>
              </Link>
            </div>
            <p className="mt-1 text-gray-600 my-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              reprehenderit
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <img
                src={market}
                alt="marketing"
                className="h-12 w-12 object-fill"
              />
              <Link to="freelancers">
                <h1 className="text-teal-500 font-bold text-lg p-2">
                  Marketing
                </h1>
              </Link>
            </div>
            <p className="mt-1 text-gray-600 my-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              reprehenderit
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <img src={data} alt="data" className="h-12 w-12 object-fill" />
              <Link to="freelancers">
                <h1 className="text-teal-500 font-bold text-lg p-2">Data</h1>
              </Link>
            </div>
            <p className="mt-1 text-gray-600 my-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              reprehenderit
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <img
                src={customer}
                alt="customerservice"
                className="h-12 w-12 object-fill"
              />
              <Link to="freelancers">
                <h1 className="text-teal-500 font-bold text-lg p-2">
                  Customer Support
                </h1>
              </Link>
            </div>
            <p className="mt-1 text-gray-600 my-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              reprehenderit
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <img
                src={writing}
                alt="writing"
                className="h-12 w-12 object-fill"
              />
              <Link to="freelancers">
                <h1 className="text-teal-500 font-bold text-lg p-2">
                  Writing and Translation
                </h1>
              </Link>
            </div>
            <p className="mt-1 text-gray-600 my-5 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              reprehenderit
            </p>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};
export default FreelancersCategories;
