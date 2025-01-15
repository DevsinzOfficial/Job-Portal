import { useState } from "react";
import { Link } from "react-router-dom";
import freelancer from "../../../img/authPagesImg/freelancer.png";
import client from "../../../img/authPagesImg/client.png";

const RegisterType = () => {
  const [signUpClient, setsignUpClient] = useState(true);
  const [signUpFreelancer, setsignUpFreelancer] = useState(false);

  const signUpClientHandler = () => {
    setsignUpClient(true);
    setsignUpFreelancer(false);
  };

  const signUpFreelancerHandler = () => {
    setsignUpClient(false);
    setsignUpFreelancer(true);
  };

  return (
    <div>
      <section className="lg:px-60 px-auto md:m-6 mx-4 mt-6 mb-8 max-w-7xl ">
        <div className="flex flex-wrap justify-center mt-44 lg:mt-32 mb-16 lg:mb-20 space-y-2 border border-teal-600 rounded-md">
          <div className="flex flex-col flex-wrap justify-center items-center p-8 space-y-6 h-auto w-auto">
            <div className="item">
              <h1 className="mb-1 text-3xl font-medium text-center text-gray-800 md:text-3xl mb-6">
                Join in as a client or a freelancer
              </h1>
            </div>
            <div className="flex flex-wrap cursor-pointer justify-center h-auto w-auto lg:gap-x-8 md:gap-x-8 gap-y-8">
              <div className="item">
                <div
                  onClick={signUpClientHandler}
                  className={
                    signUpClient
                      ? "w-full p-10 max-w-sm overflow-hidden border border-teal-600 rounded-md bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl"
                      : "w-full p-10 max-w-sm overflow-hidden border border-gray-200 rounded-md bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl"
                  }
                >
                  <img
                    src={client}
                    className="mx-auto mt-8 h-16 w-16 "
                    alt="client png"
                  />

                  <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
                    Client
                  </h1>
                  <p className="my-4 text-center text-sm text-gray-500">
                    I am a client, hiring for a project
                  </p>
                </div>
              </div>
              <div className="item">
                <div
                  onClick={signUpFreelancerHandler}
                  className={
                    signUpFreelancer
                      ? "w-full p-10 max-w-sm overflow-hidden border border-teal-600 rounded-md bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl"
                      : "w-full p-10 max-w-sm overflow-hidden border border-gray-200 rounded-md bg-white shadow-md duration-300 hover:scale-105 hover:shadow-xl"
                  }
                >
                  <img
                    src={freelancer}
                    className="mx-auto mt-8 h-16 w-16 "
                    alt="freelancer png"
                  />

                  <h1 className="mt-2 text-center text-2xl font-bold text-gray-500">
                    Freelancer
                  </h1>
                  <p className="my-4 text-center text-sm text-gray-500">
                    I am a freelancer,looking for work
                  </p>
                </div>
              </div>
            </div>

            <div className="item">
              <Link
                to={signUpClient ? "/register-client" : "/register-freelancer"}
                className="btn lg:w-96 w-80 text-sm  btn-primary btn-lg bg-teal-600 hover:bg-teal-500"
              >
                {signUpClient && <div>Join as a Client</div>}
                {signUpFreelancer && <div>Join as a Freelancer</div>}
              </Link>
            </div>
            <div className="item">
              <div className=" text-sm font-medium text-gray-700 space-x-1">
                Already have an account?
                <span></span>
                <Link
                  to="/login-type"
                  className="text-teal-700 hover:text-teal-900"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default RegisterType;
