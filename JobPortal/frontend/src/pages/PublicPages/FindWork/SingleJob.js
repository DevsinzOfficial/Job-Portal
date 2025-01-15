
const SingleJob = (data) => {
  const {
    title,
    createdAt,
    country,
    experienceLevel,
    skills,
    duration,
    budget,
    discription,
    client,
  } = data?.data;

  const dateConverter = (createdAt) => {
    const userCreatedDate = new Date(createdAt);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var month = months[userCreatedDate.getMonth()];
    var year = userCreatedDate.getFullYear();
    var date = userCreatedDate.getDate();

    return `${month} ${date} ${year} `;
  };

  const limitText = (text) => {
    return text && text.split(" ").slice(0, 10).join(" ");
  };

  return (
    <div className="h-full pb-16 overflow-y-auto">
      <div className="container  mx-auto grid">
        <div className=" mt-2 bg-white rounded-lg shadow-md border border-3 -mb-12 ">
          <div className="flex flex-col flex-wrap space-y-2  p-3">
            <div>
              <h3 className=" text-xl font-semibold text-gray-700 ">{title}</h3>
            </div>
            <div className="flex flex-row items-center  flex-wrap space-x-2 text-sm text-gray-500">
              <div className="flex flex-row flex-wrap space-x-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mt-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div> Posted On {dateConverter(createdAt)}</div>
              </div>
              <div className="flex flex-row flex-wrap space-x-1">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mt-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>{country}</div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap space-x-2">
              <div>
                <div className="flex items-center justify-around px-2 py-1 text-sm font-thin text-gray-700 bg-gray-300  rounded-md ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 -ml-1 mt-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span>{duration}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-around px-2 py-1 text-sm font-thin text-gray-600 bg-gray-300  rounded-md ">
                  <svg
                    className="w-4 h-4 mr-2 -ml-1 mt-1"
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span>{experienceLevel}</span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-around px-2 py-1 -ml-2 sm:ml-0 mt-2 sm:mt-0 text-sm font-thin text-gray-600 bg-gray-300  rounded-md ">
                  <svg
                    className="w-4 h-4 mr-2 -ml-1 mt-1"
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Est.Budget: ${`${budget}`}</span>
                </div>
              </div>
            </div>
            <div>
              <p className="font-medium text-gray-700 my-2">{limitText(discription)}..</p>
            </div>

            <div className="item w-full h-auto flex-grow  ">
              <div className="flex flex-row flex-wrap space-x-2 w-full ">
                {skills?.map((skill, index) => (
                  <div
                    key={index}
                    className=" px-3 py-1 text-sm font-thin text-white bg-teal-600  rounded-md "
                  >
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-row flex-wrap space-x-2">
                <div>
                  <div className="flex items-center justify-around px-2 py-1 text-sm font-semibold ">
                    {client?.verified ? (
                      <>
                        <svg
                          className="w-4 h-4 -ml-3"
                          fill="#0ea5e9"
                          aria-hidden="true"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">Client Verified</span>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="black"
                          viewBox="0 0 20 20"
                          strokeWidth="1.5"
                          stroke="white"
                          className="w-4 h-4 -ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-700 ml-1">
                          Client Not Verified
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
