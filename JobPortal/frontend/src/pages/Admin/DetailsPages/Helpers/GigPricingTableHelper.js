

const GigPricingTableHelper = (props) => {
  return (
    <div>
      <div className="flex flex-col flex-nowrap">
        <div className="item ">
          <div className="flex flex-nowrap justify-between items-center mx-6 my-4 ">
            <div className="item text-lg font-medium text-gray-800">
              {props.Title}
            </div>
            <div className="item text-lg font-medium text-gray-500">
              ${props.Price}
            </div>
          </div>
        </div>
        <div className="item mx-6 my-4 item text-sm font-medium text-gray-500 ">
          {props.Details}
        </div>
        <div className="item mx-6 my-4   ">
          <div>
            <div className="flex items-center text-sm font-thin text-gray-700 rounded-md ">
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

              <span className="-mt-1 text-sm font-medium text-gray-500 ">
                {props.DeliveryTime} Days Delivery
              </span>
            </div>
          </div>
        </div>
        <div className="item mx-6 my-4">
          <div>
            <div className="flex items-center text-sm font-thin text-gray-700 rounded-md ">
              <svg
                className="h-4 w-4 mr-2 -ml-1  "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>

              <span className="-mt-1 text-sm font-medium text-gray-500 ">
                {props.Revisions} Revisions
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigPricingTableHelper;
