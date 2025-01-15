import { useLocation } from "react-router-dom";

const GigOrderDetails = () => {
  const { gigOrder } = useLocation()?.state;

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

  return (
    <div>
      <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-8">
        <div className="item w-full h-auto flex-grow px-6 ">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
            Gig Order
          </h1>
        </div>

        <div className="item w-full lg:w-1/2  h-auto flex-grow border border-3 lg:rounded-l-md border-r-1  border-gray-300 py-4">
          <div className="item mx-6 my-2 ">
            <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
              <div className="item ">
                <p>
                  <span className=" font-medium text-gray-900 ">
                    Order Id:{" "}
                  </span>
                  <span className="font-regular text-gray-600">
                    {gigOrder._id}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="item mx-6 my-2 ">
            <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
              <div className="item ">
                <p>
                  <span className=" font-medium text-gray-900 ">
                    Order Creation Date:{" "}
                  </span>
                  <span className="font-regular text-gray-600">
                    {dateConverter(gigOrder.createdAt)}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="item mx-6 my-2 ">
            <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
              <div className="item ">
                <p>
                  <span className=" font-medium text-gray-900 ">
                    Order Expiry Date:{" "}
                  </span>
                  <span className="font-regular text-gray-600">
                    {" "}
                    {dateConverter(gigOrder.OrderExp)}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="item mx-6 my-2 ">
            <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
              <div className="item ">
                <p>
                  <span className=" font-medium text-gray-900 ">
                    Proposal Id:{" "}
                  </span>
                  <span className="font-regular text-gray-600">
                    {gigOrder.proposalId}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="item mx-6 my-2 ">
            <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
              <div className="item ">
                <p>
                  <span className=" font-medium text-gray-900 ">
                    Freelancer Name:{" "}
                  </span>
                  <span className="font-regular text-gray-600">
                    {gigOrder.freelancer.firstName}{" "}
                    {gigOrder.freelancer.lastName}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="item mx-6 my-2 ">
            <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
              <div className="item ">
                <p>
                  <span className=" font-medium text-gray-900 ">
                    Freelancer Id:{" "}
                  </span>
                  <span className="font-regular text-gray-600">
                    {gigOrder.freelancer._id}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="item mx-6 my-2 ">
            <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
              <div className="item ">
                <p>
                  <span className=" font-medium text-gray-900 ">
                    Client Name:{" "}
                  </span>
                  <span className="font-regular text-gray-600">
                    {gigOrder.client.firstName} {gigOrder.client.lastName}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="item mx-6 my-2 ">
            <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
              <div className="item ">
                <p>
                  <span className=" font-medium text-gray-900 ">
                    Client Id:{" "}
                  </span>
                  <span className="font-regular text-gray-600">
                    {gigOrder.client._id}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" hidden lg:block item w-full lg:w-1/4 h-auto border-3 border lg:rounded-r-md border-l-0 border-gray-300">
          <div className="flex flex-col flex-wrap w-auto flex-grow px-4 my-4 space-y-3">
            <div className="item">
              <div className="flex px-2 py-2 text-sm font-thin text-gray-700 bg-gray-300 rounded-md ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 -ml-1 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="-mt-1">
                  Delivery: {gigOrder.duration} Days
                </span>
              </div>
            </div>
            <div className="item">
              <div className="flex px-2 py-2 text-sm font-thin text-gray-600 bg-gray-300  rounded-md ">
                <svg
                  className="w-4 h-4 mr-2 -ml-1"
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

                <span className="-mt-1">Status: {gigOrder.status}</span>
              </div>
            </div>
            <div className="item">
              <div className="flex px-2 py-2  text-sm font-thin text-gray-600 bg-gray-300  rounded-md ">
                <svg
                  className="w-4 h-4 mr-2 -ml-1"
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
                <span className="-mt-1">${gigOrder.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-auto mx-6 lg:mx-20 my-8">
        <div className="item w-full h-auto flex-grow px-6 ">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
            Payment Details
          </h1>
        </div>

        <div className="item w-full lg:w-1/2  h-auto flex-grow border border-3 lg:rounded-l-md border-r-1  border-gray-300 py-4">
          <div className="item w-full h-auto flex-grow px-6 ">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 mb-6">
              Card Details for Freelancer
            </h1>
          </div>
          <div className="item mx-6 my-2 ">
            <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
              <div className="item ">
                <p>
                  <span className=" font-medium text-gray-900 ">Card Id: </span>
                  <span className="font-regular text-gray-600">
                    {gigOrder?.freelancerPayments[0]?.CardDetails?.cardId}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="item mx-6 my-2 ">
            <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
              <div className="item ">
                <p>
                  <span className=" font-medium text-gray-900 ">
                    CustomerId:{" "}
                  </span>
                  <span className="font-regular text-gray-600">
                    {gigOrder?.freelancerPayments[0]?.CardDetails?.customerId}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="item mx-6 my-2 ">
            <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
              <div className="item ">
                <p>
                  <span className=" font-medium text-gray-900 ">
                    Customer Email:{" "}
                  </span>
                  <span className="font-regular text-gray-600">
                    {" "}
                    {gigOrder?.freelancerPayments[0]?.CardDetails?.email}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="item mx-6 my-2 ">
            <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
              <div className="item ">
                <p>
                  <span className=" font-medium text-gray-900 ">
                    Customer Name:{" "}
                  </span>
                  <span className="font-regular text-gray-600">
                    {gigOrder?.freelancerPayments[0]?.CardDetails?.name}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="item w-full lg:w-1/2  h-auto flex-grow border border-3 lg:rounded-l-md border-r-1  border-gray-300 py-4">
          <div className="item w-full h-auto flex-grow px-6 ">
            <h1 className="text-xl font-bold tracking-tight text-gray-900 mb-6">
              Card Details for Client
            </h1>
          </div>
          <div className="item mx-6 my-2 ">
            <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
              <div className="item ">
                <p>
                  <span className=" font-medium text-gray-900 ">Card Id: </span>
                  <span className="font-regular text-gray-600">
                    {gigOrder?.clientPayments[0]?.CardDetails?.cardId}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="item mx-6 my-2 ">
            <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
              <div className="item ">
                <p>
                  <span className=" font-medium text-gray-900 ">
                    CustomerId:{" "}
                  </span>
                  <span className="font-regular text-gray-600">
                    {gigOrder?.clientPayments[0]?.CardDetails?.customerId}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="item mx-6 my-2 ">
            <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
              <div className="item ">
                <p>
                  <span className=" font-medium text-gray-900 ">
                    Customer Email:{" "}
                  </span>
                  <span className="font-regular text-gray-600">
                    {" "}
                    {gigOrder?.clientPayments[0]?.CardDetails?.email}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="item mx-6 my-2 ">
            <div className="flex flex-col flex-nowrap justify-center space-y-1  ">
              <div className="item ">
                <p>
                  <span className=" font-medium text-gray-900 ">
                    Customer Name:{" "}
                  </span>
                  <span className="font-regular text-gray-600">
                    {gigOrder?.clientPayments[0]?.CardDetails?.name}{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigOrderDetails;
