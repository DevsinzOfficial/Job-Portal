import { Link } from "react-router-dom";
import happy from "./img/happy.svg";

const ExchangeSkills = () => {
  return (
    <div>
      <section className="sec6 p-10 container m-auto border">
        <div className="subtitle text-center relative">
          <h1 className="inline-block text-2xl md:text-3xl font-bold">
            Why we are Different
          </h1>
          <span className="rounded absolute w-64 bg-teal-600 inline-block"></span>
        </div>

        <div className="flex items-center justify-around flex-col md:flex-row-reverse mt-20">
          <div className="w-full md:w-1/3 mb-2">
            <img src={happy} alt="project-manager" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-bold mb-3 text-2xl">
              Exchange your
              <span className="text-teal-500"> skills</span> with anyone,
              anytime
            </h2>
            <p className="text-gray-800 text-md mb-5 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam illum autem iusto quisquam modi omnis repellat ullam.
              Accusamus quae voluptatum aperiam impedit ipsum voluptate
              officiis!
            </p>
            <Link to="help-support">
              <button className="px-6 py-2 text-sm font-semibold text-white bg-gray-900 mr-3 rounded-md">
                Try it Now !
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExchangeSkills;
